import { ECardDir, EnumSuit, ESuitNum } from "../Enum"
import { UIPoker } from "../UI/UIPoker"

export default class Poker {
    public count: number = -1
    public suit: EnumSuit = EnumSuit.HeiTao
    public _dir: ECardDir = ECardDir.CLOSE
    private _UIPoker: UIPoker = null
    public parent: any = null
    public get UIPoker() {
        return this._UIPoker
    }

    public get dir() {
        return this._dir
    }
    public set dir(newDir) {
        this._dir = newDir
    }

    constructor(count: number, suit: EnumSuit, dir: ECardDir) {
        this.count = count
        this.suit = suit
        this.dir = dir
    }

    bindView(UIPoker) {
        this._UIPoker = UIPoker
    }

    unBindView() {
        this._UIPoker = null
    }
    //红黑交替连接判断
    public isConcatable(p: Poker) {
        return this.count == p.count + 1 && !this.isSimilarSuit(p.suit)
    }

    public isSimilarSuit(suit: EnumSuit) {
        return Number(ESuitNum[suit] + ESuitNum[this.suit]) % 2 == 0
    }
}