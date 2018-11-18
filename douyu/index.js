const net = require("net");

const addr = "119.97.145.173"
const port = 8601

/**
 * 斗鱼抓取器
 */
module.exports = class DanMuFetch {
    constructor(roomUrl, roomId, handleMsg) {
        this.roomUrl = roomUrl
        this.roomId = roomId
        this.handleMsg = handleMsg
        this.process = new net.Socket()
        this.process.setEncoding('binary');
        this.Interval = null
    }

    start() {
        this.process.connect(port, addr, () => {
                console.log('Socket Client Connected');
                const msg = `type@=loginreq/roomid@=${this.roomId}/\0`
                this.sendMsg(msg)
                const msg_more = `type@=joingroup/rid@=${this.roomId}/gid@=-9999/\0`
                this.sendMsg(msg_more)


                this.process.on('data', (data) => {
                    const resStr = Buffer.from(data, 'binary').toString('utf8');
                    if (!resStr.match(/type@=chatmsg\//))
                        return
                    const uid = resStr.match(/uid@=([^\/]*)\//)[1]
                    const nn = resStr.match(/nn@=([^\/]*)\//)[1]
                    const txt = resStr.match(/txt@=([^\/]*)\//)[1]
                    const danMu = {
                        liveType: 'douyu',
                        roomUrl: this.roomUrl,
                        roomId: this.roomId,
                        danMu: txt,
                        usrUid: uid,
                        usrNickName: nn
                    }
                    this.handleMsg(danMu)
                })

                this.process.on('error', (err) => {
                    console.error(err)
                    this.process.destroy();
                })

                const _this = this
                this.Interval = setInterval(() => _this.sendMsg(`type@=mrkl/\0`), 45000)
            }
        )
    }

    stop() {
        this.process.end();
        clearInterval(this.Interval)
    }

    sendMsg(msgStr) {
        const strBuf = Buffer.from(msgStr, 'utf8')
        const data_length = strBuf.length + 8
        const code = 689

        const headBuf = Buffer.alloc(12);
        headBuf.writeUInt32LE(data_length, 0)
        headBuf.writeUInt32LE(data_length, 4)
        headBuf.writeUInt32LE(code, 8)
        const totalBuf = Buffer.concat(Array.of(headBuf, strBuf))
        this.process.write(totalBuf)
    }
}