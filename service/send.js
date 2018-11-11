import Huya from "../pojo/Huya"
import Taf from "../pojo/Taf"
import {w3cwebsocket as WebSocketClient} from "websocket";
import receive from "./decode"

// 地址数组
let URLS = ["b6831c13-ws.va.huya.com", "b6831c14-ws.va.huya.com", "3d809126-ws.va.huya.com", "3d809124-ws.va.huya.com"];
// 用户信息（未登录的），注意是一个消息结构体，所以需要不能直接把储存下载的JSON直接用上，需要转回虎牙的结构体
let userId = Object.assign(new Huya.UserId(), JSON.parse('{"lUid":0,"sGuid":"3ad7b8264c7ea75b687da17ca27c5f6b","sToken":"","sHuYaUA":"webh5&1811081818&websocket","sCookie":"vplayer_sbanner_95431869_2516077608=1; guid=3ad7b8264c7ea75b687da17ca27c5f6b; __yasmid=0.007382524702337356; __yamid_tt1=0.007382524702337356; __yamid_new=C836676E0D900001A54518F01B80F140; _yasids=__rootsid%3DC836676E0DE00001661A11D49B801DB8; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1541855773; udb_passdata=3; udb_guiddata=b298dbd0f2d048cd867b0a7b59957426; web_qrlogin_confirm_id=52b644f4-4bb4-4e2a-96fd-c56713cc3e8b; PHPSESSID=7s3gfunombo6gor2980v6u2k87; alphaValue=0.80; SoundValue=0.24; isInLiveRoom=true; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1541929611","iTokenType":0}'))
// 以下为直播房间相关id
const topsid = 95431869;
const subsid = 2516077608;
const presenterUid = 900821317;

// _
const buffer1 = (() => {
    let getLivingInfoReq = new Huya.GetLivingInfoReq();
    getLivingInfoReq.tId = userId;
    getLivingInfoReq.lTopSid = topsid;
    getLivingInfoReq.lSubSid = subsid;
    getLivingInfoReq.lPresenterUid = presenterUid;
    getLivingInfoReq.sTraceSource = "lol/0/1/1";

    let wup = new Taf.Wup();
    wup.setServant("liveui");
    wup.setFunc("getLivingInfo");
    wup.setRequestId(-1);
    wup.writeStruct("tReq", getLivingInfoReq);

    const webSocketCommand = new Huya.WebSocketCommand();
    webSocketCommand.iCmdType = Huya.EWebSocketCommandType.EWSCmd_WupReq;
    webSocketCommand.vData = wup.encode();

    const o = new Taf.JceOutputStream;
    webSocketCommand.writeTo(o);
    return o.getBuffer();
})();

// c
const buffer2 = (() => {
    let liveLaunchReq = new Huya.LiveLaunchReq;
    liveLaunchReq.tId = userId;
    liveLaunchReq.tLiveUB = new Huya.LiveUserbase()
    liveLaunchReq.tLiveUB.eSource = Huya.ELiveSource.WEB_HUYA;
    liveLaunchReq.bSupportDomain = 1

    let wup = new Taf.Wup();
    wup.setServant("liveui");
    wup.setFunc("doLaunch");
    wup.setRequestId(-1);
    wup.writeStruct("tReq", liveLaunchReq);

    const webSocketCommand = new Huya.WebSocketCommand();
    webSocketCommand.iCmdType = Huya.EWebSocketCommandType.EWSCmd_WupReq;
    webSocketCommand.vData = wup.encode();

    const o = new Taf.JceOutputStream;
    webSocketCommand.writeTo(o);
    return o.getBuffer();
})();

// sendRegisterGroup
const buffer3 = (() => {
    const chat = "chat:" + presenterUid;
    const live = "live:" + presenterUid;
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
    if(hadOne)
        break;
    const client = new WebSocketClient(`ws://${url}`, "", "https://www.huya.com", {
        "Pragma": "no-cache",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36",
        "Cache-Control": "no-cache",
        "Cookie": "guid=3ad7b8264c7ea75b687da17ca27c5f6b; __yasmid=0.007382524702337356; __yamid_tt1=0.007382524702337356; __yamid_new=C836676E0D900001A54518F01B80F140; _yasids=__rootsid%3DC836676E0DE00001661A11D49B801DB8; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1541855773; udb_passdata=3; udb_guiddata=b298dbd0f2d048cd867b0a7b59957426; web_qrlogin_confirm_id=52b644f4-4bb4-4e2a-96fd-c56713cc3e8b; alphaValue=0.80; SoundValue=0.24; isInLiveRoom=true; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1541930232"
    });

    client.onerror = (error) => {
        console.log('Connect Error: ' + error.toString());
    };

    client.onopen = () => {
        console.log('WebSocket Client Connected');
        client._connection.extensions.push("permessage-deflate")
        client.send(buffer1)
        client.send(buffer2)
        client.send(buffer3)
    };

    client.onclose = a => {
        console.log('Connection Closed ' + a.reason);
    };

    client.onmessage = receive;
}