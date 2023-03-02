System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, ResMgr, _crd;

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

        async loadResSpriteFrame(path) {
          return new Promise((resolve, reject) => {
            let filPath = path + `/spriteFrame`;
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
        }

      });

      ResMgr.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2c7d4ee520e537d70a24b0166846d99ff3f5165.js.map