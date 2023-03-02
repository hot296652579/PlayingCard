System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, ResMgr, getSpPath, _dec, _class, _crd, ccclass, property, UIPoker;

  function _reportPossibleCrUseOfPoker(extras) {
    _reporterNs.report("Poker", "./Poker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSpPath(extras) {
    _reporterNs.report("getSpPath", "./Utils/Utils", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      getSpPath = _unresolved_3.getSpPath;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27885dyj6lJ4auolumuXhVl", "UIPoker", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPoker", UIPoker = (_dec = ccclass('UIPoker'), _dec(_class = class UIPoker extends Component {
        constructor(...args) {
          super(...args);
          this.cardSpFrame = null;
        }

        start() {
          this.cardSpFrame = this.node.getComponent(Sprite);
        }

        async init(poker) {
          if (!poker) return;
          const spPath = (_crd && getSpPath === void 0 ? (_reportPossibleCrUseOfgetSpPath({
            error: Error()
          }), getSpPath) : getSpPath)(poker.suit, poker.count);
          const cardSpriteFrame = await (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getInstance().loadResSpriteFrame(spPath);
          this.cardSpFrame.spriteFrame = cardSpriteFrame;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a72efbfebe01bd8216d890c509ca0d492814df89.js.map