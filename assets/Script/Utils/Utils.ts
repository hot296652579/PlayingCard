import { tween, Node, Vec3, EPSILON, UITransform } from "cc";

/*
 * @Description: 
 * @Author: Super_Javan
 * @Date: 2022-12-02 15:07:23
 * @LastEditTime: 2022-12-02 16:54:24
 * @LastEditors: Super_Javan
 */
export default class TweenUtil {

    /**
     * 水平翻转（卡片翻转）
     * @param node 节点
     * @param duration 总时长
     * @param onComplete 完成回调
     */
    public static flip(node: Node, duration: number, onComplete?: Function): Promise<void> {
        return new Promise<void>(res => {
            const _tween = tween,
                time = duration / 2,
                scale = node.getScale(),
                skewY = scale.x > 0 ? 20 : -20;

            _tween(node)
                .parallel(
                    _tween().to(time, { scale: new Vec3(0, 1, 1) }, { easing: 'quadIn' }),
                    _tween().to(time, { skewY: -skewY }, { easing: 'quadOut' }),
                )
                .call(() => {
                })
                .parallel(
                    _tween().to(time, { scale: new Vec3(-1, 1, 1) }, { easing: 'quadOut' }),
                    _tween().to(time, { skewY: 0 }, { easing: 'quadIn' }),
                )
                .call(() => {
                    node.setScale(1, 1, 1);
                    onComplete && onComplete();
                    res();
                })
                .start();
        });
    }

}

/**获取图片途径 */
export const getSpPath = (suit: string, count: number) => {
    let letter: string = ''
    switch (suit) {
        case 'HongTao':
            letter = 'd'
            break;
        case 'HeiTao':
            letter = 'h'
            break;
        case 'MeiHua':
            letter = 'b'
            break;
        case 'FangKuai':
            letter = 'r'
            break;
    }

    return `Texture/Cards/${suit}/${letter}${count}`
}

export const moveWorld2Space = (node, targetNode, cleanUp: boolean = false) => {
    let wolrdPos = node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0))
    // console.log('wolrdPos', wolrdPos)
    let nodePos = targetNode.getComponent(UITransform).convertToNodeSpaceAR(wolrdPos)
    node.removeFromParent(cleanUp)
    node.position = nodePos
    targetNode.addChild(node)
}

