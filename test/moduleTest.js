const DanMuFetch = require('../index')
const dbHandler = require('../handler/dbHandler')

const danMuFetch = new DanMuFetch('https://www.huya.com/heigou', dbHandler);

danMuFetch.start();

setTimeout(() => {
    danMuFetch.stop().then(() => process.exit())
}, 100000)