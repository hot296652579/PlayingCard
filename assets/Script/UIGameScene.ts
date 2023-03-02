import { _decorator, Component, Node, Prefab, Game, instantiate } from 'cc';
import GameEngine from './GameEngine';
import Poker from './Poker';
import { UIGameView } from './View/UIGameView';
const { ccclass, property } = _decorator;

@ccclass('UIGameScene')
export class UIGameScene extends Component {
    @property(Prefab)
    gameViewPrefab: Prefab = null
    private gameEngine: GameEngine

    onLoad() {
        const m_UIGameView = instantiate(this.gameViewPrefab).getComponent(UIGameView)
        this.node.addChild(m_UIGameView.node)

        this.gameEngine = new GameEngine()
        this.gameEngine.init(m_UIGameView)
        this.gameEngine.gameStart()
    }

}

