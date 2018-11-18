const DouYuDanMuFetch = require('./douyu')
const HuYaDanMuFetch = require('./huya')

/**
 * 装饰者模式
 * 包装了 虎牙 或者 斗鱼的抓取器
 */
class DanMuFetch {
    constructor(url, handleMsg) {
        this.url = url
        this.handleMsg = handleMsg
        this.process = null
    }

    async start() {
        if (this.url.includes('douyu')) {
            const group = this.url.match(/^(http:\/\/|https:\/\/)?(www.)?(douyu.com\/)(\w+)$/)
            if (!group && group.length < 5) throw new Error('Invalid DouYu URL')

            const roomId = group[4];
            this.process = new DouYuDanMuFetch(this.url, roomId, this.handleMsg)
            this.process.start()
        } else if (this.url.includes('huya')) {
            this.process = new HuYaDanMuFetch(this.url, this.handleMsg)
            this.process.start()
        } else throw new Error('Unknown URL')
    }

    async stop() {
        if (null == this.process)
            throw new Error("No process exist")
        this.process.stop()
    }
}

module.exports = DanMuFetch
