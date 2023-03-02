System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EnumSuit, Poker, _crd;

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "./Enum", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EnumSuit = _unresolved_2.EnumSuit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "546b2GXH49K3pMUkgCEV67R", "Poker", undefined);

      _export("default", Poker = class Poker {
        constructor(count, suit) {
          this.count = -1;
          this.suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
            error: Error()
          }), EnumSuit) : EnumSuit).FangKuai;
          this.count = count;
          this.suit = suit;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3977a8a0f01efac2acafa71938d52979e92d778d.js.map