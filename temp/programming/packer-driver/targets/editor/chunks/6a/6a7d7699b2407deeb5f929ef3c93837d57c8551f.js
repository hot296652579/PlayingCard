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

        on(IEvt) {
          const {
            evt,
            cb,
            ctx
          } = IEvt;

          if (!this.eventMap.has(evt)) {
            this.eventMap.set(evt, IEvt);
          }
        }

        off() {}

        emit(event, ...param) {
          if (this.eventMap.has(event)) {
            const item = this.eventMap.get(event);
            const {
              evt,
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
//# sourceMappingURL=6a7d7699b2407deeb5f929ef3c93837d57c8551f.js.map