/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2023-03-09 14:43:25
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-07-17 21:31:30
 * @FilePath: /PlayCard/assets/Script/Base/Docretors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**函数装饰器*/

export function clickLock(seconds: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldMeth = descriptor.value
        let lock = false
        descriptor.value = function (...param: any[]) {
            if (lock) {
                // console.log('click在锁定中...')
                return
            }
            lock = true

            setTimeout(() => {
                lock = false
            }, seconds * 1000)
            oldMeth.apply(this, param)
        }
        return descriptor
    };
}