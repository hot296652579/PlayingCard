System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, ECardDir, EnumSuit, EventGame_Enum, Poker, PokerGrop, GameDB, _crd, RECEIVE_AREA_COUNT, PLAY_AREA_COUNT;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/Event/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventGame_Enum(extras) {
    _reporterNs.report("EventGame_Enum", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "./Poker", _context.meta, extras);
  }

  _export({
    PokerGrop: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      ECardDir = _unresolved_3.ECardDir;
      EnumSuit = _unresolved_3.EnumSuit;
      EventGame_Enum = _unresolved_3.EventGame_Enum;
    }, function (_unresolved_4) {
      Poker = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7c8ckp3I9EMq8TK+OLhp0k", "GameDB", undefined);

      _export("PokerGrop", PokerGrop = class PokerGrop {
        constructor() {
          this._pokers = [];
        }

        get pokers() {
          return this._pokers;
        }

        addPoker(poker) {
          this._pokers.push(poker);
        }

      });

      _export("RECEIVE_AREA_COUNT", RECEIVE_AREA_COUNT = 4);

      _export("PLAY_AREA_COUNT", PLAY_AREA_COUNT = 7);

      _export("default", GameDB = class GameDB {
        constructor() {
          this.cardTotal = 13;
          this.cardSuits = 4;
          this._pokers = [];
          this._closePokers = [];
          this._openPokers = [];
          this._receiveArea = [];
          this._playArea = [];
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new GameDB();
          }

          return this.instance;
        }

        //创建初始数据
        createCardsDB() {
          for (var i = 1; i <= this.cardTotal; i++) {
            for (var j = 0; j < this.cardSuits; j++) {
              var suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
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

              var poker = new (_crd && Poker === void 0 ? (_reportPossibleCrUseOfPoker({
                error: Error()
              }), Poker) : Poker)(i, suit, (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
                error: Error()
              }), ECardDir) : ECardDir).CLOSE);

              this._pokers.push(poker);
            }
          }

          for (var index = 0; index < RECEIVE_AREA_COUNT; index++) {
            var receiveGroup = new PokerGrop();

            this._receiveArea.push(receiveGroup);
          }

          for (var _index = 0; _index < PLAY_AREA_COUNT; _index++) {
            var _receiveGroup = new PokerGrop();

            this._playArea.push(_receiveGroup);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT, this._pokers);
        }

        gamePlay() {
          var temp = this._pokers;
          this._closePokers = this.pokers;
          this._pokers = temp;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_START);
          this.createPlayInitDB();
        }

        createPlayInitDB() {
          for (var count = PLAY_AREA_COUNT; count >= 1; count--) {
            for (var i = 0; i < count; i++) {
              var dis = PLAY_AREA_COUNT - count;
              var groupIndex = dis + i;
              var pokerGrop = this._playArea[groupIndex];
              var poker = this._closePokers[this._closePokers.length - 1];
              this._closePokers.length = this._closePokers.length - 1;
              poker.dir = i == 0 ? poker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
                error: Error()
              }), ECardDir) : ECardDir).OPEN : poker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
                error: Error()
              }), ECardDir) : ECardDir).CLOSE;
              pokerGrop.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT_GROUP, groupIndex, dis, poker, i);
            }
          }
        }

        get pokers() {
          return this._pokers;
        }

        get closePokers() {
          return this._closePokers;
        }

        get openPokers() {
          return this._openPokers;
        }

        get playArea() {
          return this._playArea;
        }

        get receiveArea() {
          return this._receiveArea;
        }

      });

      GameDB.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c340913a927037b2a20795130f9352a1bac668e8.js.map