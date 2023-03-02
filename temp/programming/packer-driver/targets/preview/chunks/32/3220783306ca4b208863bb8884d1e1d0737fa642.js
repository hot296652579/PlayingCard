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
            letter = 'h';
            break;

          case 'MeiHua':
            letter = 'b';
            break;

          case 'FangKuai':
            letter = 'r';
            break;
        }

        return "Texture/Cards/" + suit + "/" + count + letter;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3220783306ca4b208863bb8884d1e1d0737fa642.js.map