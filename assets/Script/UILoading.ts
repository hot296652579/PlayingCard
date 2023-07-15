import { _decorator, Component, Node, resources, SpriteFrame, ProgressBar, Label, director, native } from 'cc';
import { reslist } from '../reslist';
const { ccclass, property } = _decorator;

@ccclass('UILoading')
export class UILoading extends Component {
    progressCount: number = 0

    @property(ProgressBar)
    progress: ProgressBar = null

    @property(Label)
    laPre: Label = null

    @property(Label)
    testOcLb: Label = null

    start() {
        director.preloadScene('Game')
    }

    onLoad() {
        this.loadAllRelist()
        this.refreshProgress()

        //test oc
        // native.reflection.callStaticMethod("NewClass", "helloWorld")

        // let ret = native.reflection.callStaticMethod("NewClass", "Add:Another:", 33, 'javan')
        // if (ret) {
        //     this.testOcLb.string = ret
        // }
    }

    async loadAllRelist() {
        await this.executePreFrame(this._getItemGenerator(reslist), 1)
    }

    private * _getItemGenerator(reslist) {
        for (const [value, num] of reslist) {
            yield this.loadItem(value)
        }
    }

    loadItem(path: string) {
        resources.load(path + "/spriteFrame", SpriteFrame, (count, total) => {
            // this.progressCount++
            // console.log(this.progressCount)
            // console.log('total', total)
        }, (err, spriteFrame) => {
            if (err) {
                console.log(err)
            } else {
                // console.log('spriteFrame.name:' + spriteFrame.name)
                this.progressCount++
                this.refreshProgress()
            }
        })
    }

    refreshProgress() {
        let total = Array.from(reslist.keys()).length

        let pre = this.progressCount / total
        this.progress.progress = pre

        this.laPre.string = `${this.progressCount}/${total}`

        if (this.progressCount >= total) {
            director.loadScene('Game')
        }
    }

    /**
     * 分帧执行 Generator 逻辑
     *
     * @param generator 生成器
     * @param duration 持续时间（ms）
     *          每次执行 Generator 的操作时，最长可持续执行时长。
     *          假设值为8ms，那么表示1帧（总共16ms）下，分出8ms时间给此逻辑执行
     */
    private executePreFrame(generator: Generator, duration: number) {
        return new Promise((resolve, reject) => {
            let gen = generator;
            // 创建执行函数
            let execute = () => {

                // 执行之前，先记录开始时间戳
                let startTime = new Date().getTime();

                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {

                    // 判断是否已经执行完所有 Generator 的小代码段
                    // 如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve(true);
                        return;
                    }

                    // 每执行完一段小代码段，都检查一下是否
                    // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                    // console.log('new Date().getTime() - startTime', new Date().getTime() - startTime)
                    if (new Date().getTime() - startTime > duration) {

                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            execute();
                        });

                        return;
                    }
                }
            };

            // 运行执行函数
            execute();
        });
    }
}

