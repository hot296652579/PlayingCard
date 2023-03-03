import EventMgr from "../Base/Event/EventMgr"
import { ECardDir, EnumSuit, EventGame_Enum } from "../Enum"
import Poker from "./Poker"

export class PokerGrop {
    private _pokers: Poker[] = []
    public get pokers(): Poker[] {
        return this._pokers
    }

    public addPoker(poker: Poker) {
        this._pokers.push(poker)
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
    private _receiveArea: PokerGrop[] = []
    /** 玩牌区数据*/
    private _playArea: PokerGrop[] = []

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
            let receiveGroup = new PokerGrop()
            this._receiveArea.push(receiveGroup)
        }

        for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let receiveGroup = new PokerGrop()
            this._playArea.push(receiveGroup)
        }

        EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT, this._pokers)
    }

    gamePlay() {
        let temp = this._pokers
        this._closePokers = this.pokers
        this._pokers = temp

        EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_START)

        this.createPlayInitDB()
    }
    createPlayInitDB() {
        for (let count = PLAY_AREA_COUNT; count >= 1; count--) {
            for (let index = 0; index < count; index++) {
                let dis = PLAY_AREA_COUNT - count
                let groupIndex = dis + index
                let pokerGrop = this._playArea[groupIndex]
                let poker = this._closePokers[this._closePokers.length - 1]
                this._closePokers.length = this._closePokers.length - 1
                poker.dir = index == 0 ? poker.dir = ECardDir.OPEN : poker.dir = ECardDir.CLOSE
                pokerGrop.addPoker(poker)
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT_GROUP, groupIndex, dis, poker)
            }
        }
    }

    public get pokers(): Poker[] { return this._pokers }
    public get closePokers(): Poker[] { return this._closePokers }
    public get openPokers(): Poker[] { return this._openPokers }
    public get playArea(): PokerGrop[] { return this._playArea }
    public get receiveArea(): PokerGrop[] { return this._receiveArea }
}
