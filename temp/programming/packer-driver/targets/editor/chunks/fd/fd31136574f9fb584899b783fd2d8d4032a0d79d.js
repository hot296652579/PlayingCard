System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Vec3, UITransform, TweenUtil, _crd, getSpPath, moveWorld2Space;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8263dkCc/lFRaCRLysQuJs3", "Utils", undefined);

      __checkObsolete__(['tween', 'Node', 'Vec3', 'EPSILON', 'UITransform']);

      /*
       * @Description: 
       * @Author: Super_Javan
       * @Date: 2022-12-02 15:07:23
       * @LastEditTime: 2022-12-02 16:54:24
       * @LastEditors: Super_Javan
       */
      _export("default", TweenUtil = class TweenUtil {
        /**
         * 水平翻转（卡片翻转）
         * @param node 节点
         * @param duration 总时长
         * @param onComplete 完成回调
         */
        static flip(node, duration, onComplete) {
          return new Promise(res => {
            const _tween = tween,
                  time = duration / 2,
                  scale = node.getScale(),
                  skewY = scale.x > 0 ? 20 : -20;

            _tween(node).parallel(_tween().to(time, {
              scale: new Vec3(0, 1, 1)
            }, {
              easing: 'quadIn'
            }), _tween().to(time, {
              skewY: -skewY
            }, {
              easing: 'quadOut'
            })).call(() => {}).parallel(_tween().to(time, {
              scale: new Vec3(-1, 1, 1)
            }, {
              easing: 'quadOut'
            }), _tween().to(time, {
              skewY: 0
            }, {
              easing: 'quadIn'
            })).call(() => {
              node.setScale(1, 1, 1);
              onComplete && onComplete();
              res();
            }).start();
          });
        }

      });
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

      _export("moveWorld2Space", moveWorld2Space = (node, targetNode, cleanUp = false) => {
        let wolrdPos = node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
        node.removeFromParent(cleanUp);
        let nodePos = targetNode.getComponent(UITransform).convertToNodeSpaceAR(wolrdPos);
        node.position = nodePos;
        targetNode.addChild(node);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd31136574f9fb584899b783fd2d8d4032a0d79d.js.map