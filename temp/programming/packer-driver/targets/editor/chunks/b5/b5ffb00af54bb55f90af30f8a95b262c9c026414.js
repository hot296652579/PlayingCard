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
        let lastLetter = '';

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

        return `${suit}/${count}${lastLetter}`;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b5ffb00af54bb55f90af30f8a95b262c9c026414.js.map