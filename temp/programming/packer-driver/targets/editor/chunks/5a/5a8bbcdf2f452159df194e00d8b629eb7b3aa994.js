System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, EnumSuit, Poker, UIPoker, GameEngine, _crd;

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "./Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "./Poker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPoker(extras) {
    _reporterNs.report("UIPoker", "./UIPoker", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      EnumSuit = _unresolved_2.EnumSuit;
    }, function (_unresolved_3) {
      Poker = _unresolved_3.default;
    }, function (_unresolved_4) {
      UIPoker = _unresolved_4.UIPoker;
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
          this.cardPrefab = null;
          this.cardContainer = null;
        }

        init(container, cardPrefab) {
          this.cardContainer = container;
          this.cardPrefab = cardPrefab;
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

          this.createAllCard();
        }

        createAllCard() {
          for (const poker of this.pokers) {
            let uiPoker = this.createUIPoker(poker);
            this.cardContainer.addChild(uiPoker.node);
            uiPoker.node.setPosition(Math.random() * 400, Math.random() * 400);
          }
        }

        createUIPoker(poker) {
          const cardPrefab = instantiate(this.cardPrefab);
          const uiPoker = cardPrefab.getComponent(_crd && UIPoker === void 0 ? (_reportPossibleCrUseOfUIPoker({
            error: Error()
          }), UIPoker) : UIPoker);
          uiPoker.init(poker);
          return uiPoker;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a8bbcdf2f452159df194e00d8b629eb7b3aa994.js.map