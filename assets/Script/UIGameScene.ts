import { _decorator, Component, Node, Prefab, Game, instantiate } from 'cc';
import EventMgr from './Base/Event/EventMgr';
import { EventGame_Enum } from './Enum';
import GameEngine from './GameEngine';
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


        //test
        EventMgr.getInstance().on(EventGame_Enum.EVENT_GAME_INIT, this.testHandler, this)

        this.scheduleOnce(() => {
            EventMgr.getInstance().emit(EventGame_Enum.EVENT_GAME_INIT, '阿西吧')
        }, 1)
    }

    testHandler(param) {
        console.log('param', param)
    }

}

