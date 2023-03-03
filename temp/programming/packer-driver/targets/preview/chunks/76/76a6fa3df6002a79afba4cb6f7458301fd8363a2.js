System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, GameEngine, UIGameView, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UIGameScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameEngine(extras) {
    _reporterNs.report("GameEngine", "./GameEngine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIGameView(extras) {
    _reporterNs.report("UIGameView", "./View/UIGameView", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GameEngine = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIGameView = _unresolved_3.UIGameView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebb45bUjstIOqwIW+WiVcco", "UIGameScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Game', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIGameScene", UIGameScene = (_dec = ccclass('UIGameScene'), _dec2 = property(Prefab), _dec(_class = (_class2 = class UIGameScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameViewPrefab", _descriptor, this);

          this.gameEngine = void 0;
        }

        onLoad() {
          var m_UIGameView = instantiate(this.gameViewPrefab).getComponent(_crd && UIGameView === void 0 ? (_reportPossibleCrUseOfUIGameView({
            error: Error()
          }), UIGameView) : UIGameView);
          this.node.addChild(m_UIGameView.node);
          this.gameEngine = new (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
            error: Error()
          }), GameEngine) : GameEngine)();
          this.gameEngine.init(m_UIGameView);
          this.gameEngine.gamePlay(); //test

          for (var cards = 0; cards < 7; cards++) {
            for (var index = 0; index < cards; index++) {
              var groupIndex = cards - index + 1;
              console.log(groupIndex);
            }
          }
        }

        onDestroy() {
          this.gameEngine.exitHandler();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameViewPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76a6fa3df6002a79afba4cb6f7458301fd8363a2.js.map