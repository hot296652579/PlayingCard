System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameDB, GameEngine, _crd;

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
      GameDB = _unresolved_2.default;
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
          this.gameView = m_GameView;
        }

        gameStart() {
          this.gameView.createAllCardByDB();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=365bd973b0b470d149d6145868f9d414f06dbc26.js.map