import { EnumSuit } from "../Enum"

export default class Poker {
    public count: number = -1
    public suit: EnumSuit = EnumSuit.HeiTao

    constructor(count?: number, suit?: EnumSuit) {
        this.count = count
        this.suit = suit
    }
}