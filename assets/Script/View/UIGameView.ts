import { _decorator, Component, Node, Prefab, Game, instantiate, Vec3, UITransform, Tween, tween } from 'cc';
import EventMgr from '../Base/Event/EventMgr';
import { ECardDir, EventGame_Enum } from '../Enum';
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
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE, this.clickCardHandler, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW, this.playPokerToReceive, this)
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

    async initPlayGroup(groupIndex: number, cardIndex: number, poker: Poker, i: number) {
        let index = PLAY_AREA_COUNT * cardIndex - cardIndex * (cardIndex - 1) / 2 - cardIndex + groupIndex
        // console.log('groupIndex:' + groupIndex + ',cardIndex:' + cardIndex + ',index:' + index)
        let node = poker.UIPoker.node
        // console.log('poker 点数:', poker.count, ',花色:', poker.suit)
        // console.log('poker worldPos', node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0)))
        moveWorld2Space(node, this.playGruopRoot)
        node.setSiblingIndex(index)

        let delay = index * 0.1
        let nodeEndPos = groupIndex * 92

        if (i == 0) {
            tween(node)
                .delay(delay)
                .to(0.3, { position: new Vec3(nodeEndPos, cardIndex * -30, 0) })
                .to(0.3, { scale: new Vec3(0, 1, 0) })
                .call(() => {
                    poker.dir = ECardDir.OPEN
                    poker.UIPoker.refreshView()
                })
                .to(0.3, { scale: new Vec3(1, 1, 1) })
                .start()
        } else {
            tween(node)
                .delay(delay)
                .to(0.3, { position: new Vec3(nodeEndPos, cardIndex * -30, 0) })
                .start()
        }
    }

    clickCardHandler(poker: Poker) {
        //条件 1.在玩牌区 2.打开的 3.最上方的 4.点数是1
        let uiPoker = poker.UIPoker

        if (GameDB.getInstance().onCheckInPlayArea(poker)) {
            console.log('在玩牌区1111')
            if (GameDB.getInstance().onCheckIndexTop(poker)) {
                console.log('在最上方2222')
                if (uiPoker.isOpen()) {
                    console.log('去改变数据层3333')
                    EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB, uiPoker.poker)
                }
            }
        }
    }

    playPokerToReceive(poker: Poker) {
        let receiveIndex: number = poker.parent.index
        let node = poker.UIPoker.node
        console.log('poker worldPos', node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0)))
        let targetNode = this.receiveAreaList[receiveIndex]
        moveWorld2Space(node, targetNode)

        let delay = 0.5
        tween(node)
            .to(delay, { position: new Vec3(0, 0, 0) })
            .start()
    }

    restartGame() {
        this.closeSendArea.removeAllChildren()
        this.openSendArea.removeAllChildren()

        for (let index = 0; index < this.receiveAreaList.length; index++) {
            const area = this.receiveAreaList[index];
            area.removeAllChildren()
        }

        this.playGruopRoot.removeAllChildren()
        this.initArea.removeAllChildren()

        EventMgr.getInstance().emit(EventGame_Enum.EVENT_RESTART_GAME)
    }
}

