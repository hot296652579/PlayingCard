import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc';
import { ECardDir } from '../Enum';
import Poker from '../Model/Poker';
import ResMgr from '../ResMgr';
import { getSpPath } from '../Utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('UIPoker')
export class UIPoker extends Component {
    @property(Node)
    cardBgNode: Node = null

    cardSpFrame: Sprite = null

    start() {
        this.cardSpFrame = this.node.getComponent(Sprite)
    }
    async init(poker: Poker) {
        if (!poker) return
        poker.bindView(this)
        const spPath = getSpPath(poker.suit, poker.count)
        const cardSpriteFrame = await ResMgr.getInstance().loadResSpriteFrame(spPath)
        this.cardSpFrame.spriteFrame = cardSpriteFrame

        this.updateCardDir(poker)
    }

    updateCardDir({ dir }) {
        if (dir == ECardDir.CLOSE) {
            this.cardBgNode.active = true
        } else {
            this.cardBgNode.active = false
        }
    }
}

