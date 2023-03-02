import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc';
import Poker from '../Poker';
import ResMgr from '../ResMgr';
import { getSpPath } from '../Utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('UIPoker')
export class UIPoker extends Component {
    cardSpFrame: Sprite = null

    start() {
        this.cardSpFrame = this.node.getComponent(Sprite)
    }
    async init(poker: Poker) {
        if (!poker) return
        const spPath = getSpPath(poker.suit, poker.count)
        const cardSpriteFrame = await ResMgr.getInstance().loadResSpriteFrame(spPath)
        this.cardSpFrame.spriteFrame = cardSpriteFrame
    }
}

