System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, getSpPath;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8263dkCc/lFRaCRLysQuJs3", "Utils", undefined);

      _export("getSpPath", getSpPath = (suit, count) => {
        var lastLetter = '';

        switch (suit) {
          case 'HongTao':
            lastLetter = 'H';
            break;

          case 'HeiTao':
            lastLetter = 'S';
            break;

          case 'MeiHua':
            lastLetter = 'C';
            break;

          case 'FangKuai':
            lastLetter = 'D';
            break;
        }

        return suit + "/" + count + lastLetter;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4be66fc0f448b79ba13a6e2b6147c23ca8e62c01.js.map