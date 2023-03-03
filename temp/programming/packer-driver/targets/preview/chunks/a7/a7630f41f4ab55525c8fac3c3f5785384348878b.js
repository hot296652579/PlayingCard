System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EnumSuit, ECardDir, EventGame_Enum;

  _export({
    EnumSuit: void 0,
    ECardDir: void 0,
    EventGame_Enum: void 0
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

      (function (EventGame_Enum) {
        EventGame_Enum["EVENT_GAME_INIT"] = "EVENT_GAME_INIT";
      })(EventGame_Enum || _export("EventGame_Enum", EventGame_Enum = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7630f41f4ab55525c8fac3c3f5785384348878b.js.map