import { instantiate, Prefab, Node, Game } from "cc";
import { EnumSuit } from "./Enum";
import GameDB from "./Model/GameDB";
import { UIPoker } from "./UI/UIPoker";
import { UIGameView } from "./View/UIGameView";

export default class GameEngine {

    private gameView: UIGameView
    constructor() { }

    init(m_GameView) {
        GameDB.getInstance().createCardsDB()
        this.gameView = m_GameView
    }

    gameStart() {
        this.gameView.createAllCardByDB()
    }
}