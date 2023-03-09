System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, NodeEventType, clickLock, EventMgr, ECardDir, EventGame_Enum, ResMgr, getSpPath, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, UIPoker;

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
      NodeEventType = _cc.NodeEventType;
    }, function (_unresolved_2) {
      clickLock = _unresolved_2.clickLock;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      ECardDir = _unresolved_4.ECardDir;
      EventGame_Enum = _unresolved_4.EventGame_Enum;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.default;
    }, function (_unresolved_6) {
      getSpPath = _unresolved_6.getSpPath;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27885dyj6lJ4auolumuXhVl", "UIPoker", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'NodeEventType', 'path']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPoker", UIPoker = (_dec = ccclass('UIPoker'), _dec2 = property(Node), _dec3 = (_crd && clickLock === void 0 ? (_reportPossibleCrUseOfclickLock({
        error: Error()
      }), clickLock) : clickLock)(0.5), _dec(_class = (_class2 = class UIPoker extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardBgNode", _descriptor, this);

          this.cardSpFrame = null;
          this._poker = void 0;
        }

        get poker() {
          return this._poker;
        }

        start() {
          this.cardSpFrame = this.node.getComponent(Sprite);
          this.initEvent();
        }

        initEvent() {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this); // if "this" is component and the "memberFunction" declared in CCClass.

          this.node.on(NodeEventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(NodeEventType.TOUCH_END, this.touchEnd, this);
        }

        init(poker) {
          var _this = this;

          if (!poker) return;
          this._poker = poker;
          poker.bindView(this);
          var spPath = (_crd && getSpPath === void 0 ? (_reportPossibleCrUseOfgetSpPath({
            error: Error()
          }), getSpPath) : getSpPath)(poker.suit, poker.count) + '/spriteFrame'; // console.log('spPath', spPath)

          try {
            this.schedule( /*#__PURE__*/_asyncToGenerator(function* () {
              var cardSpriteFrame = yield (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getInstance().loadResSpriteFrame(spPath);
              _this.cardSpFrame.spriteFrame = cardSpriteFrame;

              _this.updateCardDir(poker);
            }), 0.1);
          } catch (error) {
            console.log('加载图片出错 spPath:', spPath);
          }
        }

        updateCardDir(_ref2) {
          var {
            dir
          } = _ref2;

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

        touchStart(event) {// console.log('event.target,', event.target)
        }

        touchMove() {}

        touchEnd() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).getInstance().emit((_crd && EventGame_Enum === void 0 ? (_reportPossibleCrUseOfEventGame_Enum({
            error: Error()
          }), EventGame_Enum) : EventGame_Enum).EVENT_PLAYAREA_TO_RECEIVE, this._poker);
        }

        isOpen() {
          return this._poker.dir == (_crd && ECardDir === void 0 ? (_reportPossibleCrUseOfECardDir({
            error: Error()
          }), ECardDir) : ECardDir).OPEN;
        }

        countIsOne() {
          return this._poker.count == 1;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardBgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "touchEnd", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "touchEnd"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05abfae2f5700bc172eec230ed2917fb93fb0423.js.map