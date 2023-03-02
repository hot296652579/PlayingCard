import { instantiate, Prefab, Node } from "cc";
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
        for (let i = 0; i < this.cardTotal; i++) {
            for (let j = 0; j < this.cardSuits; j++) {
                let poker = new Poker(i, j)
                this.pokers.push(poker)
            }
        }

        this.createAllCard()
    }

    createAllCard() {
        for (const poker of this.pokers) {
            let uiPoker = this.createUIPoker(poker)
            this.cardContainer.addChild(uiPoker.node)

            uiPoker.node.setPosition(Math.random() * 400, Math.random() * 400)
        }
    }

    createUIPoker(poker: Poker): UIPoker {
        const cardPrefab = instantiate(this.cardPrefab)
        const uiPoker = cardPrefab.getComponent(UIPoker)
        uiPoker.init(poker)
        return uiPoker
    }
}