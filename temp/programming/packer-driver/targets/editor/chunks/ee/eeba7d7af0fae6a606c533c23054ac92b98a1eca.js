System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EnumSuit, Poker, UIGameView, GameEngine, _crd;

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "./Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "./Poker", _context.meta, extras);
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
      EnumSuit = _unresolved_2.EnumSuit;
    }, function (_unresolved_3) {
      Poker = _unresolved_3.default;
    }, function (_unresolved_4) {
      UIGameView = _unresolved_4.UIGameView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eb4dRFxFJMZpb7vqpHovgd", "GameEngine", undefined);

      __checkObsolete__(['instantiate', 'Prefab', 'Node']);

      _export("default", GameEngine = class GameEngine {
        constructor() {
          this.cardTotal = 13;
          this.cardSuits = 4;
          this.pokers = [];
          this.gameView = void 0;
        }

        init(gameNode) {
          this.gameView = gameNode.getComponent(_crd && UIGameView === void 0 ? (_reportPossibleCrUseOfUIGameView({
            error: Error()
          }), UIGameView) : UIGameView);
        }

        gameStart() {
          for (let i = 1; i <= this.cardTotal; i++) {
            for (let j = 0; j < this.cardSuits; j++) {
              let suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
                error: Error()
              }), EnumSuit) : EnumSuit).HeiTao;

              switch (j) {
                case 1:
                  suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
                    error: Error()
                  }), EnumSuit) : EnumSuit).HongTao;
                  break;

                case 2:
                  suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
                    error: Error()
                  }), EnumSuit) : EnumSuit).MeiHua;
                  break;

                case 3:
                  suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
                    error: Error()
                  }), EnumSuit) : EnumSuit).FangKuai;
                  break;

                default:
                  suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
                    error: Error()
                  }), EnumSuit) : EnumSuit).HeiTao;
                  break;
              }

              let poker = new (_crd && Poker === void 0 ? (_reportPossibleCrUseOfPoker({
                error: Error()
              }), Poker) : Poker)(i, suit);
              this.pokers.push(poker);
            }
          }

          this.gameView.createAllCard(this.pokers);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eeba7d7af0fae6a606c533c23054ac92b98a1eca.js.map