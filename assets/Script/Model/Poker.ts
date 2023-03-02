import { ECardDir, EnumSuit } from "../Enum"

export default class Poker {
    public count: number = -1
    public suit: EnumSuit = EnumSuit.HeiTao
    public dir: ECardDir = ECardDir.CLOSE

    constructor(count: number, suit: EnumSuit, dir: ECardDir) {
        this.count = count
        this.suit = suit
        this.dir = dir
    }
}