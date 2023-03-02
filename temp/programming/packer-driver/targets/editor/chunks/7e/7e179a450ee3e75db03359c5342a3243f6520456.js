System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EnumSuit, ECardDir;

  _export({
    EnumSuit: void 0,
    ECardDir: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54f6amxW29Av6xRylIXscKG", "index", undefined);

      (function (EnumSuit) {
        EnumSuit["HeiTao"] = "HeiTao";
        EnumSuit["HongTao"] = "HongTao";
        EnumSuit["MeiHua"] = "MeiHua";
        EnumSuit["FangKuai"] = "FangKuai";
      })(EnumSuit || _export("EnumSuit", EnumSuit = {}));

      (function (ECardDir) {
        ECardDir[ECardDir["CLOSE"] = 0] = "CLOSE";
        ECardDir[ECardDir["OPEN"] = 1] = "OPEN";
      })(ECardDir || _export("ECardDir", ECardDir = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e179a450ee3e75db03359c5342a3243f6520456.js.map