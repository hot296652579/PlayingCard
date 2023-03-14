import EventMgr from "../Base/Event/EventMgr"
import { ECardDir, ENumSiut, EnumSuit, ESuitNum, EventGame_Enum } from "../Enum"
import Poker from "./Poker"

export class PokerGroup {
    public index: number = null
    public _pokers: Poker[] = []
    public get pokers(): Poker[] {
        return this._pokers
    }

    public addPoker(poker: Poker) {
        poker.parent = this
        this._pokers.push(poker)
    }

    public removePoker(p) {
        // let topPoker = this.groupTop
        // if (poker == topPoker) {
        //     this._pokers.length = this._pokers.length - 1
        //     poker.parent = null

        //     return poker
        // }

        for (let index = 0; index < this._pokers.length; index++) {
            let poker = this._pokers[index];
            if (poker.count == p.count && poker.suit == p.suit) {
                this._pokers.splice(index, 1)
                // console.log('删除后的pokers', this._pokers)
                return p
            }
        }
    }

    public getPoker(index: number) {
        if (!this.groupIsEmpty()) {
            let i = index >= 0 ? index : this.pokers.length + index
            if (i < this.pokers.length) {
                return this.pokers[i]
            }
        }
        return null
    }

    public popPoker() {
        let poker = this.pokers[this.pokers.length - 1]
        this.pokers.length = this.pokers.length - 1
        return poker
    }

    public groupIsEmpty() {
        return this._pokers.length == 0
    }

    public get groupTop() {
        return this.groupIsEmpty() ? null : this._pokers[this._pokers.length - 1]
    }
    public indexOfPoker(poker: Poker): number {
        return this.pokers.indexOf(poker)
    }
}

class ReceiveGroup extends PokerGroup {
    public suit: number = null

    public isNextPoker(poker: Poker) {
        if (ENumSiut[this.suit] === poker.suit) {
            console.log('收牌组的花色', ENumSiut[this.suit])
            console.log('this.groupTop', this.groupTop)
            if (this.groupTop) {
                return this.groupTop.count + 1 == poker.count
            } else {
                console.log('poker.count', poker.count)
                return poker.count == 1
            }
        }

        return false
    }
}

class PlayGroup extends PokerGroup {
    public removePoker(poker: Poker) {
        super.removePoker(poker)
        if (!this.groupIsEmpty()) {
            let topPoker = this.groupTop
            topPoker.dir = ECardDir.OPEN

            EventMgr.getInstance().emit(EventGame_Enum.EVENT_OPEN_TOPPOKER_UPDATE_VIEW, topPoker)
        }
    }

    public isNextPoker?(poker: Poker) {
        if (this.groupIsEmpty()) {
            return poker.count == 13
        }

        let topPoker = this.groupTop
        // console.log('topPoker', topPoker)
        if (topPoker.suit != poker.suit) {
            return topPoker.count - 1 == poker.count
        }

        return false
    }
}

class CloseGroup extends PokerGroup {
    public addPoker(poker: Poker): Poker {
        super.addPoker(poker)
        poker.dir = ECardDir.CLOSE
        return poker
    }
}
class OpenGroup extends PokerGroup {
    public addPoker(poker: Poker): Poker {
        super.addPoker(poker)
        // poker.dir = ECardDir.OPEN
        return poker
    }
}
/**4组*/
export const RECEIVE_AREA_COUNT: number = 4
/**7组*/
export const PLAY_AREA_COUNT: number = 7
export default class GameDB {
    private static instance: any = null
    static getInstance() {
        if (this.instance == null) {
            this.instance = new GameDB()
        }
        return this.instance
    }

    private readonly cardTotal: number = 13
    private readonly cardSuits: number = 4

    private _pokers: Poker[] = []

    /** 发牌区盖着的数据*/
    private _closeGroup: CloseGroup = new CloseGroup()
    /** 发牌区打开着的数据*/
    private _openGroup: OpenGroup = new OpenGroup()
    /** 开牌区数据*/
    private _openPokers: Poker[] = []
    /** 收牌区数据*/
    private _receiveArea: ReceiveGroup[] = []
    /** 玩牌区数据*/
    private _playArea: PokerGroup[] = []

    constructor() {
        this.initEvent()
    }

    //绑定事件
    initEvent() {
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_PLAY_UPDATE_DB, this.onPlayToReceiveOrPlay, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_PLAY_UPDATE_DB, this.onPlayToPlay, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB, this.onCloseToOpen, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_OPEN_TO_UPDATE_DB, this.onOpenToReceiveOrPlay, this)
    }

    resetGame() {
        this._pokers = []
        this._openPokers = []
        this._receiveArea = []
        this._closeGroup._pokers = []
        this._playArea = []
    }

    //创建初始数据
    createCardsDB() {
        for (let i = 1; i <= this.cardTotal; i++) {
            for (let j = 0; j < this.cardSuits; j++) {
                let suit: EnumSuit = EnumSuit.HeiTao
                switch (j) {
                    case 1:
                        suit = EnumSuit.HongTao
                        break;
                    case 2:
                        suit = EnumSuit.MeiHua
                        break;
                    case 3:
                        suit = EnumSuit.FangKuai
                        break;

                    default:
                        suit = EnumSuit.HeiTao
                        break;
                }

                let poker = new Poker(i, suit, ECardDir.CLOSE)
                this._pokers.push(poker)
            }
        }

        for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let receiveGroup = new ReceiveGroup()
            receiveGroup.index = this._receiveArea.length
            receiveGroup.suit = index
            this._receiveArea.push(receiveGroup)
        }

        for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let receiveGroup = new PlayGroup()
            receiveGroup.index = this._playArea.length
            this._playArea.push(receiveGroup)
        }

        this.shuffle(this._pokers, 500)
        EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT, this._pokers)
    }

    gamePlay() {
        let temp = this._pokers
        this._pokers.forEach(p => this._closeGroup.addPoker(p))
        this._pokers = temp
        EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_START)

        this.createPlayInitDB()
    }
    /**洗牌 */
    shuffle(pokers: Poker[], shuffleTime: number = 100) {
        for (let index = 0; index < shuffleTime; index++) {
            // let snd = Math.floor(Math.random() * pokers.length - 1)
            // let rnd = Math.floor(Math.random() * pokers.length - 1)
            let snd = parseInt('' + Math.random() * pokers.length, 10)
            let rnd = parseInt('' + Math.random() * pokers.length, 10)

            let temp = pokers[snd]
            pokers[snd] = pokers[rnd]
            pokers[rnd] = temp
        }
    }
    createPlayInitDB() {
        for (let count = PLAY_AREA_COUNT; count >= 1; count--) {
            for (let i = 0; i < count; i++) {
                let dis = PLAY_AREA_COUNT - count
                let groupIndex = dis + i
                let playPokerGrop = this._playArea[groupIndex]
                let poker = this._closeGroup.pokers[this._closeGroup.pokers.length - 1]
                this._closeGroup.pokers.length = this._closeGroup.pokers.length - 1
                playPokerGrop.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT_GROUP, groupIndex, dis, poker, i)
            }
        }

        // console.log('close剩下的牌数据', this._closeGroup.pokers)
    }
    /**改变玩牌区到收牌区PLAY区数据*/
    onPlayToReceiveOrPlay(poker: Poker) {
        for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group: ReceiveGroup = this._receiveArea[index]
            if (group.isNextPoker(poker)) {
                console.log('收牌区receive可以承接此牌', poker)
                let parent: PlayGroup = poker.parent
                parent.removePoker(poker)
                group.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW, poker)
                return
            }
        }

        for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let group: PlayGroup = this._playArea[index]
            if (group.isNextPoker(poker)) {
                console.log('PLAY区play可以承接此牌', poker)
                let parent: PlayGroup = poker.parent
                parent.removePoker(poker)
                group.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_PLAY_UPDATE_VIEW, poker)
            }
        }
    }
    /**改变玩牌区到其他玩牌区域*/
    onPlayToPlay(poker: Poker) {
        // console.log('poker indexInGroup:', poker.indexInGroup())
        let indexInGroup = poker.indexInGroup()
        for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let group: PlayGroup = this._playArea[index]
            if (group.isNextPoker(poker)) {
                //连接操作
                let parent: PlayGroup = poker.parent
                let pokers = []

                while (true) {
                    let top = parent.popPoker()
                    pokers.push(top)

                    if (top == poker)
                        break
                }

                for (let index = pokers.length - 1; index >= 0; index--) {
                    let p = pokers[index];
                    group.addPoker(p)
                }


                console.log('indexInGroup', indexInGroup)
                console.log('this._playArea:', this._playArea)

                let openPoker = null
                let _pokers = this._playArea[indexInGroup]._pokers!
                if (_pokers && _pokers.length > 0) {
                    openPoker = this._playArea[indexInGroup].groupTop
                }

                EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_OTHERPLAY_UPDATE_VIEW, pokers, openPoker)
            }
        }
    }

    /**移除close顶部牌数据添加到open区数据*/
    onCloseToOpen(poker: Poker) {
        let parent: CloseGroup = poker.parent as CloseGroup
        parent.removePoker(poker)
        // console.log('当前closeGroup的pokers', this.closeGroup.pokers)
        this.openGroup.addPoker(poker)
        EventMgr.getInstance().emit(EventGame_Enum.EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW, poker)
    }

    /**移除open顶部牌数据添加到receiv或则open区数据*/
    onOpenToReceiveOrPlay(poker: Poker) {
        let parent: OpenGroup = poker.parent
        //检测receive区能否承接
        for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group: ReceiveGroup = this._receiveArea[index]
            if (group.isNextPoker(poker)) {
                console.log('ReceiveGroup可以承接此牌', poker)
                parent.removePoker(poker)
                group.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW, poker)
                return
            }
        }
        //检测play区能否承接
        for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let group: PlayGroup = this._playArea[index]
            if (group.isNextPoker(poker)) {
                // console.log('可以承接此牌', poker)
                parent.removePoker(poker)
                group.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_OPEN_TO_PLAY_UPDATE_VIEW, poker)
            }
        }
    }

    //检测这张牌是否在play area
    onCheckInPlayArea(poker: Poker): boolean {
        return this.playArea.filter(
            pg => pg.pokers.filter(p => p.count == poker.count && p.suit == poker.suit).length > 0
        ).length > 0
    }

    //检测是否在顶部
    onCheckIndexTop(poker: Poker) {
        for (const gp of this._playArea) {
            let pokers = gp.pokers
            let topPoker = pokers[pokers.length - 1]
            if (!topPoker)
                continue

            if (topPoker.count == poker.count && topPoker.suit == poker.suit)
                return true
        }

        return false
    }

    //检测这张牌是否在close area
    onCheckInCloseArea(poker: Poker): boolean {
        return this.closeGroup.pokers.filter(
            p => p.count == poker.count && p.suit == poker.suit
        ).length > 0
    }

    //检测是否在closeArea顶部
    onCheckIndexByCloseTop(p: Poker) {
        // console.log('当前点击的poker', p)
        if (this._closeGroup.pokers.length <= 0)
            return null
        // console.log('this._closeGroup.pokers', this._closeGroup.pokers)
        for (const poker of this._closeGroup.pokers) {
            let topPoker = this._closeGroup.groupTop
            if (poker.count == p.count && poker.suit == p.suit)
                return true
        }

        return false
    }

    //检测这张牌是否在open area
    onCheckInOpenArea(poker: Poker): boolean {
        return this.openGroup.pokers.filter(
            p => p.count == poker.count && p.suit == poker.suit
        ).length > 0
    }

    //检测是否在openArea顶部
    onCheckIndexByOpenTop(poker: Poker) {
        if (this.openGroup.pokers.length <= 0)
            return null

        for (const poker of this.openGroup.pokers) {
            let topPoker = this.openGroup.pokers[this.openGroup.pokers.length - 1]
            if (topPoker.count == poker.count && topPoker.suit == poker.suit)
                return true
        }

        return false
    }

    /**检测close区是否是空的 是空就把open的数据过来*/
    isCloseEmptyOpenToClose() {
        let empty = this.closeGroup.groupIsEmpty()
        if (empty) {
            while (!this.openGroup.groupIsEmpty()) {
                for (const poker of this.openGroup.pokers) {
                    this.openGroup.removePoker(poker)
                    this.closeGroup.addPoker(poker)
                }
            }

            EventMgr.getInstance().emit(EventGame_Enum.EVENT_OPEN_TO_CLOSE_UPDATE_VIEW, this.closeGroup.pokers)
        }
    }

    public get pokers(): Poker[] { return this._pokers }
    public get closeGroup(): CloseGroup { return this._closeGroup }
    public get openGroup(): CloseGroup { return this._openGroup }
    public get openPokers(): Poker[] { return this._openPokers }
    public get playArea(): PlayGroup[] { return this._playArea }
    public get receiveArea(): ReceiveGroup[] { return this._receiveArea }
}
