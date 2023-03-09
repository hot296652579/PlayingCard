System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**函数装饰器*/
  function clickLock(seconds) {
    return function (target, propertyKey, descriptor) {
      var oldMeth = descriptor.value;
      var lock = false;

      descriptor.value = function () {
        if (lock) {
          console.log('click在锁定中...');
          return;
        }

        lock = true;
        setTimeout(() => {
          lock = false;
        }, seconds * 1000);

        for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
          param[_key] = arguments[_key];
        }

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
//# sourceMappingURL=ef5a77c75a5a931bc4c9e4c44bf21a5e7646b3a8.js.map