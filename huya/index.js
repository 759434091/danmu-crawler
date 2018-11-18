const start = require("./service/send")
const fetchDanMu = require("./service/fetchDanMu");

class DanMuFetch {
    constructor(url, handleMsg) {
        this.url = url
        this.handleMsg = handleMsg
        this.process = null
    }

    async start() {
        const g = await fetchDanMu(this.url)
            .catch(err => console.error(err))

        start(g.presenterUid, this.handleMsg, cli => this.process = cli, this.url, g.profileRoom)
    }

    async stop() {
        if (this.process == null) throw new Error("No processing client");

        await this.process.close();
    }

}

module.exports = DanMuFetch
