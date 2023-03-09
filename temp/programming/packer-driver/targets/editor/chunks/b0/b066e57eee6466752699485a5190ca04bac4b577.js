System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**函数装饰器*/
  function clickLock(seconds) {
    return function (target, propertyKey, descriptor) {
      let oldMeth = descriptor.value;
      let lock = false;

      descriptor.value = function () {
        if (lock) {
          console.log('click在锁定中...');
          return;
        }

        lock = true;
        setTimeout(() => {
          lock = false;
        }, seconds);
      };

      return descriptor;
    };
  }

  _export("clickLock", clickLock);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44025MJ/PRDyoyOGz5LBIna", "Docretors", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b066e57eee6466752699485a5190ca04bac4b577.js.map