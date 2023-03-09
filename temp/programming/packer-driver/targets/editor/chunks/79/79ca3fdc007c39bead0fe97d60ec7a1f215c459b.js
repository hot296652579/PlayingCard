System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**函数装饰器*/
  function clickLock(seconds) {
    return function (target, propertyKey, descriptor) {
      let oldMeth = descriptor.value;
      let lock = false;

      descriptor.value = function (...param) {
        if (lock) {
          console.log('click在锁定中...');
          return;
        }

        lock = true;
        setTimeout(() => {
          lock = false;
        }, seconds * 1000);
        oldMeth.apply(this, param);
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
//# sourceMappingURL=79ca3fdc007c39bead0fe97d60ec7a1f215c459b.js.map