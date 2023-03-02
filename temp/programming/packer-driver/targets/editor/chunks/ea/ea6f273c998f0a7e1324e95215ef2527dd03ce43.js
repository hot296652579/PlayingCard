System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameEngine, _dec, _class, _crd, ccclass, property, UIGameScene;

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
    }, function (_unresolved_2) {
      GameEngine = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebb45bUjstIOqwIW+WiVcco", "UIGameScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIGameScene", UIGameScene = (_dec = ccclass('UIGameScene'), _dec(_class = class UIGameScene extends Component {
        constructor(...args) {
          super(...args);
          this.gameView = void 0;
          this.gameEngine = void 0;
        }

        init(gameView) {
          this.gameView = gameView;
        }

        onLoad() {
          this.gameEngine.init(this.gameView);
          this.gameEngine = new (_crd && GameEngine === void 0 ? (_reportPossibleCrUseOfGameEngine({
            error: Error()
          }), GameEngine) : GameEngine)();
          this.gameEngine.gameStart();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea6f273c998f0a7e1324e95215ef2527dd03ce43.js.map