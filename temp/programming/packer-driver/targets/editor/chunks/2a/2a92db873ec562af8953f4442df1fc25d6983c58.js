System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECardDir, EnumSuit, ESuitNum, Poker, _crd;

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfESuitNum(extras) {
    _reporterNs.report("ESuitNum", "../Enum", _context.meta, extras);
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
      ESuitNum = _unresolved_2.ESuitNum;
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
          this.parent = null;
          this.count = count;
          this.suit = suit;
          this.dir = dir;
        }

        bindView(UIPoker) {
          this._UIPoker = UIPoker;
        }

        unBindView() {
          this._UIPoker = null;
        } //红黑交替连接判断


        isConcatable(p) {
          return this.count == p.count + 1 && !this.isSimilarSuit(p.suit);
        }

        isSimilarSuit(suit) {
          return Number((_crd && ESuitNum === void 0 ? (_reportPossibleCrUseOfESuitNum({
            error: Error()
          }), ESuitNum) : ESuitNum)[suit] + (_crd && ESuitNum === void 0 ? (_reportPossibleCrUseOfESuitNum({
            error: Error()
          }), ESuitNum) : ESuitNum)[this.suit]) % 2 == 0;
        }

        indexInGroup() {
          return this.parent.indexInGroup(this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a92db873ec562af8953f4442df1fc25d6983c58.js.map