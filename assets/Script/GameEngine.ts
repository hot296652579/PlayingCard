import { instantiate, Prefab, Node } from "cc";
import { EnumSuit } from "./Enum";
import Poker from "./Poker";
import { UIPoker } from "./UI/UIPoker";
import { UIGameView } from "./View/UIGameView";

export default class GameEngine {
    private cardTotal: number = 13
    private cardSuits: number = 4
    private pokers: Poker[] = []
    private gameView: UIGameView
    constructor() { }

    init(m_GameView) {
        this.gameView = m_GameView
    }

    gameStart() {
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
                this.pokers.push(poker)
            }
        }

        this.gameView.createAllCard(this.pokers)
    }
}