const Taf = require("../pojo/Taf")
const Huya = require("../pojo/Huya")

module.exports = (handleMsg, roomUrl, roomId) => {
    return (t) => {
        const tarsInputStream = new Taf.JceInputStream(t.data);
        const webSocketCommand = new Huya.WebSocketCommand();

        webSocketCommand.readFrom(tarsInputStream);
        switch (webSocketCommand.iCmdType) {
            case Huya.EWebSocketCommandType.EWSCmdS2C_MsgPushReq: {
                const vData = new Taf.JceInputStream(webSocketCommand.vData.buffer);
                const wsPushMessage = new Huya.WSPushMessage();
                wsPushMessage.readFrom(vData);

                const sMsg = new Taf.JceInputStream(wsPushMessage.sMsg.buffer);
                if (wsPushMessage.iUri !== 1400)
                    return;

                const messageNotice = new Huya.MessageNotice();
                try {
                    messageNotice.readFrom(sMsg);
                } catch (e) {
                    console.error(e.message)
                }
                handleMsg(createNorDanMu(messageNotice, roomUrl, roomId))
                break;
            }
            case Huya.EWebSocketCommandType.EWSCmdS2C_MsgPushReq_V2: {
                const vData = new Taf.JceInputStream(webSocketCommand.vData);
                const wsPushMessage = new Huya.WSPushMessage_V2();
                wsPushMessage.readFrom(vData);
                for (let i = 0; i < wsPushMessage.vMsgItem.value.length; i++) {
                    const wsMsgItem = wsPushMessage.vMsgItem.value[i];

                    if (1400 !== wsMsgItem.iUri)
                        return;

                    const messageNotice = new Huya.MessageNotice();
                    const sMsg = new Taf.JceInputStream(wsMsgItem.sMsg);
                    try {
                        messageNotice.readFrom(sMsg);
                    } catch (e) {
                        console.error(e.message)
                    }
                    handleMsg(createNorDanMu(messageNotice, roomUrl, roomId))
                }
                break;
            }
            default:
                break;
        }
    }
}

function createNorDanMu(messageNotice, url, roomId) {
    if (messageNotice == null || messageNotice.sContent == null || '' === messageNotice.sContent)
        return null

    return {
        liveType: 'huya',
        roomUrl: url,
        roomId: roomId,
        danMu: messageNotice.sContent,
        usrUid: messageNotice.tUserInfo.lUid,
        usrNickName: messageNotice.tUserInfo.sNickName
    }
}
