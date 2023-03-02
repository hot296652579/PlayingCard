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
        let letter = '';

        switch (suit) {
          case 'HongTao':
            letter = 'H';
            break;

          case 'HeiTao':
            letter = 'S';
            break;

          case 'MeiHua':
            letter = 'C';
            break;

          case 'FangKuai':
            letter = 'D';
            break;
        }

        return `Texture/Cards/${suit}/${count}${letter}`;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba1698ea5026281e01a1ea1512d7e4321ac9c8ad.js.map