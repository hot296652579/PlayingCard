import { _decorator, Component, Node, resources, SpriteFrame, ProgressBar, Label, director, native } from 'cc';
import { reslist } from '../reslist';
const { ccclass, property } = _decorator;

@ccclass('UIStartScene')
export class UIStartScene extends Component {
    start() {
        director.preloadScene('Loading')
    }

    onLoad() {

    }

    onClickWechat() {
        director.loadScene("Loading")
    }

}

