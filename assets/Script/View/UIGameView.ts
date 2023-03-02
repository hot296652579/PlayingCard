import { _decorator, Component, Node, Prefab, Game, instantiate } from 'cc';
import GameEngine from '../GameEngine';
import GameDB from '../Model/GameDB';
import Poker from '../Model/Poker';
import { UIPoker } from '../UI/UIPoker';
const { ccclass, property } = _decorator;

@ccclass('UIGameView')
export class UIGameView extends Component {
    @property(Prefab)
    cardPrefab: Prefab = null

    @property(Node)
    closeSendArea: Node = null
    @property(Node)
    openSendArea: Node = null
    @property([Node])
    receiveAreaList: Node[] = []
    @property(Node)
    playGruopAnchor: Node = null

    createAllCardByDB() {
        let pokers = GameDB.getInstance().closePokers
        let index = 0
        for (const poker of pokers) {
            let uiPoker = this.createUIPoker(poker)
            this.closeSendArea.addChild(uiPoker.node)

            uiPoker.node.setPosition(index, 0, 0)
            index++
        }
    }

    createUIPoker(poker: Poker): UIPoker {
        const cardPrefab = instantiate(this.cardPrefab)
        const uiPoker = cardPrefab.getComponent(UIPoker)
        uiPoker.init(poker)
        return uiPoker
    }
}

