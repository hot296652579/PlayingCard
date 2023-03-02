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
        let letter = '';

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

        return `Texture/Cards/${suit}/${letter}${count}`;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56a61cd79631a4ec8c760bee494e22ddeab018dd.js.map