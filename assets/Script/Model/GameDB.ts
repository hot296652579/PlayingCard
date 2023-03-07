import EventMgr from "../Base/Event/EventMgr"
import { ECardDir, ENumSiut, EnumSuit, ESuitNum, EventGame_Enum } from "../Enum"
import Poker from "./Poker"

export class PokerGrop {
    public index: number = null
    private _pokers: Poker[] = []
    public get pokers(): Poker[] {
        return this._pokers
    }

    public addPoker(poker: Poker) {
        poker.parent = this
        this._pokers.push(poker)
    }

    public removePoker(poker) {
        let topPoker = this.groupTop
        if (poker == topPoker) {
            console.log('移除当前poker', poker)
            this._pokers.length = this._pokers.length - 1
            poker.parent = null

            return poker
        }
    }

    public groupIsEmpty() {
        return this._pokers.length == 0
    }

    public get groupTop() {
        return this.groupIsEmpty() ? null : this._pokers[this._pokers.length - 1]
    }
}

class ReceiveGroup extends PokerGrop {
    public suit: number = null

    public isNextPoker(poker: Poker) {
        if (ENumSiut[this.suit] === poker.suit) {
            if (this.groupTop) {
                return this.groupTop.count + 1 == poker.count
            } else {
                return poker.count == 1
            }
        }

        return false
    }
}

export const RECEIVE_AREA_COUNT: number = 4
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

    /** 发牌区数据*/
    private _closePokers: Poker[] = []
    /** 开牌区数据*/
    private _openPokers: Poker[] = []
    /** 收牌区数据*/
    private _receiveArea: ReceiveGroup[] = []
    /** 玩牌区数据*/
    private _playArea: PokerGrop[] = []

    constructor() {
        this.initEvent()
    }

    //绑定事件
    initEvent() {
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB, this.onPlayToReceive, this)
    }

    resetGame() {
        this._pokers = []
        this._openPokers = []
        this._receiveArea = []
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
            let receiveGroup = new PokerGrop()
            receiveGroup.index = this._playArea.length
            this._playArea.push(receiveGroup)
        }

        EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT, this._pokers)
    }

    gamePlay() {
        this.shuffle(this._pokers, 200)
        let temp = this._pokers
        this._closePokers = this.pokers
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
                let pokerGrop = this._playArea[groupIndex]
                let poker = this._closePokers[this._closePokers.length - 1]
                this._closePokers.length = this._closePokers.length - 1
                // poker.dir = i == 0 ? poker.dir = ECardDir.OPEN : poker.dir = ECardDir.CLOSE
                pokerGrop.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT_GROUP, groupIndex, dis, poker, i)
            }
        }
    }

    onPlayToReceive(poker: Poker) {
        for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group: ReceiveGroup = this._receiveArea[index]
            if (group.isNextPoker(poker)) {
                let parent: PokerGrop = poker.parent
                parent.removePoker(poker)
                group.addPoker(poker)
                console.log('去刷新收牌组显示数据view...')
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW, poker)
            } else {

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
            if (topPoker.count == poker.count && topPoker.suit == poker.suit)
                return true
        }

        return false
    }

    public get pokers(): Poker[] { return this._pokers }
    public get closePokers(): Poker[] { return this._closePokers }
    public get openPokers(): Poker[] { return this._openPokers }
    public get playArea(): PokerGrop[] { return this._playArea }
    public get receiveArea(): ReceiveGroup[] { return this._receiveArea }
}
