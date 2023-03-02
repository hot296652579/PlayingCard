System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Poker, UIPoker, GameEngine, _crd;

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
      Poker = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIPoker = _unresolved_3.UIPoker;
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
          for (var i = 0; i < this.cardTotal; i++) {
            for (var j = 0; j < this.cardSuits; j++) {
              var poker = new (_crd && Poker === void 0 ? (_reportPossibleCrUseOfPoker({
                error: Error()
              }), Poker) : Poker)(i, j);
              this.pokers.push(poker);
            }
          }
        }

        createAllCard() {
          for (var poker of this.pokers) {
            var uiPoker = this.createUIPoker(poker);
            this.cardContainer.addChild(uiPoker.node);
            var random = Math.random() * 100 + 400;
            uiPoker.node.setPosition(random, random);
          }
        }

        createUIPoker(poker) {
          var cardPrefab = instantiate(this.cardPrefab);
          var uiPoker = cardPrefab.getComponent(_crd && UIPoker === void 0 ? (_reportPossibleCrUseOfUIPoker({
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
//# sourceMappingURL=4a2870d7b50290a5a8cb80f8a9b8cee367bbbfc2.js.map