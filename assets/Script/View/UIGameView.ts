import { _decorator, Component, Node, Prefab, Game, instantiate, Vec3, UITransform, Tween, tween } from 'cc';
import { ECardDir } from '../Enum';
import GameEngine from '../GameEngine';
import GameDB, { PLAY_AREA_COUNT } from '../Model/GameDB';
import Poker from '../Model/Poker';
import { UIPoker } from '../UI/UIPoker';
import TweenUtil, { moveWorld2Space } from '../Utils/Utils';
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
    playGruopRoot: Node = null
    @property(Node)
    initArea: Node = null

    onLoad() {

    }

    createAllCardByDB(pokers: Poker[]) {
        //先创建所有牌到init待发牌区
        let index = 0
        for (const poker of pokers) {
            let uiPoker = this.createUIPoker(poker)
            this.initArea.addChild(uiPoker.node)
            uiPoker.node.setPosition(0.5 * index, 0.2 * index, 0)
            index++
        }
    }

    createUIPoker(poker: Poker): UIPoker {
        const cardPrefab = instantiate(this.cardPrefab)
        const uiPoker = cardPrefab.getComponent(UIPoker)
        uiPoker.init(poker)
        return uiPoker
    }

    //将牌移到close 收牌区
    gamePlay() {
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

    async initPlayGroup(groupIndex: number, cardIndex: number, poker: Poker) {
        let index = PLAY_AREA_COUNT * cardIndex - cardIndex * (cardIndex - 1) / 2 - cardIndex + groupIndex
        console.log('groupIndex:' + groupIndex + ',cardIndex:' + cardIndex + ',index:' + index)
        let node = poker.UIPoker.node
        moveWorld2Space(node, this.playGruopRoot)
        node.setSiblingIndex(index)

        let delay = index * 0.2
        let nodeEndPos = groupIndex * 92
        if (poker.dir == ECardDir.OPEN) {
            tween(node)
                .delay(delay)
                .to(0.5, { position: new Vec3(nodeEndPos, cardIndex * -30, 0) })
                .to(0.3, { scale: new Vec3(0, 0, 0) })
                .call(() => {
                    poker.UIPoker.refreshView()
                })
                .to(0.3, { scale: new Vec3(1, 1, 1) })
                .start()
        } else {
            tween(node)
                .delay(delay)
                .to(0.5, { position: new Vec3(nodeEndPos, cardIndex * -30, 0) })
                .start()
        }
    }
}

