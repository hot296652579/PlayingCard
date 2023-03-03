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
    @property(Node)
    initArea: Node = null

    createAllCardByDB(pokers: Poker[]) {
        //先创建所有牌到init待发牌区
        let index = 0
        for (const poker of pokers) {
            let uiPoker = this.createUIPoker(poker)
            this.initArea.addChild(uiPoker.node)
            uiPoker.node.setPosition(0.5 * index, 0, 0)
            index++
        }
    }

    createUIPoker(poker: Poker): UIPoker {
        const cardPrefab = instantiate(this.cardPrefab)
        const uiPoker = cardPrefab.getComponent(UIPoker)
        uiPoker.init(poker)
        return uiPoker
    }

    startGame() {
        let stuck = []
        for (let index = this.initArea.children.length - 1; index >= 0; --index) {
            let children = this.initArea.children[index]
            this.initArea.removeChild(children)
            stuck.push(children)
        }

        for (let index = stuck.length - 1; index >= 0; --index) {
            const card = stuck[index];
            this.closeSendArea.addChild(card)
        }
    }
}

