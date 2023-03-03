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
        GameDB.getInstance().createCardsDB()
    }

    initEvent() {
        EventMgr.getInstance().on(EventGame_Enum.EVENT_GAME_INIT, this.gameView.createAllCardByDB, this.gameView)
        EventMgr.getInstance().on(EventGame_Enum.EVENT_GAME_START, this.gameView.gamePlay, this.gameView)
    }

    gamePlay() {
        GameDB.getInstance().gamePlay()
    }
}