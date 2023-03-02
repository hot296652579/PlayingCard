System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EnumSuit, Poker, PokerGrop, GameDB, _crd;

  function _reportPossibleCrUseOfEnumSuit(extras) {
    _reporterNs.report("EnumSuit", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "../Poker", _context.meta, extras);
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
      EnumSuit = _unresolved_2.EnumSuit;
    }, function (_unresolved_3) {
      Poker = _unresolved_3.default;
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

      });

      _export("default", GameDB = class GameDB {
        constructor() {
          this.cardTotal = 13;
          this.cardSuits = 4;
          this.RECEIVE_AREA_COUNT = 4;
          this.PLAY_AREA_COUNT = 7;
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
              }), Poker) : Poker)(i, suit);

              this._pokers.push(poker);
            }
          }

          for (var index = 0; index < this.RECEIVE_AREA_COUNT; index++) {
            var receiveGroup = new PokerGrop();

            this._receiveArea.push(receiveGroup);
          }

          for (var _index = 0; _index < this.PLAY_AREA_COUNT; _index++) {
            var _receiveGroup = new PokerGrop();

            this._playArea.push(_receiveGroup);
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
//# sourceMappingURL=32f3ce68174d0589b516bbf5660bbf15a430be88.js.map