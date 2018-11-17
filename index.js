require("babel-plugin-transform-es2015-modules-commonjs")
require("babel-register")

const start = require("./service/send").default
const fetchDanMu = require("./service/fetchDanMu").default;

module.exports = (url, handleMsg) => {
    fetchDanMu(url)
        .then(g => start(g.presenterUid, handleMsg))
        .catch(err => console.error(err))
}

// test
/*
const handleMsg = require("./service/msgCallBack").default;
getRoomInfo('https://www.huya.com/aluka')
    .then(g => start(g.presenterUid, handleMsg))
    .catch(err => console.error(err))*/
