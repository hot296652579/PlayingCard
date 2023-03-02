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

      /**获取图片途径 */
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
//# sourceMappingURL=bc00557b5c66b9f50e47afb1df01e7416d3fda72.js.map