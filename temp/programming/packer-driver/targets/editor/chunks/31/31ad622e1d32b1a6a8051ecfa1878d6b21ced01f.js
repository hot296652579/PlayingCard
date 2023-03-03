System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECardDir, EnumSuit, Poker, _crd;

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPoker(extras) {
    _reporterNs.report("UIPoker", "../UI/UIPoker", _context.meta, extras);
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
        get UIPoker() {
          return this._UIPoker;
        }

        get dir() {
          return this._dir;
        }

        set dir(newDir) {
          this._dir = newDir;
        }

        constructor(count, suit, dir) {
          this.count = -1;
          this.suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
            error: Error()
          }), EnumSuit) : EnumSuit).HeiTao;
          this._dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
            error: Error()
          }), ECardDir) : ECardDir).CLOSE;
          this._UIPoker = null;
          this.count = count;
          this.suit = suit;
          this.dir = dir;
        }

        bindView(UIPoker) {
          this._UIPoker = UIPoker;
        }

        unBindView() {
          this._UIPoker = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31ad622e1d32b1a6a8051ecfa1878d6b21ced01f.js.map