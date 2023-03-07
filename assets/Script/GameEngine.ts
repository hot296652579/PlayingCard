import { instantiate, Prefab, Node, Game } from "cc";
import EventMgr from "./Base/Event/EventMgr";
import { EnumSuit, EventGame_Enum } from "./Enum";
import GameDB from "./Model/GameDB";
import { UIPoker } from "./UI/UIPoker";
import { UIGameView } from "./View/UIGameView";

export default class GameEngine {

    private gameView: UIGameView
    constructor() { }

    init(m_GameView) {
        this.gameView = m_GameView
        this.initEvent()
        // GameDB.getInstance().initEvent()
        GameDB.getInstance().createCardsDB()
    }

    initEvent() {
        EventMgr.getInstance().on(EventGame_Enum.EVENT_RESTART_GAME, this.restartHandler)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_GAME_INIT, this.gameView.createAllCardByDB, this.gameView)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_GAME_START, this.gameView.gamePlay, this.gameView)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_GAME_INIT_GROUP, this.gameView.initPlayGroup, this.gameView)
    }

    restartHandler() {
        GameDB.getInstance().resetGame()
        GameDB.getInstance().createCardsDB()
        GameDB.getInstance().gamePlay()
    }

    gamePlay() {
        GameDB.getInstance().gamePlay()
    }

    exitHandler() {
        EventMgr.getInstance().off(EventGame_Enum.EVENT_GAME_INIT, this.gameView.createAllCardByDB)
        EventMgr.getInstance().off(EventGame_Enum.EVENT_GAME_START, this.gameView.gamePlay)
        EventMgr.getInstance().off(EventGame_Enum.EVENT_GAME_INIT_GROUP, this.gameView.initPlayGroup)
    }
}