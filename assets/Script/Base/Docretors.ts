/**函数装饰器*/

export function clickLock(seconds: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldMeth = descriptor.value
        let lock = false
        descriptor.value = function (...param: any[]) {
            if (lock) {
                console.log('click在锁定中...')
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