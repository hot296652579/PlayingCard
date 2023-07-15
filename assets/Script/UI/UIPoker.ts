import { _decorator, Component, Node, SpriteFrame, Sprite, NodeEventType, path, Event, EventTouch, Vec2, Vec3, UITransform, tween } from 'cc';
import { clickLock } from '../Base/Docretors';
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
    m_touchStartFlag: boolean = false
    m_dragFlag: boolean = false
    m_startDragFunc: Function = null

    touchStartLocation: Vec2 = null
    // startNodePos: Vec2 = null
    startNodePosX: number = null
    startNodePosY: number = null

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
        this.node.on(NodeEventType.TOUCH_CANCEL, this.touchEnd, this);
    }

    onDestroy() {
        this.node.off(NodeEventType.TOUCH_START, this.touchStart, this);  // if "this" is component and the "memberFunction" declared in CCClass.
        this.node.off(NodeEventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(NodeEventType.TOUCH_END, this.touchEnd, this);
        this.node.off(NodeEventType.TOUCH_CANCEL, this.touchEnd, this);
    }

    init(poker: Poker) {
        if (!poker) return
        this._poker = poker
        poker.bindView(this)

        const spPath = getSpPath(poker.suit, poker.count) + '/spriteFrame'
        // console.log('spPath', spPath)
        try {
            this.schedule(async () => {
                const cardSpriteFrame = await ResMgr.getInstance().loadResSpriteFrame(spPath)
                this.cardSpFrame.spriteFrame = cardSpriteFrame

                this.updateCardDir(poker)
            }, 0.1)

        } catch (error) {
            console.log('加载图片出错 spPath:', spPath)
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

    touchStart(event: EventTouch) {
        this.startNodePosX = this.node.getPosition().x
        this.startNodePosY = this.node.getPosition().y
        if (this.m_touchStartFlag)
            return

        this.m_touchStartFlag = true
        this.m_dragFlag = false
        this.m_startDragFunc = function () {
            // console.log('start drag...')
            this.m_dragFlag = true
        }
        this.scheduleOnce(this.m_startDragFunc, 0.3)
    }

    touchMove(event: EventTouch) {
        if (!this.m_touchStartFlag) return

        if (this.m_touchStartFlag) {
            // if (this.touchStartLocation == null) {
            //     this.touchStartLocation = event.getLocation()
            // }
            // let dis: Vec2 = event.getLocation().subtract(this.touchStartLocation)
            // let newARDis = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(dis.x, dis.y))
            // if (this.startNodePos) {
            //     let newPosX = newARDis.x + dis.x
            //     let newPosY = newARDis.y + dis.y

            //     this.node.setPosition(newPosX, newPosY)
            // }

            let delta = event.touch.getUILocation();
            let pos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(delta.x, delta.y, 1));
            this.node.setPosition(pos);
        }
    }

    @clickLock(0.5)
    touchEnd() {
        // console.log(this.startNodePosX, this.startNodePosY)
        if (!this.m_touchStartFlag) return
        this.m_touchStartFlag = false
        this.unschedule(this.m_startDragFunc)
        if (this.m_dragFlag) {
            this.m_dragFlag = false

            tween(this.node)
                .to(0.2, { position: new Vec3(this.startNodePosX, this.startNodePosY) })
                .start()

            EventMgr.getInstance().emit(EventGame_Enum.EVENT_DRAG_POKER_END, this._poker)
        } else {
            EventMgr.getInstance().emit(EventGame_Enum.EVENT_PLAYAREA_TO_RECEIVE, this._poker)
        }
    }

    public isOpen(): boolean {
        return this._poker.dir == ECardDir.OPEN
    }

    public countIsOne(): boolean {
        return this._poker.count == 1
    }
}

