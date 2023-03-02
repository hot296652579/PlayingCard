import { instantiate, Prefab, Node } from "cc";
import { EnumSuit } from "./Enum";
import Poker from "./Poker";
import { UIPoker } from "./UIPoker";

export default class GameEngine {
    private cardTotal: number = 13
    private cardSuits: number = 4
    private pokers: Poker[] = []
    constructor() { }

    cardPrefab: Prefab = null
    cardContainer: Node = null

    init(container: Node, cardPrefab: Prefab) {
        this.cardContainer = container
        this.cardPrefab = cardPrefab
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

        this.createAllCard()
    }

    createAllCard() {
        for (const poker of this.pokers) {
            let uiPoker = this.createUIPoker(poker)
            this.cardContainer.addChild(uiPoker.node)

            uiPoker.node.setPosition(Math.random() * 400 - 200, Math.random() * 400 - 200)
        }
    }

    createUIPoker(poker: Poker): UIPoker {
        const cardPrefab = instantiate(this.cardPrefab)
        const uiPoker = cardPrefab.getComponent(UIPoker)
        uiPoker.init(poker)
        return uiPoker
    }
}