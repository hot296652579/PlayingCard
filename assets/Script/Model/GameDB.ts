import { EnumSuit } from "../Enum"
import Poker from "../Poker"

export class PokerGrop {
    private _pokers: Poker[] = []
    public get pokers(): Poker[] {
        return this._pokers
    }
}

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

    private readonly RECEIVE_AREA_COUNT: number = 4
    private readonly PLAY_AREA_COUNT: number = 7
    private _pokers: Poker[] = []

    /** 发牌区数据*/
    private _closePokers: Poker[] = []
    /** 开牌区数据*/
    private _openPokers: Poker[] = []
    /** 收牌区数据*/
    private _receiveArea: PokerGrop[] = []
    /** 玩牌区数据*/
    private _playArea: PokerGrop[] = []

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

                let poker = new Poker(i, suit)
                this._pokers.push(poker)
            }
        }

        for (let index = 0; index < this.RECEIVE_AREA_COUNT; index++) {
            let receiveGroup = new PokerGrop()
            this._receiveArea.push(receiveGroup)
        }

        for (let index = 0; index < this.PLAY_AREA_COUNT; index++) {
            let receiveGroup = new PokerGrop()
            this._playArea.push(receiveGroup)
        }
    }

    public get pokers(): Poker[] { return this._pokers }
    public get closePokers(): Poker[] { return this._closePokers }
    public get openPokers(): Poker[] { return this._openPokers }
    public get playArea(): PokerGrop[] { return this._playArea }
    public get receiveArea(): PokerGrop[] { return this._receiveArea }
}
