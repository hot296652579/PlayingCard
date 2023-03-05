System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, ECardDir, ResMgr, getSpPath, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UIPoker;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfECardDir(extras) {
    _reporterNs.report("ECardDir", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "../Model/Poker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSpPath(extras) {
    _reporterNs.report("getSpPath", "../Utils/Utils", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ECardDir = _unresolved_2.ECardDir;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      getSpPath = _unresolved_4.getSpPath;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27885dyj6lJ4auolumuXhVl", "UIPoker", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPoker", UIPoker = (_dec = ccclass('UIPoker'), _dec2 = property(Node), _dec(_class = (_class2 = class UIPoker extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardBgNode", _descriptor, this);

          this.cardSpFrame = null;
          this._poker = void 0;
        }

        start() {
          this.cardSpFrame = this.node.getComponent(Sprite);
        }

        async init(poker) {
          if (!poker) return;
          this._poker = poker;
          poker.bindView(this);
          const spPath = (_crd && getSpPath === void 0 ? (_reportPossibleCrUseOfgetSpPath({
            error: Error()
          }), getSpPath) : getSpPath)(poker.suit, poker.count);
          const cardSpriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().loadResSpriteFrame(spPath);
          this.cardSpFrame.spriteFrame = cardSpriteFrame;
          this.updateCardDir(poker);
        }

        updateCardDir({
          dir
        }) {
          if (dir == (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
            error: Error()
          }), ECardDir) : ECardDir).CLOSE) {
            this.cardBgNode.active = true;
          } else {
            this.cardBgNode.active = false;
          }
        }

        refreshView() {
          this.updateCardDir(this._poker);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardBgNode", [_dec2], {
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
//# sourceMappingURL=c6d7ecff9e847c8cbb55459462e34a6457e732c2.js.map