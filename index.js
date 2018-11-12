require("babel-plugin-transform-es2015-modules-commonjs")
require("babel-register")

const start = require("./service/send").default
const getRoomInfo = require("./service/fetchInfo").default;

module.exports = (url, handleMsg) => {
    getRoomInfo(url)
        .then(g => start(g.presenterUid, handleMsg))
        .catch(err => console.error(err))
}


const handleMsg = require("./service/msgCallBack").default;
getRoomInfo('https://www.huya.com/aluka')
    .then(g => start(g.presenterUid, handleMsg))
    .catch(err => console.error(err))