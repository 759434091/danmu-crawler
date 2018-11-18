const Taf = require("../pojo/Taf")
const Huya = require("../pojo/Huya")

module.exports = (handleMsg, roomUrl, roomId) => {
    return (t) => {
        const tarsInputStream = new Taf.JceInputStream(t.data);
        const webSocketCommand = new Huya.WebSocketCommand();
        webSocketCommand.readFrom(tarsInputStream);

        if (!handlerMap.has(webSocketCommand.iCmdType))
            return

        handlerMap.get(webSocketCommand.iCmdType)(webSocketCommand, handleMsg, roomUrl, roomId)
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

const handleEWSCmdS2C_MsgPushReq = (webSocketCommand, handleMsg, roomUrl, roomId) => {
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
}

const handleEWSCmdS2C_MsgPushReq_V2 = (webSocketCommand, handleMsg, roomUrl, roomId) => {
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
}

const handlerMap = new Map([
    [Huya.EWebSocketCommandType.EWSCmdS2C_MsgPushReq, handleEWSCmdS2C_MsgPushReq],
    [Huya.EWebSocketCommandType.EWSCmdS2C_MsgPushReq_V2, handleEWSCmdS2C_MsgPushReq_V2]
]);