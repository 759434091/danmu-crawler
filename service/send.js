import Huya from "../pojo/Huya"
import Taf from "../pojo/Taf"
import {w3cwebsocket as WebSocketClient} from "websocket";
import decode from "./decode"

// 地址数组
let URLS = ["b6831c13-ws.va.huya.com", "b6831c14-ws.va.huya.com", "3d809126-ws.va.huya.com", "3d809124-ws.va.huya.com"];

export default async function start(presenterUid, handleMsg, cliCb) {
    // sendRegisterGroup
    const registerBuffer = (() => {
        const chat = "chat:" + presenterUid;
        // const live = "live:" + presenterUid;
        const wsRegisterGroupReq = new Huya.WSRegisterGroupReq;
        wsRegisterGroupReq.vGroupId.value.push(chat);

        const jceOutputStream = new Taf.JceOutputStream;
        wsRegisterGroupReq.writeTo(jceOutputStream);
        const webSocketCommand = new Huya.WebSocketCommand;
        webSocketCommand.iCmdType = Huya.EWebSocketCommandType.EWSCmdC2S_RegisterGroupReq;
        webSocketCommand.vData = jceOutputStream.getBinBuffer();

        const jceOutputStream2 = new Taf.JceOutputStream;
        webSocketCommand.writeTo(jceOutputStream2);
        return jceOutputStream2.getBuffer();
    })();

    let hadOne = false;
    for (let url of URLS) {
        const client = new WebSocketClient(`ws://${url}`, "", "https://www.huya.com", {
            "Pragma": "no-cache",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36",
            "Cache-Control": "no-cache"
        });

        client.onerror = (err) => console.log('Connect Error: ' + err.message);

        client.onopen = () => {
            if (hadOne) {
                client.close();
                return;
            }

            hadOne = true;
            cliCb(client);
            console.log('WebSocket Client Connected');

            client._connection.extensions.push("permessage-deflate")
            client.send(registerBuffer)
        };

        client.onclose = a => console.log('Connection Closed: ' + a.reason);

        client.onmessage = decode(handleMsg);
    }
}