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
        var letter = '';

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

        return "Texture/Cards/" + suit + "/" + count + letter;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=708334811fd98c2d1cf254b9efaab44523facc63.js.map