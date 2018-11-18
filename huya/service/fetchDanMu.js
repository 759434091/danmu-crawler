const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async function getRoomInfo(url) {
    const res = await axios.get(url)
        .catch(err => {
            throw new Error(err.message)
        })

    const $ = cheerio.load(res.data)
    const scripts = $('script[data-fixed=true]')
    let bk = false
    for (let i = 0; i < scripts.length; i++) {
        if (bk) break;
        const script = scripts[i];
        if (script.children.length <= 0) continue;
        for (let child of script.children) {
            const data = child.data
            if (!data.includes("TT_META_DATA") || !data.includes("TT_PROFILE_INFO"))
                continue
            let group = data.match(/TT_ROOM_DATA[\s]*=([\s\S]+?})[\s]*;/)
            if (group.length < 2)
                continue;

            let jsonStr = group[1];
            let obj = JSON.parse(jsonStr)

            const result = {};
            result.topsid = obj.channel;
            result.subsid = obj.liveChannel

            group = data.match(/TT_PROFILE_INFO[\s]*=([\s\S]+?})[\s]*;/)
            if (group.length < 2)
                continue;

            jsonStr = group[1];
            obj = JSON.parse(jsonStr)
            result.presenterUid = obj.lp
            result.profileRoom = obj.profileRoom

            return result;
        }
    }
    throw new Error("Cannot find roomInfo")
}