require("babel-plugin-transform-es2015-modules-commonjs")
require("babel-register")

const start = require("./service/send").default
const fetchDanMu = require("./service/fetchDanMu").default;

class DanMuFetch {
    constructor(url, handleMsg) {
        this.url = url
        this.handleMsg = handleMsg
        this.process = null
    }

    async start() {
        const g = await fetchDanMu(this.url)
            .catch(err => console.error(err))

        start(g.presenterUid, this.handleMsg, cli => this.process = cli)
    }

    async stop() {
        if (this.process == null) throw new Error("No processing client");

        await this.process.close();
    }

}

module.exports = DanMuFetch
