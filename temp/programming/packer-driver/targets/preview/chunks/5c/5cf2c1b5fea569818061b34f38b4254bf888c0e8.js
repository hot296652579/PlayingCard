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
            letter = 'd';
            break;

          case 'HeiTao':
            letter = 'h';
            break;

          case 'MeiHua':
            letter = 'b';
            break;

          case 'FangKuai':
            letter = 'r';
            break;
        }

        return "Texture/Cards/" + suit + "/" + letter + count;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cf2c1b5fea569818061b34f38b4254bf888c0e8.js.map