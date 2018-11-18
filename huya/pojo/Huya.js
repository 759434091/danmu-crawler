const Taf = require("./Taf")

const Huya = {}
Huya.EWebSocketCommandType = {
    EWSCmd_NULL: 0,
    EWSCmd_RegisterReq: 1,
    EWSCmd_RegisterRsp: 2,
    EWSCmd_WupReq: 3,
    EWSCmd_WupRsp: 4,
    EWSCmdC2S_HeartBeat: 5,
    EWSCmdS2C_HeartBeatAck: 6,
    EWSCmdS2C_MsgPushReq: 7,
    EWSCmdC2S_DeregisterReq: 8,
    EWSCmdS2C_DeRegisterRsp: 9,
    EWSCmdC2S_VerifyCookieReq: 10,
    EWSCmdS2C_VerifyCookieRsp: 11,
    EWSCmdC2S_VerifyHuyaTokenReq: 12,
    EWSCmdS2C_VerifyHuyaTokenRsp: 13,
    EWSCmdC2S_UNVerifyReq: 14,
    EWSCmdS2C_UNVerifyRsp: 15,
    EWSCmdC2S_RegisterGroupReq: 16,
    EWSCmdS2C_RegisterGroupRsp: 17,
    EWSCmdC2S_UnRegisterGroupReq: 18,
    EWSCmdS2C_UnRegisterGroupRsp: 19,
    EWSCmdC2S_HeartBeatReq: 20,
    EWSCmdS2C_HeartBeatRsp: 21,
    EWSCmdS2C_MsgPushReq_V2: 22
}
Huya.WebSocketCommand = class WebSocketCommand {
    constructor() {
        this.iCmdType = 0
        this.vData = new Taf.BinBuffer
        this.lRequestId = 0
        this.traceId = ""
    }

    readFrom(t) {
        this.iCmdType = t.readInt32(0, false, this.iCmdType)
        this.vData = t.readBytes(1, false, this.vData)
        this.lRequestId = t.readInt64(2, false, this.lRequestId)
        this.traceId = t.readString(3, false, this.traceId)
    }

    writeTo(t) {
        t.writeInt32(0, this.iCmdType)
        t.writeBytes(1, this.vData)
        t.writeInt64(2, this.lRequestId)
        t.writeString(3, this.traceId)
    }

    _clone() {
        return new Huya.WebSocketCommand
    }
}
Huya.WSPushMessage = class WSPushMessage {
    constructor() {
        this.ePushType = 0
        this.iUri = 0
        this.sMsg = new Taf.BinBuffer
        this.iProtocolType = 0
        this.sGroupId = ""
    }

    readFrom(t) {
        this.ePushType = t.readInt32(0, false, this.ePushType)
        this.iUri = t.readInt64(1, false, this.iUri)
        this.sMsg = t.readBytes(2, false, this.sMsg)
        this.iProtocolType = t.readInt32(3, false, this.iProtocolType)
        this.sGroupId = t.readString(4, false, this.sGroupId)
    }

    _clone() {
        return new Huya.WSPushMessage
    }
}
Huya.MessageNotice = class MessageNotice {
    constructor() {
        this.tUserInfo = new Huya.SenderInfo
        this.lTid = 0
        this.lSid = 0
        this.sContent = ""
        this.iShowMode = 0
        this.tFormat = new Huya.ContentFormat
        this.tBulletFormat = new Huya.BulletFormat
        this.iTermType = 0
        this.vDecorationPrefix = new Taf.Vector(new Huya.DecorationInfo)
        this.vDecorationSuffix = new Taf.Vector(new Huya.DecorationInfo)
        this.vAtSomeone = new Taf.Vector(new Huya.UidNickName)
        this.lPid = 0
        this.vBulletPrefix = new Taf.Vector(new Huya.DecorationInfo)
        this.sIconUrl = ""
        this.iType = 0
        this.vBulletSuffix = new Taf.Vector(new Huya.DecorationInfo)
    }

    readFrom(t) {
        this.tUserInfo = t.readStruct(0, false, this.tUserInfo)
        this.lTid = t.readInt64(1, false, this.lTid)
        this.lSid = t.readInt64(2, false, this.lSid)
        this.sContent = t.readString(3, false, this.sContent)
        this.iShowMode = t.readInt32(4, false, this.iShowMode)
        this.tFormat = t.readStruct(5, false, this.tFormat)
        this.tBulletFormat = t.readStruct(6, false, this.tBulletFormat)
        this.iTermType = t.readInt32(7, false, this.iTermType)
        this.vDecorationPrefix = t.readVector(8, false, this.vDecorationPrefix)
        this.vDecorationSuffix = t.readVector(9, false, this.vDecorationSuffix)
        this.vAtSomeone = t.readVector(10, false, this.vAtSomeone)
        this.lPid = t.readInt64(11, false, this.lPid)
        this.vBulletPrefix = t.readVector(12, false, this.vBulletPrefix)
        this.sIconUrl = t.readString(13, false, this.sIconUrl)
        this.iType = t.readInt32(14, false, this.iType)
        this.vBulletSuffix = t.readVector(15, false, this.vBulletSuffix)
    }

    _clone() {
        return new Huya.SendMessageRsp
    }
}
Huya.ContentFormat = class ContentFormat {
    constructor() {
        this.iFontColor = -1
        this.iFontSize = 4
        this.iPopupStyle = 0
    }

    readFrom(t) {
        this.iFontColor = t.readInt32(0, false, this.iFontColor)
        this.iFontSize = t.readInt32(1, false, this.iFontSize)
        this.iPopupStyle = t.readInt32(2, false, this.iPopupStyle)
    }

    _clone() {
        return new Huya.ContentFormat
    }
}
Huya.BulletFormat = class BulletFormat {
    constructor() {
        this.iFontColor = -1
        this.iFontSize = 4
        this.iTextSpeed = 0
        this.iTransitionType = 1
        this.iPopupStyle = 0
        this.tBorderGroundFormat = new Huya.BulletBorderGroundFormat
    }

    readFrom(t) {
        this.iFontColor = t.readInt32(0, false, this.iFontColor)
        this.iFontSize = t.readInt32(1, false, this.iFontSize)
        this.iTextSpeed = t.readInt32(2, false, this.iTextSpeed)
        this.iTransitionType = t.readInt32(3, false, this.iTransitionType)
        this.iPopupStyle = t.readInt32(4, false, this.iPopupStyle)
        this.tBorderGroundFormat = t.readStruct(5, false, this.tBorderGroundFormat)
    }

    _clone() {
        return new Huya.BulletFormat
    }
}
Huya.UidNickName = class UidNickName {
    constructor() {
        this.lUid = 0
        this.sNickName = ""
    }

    readFrom(t) {
        this.lUid = t.readInt64(0, false, this.lUid)
        this.sNickName = t.readString(1, false, this.sNickName)
    }

    _clone() {
        return new Huya.UidNickName
    }

    _read(t, e, i) {
        return t.readStruct(e, true, i)
    }
}
Huya.SenderInfo = class SenderInfo {
    constructor() {
        this.lUid = 0
        this.lImid = 0
        this.sNickName = ""
        this.iGender = 0
        this.sAvatarUrl = ""
        this.iNobleLevel = 0
    }

    readFrom(t) {
        this.lUid = t.readInt64(0, false, this.lUid)
        this.lImid = t.readInt64(1, false, this.lImid)
        this.sNickName = t.readString(2, false, this.sNickName)
        this.iGender = t.readInt32(3, false, this.iGender)
        this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl)
        this.iNobleLevel = t.readInt32(5, false, this.iNobleLevel)
    }

    _clone() {
        return new Huya.SenderInfo
    }
}
Huya.DecorationInfo = class DecorationInfo {
    constructor() {
        this.iAppId = 0
        this.iViewType = 0
        this.vData = new Taf.BinBuffer
    }

    readFrom(t) {
        this.iAppId = t.readInt32(0, false, this.iAppId)
        this.iViewType = t.readInt32(1, false, this.iViewType)
        this.vData = t.readBytes(2, false, this.vData)
    }

    _clone() {
        return new Huya.DecorationInfo
    }

    _read(t, e, i) {
        return t.readStruct(e, true, i)
    }
}
Huya.BulletBorderGroundFormat = class BulletBorderGroundFormat {
    constructor() {
        this.iEnableUse = 0
        this.iBorderThickness = 0
        this.iBorderColour = -1
        this.iBorderDiaphaneity = 100
        this.iGroundColour = -1
        this.iGroundColourDiaphaneity = 100
        this.sAvatarDecorationUrl = ""
    }

    readFrom(t) {
        this.iEnableUse = t.readInt32(0, false, this.iEnableUse)
        this.iBorderThickness = t.readInt32(1, false, this.iBorderThickness)
        this.iBorderColour = t.readInt32(2, false, this.iBorderColour)
        this.iBorderDiaphaneity = t.readInt32(3, false, this.iBorderDiaphaneity)
        this.iGroundColour = t.readInt32(4, false, this.iGroundColour)
        this.iGroundColourDiaphaneity = t.readInt32(5, false, this.iGroundColourDiaphaneity)
        this.sAvatarDecorationUrl = t.readString(6, false, this.sAvatarDecorationUrl)
    }

    _clone() {
        return new Huya.BulletBorderGroundFormat
    }
}
Huya.WSPushMessage_V2 = class WSPushMessage_V2 {
    constructor() {
        this.sGroupId = ""
        this.vMsgItem = new Taf.Vector(new Huya.WSMsgItem)
    }

    readFrom(t) {
        this.sGroupId = t.readString(0, false, this.sGroupId)
        this.vMsgItem = t.readVector(1, false, this.vMsgItem)
    }

    _clone() {
        return new Huya.WSPushMessage_V2
    }
}
Huya.WSMsgItem = class WSMsgItem {
    constructor() {
        this.iUri = 0
        this.sMsg = new Taf.BinBuffer
    }

    readFrom(t) {
        this.iUri = t.readInt64(0, false, this.iUri)
        this.sMsg = t.readBytes(1, false, this.sMsg)
    }

    _clone() {
        return new Huya.WSMsgItem
    }

    _read(t, e, i) {
        return t.readStruct(e, true, i)
    }
}
Huya.WSRegisterGroupReq = class WSRegisterGroupReq {
    constructor() {
        this.vGroupId = new Taf.Vector(new Taf.STRING)
        this.sToken = ""
    }

    writeTo(t) {
        t.writeVector(0, this.vGroupId)
        t.writeString(1, this.sToken)
    }

    _clone() {
        return new Huya.WSRegisterGroupReq
    }
}

module.exports = Huya