System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECardDir, EnumSuit, Poker, _crd;

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "../Enum", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ECardDir = _unresolved_2.ECardDir;
      EnumSuit = _unresolved_2.EnumSuit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "546b2GXH49K3pMUkgCEV67R", "Poker", undefined);

      _export("default", Poker = class Poker {
        constructor(count, suit, dir) {
          this.count = -1;
          this.suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
            error: Error()
          }), EnumSuit) : EnumSuit).HeiTao;
          this.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
            error: Error()
          }), ECardDir) : ECardDir).CLOSE;
          this.count = count;
          this.suit = suit;
          this.dir = dir;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=baa36aeb24bb996af6cf7030b0eb7c173f904bd4.js.map