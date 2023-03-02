System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, UIPoker, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, UIGameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
    }, function (_unresolved_2) {
      UIPoker = _unresolved_2.UIPoker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe3eNlMXZA8JaWyEipZd3q", "UIGameView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Game', 'instantiate']);

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

          _initializerDefineProperty(this, "playGruopAnchor", _descriptor5, this);

          _initializerDefineProperty(this, "initArea", _descriptor6, this);
        }

        createAllCardByDB(pokers) {
          let index = 0;

          for (const poker of pokers) {
            let uiPoker = this.createUIPoker(poker);
            this.initArea.addChild(uiPoker.node);
            uiPoker.node.setPosition(20 * index, 0, 0);
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playGruopAnchor", [_dec6], {
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
//# sourceMappingURL=3a9a6811f436cc6669790f6436f1f84c2d7eb955.js.map