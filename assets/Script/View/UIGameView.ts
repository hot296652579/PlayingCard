import { _decorator, Component, Node, Prefab, Game, instantiate, Vec3, UITransform, Tween, tween } from 'cc';
import { ECardDir } from '../Enum';
import GameEngine from '../GameEngine';
import GameDB, { PLAY_AREA_COUNT } from '../Model/GameDB';
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

    playGroupList: Node[] = []

    onLoad() {
        for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let playGroup = new Node()
            playGroup.addComponent(UITransform)
            this.playGruopAnchor.addChild(playGroup)
            playGroup.setPosition(new Vec3(index * 100, 0, 0))
            this.playGroupList.push(playGroup)
        }
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

    initPlayGroup(groupIndex: number, cardIndex: number, poker: Poker) {
        let node = poker.UIPoker.node
        let group = this.playGroupList[groupIndex]
        let wolrdPos = node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0))
        let nodePos = group.getComponent(UITransform).convertToNodeSpaceAR(wolrdPos)
        node.removeFromParent()
        node.position = nodePos
        group.addChild(node)

        if (poker.dir == ECardDir.OPEN) {
            tween(node)
                .delay(0.0)
                .to(0.8, { position: new Vec3(0, cardIndex * -30, 0) })
                .to(0.5, { scale: new Vec3(0, 0, 0) })
                .call(() => {

                })
                .to(0.5, { scale: new Vec3(1, 0, 0) })
                .start()
        } else {
            tween(node)
                .delay(0.0)
                .to(0.8, { position: new Vec3(0, cardIndex * -30, 0) })
                .start()
        }
    }
}

