System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventMgr, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27bfaPWMtRBm7/btau4r4N7", "EventMgr", undefined);

      _export("default", EventMgr = class EventMgr {
        constructor() {
          this.eventMap = new Map();
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new EventMgr();
          }

          return this.instance;
        }

        on(event, cb, ctx) {
          if (!this.eventMap.has(event)) {
            this.eventMap.set(event, {
              event,
              cb,
              ctx
            });
          }
        }

        off() {}

        emit(evt) {
          if (this.eventMap.has(evt)) {
            var item = this.eventMap.get(evt);
            var {
              event,
              cb,
              ctx
            } = item;

            if (evt && cb) {
              for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                param[_key - 1] = arguments[_key];
              }

              cb.apply(ctx, ...param);
            }
          }
        }

        clear() {}

      });

      EventMgr.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e80f7045982134abc178e6e4813444d15b882ca3.js.map