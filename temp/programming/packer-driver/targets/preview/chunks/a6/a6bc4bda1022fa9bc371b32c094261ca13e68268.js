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

        return "Texture/Cards/" + suit + "/" + count + lastLetter;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6bc4bda1022fa9bc371b32c094261ca13e68268.js.map