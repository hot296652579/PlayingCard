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
        EventGame_Enum["EVENT_GAME_START"] = "EVENT_GAME_START";
        EventGame_Enum["EVENT_GAME_INIT_GROUP"] = "EVENT_GAME_INIT_GROUP";
        EventGame_Enum["EVENT_PLAYAREA_TO_RECEIVE"] = "EVENT_PLAYAREA_TO_RECEIVE";
        EventGame_Enum["EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB"] = "EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB";
      })(EventGame_Enum || _export("EventGame_Enum", EventGame_Enum = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2fa3cd5e6aca4eeca572f0bfe451d0c164a9205.js.map