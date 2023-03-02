System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Poker, GameEngine, _crd;

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "./Poker", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Poker = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eb4dRFxFJMZpb7vqpHovgd", "GameEngine", undefined);

      _export("default", GameEngine = class GameEngine {
        constructor() {
          this.cardTotal = 13;
          this.cardSuits = 4;
          this.pokers = [];
        }

        gameStart() {
          for (let i = 0; i < this.cardTotal; i++) {
            for (let j = 0; j < this.cardSuits; j++) {
              let poker = new (_crd && Poker === void 0 ? (_reportPossibleCrUseOfPoker({
                error: Error()
              }), Poker) : Poker)(i, j);
              this.pokers.push(poker);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10154c919a049b6aebff2fe134e437052f30ba5a.js.map