import { _decorator, Component, Node, SpriteFrame, Sprite, NodeEventType } from 'cc';
import EventMgr from '../Base/Event/EventMgr';
import { ECardDir, EventGame_Enum } from '../Enum';
import Poker from '../Model/Poker';
import ResMgr from '../ResMgr';
import { getSpPath } from '../Utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('UIPoker')
export class UIPoker extends Component {
    @property(Node)
    cardBgNode: Node = null

    cardSpFrame: Sprite = null
    private _poker: Poker
    public get poker() {
        return this._poker
    }

    start() {
        this.cardSpFrame = this.node.getComponent(Sprite)

        this.initEvent()
    }

    initEvent() {
        this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);  // if "this" is component and the "memberFunction" declared in CCClass.
        this.node.on(NodeEventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(NodeEventType.TOUCH_END, this.touchEnd, this);
    }

    async init(poker: Poker) {
        if (!poker) return
        this._poker = poker
        poker.bindView(this)

        const spPath = getSpPath(poker.suit, poker.count)
        // console.log('spPath', spPath)
        try {
            const cardSpriteFrame = await ResMgr.getInstance().loadResSpriteFrame(spPath)
            this.cardSpFrame.spriteFrame = cardSpriteFrame

            this.updateCardDir(poker)
        } catch (error) {
            console.log('加载图片出错 path:', spPath)
        }
    }

    updateCardDir({ dir }) {
        if (dir == ECardDir.CLOSE) {
            this.cardBgNode.active = true
        } else {
            this.cardBgNode.active = false
        }
    }

    refreshView() {
        this.updateCardDir(this._poker)
    }

    touchStart(event) {
        // console.log('event.target,', event.target)
    }

    touchMove() {

    }

    touchEnd() {
        EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE, this._poker)
    }

    public isOpen(): boolean {
        return this._poker.dir == ECardDir.OPEN
    }

    public countIsOne(): boolean {
        return this._poker.count == 1
    }
}

