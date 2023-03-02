import { assetManager, resources } from "cc"

export default class ResMgr {
    static instance: any
    public static getInstance(): any {
        if (this.instance == null) {
            this.instance = new ResMgr()
        }
        return this.instance
    }

    async loadResSpriteFrame(path) {
        return new Promise((resolve, reject) => {
            let filPath = path + `/spriteFrame`
            console.log('filPath:', filPath)
            resources.load(filPath, (err, asset) => {
                if (!err) {
                    resolve(asset)
                } else {
                    console.error('加载图片资源失败:' + err)
                    reject()
                }
            })
        })
    }
}