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

          return () => {};
        }

        off(evt) {
          if (this.eventMap.has(evt)) {
            var item = this.eventMap.get(evt);

            if (item) {
              this.eventMap.delete(evt);
            }
          }
        }

        once(event, cb, ctx) {
          var unsub = undefined;
          unsub = this.on(event, function () {
            for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
              param[_key] = arguments[_key];
            }

            cb.apply(ctx, param);
            unsub();
          }, ctx);
          return unsub;
        }

        emit(evt) {
          if (this.eventMap.has(evt)) {
            var item = this.eventMap.get(evt);
            var {
              event,
              cb,
              ctx
            } = item;

            if (evt && cb) {
              for (var _len2 = arguments.length, param = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                param[_key2 - 1] = arguments[_key2];
              }

              cb.apply(ctx, param);
            }
          } else {
            console.error('没有注册该事件:', evt);
          }
        }

        clear() {
          this.eventMap.clear();
        }

      });

      EventMgr.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bab273318489b6e8cef138aa78f8e0dbc77c4cd.js.map