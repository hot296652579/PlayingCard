import { _decorator, Component, Node, Prefab, Game } from 'cc';
import GameEngine from './GameEngine';
import Poker from './Poker';
const { ccclass, property } = _decorator;

@ccclass('UIGame')
export class UIGame extends Component {
    @property(Node)
    cardContainer: Node = null

    @property(Prefab)
    cardPrefab: Prefab = null

    private gameEngine: GameEngine

    onLoad() {
        this.gameEngine = new GameEngine()
        this.gameEngine.init(this.cardContainer, this.cardPrefab)
        this.gameEngine.gameStart()
    }

}

