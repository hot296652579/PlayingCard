System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, ECardDir, ENumSiut, EnumSuit, EventGame_Enum, Poker, PokerGrop, ReceiveGroup, GameDB, _crd, RECEIVE_AREA_COUNT, PLAY_AREA_COUNT;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/Event/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENumSiut(extras) {
    _reporterNs.report("ENumSiut", "../Enum", _context.meta, extras);
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
      ENumSiut = _unresolved_3.ENumSiut;
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
          this.index = null;
          this._pokers = [];
        }

        get pokers() {
          return this._pokers;
        }

        addPoker(poker) {
          poker.parent = this;

          this._pokers.push(poker);
        }

        removePoker(poker) {
          var topPoker = this.groupTop;

          if (poker == topPoker) {
            console.log('移除当前poker', poker);
            this._pokers.length = this._pokers.length - 1;
            poker.parent = null;
            return poker;
          }
        }

        groupIsEmpty() {
          return this._pokers.length == 0;
        }

        get groupTop() {
          return this.groupIsEmpty() ? null : this._pokers[this._pokers.length - 1];
        }

      });

      ReceiveGroup = class ReceiveGroup extends PokerGrop {
        constructor() {
          super(...arguments);
          this.suit = null;
        }

        isNextPoker(poker) {
          if ((_crd && ENumSiut === void 0 ? (_reportPossibleCrUseOfENumSiut({
            error: Error()
          }), ENumSiut) : ENumSiut)[this.suit] === poker.suit) {
            if (this.groupTop) {
              return this.groupTop.count + 1 == poker.count;
            } else {
              return poker.count == 1;
            }
          }

          return false;
        }

      };

      _export("RECEIVE_AREA_COUNT", RECEIVE_AREA_COUNT = 4);

      _export("PLAY_AREA_COUNT", PLAY_AREA_COUNT = 7);

      _export("default", GameDB = class GameDB {
        static getInstance() {
          if (this.instance == null) {
            this.instance = new GameDB();
          }

          return this.instance;
        }

        constructor() {
          this.cardTotal = 13;
          this.cardSuits = 4;
          this._pokers = [];
          this._closePokers = [];
          this._openPokers = [];
          this._receiveArea = [];
          this._playArea = [];
          this.initEvent();
        } //绑定事件


        initEvent() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB, this.onPlayToReceive, this);
        }

        restartGame() {
          this._pokers = [];
          this._openPokers = [];
          this._receiveArea = [];
          this._playArea = [];
          this.createCardsDB();
        } //创建初始数据


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
            var receiveGroup = new ReceiveGroup();
            receiveGroup.index = this._receiveArea.length;
            receiveGroup.suit = index;

            this._receiveArea.push(receiveGroup);
          }

          for (var _index = 0; _index < PLAY_AREA_COUNT; _index++) {
            var _receiveGroup = new PokerGrop();

            _receiveGroup.index = this._playArea.length;

            this._playArea.push(_receiveGroup);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT, this._pokers);
        }

        gamePlay() {
          this.shuffle(this._pokers, 200);
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
        /**洗牌 */


        shuffle(pokers, shuffleTime) {
          if (shuffleTime === void 0) {
            shuffleTime = 100;
          }

          for (var index = 0; index < shuffleTime; index++) {
            // let snd = Math.floor(Math.random() * pokers.length - 1)
            // let rnd = Math.floor(Math.random() * pokers.length - 1)
            var snd = parseInt('' + Math.random() * pokers.length, 10);
            var rnd = parseInt('' + Math.random() * pokers.length, 10);
            var temp = pokers[snd];
            pokers[snd] = pokers[rnd];
            pokers[rnd] = temp;
          }
        }

        createPlayInitDB() {
          for (var count = PLAY_AREA_COUNT; count >= 1; count--) {
            for (var i = 0; i < count; i++) {
              var dis = PLAY_AREA_COUNT - count;
              var groupIndex = dis + i;
              var pokerGrop = this._playArea[groupIndex];
              var poker = this._closePokers[this._closePokers.length - 1];
              this._closePokers.length = this._closePokers.length - 1; // poker.dir = i == 0 ? poker.dir = ECardDir.OPEN : poker.dir = ECardDir.CLOSE

              pokerGrop.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT_GROUP, groupIndex, dis, poker, i);
            }
          }
        }

        onPlayToReceive(poker) {
          for (var index = 0; index < RECEIVE_AREA_COUNT; index++) {
            var group = this._receiveArea[index];

            if (group.isNextPoker(poker)) {
              var parent = poker.parent;
              parent.removePoker(poker);
              group.addPoker(poker);
              console.log('去刷新收牌组显示数据view...');
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW, poker);
            } else {}
          }
        } //检测这张牌是否在play area


        onCheckInPlayArea(poker) {
          return this.playArea.filter(pg => pg.pokers.filter(p => p.count == poker.count && p.suit == poker.suit).length > 0).length > 0;
        } //检测是否在顶部


        onCheckIndexTop(poker) {
          for (var gp of this._playArea) {
            var pokers = gp.pokers;
            var topPoker = pokers[pokers.length - 1];
            if (topPoker.count == poker.count && topPoker.suit == poker.suit) return true;
          }

          return false;
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
//# sourceMappingURL=1f1c0217efd9826ce9311cc3d62763c206d7f417.js.map