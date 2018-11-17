import Taf from "../pojo/Taf"
import Huya from "../pojo/Huya"
import Tars from "@tars/stream";

const str = "00101d000025090002060e6c6976653a393030383231333137060e636861743a39303038323133313716002c3600"

const bytes = parseHexString(str);
const arrayBuffer = byteToUint8Array(bytes).buffer


const binBuffer = new Taf.BinBuffer(arrayBuffer)

const tarsInputStream = new Taf.JceInputStream(binBuffer);
const webSocketCommand = new Huya.WebSocketCommand();

webSocketCommand.readFrom(tarsInputStream);

const vData = new Taf.JceInputStream(webSocketCommand.vData.buffer);
const wsRegisterGroupReq = new Huya.WSRegisterGroupReq();
wsRegisterGroupReq.readFrom(vData);

export default binBuffer;

function parseHexString(str) {
    var result = [];

    for (let i = 0; i < str.length; i += 2) {
        result.push(parseInt(str[i] + str[i + 1], 16))
    }

    return result;
}

function byteToUint8Array(byteArray) {
    var uint8Array = new Uint8Array(byteArray.length);
    for (var i = 0; i < uint8Array.length; i++) {
        uint8Array[i] = byteArray[i];
    }

    return uint8Array;
}