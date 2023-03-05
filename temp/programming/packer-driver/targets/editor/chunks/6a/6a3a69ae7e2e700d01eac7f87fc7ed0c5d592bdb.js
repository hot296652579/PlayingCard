System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Vec3, UITransform, tween, ECardDir, PLAY_AREA_COUNT, UIPoker, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, UIGameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ECardDir = _unresolved_2.ECardDir;
    }, function (_unresolved_3) {
      PLAY_AREA_COUNT = _unresolved_3.PLAY_AREA_COUNT;
    }, function (_unresolved_4) {
      UIPoker = _unresolved_4.UIPoker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe3eNlMXZA8JaWyEipZd3q", "UIGameView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Game', 'instantiate', 'Vec3', 'UITransform', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIGameView", UIGameView = (_dec = ccclass('UIGameView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property([Node]), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class UIGameView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "closeSendArea", _descriptor2, this);

          _initializerDefineProperty(this, "openSendArea", _descriptor3, this);

          _initializerDefineProperty(this, "receiveAreaList", _descriptor4, this);

          _initializerDefineProperty(this, "playGruopRoot", _descriptor5, this);

          _initializerDefineProperty(this, "initArea", _descriptor6, this);
        }

        onLoad() {}

        createAllCardByDB(pokers) {
          //先创建所有牌到init待发牌区
          let index = 0;

          for (const poker of pokers) {
            let uiPoker = this.createUIPoker(poker);
            this.initArea.addChild(uiPoker.node);
            uiPoker.node.setPosition(0.5 * index, 0.2 * index, 0);
            index++;
          }
        }

        createUIPoker(poker) {
          const cardPrefab = instantiate(this.cardPrefab);
          const uiPoker = cardPrefab.getComponent(_crd && UIPoker === void 0 ? (_reportPossibleCrUseOfUIPoker({
            error: Error()
          }), UIPoker) : UIPoker);
          uiPoker.init(poker);
          return uiPoker;
        } //将牌移到close 收牌区


        gamePlay() {
          let stuck = [];

          for (let index = this.initArea.children.length - 1; index >= 0; --index) {
            let children = this.initArea.children[index];
            this.initArea.removeChild(children);
            stuck.push(children);
          }

          for (let index = stuck.length - 1; index >= 0; --index) {
            const card = stuck[index];
            this.closeSendArea.addChild(card);
          }
        }

        initPlayGroup(groupIndex, cardIndex, poker) {
          let index = (_crd && PLAY_AREA_COUNT === void 0 ? (_reportPossibleCrUseOfPLAY_AREA_COUNT({
            error: Error()
          }), PLAY_AREA_COUNT) : PLAY_AREA_COUNT) * cardIndex - cardIndex * (cardIndex - 1) / 2 - cardIndex + groupIndex;
          console.log('groupIndex:' + groupIndex + ',cardIndex:' + cardIndex + ',index:' + index);
          let node = poker.UIPoker.node;
          let wolrdPos = node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
          let nodePos = this.playGruopRoot.getComponent(UITransform).convertToNodeSpaceAR(wolrdPos);
          node.removeFromParent();
          node.position = nodePos;
          this.playGruopRoot.addChild(node);
          node.setSiblingIndex(index);
          let delay = index * 0.2;
          let nodeEndPos = groupIndex * 92;

          if (poker.dir == (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
            error: Error()
          }), ECardDir) : ECardDir).OPEN) {
            tween(node).delay(delay).to(0.5, {
              position: new Vec3(nodeEndPos, cardIndex * -30, 0)
            }).to(0.3, {
              scale: new Vec3(0, 0, 0)
            }).call(() => {}).to(0.3, {
              scale: new Vec3(1, 0, 0)
            }).start();
          } else {
            tween(node).delay(delay).to(0.5, {
              position: new Vec3(nodeEndPos, cardIndex * -30, 0)
            }).start();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeSendArea", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "openSendArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "receiveAreaList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playGruopRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "initArea", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a3a69ae7e2e700d01eac7f87fc7ed0c5d592bdb.js.map