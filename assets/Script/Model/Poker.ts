import { ECardDir, EnumSuit } from "../Enum"
import { UIPoker } from "../UI/UIPoker"

export default class Poker {
    public count: number = -1
    public suit: EnumSuit = EnumSuit.HeiTao
    public _dir: ECardDir = ECardDir.CLOSE
    private _UIPoker: UIPoker = null
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
}