import Taf from "../pojo/Taf"
import Huya from "../pojo/Huya"


export default (t) => {
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
                console.debug("not a message");

            const messageNotice = new Huya.MessageNotice();
            try {
                messageNotice.readFrom(sMsg);
            }catch (e) {
                console.error(e.message)
            }
            printf(messageNotice)
            break;
        }
        case Huya.EWebSocketCommandType.EWSCmdS2C_MsgPushReq_V2: {
            const vData = new Taf.JceInputStream(webSocketCommand.vData);
            const wsPushMessage = new Huya.WSPushMessage_V2();
            wsPushMessage.readFrom(vData);
            for (let i = 0; i < wsPushMessage.vMsgItem.value.length; i++) {
                const wsMsgItem = wsPushMessage.vMsgItem.value[i];

                if (1400 !== wsMsgItem.iUri)
                    console.debug("not a message");

                const messageNotice = new Huya.MessageNotice();
                const sMsg = new Taf.JceInputStream(wsMsgItem.sMsg);
                try {
                    messageNotice.readFrom(sMsg);
                }catch (e) {
                    console.error(e.message)
                }
                printf(messageNotice)
            }
            break;
        }
        default:
            console.debug("%c<<<<<<< Not matched CmdType: " + webSocketCommand.iCmdType)
    }
}

function printf(messageNotice) {
    console.log(messageNotice.tUserInfo.sNickName + ": " + messageNotice.sContent)
}
