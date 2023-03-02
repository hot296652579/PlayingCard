System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, ResMgr, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85fb1zrcoJM3JULbFMZ311E", "ResMgr", undefined);

      __checkObsolete__(['assetManager', 'resources']);

      _export("default", ResMgr = class ResMgr {
        static getInstance() {
          if (this.instance == null) {
            this.instance = new ResMgr();
          }

          return this.instance;
        }

        loadRes(path, type) {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var filPath = path + ("/" + type);
              console.log('filPath:', filPath);
              resources.load(filPath, (err, asset) => {
                if (!err) {
                  resolve(asset);
                } else {
                  console.error('加载图片资源失败:' + err);
                  reject();
                }
              });
            });
          })();
        }

      });

      ResMgr.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0a394d1d7f5d825edaed165e639a1a2a507613a.js.map