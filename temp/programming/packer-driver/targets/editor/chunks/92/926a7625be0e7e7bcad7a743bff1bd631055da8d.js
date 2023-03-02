System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, _dec, _class, _crd, ccclass, property, UIPoker;

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "./Poker", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27885dyj6lJ4auolumuXhVl", "UIPoker", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPoker", UIPoker = (_dec = ccclass('UIPoker'), _dec(_class = class UIPoker extends Component {
        constructor(...args) {
          super(...args);
          this.cardSpFrame = void 0;
        }

        start() {
          this.cardSpFrame = this.getComponent(SpriteFrame);
        }

        init(poker) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=926a7625be0e7e7bcad7a743bff1bd631055da8d.js.map