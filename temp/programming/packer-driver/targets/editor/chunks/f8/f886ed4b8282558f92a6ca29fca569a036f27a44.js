System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, ECardDir, ENumSiut, EnumSuit, EventGame_Enum, Poker, PokerGroup, ReceiveGroup, PlayGroup, CloseGroup, OpenGroup, GameDB, _crd, RECEIVE_AREA_COUNT, PLAY_AREA_COUNT;

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
    PokerGroup: void 0,
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

      _export("PokerGroup", PokerGroup = class PokerGroup {
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

        removePoker(p) {
          // let topPoker = this.groupTop
          // if (poker == topPoker) {
          //     this._pokers.length = this._pokers.length - 1
          //     poker.parent = null
          //     return poker
          // }
          for (let index = 0; index < this._pokers.length; index++) {
            let poker = this._pokers[index];

            if (poker.count == p.count && poker.suit == p.suit) {
              this._pokers.splice(index, 1); // console.log('删除后的pokers', this._pokers)


              return p;
            }
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

        indexOfPoker(poker) {
          return this.pokers.indexOf(poker);
        }

      });

      ReceiveGroup = class ReceiveGroup extends PokerGroup {
        constructor(...args) {
          super(...args);
          this.suit = null;
        }

        isNextPoker(poker) {
          console.log('ENumSiut[this.suit]', (_crd && ENumSiut === void 0 ? (_reportPossibleCrUseOfENumSiut({
            error: Error()
          }), ENumSiut) : ENumSiut)[this.suit]);

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
      PlayGroup = class PlayGroup extends PokerGroup {
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

        isNextPoker(poker) {
          if (this.groupIsEmpty()) {
            return poker.count == 13;
          }

          let topPoker = this.groupTop; // console.log('topPoker', topPoker)

          if (topPoker.suit != poker.suit) {
            return topPoker.count - 1 == poker.count;
          }

          return false;
        }

      };
      CloseGroup = class CloseGroup extends PokerGroup {
        addPoker(poker) {
          super.addPoker(poker);
          poker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
            error: Error()
          }), ECardDir) : ECardDir).CLOSE;
          return poker;
        }

      };
      OpenGroup = class OpenGroup extends PokerGroup {
        addPoker(poker) {
          super.addPoker(poker); // poker.dir = ECardDir.OPEN

          return poker;
        }

      };
      /**4组*/

      _export("RECEIVE_AREA_COUNT", RECEIVE_AREA_COUNT = 4);
      /**7组*/


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
          }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE_PLAY_UPDATE_DB, this.onPlayToReceiveOrPlay, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB, this.onCloseToOpen, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_UPDATE_DB, this.onOpenToReceiveOrPlay, this);
        }

        resetGame() {
          this._pokers = [];
          this._openPokers = [];
          this._receiveArea = [];
          this._closeGroup._pokers = [];
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

          this.shuffle(this._pokers, 500);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_GAME_INIT, this._pokers);
        }

        gamePlay() {
          let temp = this._pokers;

          this._pokers.forEach(p => this._closeGroup.addPoker(p));

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
          } // console.log('close剩下的牌数据', this._closeGroup.pokers)

        }
        /**改变玩牌区到收牌区PLAY区数据*/


        onPlayToReceiveOrPlay(poker) {
          for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group = this._receiveArea[index];

            if (group.isNextPoker(poker)) {
              console.log('收牌区receive可以承接此牌', poker);
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

          for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let group = this._playArea[index];

            if (group.isNextPoker(poker)) {
              console.log('PLAY区play可以承接此牌', poker);
              let parent = poker.parent;
              parent.removePoker(poker);
              group.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_PLAY_UPDATE_VIEW, poker);
            }
          }
        }
        /**移除close顶部牌数据添加到open区数据*/


        onCloseToOpen(poker) {
          let parent = poker.parent;
          parent.removePoker(poker); // console.log('当前closeGroup的pokers', this.closeGroup.pokers)

          this.openGroup.addPoker(poker);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW, poker);
        }
        /**移除open顶部牌数据添加到receiv或则open区数据*/


        onOpenToReceiveOrPlay(poker) {
          let parent = poker.parent; //检测receive区能否承接

          for (let index = 0; index < RECEIVE_AREA_COUNT; index++) {
            let group = this._receiveArea[index];

            if (group.isNextPoker(poker)) {
              // console.log('可以承接此牌', poker)
              parent.removePoker(poker);
              group.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW, poker);
            }
          } //检测play区能否承接


          for (let index = 0; index < PLAY_AREA_COUNT; index++) {
            let group = this._playArea[index];

            if (group.isNextPoker(poker)) {
              // console.log('可以承接此牌', poker)
              parent.removePoker(poker);
              group.addPoker(poker);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_PLAY_UPDATE_VIEW, poker);
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
            if (!topPoker) return null;
            if (topPoker.count == poker.count && topPoker.suit == poker.suit) return true;
          }

          return false;
        } //检测这张牌是否在close area


        onCheckInCloseArea(poker) {
          return this.closeGroup.pokers.filter(p => p.count == poker.count && p.suit == poker.suit).length > 0;
        } //检测是否在closeArea顶部


        onCheckIndexByCloseTop(p) {
          // console.log('当前点击的poker', p)
          if (this._closeGroup.pokers.length <= 0) return null; // console.log('this._closeGroup.pokers', this._closeGroup.pokers)

          for (const poker of this._closeGroup.pokers) {
            let topPoker = this._closeGroup.groupTop;
            if (poker.count == p.count && poker.suit == p.suit) return true;
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
        /**检测close区是否是空的 是空就把open的数据过来*/


        isCloseEmptyOpenToClose() {
          let empty = this.closeGroup.groupIsEmpty();

          if (empty) {
            while (!this.openGroup.groupIsEmpty()) {
              for (const poker of this.openGroup.pokers) {
                this.openGroup.removePoker(poker);
                this.closeGroup.addPoker(poker);
              }
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
              error: Error()
            }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_CLOSE_UPDATE_VIEW, this.closeGroup.pokers);
          }
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
//# sourceMappingURL=f886ed4b8282558f92a6ca29fca569a036f27a44.js.map