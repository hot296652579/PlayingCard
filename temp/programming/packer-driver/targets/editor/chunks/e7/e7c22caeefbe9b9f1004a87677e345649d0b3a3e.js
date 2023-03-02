System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameEngine, _crd;

  function _reportPossibleCrUseOfUIGameView(extras) {
    _reporterNs.report("UIGameView", "./View/UIGameView", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eb4dRFxFJMZpb7vqpHovgd", "GameEngine", undefined);

      __checkObsolete__(['instantiate', 'Prefab', 'Node']);

      _export("default", GameEngine = class GameEngine {
        constructor() {
          this.gameView = void 0;
        }

        init(m_GameView) {
          this.gameView = m_GameView;
        }

        gameStart() {// for (let i = 1; i <= this.cardTotal; i++) {
          //     for (let j = 0; j < this.cardSuits; j++) {
          //         let suit: EnumSuit = EnumSuit.HeiTao
          //         switch (j) {
          //             case 1:
          //                 suit = EnumSuit.HongTao
          //                 break;
          //             case 2:
          //                 suit = EnumSuit.MeiHua
          //                 break;
          //             case 3:
          //                 suit = EnumSuit.FangKuai
          //                 break;
          //             default:
          //                 suit = EnumSuit.HeiTao
          //                 break;
          //         }
          //         let poker = new Poker(i, suit)
          //         this.pokers.push(poker)
          //     }
          // }
          // this.gameView.createAllCard(this.pokers)
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7c22caeefbe9b9f1004a87677e345649d0b3a3e.js.map