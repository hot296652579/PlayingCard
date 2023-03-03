interface IItem {
    event: string,
    cb: Function,
    ctx: unknown
}

export default class EventMgr {
    static instance: any
    public static getInstance(): any {
        if (this.instance == null) {
            this.instance = new EventMgr()
        }
        return this.instance
    }

    private eventMap: Map<string, IItem> = new Map()

    on(event, cb, ctx?) {
        if (!this.eventMap.has(event)) {
            this.eventMap.set(event, {
                event, cb, ctx
            })
        }

        return () => {

        }
    }

    off(evt: string) {
        if (this.eventMap.has(evt)) {
            const item = this.eventMap.get(evt)
            if (item) {
                this.eventMap.delete(evt)
            }
        }
    }

    once(event, cb, ctx?) {
        let unsub = undefined
        unsub = this.on(event, (...param) => {
            cb.apply(ctx, param)
            unsub()
        }, ctx)
        return unsub
    }

    emit(evt: string, ...param) {
        if (this.eventMap.has(evt)) {
            const item = this.eventMap.get(evt)
            const { event, cb, ctx } = item
            if (evt && cb) {
                cb.apply(ctx, param)
            }
        } else {
            console.error('没有注册该事件:', evt)
        }
    }

    clear() {
        this.eventMap.clear()
    }
}