import { _decorator, Component, Node, Prefab, Game, instantiate, Vec3, UITransform, Tween, tween } from 'cc';
import { clickLock } from '../Base/Docretors';
import EventMgr from '../Base/Event/EventMgr';
import { ECardDir, EventGame_Enum } from '../Enum';
import GameEngine from '../GameEngine';
import GameDB, { PLAY_AREA_COUNT } from '../Model/GameDB';
import Poker from '../Model/Poker';
import { UIPoker } from '../UI/UIPoker';
import TweenUtil, { moveWorld2Space } from '../Utils/Utils';
const { ccclass, property } = _decorator;


const PADDING_PLAY = 92
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
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_PLAY_UPDATE_VIEW, this.playPokerToPlay, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_PLAYAREA_TO_OTHERPLAY_UPDATE_VIEW, this.playPokerToOtherPlay, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_OPEN_TOPPOKER_UPDATE_VIEW, this.openTopPoker, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW, this.closeToOpen, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW, this.openToReceive, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_OPEN_TO_PLAY_UPDATE_VIEW, this.openToPlay, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_OPEN_TO_CLOSE_UPDATE_VIEW, this.openToClose, this)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_RECEIVE_TO_PLAY_VIEW, this.receiveToPlay, this)
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
        let nodeEndPos = groupIndex * PADDING_PLAY

        if (i == 0) {
            tween(node)
                .delay(delay)
                .to(0.3, { position: new Vec3(nodeEndPos, cardIndex * -75, 0) })
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
                .to(0.3, { position: new Vec3(nodeEndPos, cardIndex * -75, 0) })
                .start()
        }

        // if (this.closeSendArea.children.length <= 24) {
        //     for (let index = 0; index < this.closeSendArea.children.length; index++) {
        //         let children = this.closeSendArea.children[index]
        //         console.log(children.getComponent(UIPoker).poker.count + ',' + children.getComponent(UIPoker).poker.suit)
        //     }
        // }
    }

    clickCardHandler(poker: Poker) {
        console.log('点击的poker', poker)
        console.log('当前poker所在的组index:' + poker.indexInGroup())
        let uiPoker = poker.UIPoker

        if (GameDB.getInstance().onCheckInPlayArea(poker)) {
            // console.log('点击的区域是PlayArea')
            if (GameDB.getInstance().onCheckIndexTop(poker)) {
                if (uiPoker.isOpen()) {
                    EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE_PLAY_UPDATE_DB, uiPoker.poker)
                }
            } else {
                if (uiPoker.isOpen()) {
                    EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_PLAY_UPDATE_DB, uiPoker.poker)
                }
            }
        } else if (GameDB.getInstance().onCheckInCloseArea(poker)) {
            // console.log('点击的区域是CloseArea')
            if (GameDB.getInstance().onCheckIndexByCloseTop(poker)) {
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB, uiPoker.poker)
            }
        } else if (GameDB.getInstance().onCheckInOpenArea(poker)) {
            // console.log('点击的区域是openArea')
            if (GameDB.getInstance().onCheckIndexByOpenTop(poker)) {
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_OPEN_TO_UPDATE_DB, uiPoker.poker)
            }
        } else if (GameDB.getInstance().onCheckInReceiveArea(poker)) {
            // console.log('点击的区域是receiveArea')
            if (GameDB.getInstance().onCheckIndexReceiveTop(poker)) {
                EventMgr.getInstance().emit(EventGame_Enum.EVENT_RECEIVE_TO_PLAY_DB, uiPoker.poker)
            }
        }
    }

    playPokerToReceive(poker: Poker) {
        this.moveUIPokerToReceiveArea(poker)
    }

    openToReceive(poker: Poker) {
        this.moveUIPokerToReceiveArea(poker)
    }

    moveUIPokerToReceiveArea(poker: Poker) {
        let receiveIndex: number = poker.parent.index
        console.log('receiveIndex:', receiveIndex)
        let node = poker.UIPoker.node
        // console.log('poker worldPos', node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0)))
        let targetNode = this.receiveAreaList[receiveIndex]
        moveWorld2Space(node, targetNode)

        let delay = 0.5
        tween(node)
            .to(delay, { position: new Vec3(0, 0, 0) })
            .start()
    }

    moveUIPokerToPlayArea(poker: Poker) {
        let node = poker.UIPoker.node
        let groupIndex = poker.parent.index
        let pokerIndex = poker.indexInGroup()
        moveWorld2Space(node, this.playGruopRoot)
        this.playGruopRoot.addChild(node)

        let nodeEndPos = groupIndex * PADDING_PLAY
        tween(node)
            .to(0.5, { position: new Vec3(nodeEndPos, -75 * pokerIndex, 0) })
            .start()
    }

    openToPlay(poker: Poker) {
        this.moveUIPokerToPlayArea(poker)
    }

    receiveToPlay(poker: Poker) {
        this.moveUIPokerToPlayArea(poker)
    }

    playPokerToPlay(poker: Poker) {
        this.moveUIPokerToPlayArea(poker)
    }

    playPokerToOtherPlay(pokers: Poker[], openPoker: Poker) {
        for (let index = pokers.length - 1; index >= 0; index--) {
            let poker = pokers[index];
            this.moveUIPokerToPlayArea(poker)
        }

        if (openPoker) {
            openPoker.dir = ECardDir.OPEN
            openPoker.UIPoker.refreshView()
        }
    }

    openTopPoker(poker: Poker) {
        let node = poker.UIPoker.node
        tween(node)
            .to(0.3, { scale: new Vec3(0, 0, 0) })
            .call(() => {
                poker.dir = ECardDir.OPEN
                poker.UIPoker.refreshView()
            })
            .to(0.3, { scale: new Vec3(1, 1, 1) })
            .start()
    }

    closeToOpen(poker: Poker) {
        let node = poker.UIPoker.node
        moveWorld2Space(node, this.openSendArea)

        let delay = 0.5
        tween(node)
            .to(delay, { position: new Vec3(0, 0, 0) })
            .to(0.3, { scale: new Vec3(0, 1, 1) })
            .call(() => {
                poker.dir = ECardDir.OPEN
                poker.UIPoker.refreshView()
            })
            .to(0.3, { scale: new Vec3(1, 1, 1) })
            .start()

        let padding = -50
        for (let index = 0; index <= 1; index++) {
            let p: Poker = GameDB.getInstance().openGroup.getPoker(-2 - index)
            if (p) {
                tween(p.UIPoker.node)
                    .to(0.2, { position: new Vec3(padding * (index + 1), 0, 0) })
                    .start()
            }
        }
    }

    checkCloseIsEmpty() {
        GameDB.getInstance().isCloseEmptyOpenToClose()
    }
    @clickLock(0.5)
    openToClose(pokers) {
        let index = 0
        for (const poker of pokers) {
            let node = poker.UIPoker.node
            Tween.stopAllByTag(node)
            moveWorld2Space(node, this.closeSendArea)
            node.setPosition(0.5 * index, 0.2 * index, 0)
            index++
        }
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

