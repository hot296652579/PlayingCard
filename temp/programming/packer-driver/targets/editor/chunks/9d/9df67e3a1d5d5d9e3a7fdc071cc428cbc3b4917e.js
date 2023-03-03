System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventMgr, EventGame_Enum, GameDB, GameEngine, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./Base/Event/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventGame_Enum(extras) {
    _reporterNs.report("EventGame_Enum", "./Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDB(extras) {
    _reporterNs.report("GameDB", "./Model/GameDB", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIGameView(extras) {
    _reporterNs.report("UIGameView", "./View/UIGameView", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventGame_Enum = _unresolved_3.EventGame_Enum;
    }, function (_unresolved_4) {
      GameDB = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eb4dRFxFJMZpb7vqpHovgd", "GameEngine", undefined);

      __checkObsolete__(['instantiate', 'Prefab', 'Node', 'Game']);

      _export("default", GameEngine = class GameEngine {
        constructor() {
          this.gameView = void 0;
        }

        init(m_GameView) {
          (_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
            error: Error()
          }), GameDB) : GameDB).getInstance().createCardsDB();
          this.gameView = m_GameView; // let pokers = GameDB.getInstance().pokers
          // this.gameView.createAllCardByDB(pokers)

          this.initEvent();
        }

        initEvent() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT, this.gameView.playGame, this.gameView);
        }

        gameStart() {
          (_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
            error: Error()
          }), GameDB) : GameDB).getInstance().startGame();
          this.gameView.playGame();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9df67e3a1d5d5d9e3a7fdc071cc428cbc3b4917e.js.map