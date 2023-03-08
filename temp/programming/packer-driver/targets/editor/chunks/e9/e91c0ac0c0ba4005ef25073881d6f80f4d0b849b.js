System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, ECardDir, ENumSiut, EnumSuit, EventGame_Enum, Poker, PokerGrop, ReceiveGroup, PlayGroup, CloseGroup, OpenGroup, GameDB, _crd, RECEIVE_AREA_COUNT, PLAY_AREA_COUNT;

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
          let topPoker = this.groupTop;

          if (poker == topPoker) {
            this._pokers.length = this._pokers.length - 1;
            poker.parent = null;
            return poker;
          }
        }

        getPoker(index) {
          if (!this.groupIsEmpty()) {
            let i = index >= 0 ? index : this.pokers.length + index;

            if (i < this.pokers.length) {
              return this.pokers[i];
            }
          }

          return null;
        }

        groupIsEmpty() {
          return this._pokers.length == 0;
        }

        get groupTop() {
          return this.groupIsEmpty() ? null : this._pokers[this._pokers.length - 1];
        }

      });

      ReceiveGroup = class ReceiveGroup extends PokerGrop {
        constructor(...args) {
          super(...args);
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
      PlayGroup = class PlayGroup extends PokerGrop {
        removePoker(poker) {
          super.removePoker(poker);

          if (!this.groupIsEmpty()) {
            let topPoker = this.groupTop;
            topPoker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
              error: Error()
            }), ECardDir) : ECardDir).OPEN;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
              error: Error()
            }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TOPPOKER_UPDATE_VIEW, topPoker);
          }
        }

      };
      CloseGroup = class CloseGroup extends PokerGrop {};
      OpenGroup = class OpenGroup extends PokerGrop {
        addPoker(poker) {
          super.addPoker(poker); // poker.dir = ECardDir.OPEN

          return poker;
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
          this._closeGroup = new CloseGroup();
          this._openGroup = new OpenGroup();
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
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB, this.onCloseToOpen, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_RECEIVE_UPDATE_DB, this.onOpenToReceive, this);
        }

        resetGame() {
          this._pokers = [];
          this._openPokers = [];
          this._receiveArea = [];
          this._playArea = [];
        } //创建初始数据


        createCardsDB() {
          for (let i = 1; i <= this.cardTotal; i++) {
            for (let j = 0; j < this.cardSuits; j++) {
              let suit = (_crd && EnumSuit === void 0 ? (_reportPossibleCrUseOfEnumSuit({
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

              let poker = new (_crd && Poker === void 0 ? (_reportPossibleCrUseOfPoker({
                error: Error()
              }), Poker) : Poker)(i, suit, (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
                error: Error()
              }), ECardDir) : ECardDir).CLOSE);

              this._pokers.push(poker);
            }
          }

          for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let receiveGroup = new ReceiveGroup();
            receiveGroup.index = this._receiveArea.length;
            receiveGroup.suit = index;

            this._receiveArea.push(receiveGroup);
          }

          for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let receiveGroup = new PlayGroup();
            receiveGroup.index = this._playArea.length;

            this._playArea.push(receiveGroup);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT, this._pokers);
        }

        gamePlay() {
          this.shuffle(this._pokers, 500);
          let temp = this._pokers; // this._closeGroup._pokers = this.pokers

          this.pokers.forEach(p => this._closeGroup.addPoker(p));
          this._pokers = temp;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_START);
          this.createPlayInitDB();
        }
        /**洗牌 */


        shuffle(pokers, shuffleTime = 100) {
          for (let index = 0; index < shuffleTime; index++) {
            // let snd = Math.floor(Math.random() * pokers.length - 1)
            // let rnd = Math.floor(Math.random() * pokers.length - 1)
            let snd = parseInt('' + Math.random() * pokers.length, 10);
            let rnd = parseInt('' + Math.random() * pokers.length, 10);
            let temp = pokers[snd];
            pokers[snd] = pokers[rnd];
            pokers[rnd] = temp;
          }
        }

        createPlayInitDB() {
          for (let count = PLAY_AREA_COUNT; count >= 1; count--) {
            for (let i = 0; i < count; i++) {
              let dis = PLAY_AREA_COUNT - count;
              let groupIndex = dis + i;
              let playPokerGrop = this._playArea[groupIndex];
              let poker = this._closeGroup.pokers[this._closeGroup.pokers.length - 1];
              this._closeGroup.pokers.length = this._closeGroup.pokers.length - 1;
              playPokerGrop.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT_GROUP, groupIndex, dis, poker, i);
            }
          }
        }
        /**改变玩牌区到收牌区数据*/


        onPlayToReceive(poker) {
          for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group = this._receiveArea[index];

            if (group.isNextPoker(poker)) {
              let parent = poker.parent;
              parent.removePoker(poker);
              group.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW, poker);
            }
          }
        }
        /**移除close顶部牌数据添加到open区数据*/


        onCloseToOpen(poker) {
          console.log('需要移除的poker', poker);
          let parent = poker.parent;
          parent.removePoker(poker);
          console.log('当前closeGroup的pokers', this.closeGroup.pokers);
          this.openGroup.addPoker(poker);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW, poker);
        }
        /**移除open顶部牌数据添加到receive区数据*/


        onOpenToReceive(poker) {
          let parent = poker.parent;

          for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group = this._receiveArea[index];

            if (group.isNextPoker(poker)) {
              console.log('可以承接此牌', poker);
              parent.removePoker(poker);
              group.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW, poker);
            }
          }
        } //检测这张牌是否在play area


        onCheckInPlayArea(poker) {
          return this.playArea.filter(pg => pg.pokers.filter(p => p.count == poker.count && p.suit == poker.suit).length > 0).length > 0;
        } //检测是否在顶部


        onCheckIndexTop(poker) {
          for (const gp of this._playArea) {
            let pokers = gp.pokers;
            let topPoker = pokers[pokers.length - 1];
            if (topPoker.count == poker.count && topPoker.suit == poker.suit) return true;
          }

          return false;
        } //检测这张牌是否在close area


        onCheckInCloseArea(poker) {
          return this.closeGroup.pokers.filter(p => p.count == poker.count && p.suit == poker.suit).length > 0;
        } //检测是否在closeArea顶部


        onCheckIndexByCloseTop(poker) {
          if (this._closeGroup.pokers.length <= 0) return null;

          for (const poker of this._closeGroup.pokers) {
            let topPoker = this._closeGroup.pokers[this._closeGroup.pokers.length - 1];
            if (topPoker.count == poker.count && topPoker.suit == poker.suit) return true;
          }

          return false;
        } //检测这张牌是否在open area


        onCheckInOpenArea(poker) {
          return this.openGroup.pokers.filter(p => p.count == poker.count && p.suit == poker.suit).length > 0;
        } //检测是否在openArea顶部


        onCheckIndexByOpenTop(poker) {
          if (this.openGroup.pokers.length <= 0) return null;

          for (const poker of this.openGroup.pokers) {
            let topPoker = this.openGroup.pokers[this.openGroup.pokers.length - 1];
            if (topPoker.count == poker.count && topPoker.suit == poker.suit) return true;
          }

          return false;
        }

        get pokers() {
          return this._pokers;
        }

        get closeGroup() {
          return this._closeGroup;
        }

        get openGroup() {
          return this._openGroup;
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
//# sourceMappingURL=e91c0ac0c0ba4005ef25073881d6f80f4d0b849b.js.map