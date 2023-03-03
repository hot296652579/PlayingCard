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

        emit(evt, ...param) {
          if (this.eventMap.has(evt)) {
            const item = this.eventMap.get(evt);
            const {
              event,
              cb,
              ctx
            } = item;

            if (evt && cb) {
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
//# sourceMappingURL=bc996997377385710502d2a6352be00fc0e34751.js.map