System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Vec3, Tween, tween, clickLock, EventMgr, ECardDir, EventGame_Enum, GameDB, PLAY_AREA_COUNT, UIPoker, moveWorld2Space, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PADDING_PLAY, UIGameView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclickLock(extras) {
    _reporterNs.report("clickLock", "../Base/Docretors", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/Event/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventGame_Enum(extras) {
    _reporterNs.report("EventGame_Enum", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDB(extras) {
    _reporterNs.report("GameDB", "../Model/GameDB", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_AREA_COUNT(extras) {
    _reporterNs.report("PLAY_AREA_COUNT", "../Model/GameDB", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "../Model/Poker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPoker(extras) {
    _reporterNs.report("UIPoker", "../UI/UIPoker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmoveWorld2Space(extras) {
    _reporterNs.report("moveWorld2Space", "../Utils/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      clickLock = _unresolved_2.clickLock;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      ECardDir = _unresolved_4.ECardDir;
      EventGame_Enum = _unresolved_4.EventGame_Enum;
    }, function (_unresolved_5) {
      GameDB = _unresolved_5.default;
      PLAY_AREA_COUNT = _unresolved_5.PLAY_AREA_COUNT;
    }, function (_unresolved_6) {
      UIPoker = _unresolved_6.UIPoker;
    }, function (_unresolved_7) {
      moveWorld2Space = _unresolved_7.moveWorld2Space;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe3eNlMXZA8JaWyEipZd3q", "UIGameView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Game', 'instantiate', 'Vec3', 'UITransform', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      PADDING_PLAY = 92;

      _export("UIGameView", UIGameView = (_dec = ccclass('UIGameView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property([Node]), _dec6 = property(Node), _dec7 = property(Node), _dec8 = (_crd && clickLock === void 0 ? (_reportPossibleCrUseOfclickLock({
        error: Error()
      }), clickLock) : clickLock)(0.5), _dec(_class = (_class2 = class UIGameView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "closeSendArea", _descriptor2, this);

          _initializerDefineProperty(this, "openSendArea", _descriptor3, this);

          _initializerDefineProperty(this, "receiveAreaList", _descriptor4, this);

          _initializerDefineProperty(this, "playGruopRoot", _descriptor5, this);

          _initializerDefineProperty(this, "initArea", _descriptor6, this);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE, this.clickCardHandler, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW, this.playPokerToReceive, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_PLAY_UPDATE_VIEW, this.playPokerToPlay, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TOPPOKER_UPDATE_VIEW, this.openTopPoker, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW, this.closeToOpen, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW, this.openToReceive, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_PLAY_UPDATE_VIEW, this.openToPlay, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().on((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_CLOSE_UPDATE_VIEW, this.openToClose, this);
        }

        createAllCardByDB(pokers) {
          //先创建所有牌到init待发牌区
          var index = 0;

          for (var poker of pokers) {
            var uiPoker = this.createUIPoker(poker);
            this.initArea.addChild(uiPoker.node);
            uiPoker.node.setPosition(0.5 * index, 0.2 * index, 0);
            index++;
          }
        }

        createUIPoker(poker) {
          var cardPrefab = instantiate(this.cardPrefab);
          var uiPoker = cardPrefab.getComponent(_crd && UIPoker === void 0 ? (_reportPossibleCrUseOfUIPoker({
            error: Error()
          }), UIPoker) : UIPoker);
          uiPoker.init(poker);
          return uiPoker;
        } //将牌移到close 收牌区


        gamePlay() {
          var stuck = [];

          for (var index = this.initArea.children.length - 1; index >= 0; --index) {
            var children = this.initArea.children[index];
            this.initArea.removeChild(children);
            stuck.push(children);
          }

          for (var _index = stuck.length - 1; _index >= 0; --_index) {
            var card = stuck[_index];
            this.closeSendArea.addChild(card);
          }
        }

        initPlayGroup(groupIndex, cardIndex, poker, i) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var index = (_crd && PLAY_AREA_COUNT === void 0 ? (_reportPossibleCrUseOfPLAY_AREA_COUNT({
              error: Error()
            }), PLAY_AREA_COUNT) : PLAY_AREA_COUNT) * cardIndex - cardIndex * (cardIndex - 1) / 2 - cardIndex + groupIndex; // console.log('groupIndex:' + groupIndex + ',cardIndex:' + cardIndex + ',index:' + index)

            var node = poker.UIPoker.node; // console.log('poker 点数:', poker.count, ',花色:', poker.suit)
            // console.log('poker worldPos', node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0)))

            (_crd && moveWorld2Space === void 0 ? (_reportPossibleCrUseOfmoveWorld2Space({
              error: Error()
            }), moveWorld2Space) : moveWorld2Space)(node, _this.playGruopRoot);
            node.setSiblingIndex(index);
            var delay = index * 0.1;
            var nodeEndPos = groupIndex * PADDING_PLAY;

            if (i == 0) {
              tween(node).delay(delay).to(0.3, {
                position: new Vec3(nodeEndPos, cardIndex * -70, 0)
              }).to(0.3, {
                scale: new Vec3(0, 1, 0)
              }).call(() => {
                poker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
                  error: Error()
                }), ECardDir) : ECardDir).OPEN;
                poker.UIPoker.refreshView();
              }).to(0.3, {
                scale: new Vec3(1, 1, 1)
              }).start();
            } else {
              tween(node).delay(delay).to(0.3, {
                position: new Vec3(nodeEndPos, cardIndex * -70, 0)
              }).start();
            } // if (this.closeSendArea.children.length <= 24) {
            //     for (let index = 0; index < this.closeSendArea.children.length; index++) {
            //         let children = this.closeSendArea.children[index]
            //         console.log(children.getComponent(UIPoker).poker.count + ',' + children.getComponent(UIPoker).poker.suit)
            //     }
            // }

          })();
        }

        clickCardHandler(poker) {
          console.log('点击poker', poker);
          var uiPoker = poker.UIPoker;

          if ((_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
            error: Error()
          }), GameDB) : GameDB).getInstance().onCheckInPlayArea(poker)) {
            // console.log('点击的区域是PlayArea')
            if ((_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
              error: Error()
            }), GameDB) : GameDB).getInstance().onCheckIndexTop(poker)) {
              if (uiPoker.isOpen()) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                  error: Error()
                }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE_PLAY_UPDATE_DB, uiPoker.poker);
              }
            }
          } else if ((_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
            error: Error()
          }), GameDB) : GameDB).getInstance().onCheckInCloseArea(poker)) {
            // console.log('点击的区域是CloseArea')
            if ((_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
              error: Error()
            }), GameDB) : GameDB).getInstance().onCheckIndexByCloseTop(poker)) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB, uiPoker.poker);
            }
          } else if ((_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
            error: Error()
          }), GameDB) : GameDB).getInstance().onCheckInOpenArea(poker)) {
            // console.log('点击的区域是openArea')
            if ((_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
              error: Error()
            }), GameDB) : GameDB).getInstance().onCheckIndexByOpenTop(poker)) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
                error: Error()
              }), EventGame_Enum) : EventGame_Enum).EVENT_OPEN_TO_UPDATE_DB, uiPoker.poker);
            }
          }
        }

        playPokerToReceive(poker) {
          this.moveUIPokerToReceiveArea(poker);
        }

        openToReceive(poker) {
          this.moveUIPokerToReceiveArea(poker);
        }

        moveUIPokerToReceiveArea(poker) {
          var receiveIndex = poker.parent.index;
          console.log('receiveIndex:', receiveIndex);
          var node = poker.UIPoker.node; // console.log('poker worldPos', node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0)))

          var targetNode = this.receiveAreaList[receiveIndex];
          (_crd && moveWorld2Space === void 0 ? (_reportPossibleCrUseOfmoveWorld2Space({
            error: Error()
          }), moveWorld2Space) : moveWorld2Space)(node, targetNode);
          var delay = 0.5;
          tween(node).to(delay, {
            position: new Vec3(0, 0, 0)
          }).start();
        }

        moveUIPokerToPlayArea(poker) {
          var node = poker.UIPoker.node;
          var groupIndex = poker.parent.index;
          var pokerIndex = poker.indexInGroup();
          (_crd && moveWorld2Space === void 0 ? (_reportPossibleCrUseOfmoveWorld2Space({
            error: Error()
          }), moveWorld2Space) : moveWorld2Space)(node, this.playGruopRoot);
          this.playGruopRoot.addChild(node);
          var nodeEndPos = groupIndex * PADDING_PLAY;
          tween(node).to(0.5, {
            position: new Vec3(nodeEndPos, -70 * pokerIndex, 0)
          }).start();
        }

        openToPlay(poker) {
          this.moveUIPokerToPlayArea(poker);
        }

        playPokerToPlay(poker) {
          this.moveUIPokerToPlayArea(poker);
        }

        openTopPoker(poker) {
          var node = poker.UIPoker.node;
          tween(node).to(0.3, {
            scale: new Vec3(0, 0, 0)
          }).call(() => {
            poker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
              error: Error()
            }), ECardDir) : ECardDir).OPEN;
            poker.UIPoker.refreshView();
          }).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }

        closeToOpen(poker) {
          var node = poker.UIPoker.node;
          (_crd && moveWorld2Space === void 0 ? (_reportPossibleCrUseOfmoveWorld2Space({
            error: Error()
          }), moveWorld2Space) : moveWorld2Space)(node, this.openSendArea);
          var delay = 0.5;
          tween(node).to(delay, {
            position: new Vec3(0, 0, 0)
          }).to(0.3, {
            scale: new Vec3(0, 1, 1)
          }).call(() => {
            poker.dir = (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
              error: Error()
            }), ECardDir) : ECardDir).OPEN;
            poker.UIPoker.refreshView();
          }).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }).start();
          var padding = -70;

          for (var index = 0; index <= 1; index++) {
            var p = (_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
              error: Error()
            }), GameDB) : GameDB).getInstance().openGroup.getPoker(-2 - index);

            if (p) {
              tween(p.UIPoker.node).to(0.2, {
                position: new Vec3(padding * (index + 1), 0, 0)
              }).start();
            }
          }
        }

        checkCloseIsEmpty() {
          (_crd && GameDB === void 0 ? (_reportPossibleCrUseOfGameDB({
            error: Error()
          }), GameDB) : GameDB).getInstance().isCloseEmptyOpenToClose();
        }

        openToClose(pokers) {
          var index = 0;

          for (var poker of pokers) {
            var node = poker.UIPoker.node;
            Tween.stopAllByTag(node);
            (_crd && moveWorld2Space === void 0 ? (_reportPossibleCrUseOfmoveWorld2Space({
              error: Error()
            }), moveWorld2Space) : moveWorld2Space)(node, this.closeSendArea);
            node.setPosition(0.5 * index, 0.2 * index, 0);
            index++;
          }
        }

        restartGame() {
          this.closeSendArea.removeAllChildren();
          this.openSendArea.removeAllChildren();

          for (var index = 0; index < this.receiveAreaList.length; index++) {
            var area = this.receiveAreaList[index];
            area.removeAllChildren();
          }

          this.playGruopRoot.removeAllChildren();
          this.initArea.removeAllChildren();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_RESTART_GAME);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeSendArea", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "openSendArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "receiveAreaList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playGruopRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "initArea", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "openToClose", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "openToClose"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac04e8ff976beea69727fbbb7cd42af373f3ae68.js.map