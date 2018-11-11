import Taf from "./Taf"
const Huya = {};
export default Huya

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
Huya.ELiveSource = {
    PC_YY: 0,
    PC_HUYA: 1,
    MOBILE_HUYA: 2,
    WEB_HUYA: 3
}
Huya.EGender = {
    MALE: 0,
    FEMALE: 1
}
Huya.EClientTemplateType = {
    TPL_LIANYUN: 128,
    TPL_PC: 64,
    TPL_WEB: 32,
    TPL_JIEDAI: 16,
    TPL_TEXAS: 8,
    TPL_MATCH: 4,
    TPL_HUYAAPP: 2,
    TPL_MIRROR: 1
}
Huya.TemplateType = {
    PRIMARY: 1,
    RECEPTION: 2
}
Huya.EStreamLineType = {
    STREAM_LINE_OLD_YY: 0,
    STREAM_LINE_WS: 1,
    STREAM_LINE_NEW_YY: 2,
    STREAM_LINE_AL: 3,
    STREAM_LINE_HUYA: 4,
    STREAM_LINE_TX: 5,
    STREAM_LINE_CDN: 8
}
Huya.eUserOperation = {
    USER_IN: 1,
    USER_OUT: 2,
    USER_MOVE: 3
}

Huya.WebSocketCommand = function () {
    this.iCmdType = 0
    this.vData = new Taf.BinBuffer
    this.lRequestId = 0
    this.traceId = ""
}

Huya.WebSocketCommand.prototype._clone = function () {
    return new Huya.WebSocketCommand
}

Huya.WebSocketCommand.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WebSocketCommand.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WebSocketCommand.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCmdType)
    t.writeBytes(1, this.vData)
    t.writeInt64(2, this.lRequestId)
    t.writeString(3, this.traceId)
}

Huya.WebSocketCommand.prototype.readFrom = function (t) {
    this.iCmdType = t.readInt32(0, false, this.iCmdType)
    this.vData = t.readBytes(1, false, this.vData)
    this.lRequestId = t.readInt64(2, false, this.lRequestId)
    this.traceId = t.readString(3, false, this.traceId)
}

Huya.WSRegisterRsp = function () {
    this.iResCode = 0
    this.lRequestId = 0
    this.sMessage = ""
    this.sBCConnHost = ""
}

Huya.WSRegisterRsp.prototype._clone = function () {
    return new Huya.WSRegisterRsp
}

Huya.WSRegisterRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSRegisterRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSRegisterRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iResCode)
    t.writeInt64(1, this.lRequestId)
    t.writeString(2, this.sMessage)
    t.writeString(3, this.sBCConnHost)
}

Huya.WSRegisterRsp.prototype.readFrom = function (t) {
    this.iResCode = t.readInt32(0, false, this.iResCode)
    this.lRequestId = t.readInt64(1, false, this.lRequestId)
    this.sMessage = t.readString(2, false, this.sMessage)
    this.sBCConnHost = t.readString(3, false, this.sBCConnHost)
}

Huya.WSPushMessage = function () {
    this.ePushType = 0
    this.iUri = 0
    this.sMsg = new Taf.BinBuffer
    this.iProtocolType = 0
    this.sGroupId = ""
}

Huya.WSPushMessage.prototype._clone = function () {
    return new Huya.WSPushMessage
}

Huya.WSPushMessage.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSPushMessage.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSPushMessage.prototype.writeTo = function (t) {
    t.writeInt32(0, this.ePushType)
    t.writeInt64(1, this.iUri)
    t.writeBytes(2, this.sMsg)
    t.writeInt32(3, this.iProtocolType)
    t.writeString(4, this.sGroupId)
}

Huya.WSPushMessage.prototype.readFrom = function (t) {
    this.ePushType = t.readInt32(0, false, this.ePushType)
    this.iUri = t.readInt64(1, false, this.iUri)
    this.sMsg = t.readBytes(2, false, this.sMsg)
    this.iProtocolType = t.readInt32(3, false, this.iProtocolType)
    this.sGroupId = t.readString(4, false, this.sGroupId)
}

Huya.WSUserInfo = function () {
    this.lUid = 0
    this.bAnonymous = true
    this.sGuid = ""
    this.sToken = ""
    this.lTid = 0
    this.lSid = 0
    this.lGroupId = 0
    this.lGroupType = 0
    this.sAppId = ""
    this.sUA = ""
}

Huya.WSUserInfo.prototype._clone = function () {
    return new Huya.WSUserInfo
}

Huya.WSUserInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSUserInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSUserInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeBoolean(1, this.bAnonymous)
    t.writeString(2, this.sGuid)
    t.writeString(3, this.sToken)
    t.writeInt64(4, this.lTid)
    t.writeInt64(5, this.lSid)
    t.writeInt64(6, this.lGroupId)
    t.writeInt64(7, this.lGroupType)
    t.writeString(8, this.sAppId)
    t.writeString(9, this.sUA)
}

Huya.WSUserInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.bAnonymous = t.readBoolean(1, false, this.bAnonymous)
    this.sGuid = t.readString(2, false, this.sGuid)
    this.sToken = t.readString(3, false, this.sToken)
    this.lTid = t.readInt64(4, false, this.lTid)
    this.lSid = t.readInt64(5, false, this.lSid)
    this.lGroupId = t.readInt64(6, false, this.lGroupId)
    this.lGroupType = t.readInt64(7, false, this.lGroupType)
    this.sAppId = t.readString(8, false, this.sAppId)
    this.sUA = t.readString(9, false, this.sUA)
}

Huya.WSVerifyCookieReq = function () {
    this.lUid = 0
    this.sUA = ""
    this.sCookie = ""
    this.sGuid = ""
    this.bAutoRegisterUid = 0
}

Huya.WSVerifyCookieReq.prototype._clone = function () {
    return new Huya.WSVerifyCookieReq
}

Huya.WSVerifyCookieReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSVerifyCookieReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSVerifyCookieReq.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sUA)
    t.writeString(2, this.sCookie)
    t.writeString(3, this.sGuid)
    t.writeInt32(4, this.bAutoRegisterUid)
}

Huya.WSVerifyCookieReq.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sUA = t.readString(1, false, this.sUA)
    this.sCookie = t.readString(2, false, this.sCookie)
    this.sGuid = t.readString(3, false, this.sGuid)
    this.bAutoRegisterUid = t.readInt32(4, false, this.bAutoRegisterUid)
}

Huya.WSVerifyCookieRsp = function () {
    this.iValidate = 0
}

Huya.WSVerifyCookieRsp.prototype._clone = function () {
    return new Huya.WSVerifyCookieRsp
}

Huya.WSVerifyCookieRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSVerifyCookieRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSVerifyCookieRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iValidate)
}

Huya.WSVerifyCookieRsp.prototype.readFrom = function (t) {
    this.iValidate = t.readInt32(0, false, this.iValidate)
}

Huya.UserId = function () {
    this.lUid = 0
    this.sGuid = ""
    this.sToken = ""
    this.sHuYaUA = ""
    this.sCookie = ""
    this.iTokenType = 0
}

Huya.UserId.prototype._clone = function () {
    return new Huya.UserId
}

Huya.UserId.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserId.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserId.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sGuid)
    t.writeString(2, this.sToken)
    t.writeString(3, this.sHuYaUA)
    t.writeString(4, this.sCookie)
    t.writeInt32(5, this.iTokenType)
}

Huya.UserId.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sGuid = t.readString(1, false, this.sGuid)
    this.sToken = t.readString(2, false, this.sToken)
    this.sHuYaUA = t.readString(3, false, this.sHuYaUA)
    this.sCookie = t.readString(4, false, this.sCookie)
    this.iTokenType = t.readInt32(5, false, this.iTokenType)
}

Huya.EnterChannelReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.iChannelType = 0
}

Huya.EnterChannelReq.prototype._clone = function () {
    return new Huya.EnterChannelReq
}

Huya.EnterChannelReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.EnterChannelReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.EnterChannelReq.prototype.writeTo = function (t) {
    t.writeStruct(1, this.tUserId)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
    t.writeInt32(4, this.iChannelType)
}

Huya.EnterChannelReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(1, false, this.tUserId)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.iChannelType = t.readInt32(4, false, this.iChannelType)
}

Huya.UserEventReq = function () {
    this.tId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.eOp = 0
    this.sChan = ""
    this.eSource = 0
    this.lPid = 0
    this.bWatchVideo = false
    this.bAnonymous = false
    this.eTemplateType = Huya.TemplateType.PRIMARY
    this.sTraceSource = ""
}

Huya.UserEventReq.prototype._clone = function () {
    return new Huya.UserEventReq
}

Huya.UserEventReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserEventReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserEventReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt32(4, this.eOp)
    t.writeString(5, this.sChan)
    t.writeInt32(6, this.eSource)
    t.writeInt64(7, this.lPid)
    t.writeBoolean(8, this.bWatchVideo)
    t.writeBoolean(9, this.bAnonymous)
    t.writeInt32(10, this.eTemplateType)
    t.writeString(11, this.sTraceSource)
}

Huya.UserEventReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.eOp = t.readInt32(4, false, this.eOp)
    this.sChan = t.readString(5, false, this.sChan)
    this.eSource = t.readInt32(6, false, this.eSource)
    this.lPid = t.readInt64(7, false, this.lPid)
    this.bWatchVideo = t.readBoolean(8, false, this.bWatchVideo)
    this.bAnonymous = t.readBoolean(9, false, this.bAnonymous)
    this.eTemplateType = t.readInt32(10, false, this.eTemplateType)
    this.sTraceSource = t.readString(11, false, this.sTraceSource)
}

Huya.UserEventRsp = function () {
    this.lTid = 0
    this.lSid = 0
    this.iUserHeartBeatInterval = 60
    this.iPresentHeartBeatInterval = 60
}

Huya.UserEventRsp.prototype._clone = function () {
    return new Huya.UserEventRsp
}

Huya.UserEventRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserEventRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserEventRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTid)
    t.writeInt64(1, this.lSid)
    t.writeInt32(2, this.iUserHeartBeatInterval)
    t.writeInt32(3, this.iPresentHeartBeatInterval)
}

Huya.UserEventRsp.prototype.readFrom = function (t) {
    this.lTid = t.readInt64(0, false, this.lTid)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.iUserHeartBeatInterval = t.readInt32(2, false, this.iUserHeartBeatInterval)
    this.iPresentHeartBeatInterval = t.readInt32(3, false, this.iPresentHeartBeatInterval)
}

Huya.UserHeartBeatReq = function () {
    this.tId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.bWatchVideo = false
    this.eLineType = Huya.EStreamLineType.STREAM_LINE_OLD_YY
    this.iFps = 0
    this.iAttendee = 0
    this.iBandwidth = 0
    this.iLastHeartElapseTime = 0
}

Huya.UserHeartBeatReq.prototype._clone = function () {
    return new Huya.UserHeartBeatReq
}

Huya.UserHeartBeatReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserHeartBeatReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserHeartBeatReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(4, this.lPid)
    t.writeBoolean(5, this.bWatchVideo)
    t.writeInt32(6, this.eLineType)
    t.writeInt32(7, this.iFps)
    t.writeInt32(8, this.iAttendee)
    t.writeInt32(9, this.iBandwidth)
    t.writeInt32(10, this.iLastHeartElapseTime)
}

Huya.UserHeartBeatReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(4, false, this.lPid)
    this.bWatchVideo = t.readBoolean(5, false, this.bWatchVideo)
    this.eLineType = t.readInt32(6, false, this.eLineType)
    this.iFps = t.readInt32(7, false, this.iFps)
    this.iAttendee = t.readInt32(8, false, this.iAttendee)
    this.iBandwidth = t.readInt32(9, false, this.iBandwidth)
    this.iLastHeartElapseTime = t.readInt32(10, false, this.iLastHeartElapseTime)
}

Huya.UserHeartBeatRsp = function () {
    this.iRet = 0
}

Huya.UserHeartBeatRsp.prototype._clone = function () {
    return new Huya.UserHeartBeatRsp
}

Huya.UserHeartBeatRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserHeartBeatRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserHeartBeatRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRet)
}

Huya.UserHeartBeatRsp.prototype.readFrom = function (t) {
    this.iRet = t.readInt32(0, false, this.iRet)
}

Huya.SendMessageReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.sContent = ""
    this.iShowMode = 0
    this.tFormat = new Huya.ContentFormat
    this.tBulletFormat = new Huya.BulletFormat
    this.vAtSomeone = new Taf.Vector(new Huya.UidNickName)
    this.lPid = 0
}

Huya.SendMessageReq.prototype._clone = function () {
    return new Huya.SendMessageReq
}

Huya.SendMessageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendMessageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendMessageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeString(3, this.sContent)
    t.writeInt32(4, this.iShowMode)
    t.writeStruct(5, this.tFormat)
    t.writeStruct(6, this.tBulletFormat)
    t.writeVector(7, this.vAtSomeone)
    t.writeInt64(8, this.lPid)
}

Huya.SendMessageReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.sContent = t.readString(3, false, this.sContent)
    this.iShowMode = t.readInt32(4, false, this.iShowMode)
    this.tFormat = t.readStruct(5, false, this.tFormat)
    this.tBulletFormat = t.readStruct(6, false, this.tBulletFormat)
    this.vAtSomeone = t.readVector(7, false, this.vAtSomeone)
    this.lPid = t.readInt64(8, false, this.lPid)
}

Huya.SendMessageRsp = function () {
    this.iStatus = 0
    this.tNotice = new Huya.MessageNotice
}

Huya.SendMessageRsp.prototype._clone = function () {
    return new Huya.SendMessageRsp
}

Huya.SendMessageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendMessageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendMessageRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iStatus)
    t.writeStruct(1, this.tNotice)
}

Huya.SendMessageRsp.prototype.readFrom = function (t) {
    this.iStatus = t.readInt32(0, false, this.iStatus)
    this.tNotice = t.readStruct(1, false, this.tNotice)
}

Huya.MessageNotice = function () {
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

Huya.MessageNotice.prototype._clone = function () {
    return new Huya.MessageNotice
}

Huya.MessageNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MessageNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MessageNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserInfo)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeString(3, this.sContent)
    t.writeInt32(4, this.iShowMode)
    t.writeStruct(5, this.tFormat)
    t.writeStruct(6, this.tBulletFormat)
    t.writeInt32(7, this.iTermType)
    t.writeVector(8, this.vDecorationPrefix)
    t.writeVector(9, this.vDecorationSuffix)
    t.writeVector(10, this.vAtSomeone)
    t.writeInt64(11, this.lPid)
    t.writeVector(12, this.vBulletPrefix)
    t.writeString(13, this.sIconUrl)
    t.writeInt32(14, this.iType)
    t.writeVector(15, this.vBulletSuffix)
}

Huya.MessageNotice.prototype.readFrom = function (t) {
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

Huya.ContentFormat = function () {
    this.iFontColor = -1
    this.iFontSize = 4
    this.iPopupStyle = 0
}

Huya.ContentFormat.prototype._clone = function () {
    return new Huya.ContentFormat
}

Huya.ContentFormat.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ContentFormat.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ContentFormat.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iFontColor)
    t.writeInt32(1, this.iFontSize)
    t.writeInt32(2, this.iPopupStyle)
}

Huya.ContentFormat.prototype.readFrom = function (t) {
    this.iFontColor = t.readInt32(0, false, this.iFontColor)
    this.iFontSize = t.readInt32(1, false, this.iFontSize)
    this.iPopupStyle = t.readInt32(2, false, this.iPopupStyle)
}

Huya.BulletFormat = function () {
    this.iFontColor = -1
    this.iFontSize = 4
    this.iTextSpeed = 0
    this.iTransitionType = 1
    this.iPopupStyle = 0
    this.tBorderGroundFormat = new Huya.BulletBorderGroundFormat
}

Huya.BulletFormat.prototype._clone = function () {
    return new Huya.BulletFormat
}

Huya.BulletFormat.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BulletFormat.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BulletFormat.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iFontColor)
    t.writeInt32(1, this.iFontSize)
    t.writeInt32(2, this.iTextSpeed)
    t.writeInt32(3, this.iTransitionType)
    t.writeInt32(4, this.iPopupStyle)
    t.writeStruct(5, this.tBorderGroundFormat)
}

Huya.BulletFormat.prototype.readFrom = function (t) {
    this.iFontColor = t.readInt32(0, false, this.iFontColor)
    this.iFontSize = t.readInt32(1, false, this.iFontSize)
    this.iTextSpeed = t.readInt32(2, false, this.iTextSpeed)
    this.iTransitionType = t.readInt32(3, false, this.iTransitionType)
    this.iPopupStyle = t.readInt32(4, false, this.iPopupStyle)
    this.tBorderGroundFormat = t.readStruct(5, false, this.tBorderGroundFormat)
}

Huya.UidNickName = function () {
    this.lUid = 0
    this.sNickName = ""
}

Huya.UidNickName.prototype._clone = function () {
    return new Huya.UidNickName
}

Huya.UidNickName.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UidNickName.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UidNickName.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
}

Huya.UidNickName.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
}

Huya.SenderInfo = function () {
    this.lUid = 0
    this.lImid = 0
    this.sNickName = ""
    this.iGender = 0
    this.sAvatarUrl = ""
    this.iNobleLevel = 0
}

Huya.SenderInfo.prototype._clone = function () {
    return new Huya.SenderInfo
}

Huya.SenderInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SenderInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SenderInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lImid)
    t.writeString(2, this.sNickName)
    t.writeInt32(3, this.iGender)
    t.writeString(4, this.sAvatarUrl)
    t.writeInt32(5, this.iNobleLevel)
}

Huya.SenderInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lImid = t.readInt64(1, false, this.lImid)
    this.sNickName = t.readString(2, false, this.sNickName)
    this.iGender = t.readInt32(3, false, this.iGender)
    this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl)
    this.iNobleLevel = t.readInt32(5, false, this.iNobleLevel)
}

Huya.DecorationInfo = function () {
    this.iAppId = 0
    this.iViewType = 0
    this.vData = new Taf.BinBuffer
}

Huya.DecorationInfo.prototype._clone = function () {
    return new Huya.DecorationInfo
}

Huya.DecorationInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.DecorationInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.DecorationInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iAppId)
    t.writeInt32(1, this.iViewType)
    t.writeBytes(2, this.vData)
}

Huya.DecorationInfo.prototype.readFrom = function (t) {
    this.iAppId = t.readInt32(0, false, this.iAppId)
    this.iViewType = t.readInt32(1, false, this.iViewType)
    this.vData = t.readBytes(2, false, this.vData)
}

Huya.BulletBorderGroundFormat = function () {
    this.iEnableUse = 0
    this.iBorderThickness = 0
    this.iBorderColour = -1
    this.iBorderDiaphaneity = 100
    this.iGroundColour = -1
    this.iGroundColourDiaphaneity = 100
    this.sAvatarDecorationUrl = ""
}

Huya.BulletBorderGroundFormat.prototype._clone = function () {
    return new Huya.BulletBorderGroundFormat
}

Huya.BulletBorderGroundFormat.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BulletBorderGroundFormat.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BulletBorderGroundFormat.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iEnableUse)
    t.writeInt32(1, this.iBorderThickness)
    t.writeInt32(2, this.iBorderColour)
    t.writeInt32(3, this.iBorderDiaphaneity)
    t.writeInt32(4, this.iGroundColour)
    t.writeInt32(5, this.iGroundColourDiaphaneity)
    t.writeString(6, this.sAvatarDecorationUrl)
}

Huya.BulletBorderGroundFormat.prototype.readFrom = function (t) {
    this.iEnableUse = t.readInt32(0, false, this.iEnableUse)
    this.iBorderThickness = t.readInt32(1, false, this.iBorderThickness)
    this.iBorderColour = t.readInt32(2, false, this.iBorderColour)
    this.iBorderDiaphaneity = t.readInt32(3, false, this.iBorderDiaphaneity)
    this.iGroundColour = t.readInt32(4, false, this.iGroundColour)
    this.iGroundColourDiaphaneity = t.readInt32(5, false, this.iGroundColourDiaphaneity)
    this.sAvatarDecorationUrl = t.readString(6, false, this.sAvatarDecorationUrl)
}

Huya.EDecorationAppType = {
    kDecorationAppTypeCommon: 100,
    kDecorationAppTypeChannel: 1e4,
    kDecorationAppTypeGuildAdmin: 10090,
    kDecorationAppTypeAdmin: 10100,
    kDecorationAppTypeDaiyanClub: 10150,
    kDecorationAppTypeNoble: 10200,
    KDecorationAppTypeGuildVip: 10210,
    kDecorationAppTypeGuard: 10300,
    kDecorationAppTypeFans: 10400,
    kDecorationAppTypeVIP: 10500,
    kDecorationAppTypeUserProfile: 10560,
    kDecorationAppTyperPurpleDiamond: 10600,
    kDecorationAppTypeStamp: 10700,
    KDecorationAppTypeNobleEmoticon: 10800,
    KDecorationAppTypePresenter: 10900,
    KDecorationAppTypeFirstRecharge: 11e3,
    kDecorationAppTypeCheckRoom: 11100,
    kDecorationAppTypeTWatch: 11101
}
Huya.EDecorationViewType = {
    kDecorationViewTypeCustomized: 0,
    kDecorationViewTypeText: 1,
    kDecorationViewTypeIcon: 2
}
Huya.MsgCommDecoChannelRoleInfo = function () {
    this.iLevel = 0
}

Huya.MsgCommDecoChannelRoleInfo.prototype._clone = function () {
    return new Huya.MsgCommDecoChannelRoleInfo
}

Huya.MsgCommDecoChannelRoleInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MsgCommDecoChannelRoleInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MsgCommDecoChannelRoleInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iLevel)
}

Huya.MsgCommDecoChannelRoleInfo.prototype.readFrom = function (t) {
    this.iLevel = t.readInt32(0, false, this.iLevel)
}

Huya.GetStampRsp = function () {
    this.lUid = 0
    this.lStampUid = 0
    this.sStampNick = ""
    this.lStampTime = 0
    this.tStampInfo = new Huya.StampInfo
    this.lDeadline = 0
}

Huya.GetStampRsp.prototype._clone = function () {
    return new Huya.GetStampRsp
}

Huya.GetStampRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetStampRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetStampRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lStampUid)
    t.writeString(2, this.sStampNick)
    t.writeInt64(3, this.lStampTime)
    t.writeStruct(4, this.tStampInfo)
    t.writeInt64(5, this.lDeadline)
}

Huya.GetStampRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lStampUid = t.readInt64(1, false, this.lStampUid)
    this.sStampNick = t.readString(2, false, this.sStampNick)
    this.lStampTime = t.readInt64(3, false, this.lStampTime)
    this.tStampInfo = t.readStruct(4, false, this.tStampInfo)
    this.lDeadline = t.readInt64(5, false, this.lDeadline)
}

Huya.StampInfo = function () {
    this.iId = 0
    this.sStamp = ""
    this.iLevel = 0
    this.lStampPrice = 0
    this.iValidity = 0
}

Huya.StampInfo.prototype._clone = function () {
    return new Huya.StampInfo
}

Huya.StampInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.StampInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.StampInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iId)
    t.writeString(1, this.sStamp)
    t.writeInt32(2, this.iLevel)
    t.writeInt64(3, this.lStampPrice)
    t.writeInt32(4, this.iValidity)
}

Huya.StampInfo.prototype.readFrom = function (t) {
    this.iId = t.readInt32(0, false, this.iId)
    this.sStamp = t.readString(1, false, this.sStamp)
    this.iLevel = t.readInt32(2, false, this.iLevel)
    this.lStampPrice = t.readInt64(3, false, this.lStampPrice)
    this.iValidity = t.readInt32(4, false, this.iValidity)
}

Huya.MsgCommDecoIcon = function () {
    this.sUrl = ""
}

Huya.MsgCommDecoIcon.prototype._clone = function () {
    return new Huya.MsgCommDecoIcon
}

Huya.MsgCommDecoIcon.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MsgCommDecoIcon.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MsgCommDecoIcon.prototype.writeTo = function (t) {
    t.writeString(0, this.sUrl)
}

Huya.MsgCommDecoIcon.prototype.readFrom = function (t) {
    this.sUrl = t.readString(0, false, this.sUrl)
}

Huya.MsgCommDecoText = function () {
    this.sText = ""
    this.iColor = 0
}

Huya.MsgCommDecoText.prototype._clone = function () {
    return new Huya.MsgCommDecoText
}

Huya.MsgCommDecoText.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MsgCommDecoText.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MsgCommDecoText.prototype.writeTo = function (t) {
    t.writeString(0, this.sText)
    t.writeInt32(1, this.iColor)
}

Huya.MsgCommDecoText.prototype.readFrom = function (t) {
    this.sText = t.readString(0, false, this.sText)
    this.iColor = t.readInt32(1, false, this.iColor)
}

Huya.GetUserTypeRsp = function () {
    this.lUid = 0
    this.lPresenterUid = 0
    this.iType = 0
    this.tIsMutedRsp = new Huya.IsMutedRsp
    this.iGHManagerType = 0
}

Huya.GetUserTypeRsp.prototype._clone = function () {
    return new Huya.GetUserTypeRsp
}

Huya.GetUserTypeRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserTypeRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserTypeRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lPresenterUid)
    t.writeInt32(3, this.iType)
    t.writeStruct(4, this.tIsMutedRsp)
    t.writeInt32(5, this.iGHManagerType)
}

Huya.GetUserTypeRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid)
    this.iType = t.readInt32(3, false, this.iType)
    this.tIsMutedRsp = t.readStruct(4, false, this.tIsMutedRsp)
    this.iGHManagerType = t.readInt32(5, false, this.iGHManagerType)
}

Huya.IsMutedRsp = function () {
    this.bMuted = false
    this.iMutedTime = 0
    this.lAutoUnmutedTime = 0
    this.iMutedType = 0
}

Huya.IsMutedRsp.prototype._clone = function () {
    return new Huya.IsMutedRsp
}

Huya.IsMutedRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.IsMutedRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.IsMutedRsp.prototype.writeTo = function (t) {
    t.writeBoolean(0, this.bMuted)
    t.writeInt32(1, this.iMutedTime)
    t.writeInt64(2, this.lAutoUnmutedTime)
    t.writeInt32(3, this.iMutedType)
}

Huya.IsMutedRsp.prototype.readFrom = function (t) {
    this.bMuted = t.readBoolean(0, false, this.bMuted)
    this.iMutedTime = t.readInt32(1, false, this.iMutedTime)
    this.lAutoUnmutedTime = t.readInt64(2, false, this.lAutoUnmutedTime)
    this.iMutedType = t.readInt32(3, false, this.iMutedType)
}

Huya.MsgCommDecoGuardInfo = function () {
    this.iLevel = 0
}

Huya.MsgCommDecoGuardInfo.prototype._clone = function () {
    return new Huya.MsgCommDecoGuardInfo
}

Huya.MsgCommDecoGuardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MsgCommDecoGuardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MsgCommDecoGuardInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iLevel)
}

Huya.MsgCommDecoGuardInfo.prototype.readFrom = function (t) {
    this.iLevel = t.readInt32(0, false, this.iLevel)
}

Huya.PurpleVipInfo = function () {
    this.lUid = 0
    this.iIsSuper = 0
    this.iChargeType = 0
    this.iVipGrade = 0
    this.sIconUrl = ""
}

Huya.PurpleVipInfo.prototype._clone = function () {
    return new Huya.PurpleVipInfo
}

Huya.PurpleVipInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PurpleVipInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PurpleVipInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iIsSuper)
    t.writeInt32(2, this.iChargeType)
    t.writeInt32(3, this.iVipGrade)
    t.writeString(4, this.sIconUrl)
}

Huya.PurpleVipInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iIsSuper = t.readInt32(1, false, this.iIsSuper)
    this.iChargeType = t.readInt32(2, false, this.iChargeType)
    this.iVipGrade = t.readInt32(3, false, this.iVipGrade)
    this.sIconUrl = t.readString(4, false, this.sIconUrl)
}

Huya.VipListReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.iStart = 0
    this.iCount = 0
    this.lPid = 0
}

Huya.VipListReq.prototype._clone = function () {
    return new Huya.VipListReq
}

Huya.VipListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt32(3, this.iStart)
    t.writeInt32(4, this.iCount)
    t.writeInt64(5, this.lPid)
}

Huya.VipListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.iStart = t.readInt32(3, false, this.iStart)
    this.iCount = t.readInt32(4, false, this.iCount)
    this.lPid = t.readInt64(5, false, this.lPid)
}

Huya.VipBarListRsp = function () {
    this.iStart = 0
    this.iCount = 0
    this.iTotal = 0
    this.vVipBarItem = new Taf.Vector(new Huya.VipBarItem)
    this.sBadgeName = ""
    this.iChangedHighestRank = 0
    this.lPid = 0
    this.sVLogo = ""
}

Huya.VipBarListRsp.prototype._clone = function () {
    return new Huya.VipBarListRsp
}

Huya.VipBarListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipBarListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipBarListRsp.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iStart)
    t.writeInt32(2, this.iCount)
    t.writeInt32(3, this.iTotal)
    t.writeVector(4, this.vVipBarItem)
    t.writeString(5, this.sBadgeName)
    t.writeInt32(6, this.iChangedHighestRank)
    t.writeInt64(7, this.lPid)
    t.writeString(8, this.sVLogo)
}

Huya.VipBarListRsp.prototype.readFrom = function (t) {
    this.iStart = t.readInt32(1, false, this.iStart)
    this.iCount = t.readInt32(2, false, this.iCount)
    this.iTotal = t.readInt32(3, false, this.iTotal)
    this.vVipBarItem = t.readVector(4, false, this.vVipBarItem)
    this.sBadgeName = t.readString(5, false, this.sBadgeName)
    this.iChangedHighestRank = t.readInt32(6, false, this.iChangedHighestRank)
    this.lPid = t.readInt64(7, false, this.lPid)
    this.sVLogo = t.readString(8, false, this.sVLogo)
}

Huya.VipBarItem = function () {
    this.lUid = 0
    this.iTypes = 0
    this.tNobleInfo = new Huya.NobleInfo
    this.tGuardInfo = new Huya.GuardInfo
    this.tFansInfo = new Huya.FansInfo
    this.sNickName = ""
    this.iSuperPupleLevel = 0
    this.iPotentialTypes = 0
    this.sLogo = ""
    this.lExpiredTS = 0
    this.iUserLevel = 0
    this.sLon = ""
    this.sLat = ""
    this.sSession = ""
    this.tGuildMemInfo = new Huya.GuildMemInfo
    this.sLogoDecoUrl = ""
}

Huya.VipBarItem.prototype._clone = function () {
    return new Huya.VipBarItem
}

Huya.VipBarItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipBarItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipBarItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iTypes)
    t.writeStruct(2, this.tNobleInfo)
    t.writeStruct(3, this.tGuardInfo)
    t.writeStruct(4, this.tFansInfo)
    t.writeString(5, this.sNickName)
    t.writeInt32(6, this.iSuperPupleLevel)
    t.writeInt32(7, this.iPotentialTypes)
    t.writeString(8, this.sLogo)
    t.writeInt64(9, this.lExpiredTS)
    t.writeInt32(10, this.iUserLevel)
    t.writeString(13, this.sLon)
    t.writeString(14, this.sLat)
    t.writeString(15, this.sSession)
    t.writeStruct(16, this.tGuildMemInfo)
    t.writeString(17, this.sLogoDecoUrl)
}

Huya.VipBarItem.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iTypes = t.readInt32(1, false, this.iTypes)
    this.tNobleInfo = t.readStruct(2, false, this.tNobleInfo)
    this.tGuardInfo = t.readStruct(3, false, this.tGuardInfo)
    this.tFansInfo = t.readStruct(4, false, this.tFansInfo)
    this.sNickName = t.readString(5, false, this.sNickName)
    this.iSuperPupleLevel = t.readInt32(6, false, this.iSuperPupleLevel)
    this.iPotentialTypes = t.readInt32(7, false, this.iPotentialTypes)
    this.sLogo = t.readString(8, false, this.sLogo)
    this.lExpiredTS = t.readInt64(9, false, this.lExpiredTS)
    this.iUserLevel = t.readInt32(10, false, this.iUserLevel)
    this.sLon = t.readString(13, false, this.sLon)
    this.sLat = t.readString(14, false, this.sLat)
    this.sSession = t.readString(15, false, this.sSession)
    this.tGuildMemInfo = t.readStruct(16, false, this.tGuildMemInfo)
    this.sLogoDecoUrl = t.readString(17, false, this.sLogoDecoUrl)
}

Huya.GuildMemInfo = function () {
    this.iGuildVip = 0
}

Huya.GuildMemInfo.prototype._clone = function () {
    return new Huya.GuildMemInfo
}

Huya.GuildMemInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GuildMemInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GuildMemInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iGuildVip)
}

Huya.GuildMemInfo.prototype.readFrom = function (t) {
    this.iGuildVip = t.readInt32(0, false, this.iGuildVip)
}

Huya.WeekRankItem = function () {
    this.lUid = 0
    this.sNickName = ""
    this.iScore = 0
    this.iGuardLevel = 0
    this.iNobleLevel = 0
    this.sLogo = ""
    this.iUserLevel = 0
    this.iRank = 0
    this.lScore = 0
}

Huya.WeekRankItem.prototype._clone = function () {
    return new Huya.WeekRankItem
}

Huya.WeekRankItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekRankItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekRankItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeInt32(2, this.iScore)
    t.writeInt32(3, this.iGuardLevel)
    t.writeInt32(4, this.iNobleLevel)
    t.writeString(5, this.sLogo)
    t.writeInt32(6, this.iUserLevel)
    t.writeInt32(7, this.iRank)
    t.writeInt64(8, this.lScore)
}

Huya.WeekRankItem.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.iScore = t.readInt32(2, false, this.iScore)
    this.iGuardLevel = t.readInt32(3, false, this.iGuardLevel)
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel)
    this.sLogo = t.readString(5, false, this.sLogo)
    this.iUserLevel = t.readInt32(6, false, this.iUserLevel)
    this.iRank = t.readInt32(7, false, this.iRank)
    this.lScore = t.readInt64(8, false, this.lScore)
}

Huya.WeekRankListReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
}

Huya.WeekRankListReq.prototype._clone = function () {
    return new Huya.WeekRankListReq
}

Huya.WeekRankListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekRankListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekRankListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
}

Huya.WeekRankListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
}

Huya.WeekRankListRsp = function () {
    this.vWeekRankItem = new Taf.Vector(new Huya.WeekRankItem)
    this.iStart = 0
    this.iCount = 0
    this.iTotal = 0
    this.lPid = 0
}

Huya.WeekRankListRsp.prototype._clone = function () {
    return new Huya.WeekRankListRsp
}

Huya.WeekRankListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekRankListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekRankListRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vWeekRankItem)
    t.writeInt32(1, this.iStart)
    t.writeInt32(2, this.iCount)
    t.writeInt32(3, this.iTotal)
    t.writeInt64(4, this.lPid)
}

Huya.WeekRankListRsp.prototype.readFrom = function (t) {
    this.vWeekRankItem = t.readVector(0, false, this.vWeekRankItem)
    this.iStart = t.readInt32(1, false, this.iStart)
    this.iCount = t.readInt32(2, false, this.iCount)
    this.iTotal = t.readInt32(3, false, this.iTotal)
    this.lPid = t.readInt64(4, false, this.lPid)
}

Huya.WeekRankEnterBanner = function () {
    this.lUid = 0
    this.sNickName = ""
    this.iRank = 0
    this.lPid = 0
}

Huya.WeekRankEnterBanner.prototype._clone = function () {
    return new Huya.WeekRankEnterBanner
}

Huya.WeekRankEnterBanner.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekRankEnterBanner.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekRankEnterBanner.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeInt32(2, this.iRank)
    t.writeInt64(3, this.lPid)
}

Huya.WeekRankEnterBanner.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.iRank = t.readInt32(2, false, this.iRank)
    this.lPid = t.readInt64(3, false, this.lPid)
}

Huya.LiveListRsp = function () {
    this.vGameLiveInfos = new Taf.Vector(new Huya.GameLiveInfo)
    this.lNextBeginId = 0
}

Huya.LiveListRsp.prototype._clone = function () {
    return new Huya.LiveListRsp
}

Huya.LiveListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveListRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGameLiveInfos)
    t.writeInt64(1, this.lNextBeginId)
}

Huya.LiveListRsp.prototype.readFrom = function (t) {
    this.vGameLiveInfos = t.readVector(0, false, this.vGameLiveInfos)
    this.lNextBeginId = t.readInt64(1, false, this.lNextBeginId)
}

Huya.UserChannelReq = function () {
    this.tId = new Huya.UserId
    this.lTopcid = 0
    this.lSubcid = 0
    this.sSendContent = ""
}

Huya.UserChannelReq.prototype._clone = function () {
    return new Huya.UserChannelReq
}

Huya.UserChannelReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserChannelReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserChannelReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopcid)
    t.writeInt64(2, this.lSubcid)
    t.writeString(3, this.sSendContent)
}

Huya.UserChannelReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopcid = t.readInt64(1, false, this.lTopcid)
    this.lSubcid = t.readInt64(2, false, this.lSubcid)
    this.sSendContent = t.readString(3, false, this.sSendContent)
}

Huya.BadgeReq = function () {
    this.tUserId = new Huya.UserId
    this.lBadgeId = 0
    this.lToUid = 0
}

Huya.BadgeReq.prototype._clone = function () {
    return new Huya.BadgeReq
}

Huya.BadgeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lBadgeId)
    t.writeInt64(2, this.lToUid)
}

Huya.BadgeReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId)
    this.lToUid = t.readInt64(2, false, this.lToUid)
}

Huya.BadgeInfo = function () {
    this.lUid = 0
    this.lBadgeId = 0
    this.sPresenterNickName = ""
    this.sBadgeName = ""
    this.iBadgeLevel = 0
    this.iRank = 0
    this.iScore = 0
    this.iNextScore = 0
    this.iQuotaUsed = 0
    this.iQuota = 0
    this.lQuotaTS = 0
    this.lOpenTS = 0
    this.iVFlag = 0
    this.sVLogo = ""
    this.tChannelInfo = new Huya.PresenterChannelInfo
    this.sPresenterLogo = ""
    this.lVExpiredTS = 0
    this.iBadgeType = 0
    this.tFaithInfo = new Huya.FaithInfo
}

Huya.BadgeInfo.prototype._clone = function () {
    return new Huya.BadgeInfo
}

Huya.BadgeInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lBadgeId)
    t.writeString(2, this.sPresenterNickName)
    t.writeString(3, this.sBadgeName)
    t.writeInt32(4, this.iBadgeLevel)
    t.writeInt32(5, this.iRank)
    t.writeInt32(6, this.iScore)
    t.writeInt32(7, this.iNextScore)
    t.writeInt32(8, this.iQuotaUsed)
    t.writeInt32(9, this.iQuota)
    t.writeInt64(10, this.lQuotaTS)
    t.writeInt64(11, this.lOpenTS)
    t.writeInt32(12, this.iVFlag)
    t.writeString(13, this.sVLogo)
    t.writeStruct(14, this.tChannelInfo)
    t.writeString(15, this.sPresenterLogo)
    t.writeInt64(16, this.lVExpiredTS)
    t.writeInt32(17, this.iBadgeType)
    t.writeStruct(18, this.tFaithInfo)
}

Huya.BadgeInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId)
    this.sPresenterNickName = t.readString(2, false, this.sPresenterNickName)
    this.sBadgeName = t.readString(3, false, this.sBadgeName)
    this.iBadgeLevel = t.readInt32(4, false, this.iBadgeLevel)
    this.iRank = t.readInt32(5, false, this.iRank)
    this.iScore = t.readInt32(6, false, this.iScore)
    this.iNextScore = t.readInt32(7, false, this.iNextScore)
    this.iQuotaUsed = t.readInt32(8, false, this.iQuotaUsed)
    this.iQuota = t.readInt32(9, false, this.iQuota)
    this.lQuotaTS = t.readInt64(10, false, this.lQuotaTS)
    this.lOpenTS = t.readInt64(11, false, this.lOpenTS)
    this.iVFlag = t.readInt32(12, false, this.iVFlag)
    this.sVLogo = t.readString(13, false, this.sVLogo)
    this.tChannelInfo = t.readStruct(14, false, this.tChannelInfo)
    this.sPresenterLogo = t.readString(15, false, this.sPresenterLogo)
    this.lVExpiredTS = t.readInt64(16, false, this.lVExpiredTS)
    this.iBadgeType = t.readInt32(17, false, this.iBadgeType)
    this.tFaithInfo = t.readStruct(18, false, this.tFaithInfo)
}

Huya.BadgeScoreChanged = function () {
    this.iScoreChanged = 0
    this.iBadgeLevelChanged = 0
    this.iOverBadgeCountLimit = 0
    this.tBadgeInfo = new Huya.BadgeInfo
    this.iNewBadge = 0
    this.iBadgeOldLevel = 0
}

Huya.BadgeScoreChanged.prototype._clone = function () {
    return new Huya.BadgeScoreChanged
}

Huya.BadgeScoreChanged.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeScoreChanged.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeScoreChanged.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iScoreChanged)
    t.writeInt32(1, this.iBadgeLevelChanged)
    t.writeInt32(2, this.iOverBadgeCountLimit)
    t.writeStruct(3, this.tBadgeInfo)
    t.writeInt32(4, this.iNewBadge)
    t.writeInt32(5, this.iBadgeOldLevel)
}

Huya.BadgeScoreChanged.prototype.readFrom = function (t) {
    this.iScoreChanged = t.readInt32(0, false, this.iScoreChanged)
    this.iBadgeLevelChanged = t.readInt32(1, false, this.iBadgeLevelChanged)
    this.iOverBadgeCountLimit = t.readInt32(2, false, this.iOverBadgeCountLimit)
    this.tBadgeInfo = t.readStruct(3, false, this.tBadgeInfo)
    this.iNewBadge = t.readInt32(4, false, this.iNewBadge)
    this.iBadgeOldLevel = t.readInt32(5, false, this.iBadgeOldLevel)
}

Huya.FansTips = function () {
    this.iType = 0
    this.tBadgeInfo = new Huya.BadgeInfo
}

Huya.FansTips.prototype._clone = function () {
    return new Huya.FansTips
}

Huya.FansTips.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansTips.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansTips.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeStruct(1, this.tBadgeInfo)
}

Huya.FansTips.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.tBadgeInfo = t.readStruct(1, false, this.tBadgeInfo)
}

Huya.FansInfoNotice = function () {
    this.iFansLevel = 0
    this.iGreenPopUpCount = 0
    this.tTips = new Huya.FansTips
}

Huya.FansInfoNotice.prototype._clone = function () {
    return new Huya.FansInfoNotice
}

Huya.FansInfoNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansInfoNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansInfoNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iFansLevel)
    t.writeInt32(1, this.iGreenPopUpCount)
    t.writeStruct(2, this.tTips)
}

Huya.FansInfoNotice.prototype.readFrom = function (t) {
    this.iFansLevel = t.readInt32(0, false, this.iFansLevel)
    this.iGreenPopUpCount = t.readInt32(1, false, this.iGreenPopUpCount)
    this.tTips = t.readStruct(2, false, this.tTips)
}

Huya.BadgeInfoListReq = function () {
    this.tUserId = new Huya.UserId
    this.lToUid = 0
    this.iType = 0
}

Huya.BadgeInfoListReq.prototype._clone = function () {
    return new Huya.BadgeInfoListReq
}

Huya.BadgeInfoListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeInfoListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeInfoListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lToUid)
    t.writeInt32(2, this.iType)
}

Huya.BadgeInfoListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lToUid = t.readInt64(1, false, this.lToUid)
    this.iType = t.readInt32(2, false, this.iType)
}

Huya.BadgeInfoListRsp = function () {
    this.vBadgeInfo = new Taf.Vector(new Huya.BadgeInfo)
    this.lUsingBadgeId = 0
    this.lUid = 0
    this.iUsingBadgeType = 0
}

Huya.BadgeInfoListRsp.prototype._clone = function () {
    return new Huya.BadgeInfoListRsp
}

Huya.BadgeInfoListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeInfoListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeInfoListRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vBadgeInfo)
    t.writeInt64(1, this.lUsingBadgeId)
    t.writeInt64(2, this.lUid)
    t.writeInt32(3, this.iUsingBadgeType)
}

Huya.BadgeInfoListRsp.prototype.readFrom = function (t) {
    this.vBadgeInfo = t.readVector(0, false, this.vBadgeInfo)
    this.lUsingBadgeId = t.readInt64(1, false, this.lUsingBadgeId)
    this.lUid = t.readInt64(2, false, this.lUid)
    this.iUsingBadgeType = t.readInt32(3, false, this.iUsingBadgeType)
}

Huya.EnterPushInfo = function () {
    this.tNobleInfo = new Huya.NobleInfo
}

Huya.EnterPushInfo.prototype._clone = function () {
    return new Huya.EnterPushInfo
}

Huya.EnterPushInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.EnterPushInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.EnterPushInfo.prototype.writeTo = function (t) {
    t.writeStruct(1, this.tNobleInfo)
}

Huya.EnterPushInfo.prototype.readFrom = function (t) {
    this.tNobleInfo = t.readStruct(1, false, this.tNobleInfo)
}

Huya.GameAdvertisement = function () {
    this.sGameUrl = ""
    this.sPCLogoUrl = ""
    this.iPCLogoHeight = 0
    this.sGameAdName = ""
    this.iStatus = 0
    this.sWebLogoUrl = ""
    this.lID = 0
    this.sActivityName = ""
    this.sAppLogoUrl = ""
    this.sColorLogoUrl = ""
    this.sAlonePCLogoUrl = ""
    this.iJumpType = 0
    this.iClickVanish = 0
    this.tJump = new Huya.JumpChans
    this.lPid = 0
    this.sAssistantLogoUrl = ""
    this.sMobileGameLogoUrl = ""
}

Huya.GameAdvertisement.prototype._clone = function () {
    return new Huya.GameAdvertisement
}

Huya.GameAdvertisement.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameAdvertisement.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameAdvertisement.prototype.writeTo = function (t) {
    t.writeString(0, this.sGameUrl)
    t.writeString(1, this.sPCLogoUrl)
    t.writeInt32(2, this.iPCLogoHeight)
    t.writeString(3, this.sGameAdName)
    t.writeInt32(4, this.iStatus)
    t.writeString(5, this.sWebLogoUrl)
    t.writeInt64(6, this.lID)
    t.writeString(7, this.sActivityName)
    t.writeString(8, this.sAppLogoUrl)
    t.writeString(9, this.sColorLogoUrl)
    t.writeString(10, this.sAlonePCLogoUrl)
    t.writeInt32(11, this.iJumpType)
    t.writeInt32(12, this.iClickVanish)
    t.writeStruct(13, this.tJump)
    t.writeInt64(14, this.lPid)
    t.writeString(15, this.sAssistantLogoUrl)
    t.writeString(16, this.sMobileGameLogoUrl)
}

Huya.GameAdvertisement.prototype.readFrom = function (t) {
    this.sGameUrl = t.readString(0, false, this.sGameUrl)
    this.sPCLogoUrl = t.readString(1, false, this.sPCLogoUrl)
    this.iPCLogoHeight = t.readInt32(2, false, this.iPCLogoHeight)
    this.sGameAdName = t.readString(3, false, this.sGameAdName)
    this.iStatus = t.readInt32(4, false, this.iStatus)
    this.sWebLogoUrl = t.readString(5, false, this.sWebLogoUrl)
    this.lID = t.readInt64(6, false, this.lID)
    this.sActivityName = t.readString(7, false, this.sActivityName)
    this.sAppLogoUrl = t.readString(8, false, this.sAppLogoUrl)
    this.sColorLogoUrl = t.readString(9, false, this.sColorLogoUrl)
    this.sAlonePCLogoUrl = t.readString(10, false, this.sAlonePCLogoUrl)
    this.iJumpType = t.readInt32(11, false, this.iJumpType)
    this.iClickVanish = t.readInt32(12, false, this.iClickVanish)
    this.tJump = t.readStruct(13, false, this.tJump)
    this.lPid = t.readInt64(14, false, this.lPid)
    this.sAssistantLogoUrl = t.readString(15, false, this.sAssistantLogoUrl)
    this.sMobileGameLogoUrl = t.readString(16, false, this.sMobileGameLogoUrl)
}

Huya.JumpChans = function () {
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
    this.iGameId = 0
    this.lYYId = 0
    this.iSoucreType = 0
    this.iRoomId = 0
}

Huya.JumpChans.prototype._clone = function () {
    return new Huya.JumpChans
}

Huya.JumpChans.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.JumpChans.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.JumpChans.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt32(3, this.iGameId)
    t.writeInt64(4, this.lYYId)
    t.writeInt32(5, this.iSoucreType)
    t.writeInt32(6, this.iRoomId)
}

Huya.JumpChans.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.iGameId = t.readInt32(3, false, this.iGameId)
    this.lYYId = t.readInt64(4, false, this.lYYId)
    this.iSoucreType = t.readInt32(5, false, this.iSoucreType)
    this.iRoomId = t.readInt32(6, false, this.iRoomId)
}

Huya.AdvanceUserEnterNotice = function () {
    this.lUid = 0
    this.sNickName = ""
    this.iWeekRank = 0
    this.iGuardLevel = 0
    this.iNobleLevel = 0
    this.bFromNearby = false
    this.dDistance = 0
    this.sLocation = ""
    this.lPid = 0
    this.tDecorationInfo = new Huya.DecorationInfoRsp
}

Huya.AdvanceUserEnterNotice.prototype._clone = function () {
    return new Huya.AdvanceUserEnterNotice
}

Huya.AdvanceUserEnterNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AdvanceUserEnterNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AdvanceUserEnterNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeInt32(2, this.iWeekRank)
    t.writeInt32(3, this.iGuardLevel)
    t.writeInt32(4, this.iNobleLevel)
    t.writeBoolean(5, this.bFromNearby)
    t.writeDouble(6, this.dDistance)
    t.writeString(7, this.sLocation)
    t.writeInt64(8, this.lPid)
    t.writeStruct(9, this.tDecorationInfo)
}

Huya.AdvanceUserEnterNotice.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.iWeekRank = t.readInt32(2, false, this.iWeekRank)
    this.iGuardLevel = t.readInt32(3, false, this.iGuardLevel)
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel)
    this.bFromNearby = t.readBoolean(5, false, this.bFromNearby)
    this.dDistance = t.readDouble(6, false, this.dDistance)
    this.sLocation = t.readString(7, false, this.sLocation)
    this.lPid = t.readInt64(8, false, this.lPid)
    this.tDecorationInfo = t.readStruct(9, false, this.tDecorationInfo)
}

Huya.FansRankListRsp = function () {
    this.lBadgeId = 0
    this.sBadgeName = ""
    this.vFansRankItem = new Taf.Vector(new Huya.FansRankItem)
    this.iBadgeType = 0
}

Huya.FansRankListRsp.prototype._clone = function () {
    return new Huya.FansRankListRsp
}

Huya.FansRankListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansRankListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansRankListRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lBadgeId)
    t.writeString(1, this.sBadgeName)
    t.writeVector(2, this.vFansRankItem)
    t.writeInt32(3, this.iBadgeType)
}

Huya.FansRankListRsp.prototype.readFrom = function (t) {
    this.lBadgeId = t.readInt64(0, false, this.lBadgeId)
    this.sBadgeName = t.readString(1, false, this.sBadgeName)
    this.vFansRankItem = t.readVector(2, false, this.vFansRankItem)
    this.iBadgeType = t.readInt32(3, false, this.iBadgeType)
}

Huya.UserGiftNotice = function () {
    this.tFansGiftInfo = new Huya.GiftInfo
    this.tSuperPupleGiftInfo = new Huya.GiftInfo
}

Huya.UserGiftNotice.prototype._clone = function () {
    return new Huya.UserGiftNotice
}

Huya.UserGiftNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserGiftNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserGiftNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tFansGiftInfo)
    t.writeStruct(1, this.tSuperPupleGiftInfo)
}

Huya.UserGiftNotice.prototype.readFrom = function (t) {
    this.tFansGiftInfo = t.readStruct(0, false, this.tFansGiftInfo)
    this.tSuperPupleGiftInfo = t.readStruct(1, false, this.tSuperPupleGiftInfo)
}

Huya.GrandCeremonyChampionPresenter = function () {
    this.lUid = 0
    this.sNick = ""
}

Huya.GrandCeremonyChampionPresenter.prototype._clone = function () {
    return new Huya.GrandCeremonyChampionPresenter
}

Huya.GrandCeremonyChampionPresenter.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GrandCeremonyChampionPresenter.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GrandCeremonyChampionPresenter.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNick)
}

Huya.GrandCeremonyChampionPresenter.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNick = t.readString(1, false, this.sNick)
}

Huya.FansRankItem = function () {
    this.lUid = 0
    this.sNickName = ""
    this.iScore = 0
    this.iLevel = 0
}

Huya.FansRankItem.prototype._clone = function () {
    return new Huya.FansRankItem
}

Huya.FansRankItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansRankItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansRankItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeInt32(2, this.iScore)
    t.writeInt32(3, this.iLevel)
}

Huya.FansRankItem.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.iScore = t.readInt32(2, false, this.iScore)
    this.iLevel = t.readInt32(3, false, this.iLevel)
}

Huya.GuardInfo = function () {
    this.lUid = 0
    this.lPid = 0
    this.iGuardLevel = 0
    this.lEndTime = 0
}

Huya.GuardInfo.prototype._clone = function () {
    return new Huya.GuardInfo
}

Huya.GuardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GuardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GuardInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lPid)
    t.writeInt32(2, this.iGuardLevel)
    t.writeInt64(3, this.lEndTime)
}

Huya.GuardInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.iGuardLevel = t.readInt32(2, false, this.iGuardLevel)
    this.lEndTime = t.readInt64(3, false, this.lEndTime)
}

Huya.GetLivingInfoReq = function () {
    this.tId = new Huya.UserId
    this.lTopSid = 0
    this.lSubSid = 0
    this.lPresenterUid = 0
    this.sTraceSource = ""
    this.sPassword = ""
}

Huya.GetLivingInfoReq.prototype._clone = function () {
    return new Huya.GetLivingInfoReq
}

Huya.GetLivingInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetLivingInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetLivingInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt64(3, this.lPresenterUid)
    t.writeString(4, this.sTraceSource)
    t.writeString(5, this.sPassword)
}

Huya.GetLivingInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid)
    this.sTraceSource = t.readString(4, false, this.sTraceSource)
    this.sPassword = t.readString(5, false, this.sPassword)
}

Huya.GetLivingInfoRsp = function () {
    this.bIsLiving = 0
    this.tNotice = new Huya.BeginLiveNotice
    this.tStreamSettingNotice = new Huya.StreamSettingNotice
    this.bIsSelfLiving = 0
}

Huya.GetLivingInfoRsp.prototype._clone = function () {
    return new Huya.GetLivingInfoRsp
}

Huya.GetLivingInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetLivingInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetLivingInfoRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.bIsLiving)
    t.writeStruct(1, this.tNotice)
    t.writeStruct(2, this.tStreamSettingNotice)
    t.writeInt32(3, this.bIsSelfLiving)
}

Huya.GetLivingInfoRsp.prototype.readFrom = function (t) {
    this.bIsLiving = t.readInt32(0, false, this.bIsLiving)
    this.tNotice = t.readStruct(1, false, this.tNotice)
    this.tStreamSettingNotice = t.readStruct(2, false, this.tStreamSettingNotice)
    this.bIsSelfLiving = t.readInt32(3, false, this.bIsSelfLiving)
}

Huya.StreamInfo = function () {
    this.sCdnType = ""
    this.iIsMaster = 0
    this.lChannelId = 0
    this.lSubChannelId = 0
    this.lPresenterUid = 0
    this.sStreamName = ""
    this.sFlvUrl = ""
    this.sFlvUrlSuffix = ""
    this.sFlvAntiCode = ""
    this.sHlsUrl = ""
    this.sHlsUrlSuffix = ""
    this.sHlsAntiCode = ""
    this.iLineIndex = 0
    this.iIsMultiStream = 0
    this.iPCPriorityRate = 0
    this.iWebPriorityRate = 0
    this.iMobilePriorityRate = 0
    this.vFlvIPList = new Taf.Vector(new Taf.STRING)
    this.iIsP2PSupport = 0
    this.sP2pUrl = ""
    this.sP2pUrlSuffix = ""
    this.sP2pAntiCode = ""
    this.lFreeFlag = 0
    this.iIsHEVCSupport = 0
}

Huya.StreamInfo.prototype._clone = function () {
    return new Huya.StreamInfo
}

Huya.StreamInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.StreamInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.StreamInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sCdnType)
    t.writeInt32(1, this.iIsMaster)
    t.writeInt64(2, this.lChannelId)
    t.writeInt64(3, this.lSubChannelId)
    t.writeInt64(4, this.lPresenterUid)
    t.writeString(5, this.sStreamName)
    t.writeString(6, this.sFlvUrl)
    t.writeString(7, this.sFlvUrlSuffix)
    t.writeString(8, this.sFlvAntiCode)
    t.writeString(9, this.sHlsUrl)
    t.writeString(10, this.sHlsUrlSuffix)
    t.writeString(11, this.sHlsAntiCode)
    t.writeInt32(12, this.iLineIndex)
    t.writeInt32(13, this.iIsMultiStream)
    t.writeInt32(14, this.iPCPriorityRate)
    t.writeInt32(15, this.iWebPriorityRate)
    t.writeInt32(16, this.iMobilePriorityRate)
    t.writeVector(17, this.vFlvIPList)
    t.writeInt32(18, this.iIsP2PSupport)
    t.writeString(19, this.sP2pUrl)
    t.writeString(20, this.sP2pUrlSuffix)
    t.writeString(21, this.sP2pAntiCode)
    t.writeInt64(22, this.lFreeFlag)
    t.writeInt32(23, this.iIsHEVCSupport)
}

Huya.StreamInfo.prototype.readFrom = function (t) {
    this.sCdnType = t.readString(0, false, this.sCdnType)
    this.iIsMaster = t.readInt32(1, false, this.iIsMaster)
    this.lChannelId = t.readInt64(2, false, this.lChannelId)
    this.lSubChannelId = t.readInt64(3, false, this.lSubChannelId)
    this.lPresenterUid = t.readInt64(4, false, this.lPresenterUid)
    this.sStreamName = t.readString(5, false, this.sStreamName)
    this.sFlvUrl = t.readString(6, false, this.sFlvUrl)
    this.sFlvUrlSuffix = t.readString(7, false, this.sFlvUrlSuffix)
    this.sFlvAntiCode = t.readString(8, false, this.sFlvAntiCode)
    this.sHlsUrl = t.readString(9, false, this.sHlsUrl)
    this.sHlsUrlSuffix = t.readString(10, false, this.sHlsUrlSuffix)
    this.sHlsAntiCode = t.readString(11, false, this.sHlsAntiCode)
    this.iLineIndex = t.readInt32(12, false, this.iLineIndex)
    this.iIsMultiStream = t.readInt32(13, false, this.iIsMultiStream)
    this.iPCPriorityRate = t.readInt32(14, false, this.iPCPriorityRate)
    this.iWebPriorityRate = t.readInt32(15, false, this.iWebPriorityRate)
    this.iMobilePriorityRate = t.readInt32(16, false, this.iMobilePriorityRate)
    this.vFlvIPList = t.readVector(17, false, this.vFlvIPList)
    this.iIsP2PSupport = t.readInt32(18, false, this.iIsP2PSupport)
    this.sP2pUrl = t.readString(19, false, this.sP2pUrl)
    this.sP2pUrlSuffix = t.readString(20, false, this.sP2pUrlSuffix)
    this.sP2pAntiCode = t.readString(21, false, this.sP2pAntiCode)
    this.lFreeFlag = t.readInt64(22, false, this.lFreeFlag)
    this.iIsHEVCSupport = t.readInt32(23, false, this.iIsHEVCSupport)
}

Huya.MultiStreamInfo = function () {
    this.sDisplayName = ""
    this.iBitRate = 0
    this.iCodecType = 0
    this.iCompatibleFlag = 0
    this.iHEVCBitRate = -1
}

Huya.MultiStreamInfo.prototype._clone = function () {
    return new Huya.MultiStreamInfo
}

Huya.MultiStreamInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MultiStreamInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MultiStreamInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sDisplayName)
    t.writeInt32(1, this.iBitRate)
    t.writeInt32(2, this.iCodecType)
    t.writeInt32(3, this.iCompatibleFlag)
    t.writeInt32(4, this.iHEVCBitRate)
}

Huya.MultiStreamInfo.prototype.readFrom = function (t) {
    this.sDisplayName = t.readString(0, false, this.sDisplayName)
    this.iBitRate = t.readInt32(1, false, this.iBitRate)
    this.iCodecType = t.readInt32(2, false, this.iCodecType)
    this.iCompatibleFlag = t.readInt32(3, false, this.iCompatibleFlag)
    this.iHEVCBitRate = t.readInt32(4, false, this.iHEVCBitRate)
}

Huya.StreamSettingNotice = function () {
    this.lPresenterUid = 0
    this.iBitRate = 0
    this.iResolution = 0
    this.iFrameRate = 0
    this.lLiveId = 0
    this.sDisplayName = ""
}

Huya.StreamSettingNotice.prototype._clone = function () {
    return new Huya.StreamSettingNotice
}

Huya.StreamSettingNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.StreamSettingNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.StreamSettingNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPresenterUid)
    t.writeInt32(1, this.iBitRate)
    t.writeInt32(2, this.iResolution)
    t.writeInt32(3, this.iFrameRate)
    t.writeInt64(4, this.lLiveId)
    t.writeString(5, this.sDisplayName)
}

Huya.StreamSettingNotice.prototype.readFrom = function (t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid)
    this.iBitRate = t.readInt32(1, false, this.iBitRate)
    this.iResolution = t.readInt32(2, false, this.iResolution)
    this.iFrameRate = t.readInt32(3, false, this.iFrameRate)
    this.lLiveId = t.readInt64(4, false, this.lLiveId)
    this.sDisplayName = t.readString(5, false, this.sDisplayName)
}

Huya.FansInfo = function () {
    this.lUid = 0
    this.lBadgeId = 0
    this.iBadgeLevel = 0
    this.iScore = 0
    this.iVFlag = 0
    this.iBadgeType = 0
}

Huya.FansInfo.prototype._clone = function () {
    return new Huya.FansInfo
}

Huya.FansInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lBadgeId)
    t.writeInt32(2, this.iBadgeLevel)
    t.writeInt32(3, this.iScore)
    t.writeInt32(4, this.iVFlag)
    t.writeInt32(5, this.iBadgeType)
}

Huya.FansInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId)
    this.iBadgeLevel = t.readInt32(2, false, this.iBadgeLevel)
    this.iScore = t.readInt32(3, false, this.iScore)
    this.iVFlag = t.readInt32(4, false, this.iVFlag)
    this.iBadgeType = t.readInt32(5, false, this.iBadgeType)
}

Huya.GetCdnTokenReq = function () {
    this.url = ""
    this.cdn_type = ""
    this.stream_name = ""
    this.presenter_uid = 0
}

Huya.GetCdnTokenReq.prototype._clone = function () {
    return new Huya.GetCdnTokenReq
}

Huya.GetCdnTokenReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetCdnTokenReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetCdnTokenReq.prototype.writeTo = function (t) {
    t.writeString(0, this.url)
    t.writeString(1, this.cdn_type)
    t.writeString(2, this.stream_name)
    t.writeInt64(3, this.presenter_uid)
}

Huya.GetCdnTokenReq.prototype.readFrom = function (t) {
    this.url = t.readString(0, false, this.url)
    this.cdn_type = t.readString(1, false, this.cdn_type)
    this.stream_name = t.readString(2, false, this.stream_name)
    this.presenter_uid = t.readInt64(3, false, this.presenter_uid)
}

Huya.GetCdnTokenRsp = function () {
    this.url = ""
    this.cdn_type = ""
    this.stream_name = ""
    this.presenter_uid = 0
    this.anti_code = ""
    this.sTime = ""
    this.flv_anti_code = ""
    this.hls_anti_code = ""
}

Huya.GetCdnTokenRsp.prototype._clone = function () {
    return new Huya.GetCdnTokenRsp
}

Huya.GetCdnTokenRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetCdnTokenRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetCdnTokenRsp.prototype.writeTo = function (t) {
    t.writeString(0, this.url)
    t.writeString(1, this.cdn_type)
    t.writeString(2, this.stream_name)
    t.writeInt64(3, this.presenter_uid)
    t.writeString(4, this.anti_code)
    t.writeString(5, this.sTime)
    t.writeString(6, this.flv_anti_code)
    t.writeString(7, this.hls_anti_code)
}

Huya.GetCdnTokenRsp.prototype.readFrom = function (t) {
    this.url = t.readString(0, false, this.url)
    this.cdn_type = t.readString(1, false, this.cdn_type)
    this.stream_name = t.readString(2, false, this.stream_name)
    this.presenter_uid = t.readInt64(3, false, this.presenter_uid)
    this.anti_code = t.readString(4, false, this.anti_code)
    this.sTime = t.readString(5, false, this.sTime)
    this.flv_anti_code = t.readString(6, false, this.flv_anti_code)
    this.hls_anti_code = t.readString(7, false, this.hls_anti_code)
}

Huya.LiveLaunchReq = function () {
    this.tId = new Huya.UserId
    this.tLiveUB = new Huya.LiveUserbase
    this.bSupportDomain = 0
}

Huya.LiveLaunchReq.prototype._clone = function () {
    return new Huya.LiveLaunchReq
}

Huya.LiveLaunchReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveLaunchReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveLaunchReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tLiveUB)
    t.writeInt32(2, this.bSupportDomain)
}

Huya.LiveLaunchReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tLiveUB = t.readStruct(1, false, this.tLiveUB)
    this.bSupportDomain = t.readInt32(2, false, this.bSupportDomain)
}

Huya.LiveLaunchRsp = function () {
    this.sGuid = ""
    this.iTime = 0
    this.vProxyList = new Taf.Vector(new Huya.LiveProxyValue)
    this.eAccess = 0
    this.sClientIp = ""
}

Huya.LiveLaunchRsp.prototype._clone = function () {
    return new Huya.LiveLaunchRsp
}

Huya.LiveLaunchRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveLaunchRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveLaunchRsp.prototype.writeTo = function (t) {
    t.writeString(0, this.sGuid)
    t.writeInt32(1, this.iTime)
    t.writeVector(2, this.vProxyList)
    t.writeInt32(3, this.eAccess)
    t.writeString(4, this.sClientIp)
}

Huya.LiveLaunchRsp.prototype.readFrom = function (t) {
    this.sGuid = t.readString(0, false, this.sGuid)
    this.iTime = t.readInt32(1, false, this.iTime)
    this.vProxyList = t.readVector(2, false, this.vProxyList)
    this.eAccess = t.readInt32(3, false, this.eAccess)
    this.sClientIp = t.readString(4, false, this.sClientIp)
}

Huya.LiveAppUAEx = function () {
    this.sIMEI = ""
    this.sAPN = ""
    this.sNetType = ""
    this.sDeviceId = ""
}

Huya.LiveAppUAEx.prototype._clone = function () {
    return new Huya.LiveAppUAEx
}

Huya.LiveAppUAEx.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveAppUAEx.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveAppUAEx.prototype.writeTo = function (t) {
    t.writeString(1, this.sIMEI)
    t.writeString(2, this.sAPN)
    t.writeString(3, this.sNetType)
    t.writeString(4, this.sDeviceId)
}

Huya.LiveAppUAEx.prototype.readFrom = function (t) {
    this.sIMEI = t.readString(1, false, this.sIMEI)
    this.sAPN = t.readString(2, false, this.sAPN)
    this.sNetType = t.readString(3, false, this.sNetType)
    this.sDeviceId = t.readString(4, false, this.sDeviceId)
}

Huya.LiveUserbase = function () {
    this.eSource = 0
    this.eType = 0
    this.tUAEx = new Huya.LiveAppUAEx
}

Huya.LiveUserbase.prototype._clone = function () {
    return new Huya.LiveUserbase
}

Huya.LiveUserbase.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveUserbase.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveUserbase.prototype.writeTo = function (t) {
    t.writeInt32(0, this.eSource)
    t.writeInt32(1, this.eType)
    t.writeStruct(2, this.tUAEx)
}

Huya.LiveUserbase.prototype.readFrom = function (t) {
    this.eSource = t.readInt32(0, false, this.eSource)
    this.eType = t.readInt32(1, false, this.eType)
    this.tUAEx = t.readStruct(2, false, this.tUAEx)
}

Huya.LiveProxyValue = function () {
    this.eProxyType = 0
    this.sProxy = new Taf.Vector(new Taf.STRING)
}

Huya.LiveProxyValue.prototype._clone = function () {
    return new Huya.LiveProxyValue
}

Huya.LiveProxyValue.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveProxyValue.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveProxyValue.prototype.writeTo = function (t) {
    t.writeInt32(0, this.eProxyType)
    t.writeVector(1, this.sProxy)
}

Huya.LiveProxyValue.prototype.readFrom = function (t) {
    this.eProxyType = t.readInt32(0, false, this.eProxyType)
    this.sProxy = t.readVector(1, false, this.sProxy)
}

Huya.SendCardPackageItemReq = function () {
    this.tId = new Huya.UserId
    this.lSid = 0
    this.lSubSid = 0
    this.iShowFreeitemInfo = 0
    this.iItemType = 0
    this.iItemCount = 0
    this.lPresenterUid = 0
    this.sPayId = ""
    this.sSendContent = ""
    this.sSenderNick = ""
    this.sPresenterNick = ""
    this.iPayPloy = 0
    this.iItemCountByGroup = 0
    this.iItemGroup = 0
    this.iSuperPupleLevel = 0
    this.iFromType = 0
    this.sExpand = ""
    this.sToken = ""
    this.iTemplateType = 0
    this.sTokencaKey = ""
    this.sPassport = ""
    this.iSenderShortSid = 0
    this.iPayByFreeItem = 0
    this.tExtUser = new Huya.ExternalUser
    this.iEventType = 0
    this.mapParam = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.lRoomId = 0
    this.lHomeOwnerUid = 0
}

Huya.SendCardPackageItemReq.prototype._clone = function () {
    return new Huya.SendCardPackageItemReq
}

Huya.SendCardPackageItemReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendCardPackageItemReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendCardPackageItemReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt32(3, this.iShowFreeitemInfo)
    t.writeInt32(4, this.iItemType)
    t.writeInt32(5, this.iItemCount)
    t.writeInt64(6, this.lPresenterUid)
    t.writeString(7, this.sPayId)
    t.writeString(9, this.sSendContent)
    t.writeString(10, this.sSenderNick)
    t.writeString(11, this.sPresenterNick)
    t.writeInt32(12, this.iPayPloy)
    t.writeInt32(13, this.iItemCountByGroup)
    t.writeInt32(14, this.iItemGroup)
    t.writeInt32(15, this.iSuperPupleLevel)
    t.writeInt32(16, this.iFromType)
    t.writeString(17, this.sExpand)
    t.writeString(18, this.sToken)
    t.writeInt32(19, this.iTemplateType)
    t.writeString(20, this.sTokencaKey)
    t.writeString(21, this.sPassport)
    t.writeInt64(22, this.iSenderShortSid)
    t.writeInt32(23, this.iPayByFreeItem)
    t.writeStruct(24, this.tExtUser)
    t.writeInt16(25, this.iEventType)
    t.writeMap(26, this.mapParam)
    t.writeInt64(27, this.lRoomId)
    t.writeInt64(28, this.lHomeOwnerUid)
}

Huya.SendCardPackageItemReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.iShowFreeitemInfo = t.readInt32(3, false, this.iShowFreeitemInfo)
    this.iItemType = t.readInt32(4, false, this.iItemType)
    this.iItemCount = t.readInt32(5, false, this.iItemCount)
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid)
    this.sPayId = t.readString(7, false, this.sPayId)
    this.sSendContent = t.readString(9, false, this.sSendContent)
    this.sSenderNick = t.readString(10, false, this.sSenderNick)
    this.sPresenterNick = t.readString(11, false, this.sPresenterNick)
    this.iPayPloy = t.readInt32(12, false, this.iPayPloy)
    this.iItemCountByGroup = t.readInt32(13, false, this.iItemCountByGroup)
    this.iItemGroup = t.readInt32(14, false, this.iItemGroup)
    this.iSuperPupleLevel = t.readInt32(15, false, this.iSuperPupleLevel)
    this.iFromType = t.readInt32(16, false, this.iFromType)
    this.sExpand = t.readString(17, false, this.sExpand)
    this.sToken = t.readString(18, false, this.sToken)
    this.iTemplateType = t.readInt32(19, false, this.iTemplateType)
    this.sTokencaKey = t.readString(20, false, this.sTokencaKey)
    this.sPassport = t.readString(21, false, this.sPassport)
    this.iSenderShortSid = t.readInt64(22, false, this.iSenderShortSid)
    this.iPayByFreeItem = t.readInt32(23, false, this.iPayByFreeItem)
    this.tExtUser = t.readStruct(24, false, this.tExtUser)
    this.iEventType = t.readInt16(25, false, this.iEventType)
    this.mapParam = t.readMap(26, false, this.mapParam)
    this.lRoomId = t.readInt64(27, false, this.lRoomId)
    this.lHomeOwnerUid = t.readInt64(28, false, this.lHomeOwnerUid)
}

Huya.SendCardPackageItemRsp = function () {
    this.iPayRespCode = 0
    this.iItemType = 0
    this.iItemCount = 0
    this.strPayId = ""
    this.strPayConfirmUrl = ""
    this.strSendContent = ""
    this.iItemCountByGroup = 0
    this.iItemGroup = 0
    this.lPresenterUid = 0
    this.sExpand = ""
    this.strPayItemInfo = ""
    this.iPayType = 0
    this.sMsg = ""
}

Huya.SendCardPackageItemRsp.prototype._clone = function () {
    return new Huya.SendCardPackageItemRsp
}

Huya.SendCardPackageItemRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendCardPackageItemRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendCardPackageItemRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iPayRespCode)
    t.writeInt32(1, this.iItemType)
    t.writeInt32(2, this.iItemCount)
    t.writeString(3, this.strPayId)
    t.writeString(4, this.strPayConfirmUrl)
    t.writeString(5, this.strSendContent)
    t.writeInt32(6, this.iItemCountByGroup)
    t.writeInt32(7, this.iItemGroup)
    t.writeInt64(8, this.lPresenterUid)
    t.writeString(9, this.sExpand)
    t.writeString(10, this.strPayItemInfo)
    t.writeInt32(11, this.iPayType)
    t.writeString(12, this.sMsg)
}

Huya.SendCardPackageItemRsp.prototype.readFrom = function (t) {
    this.iPayRespCode = t.readInt32(0, false, this.iPayRespCode)
    this.iItemType = t.readInt32(1, false, this.iItemType)
    this.iItemCount = t.readInt32(2, false, this.iItemCount)
    this.strPayId = t.readString(3, false, this.strPayId)
    this.strPayConfirmUrl = t.readString(4, false, this.strPayConfirmUrl)
    this.strSendContent = t.readString(5, false, this.strSendContent)
    this.iItemCountByGroup = t.readInt32(6, false, this.iItemCountByGroup)
    this.iItemGroup = t.readInt32(7, false, this.iItemGroup)
    this.lPresenterUid = t.readInt64(8, false, this.lPresenterUid)
    this.sExpand = t.readString(9, false, this.sExpand)
    this.strPayItemInfo = t.readString(10, false, this.strPayItemInfo)
    this.iPayType = t.readInt32(11, false, this.iPayType)
    this.sMsg = t.readString(12, false, this.sMsg)
}

Huya.GetVerificationStatusReq = function () {
    this.tId = new Huya.UserId
}

Huya.GetVerificationStatusReq.prototype._clone = function () {
    return new Huya.GetVerificationStatusReq
}

Huya.GetVerificationStatusReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetVerificationStatusReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetVerificationStatusReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
}

Huya.GetVerificationStatusReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
}

Huya.GetFirstRechargePkgStatusReq = function () {
    this.tId = new Huya.UserId
}

Huya.GetFirstRechargePkgStatusReq.prototype._clone = function () {
    return new Huya.GetFirstRechargePkgStatusReq
}

Huya.GetFirstRechargePkgStatusReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetFirstRechargePkgStatusReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetFirstRechargePkgStatusReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
}

Huya.GetFirstRechargePkgStatusReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
}

Huya.MuteRoomUserReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
    this.sText = ""
    this.lPresenterUid = 0
    this.lSubcid = 0
    this.iMutedTime = 0
    this.iMutedAction = 0
    this.iReasonType = 0
    this.sReason = ""
}

Huya.MuteRoomUserReq.prototype._clone = function () {
    return new Huya.MuteRoomUserReq
}

Huya.MuteRoomUserReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MuteRoomUserReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MuteRoomUserReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
    t.writeString(2, this.sText)
    t.writeInt64(3, this.lPresenterUid)
    t.writeInt64(4, this.lSubcid)
    t.writeInt32(5, this.iMutedTime)
    t.writeInt32(6, this.iMutedAction)
    t.writeInt32(7, this.iReasonType)
    t.writeString(8, this.sReason)
}

Huya.MuteRoomUserReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
    this.sText = t.readString(2, false, this.sText)
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid)
    this.lSubcid = t.readInt64(4, false, this.lSubcid)
    this.iMutedTime = t.readInt32(5, false, this.iMutedTime)
    this.iMutedAction = t.readInt32(6, false, this.iMutedAction)
    this.iReasonType = t.readInt32(7, false, this.iReasonType)
    this.sReason = t.readString(8, false, this.sReason)
}

Huya.MuteRoomUserRsp = function () {
    this.iRetCode = 0
    this.sMsg = ""
}

Huya.MuteRoomUserRsp.prototype._clone = function () {
    return new Huya.MuteRoomUserRsp
}

Huya.MuteRoomUserRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MuteRoomUserRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MuteRoomUserRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRetCode)
    t.writeString(1, this.sMsg)
}

Huya.MuteRoomUserRsp.prototype.readFrom = function (t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode)
    this.sMsg = t.readString(1, false, this.sMsg)
}

Huya.GetVerificationStatusResp = function () {
    this.iStatus = 0
    this.lExpenditure = 0
}

Huya.GetVerificationStatusResp.prototype._clone = function () {
    return new Huya.GetVerificationStatusResp
}

Huya.GetVerificationStatusResp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetVerificationStatusResp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetVerificationStatusResp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iStatus)
    t.writeInt64(1, this.lExpenditure)
}

Huya.GetVerificationStatusResp.prototype.readFrom = function (t) {
    this.iStatus = t.readInt32(0, false, this.iStatus)
    this.lExpenditure = t.readInt64(1, false, this.lExpenditure)
}

Huya.GetFirstRechargePkgStatusResp = function () {
    this.iStatus = 0
    this.iFetch = 0
    this.sTip = ""
}

Huya.GetFirstRechargePkgStatusResp.prototype._clone = function () {
    return new Huya.GetFirstRechargePkgStatusResp
}

Huya.GetFirstRechargePkgStatusResp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetFirstRechargePkgStatusResp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetFirstRechargePkgStatusResp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iStatus)
    t.writeInt32(1, this.iFetch)
    t.writeString(2, this.sTip)
}

Huya.GetFirstRechargePkgStatusResp.prototype.readFrom = function (t) {
    this.iStatus = t.readInt32(0, false, this.iStatus)
    this.iFetch = t.readInt32(1, false, this.iFetch)
    this.sTip = t.readString(2, false, this.sTip)
}

Huya.SendItemSubBroadcastPacket = function () {
    this.iItemType = 0
    this.strPayId = ""
    this.iItemCount = 0
    this.lPresenterUid = 0
    this.lSenderUid = 0
    this.sPresenterNick = ""
    this.sSenderNick = ""
    this.sSendContent = ""
    this.iItemCountByGroup = 0
    this.iItemGroup = 0
    this.iSuperPupleLevel = 0
    this.iComboScore = 0
    this.iDisplayInfo = 0
    this.iEffectType = 0
    this.iSenderIcon = ""
    this.iPresenterIcon = ""
    this.iTemplateType = 0
    this.sExpand = ""
    this.bBusi = false
    this.iColorEffectType = 0
    this.sPropsName = ""
    this.iAccpet = 0
    this.iEventType = 0
    this.userInfo = new Huya.UserIdentityInfo
    this.lRoomId = 0
    this.lHomeOwnerUid = 0
    this.streamerInfo = new Huya.StreamerNode
}

Huya.SendItemSubBroadcastPacket.prototype._clone = function () {
    return new Huya.SendItemSubBroadcastPacket
}

Huya.SendItemSubBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendItemSubBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendItemSubBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType)
    t.writeString(1, this.strPayId)
    t.writeInt32(2, this.iItemCount)
    t.writeInt64(3, this.lPresenterUid)
    t.writeInt64(4, this.lSenderUid)
    t.writeString(5, this.sPresenterNick)
    t.writeString(6, this.sSenderNick)
    t.writeString(7, this.sSendContent)
    t.writeInt32(8, this.iItemCountByGroup)
    t.writeInt32(9, this.iItemGroup)
    t.writeInt32(10, this.iSuperPupleLevel)
    t.writeInt32(11, this.iComboScore)
    t.writeInt32(12, this.iDisplayInfo)
    t.writeInt32(13, this.iEffectType)
    t.writeString(14, this.iSenderIcon)
    t.writeString(15, this.iPresenterIcon)
    t.writeInt32(16, this.iTemplateType)
    t.writeString(17, this.sExpand)
    t.writeBoolean(18, this.bBusi)
    t.writeInt32(19, this.iColorEffectType)
    t.writeString(20, this.sPropsName)
    t.writeInt16(21, this.iAccpet)
    t.writeInt16(22, this.iEventType)
    t.writeStruct(23, this.userInfo)
    t.writeInt64(24, this.lRoomId)
    t.writeInt64(25, this.lHomeOwnerUid)
    t.writeStruct(26, this.streamerInfo)
}

Huya.SendItemSubBroadcastPacket.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType)
    this.strPayId = t.readString(1, false, this.strPayId)
    this.iItemCount = t.readInt32(2, false, this.iItemCount)
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid)
    this.lSenderUid = t.readInt64(4, false, this.lSenderUid)
    this.sPresenterNick = t.readString(5, false, this.sPresenterNick)
    this.sSenderNick = t.readString(6, false, this.sSenderNick)
    this.sSendContent = t.readString(7, false, this.sSendContent)
    this.iItemCountByGroup = t.readInt32(8, false, this.iItemCountByGroup)
    this.iItemGroup = t.readInt32(9, false, this.iItemGroup)
    this.iSuperPupleLevel = t.readInt32(10, false, this.iSuperPupleLevel)
    this.iComboScore = t.readInt32(11, false, this.iComboScore)
    this.iDisplayInfo = t.readInt32(12, false, this.iDisplayInfo)
    this.iEffectType = t.readInt32(13, false, this.iEffectType)
    this.iSenderIcon = t.readString(14, false, this.iSenderIcon)
    this.iPresenterIcon = t.readString(15, false, this.iPresenterIcon)
    this.iTemplateType = t.readInt32(16, false, this.iTemplateType)
    this.sExpand = t.readString(17, false, this.sExpand)
    this.bBusi = t.readBoolean(18, false, this.bBusi)
    this.iColorEffectType = t.readInt32(19, false, this.iColorEffectType)
    this.sPropsName = t.readString(20, false, this.sPropsName)
    this.iAccpet = t.readInt16(21, false, this.iAccpet)
    this.iEventType = t.readInt16(22, false, this.iEventType)
    this.userInfo = t.readStruct(23, false, this.userInfo)
    this.lRoomId = t.readInt64(24, false, this.lRoomId)
    this.lHomeOwnerUid = t.readInt64(25, false, this.lHomeOwnerUid)
    this.streamerInfo = t.readStruct(26, false, this.streamerInfo)
}

Huya.SendItemNoticeWordBroadcastPacket = function () {
    this.iItemType = 0
    this.iItemCount = 0
    this.lSenderSid = 0
    this.lSenderUid = 0
    this.sSenderNick = ""
    this.lPresenterUid = 0
    this.sPresenterNick = ""
    this.lNoticeChannelCount = 0
    this.iItemCountByGroup = 0
    this.iItemGroup = 0
    this.iDisplayInfo = 0
    this.iSuperPupleLevel = 0
    this.iTemplateType = 0
    this.sExpand = ""
    this.bBusi = false
    this.iShowTime = 0
    this.lPresenterYY = 0
    this.lSid = 0
    this.lSubSid = 0
    this.lRoomId = 0
}

Huya.SendItemNoticeWordBroadcastPacket.prototype._clone = function () {
    return new Huya.SendItemNoticeWordBroadcastPacket
}

Huya.SendItemNoticeWordBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendItemNoticeWordBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendItemNoticeWordBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType)
    t.writeInt32(1, this.iItemCount)
    t.writeInt64(2, this.lSenderSid)
    t.writeInt64(3, this.lSenderUid)
    t.writeString(4, this.sSenderNick)
    t.writeInt64(5, this.lPresenterUid)
    t.writeString(6, this.sPresenterNick)
    t.writeInt64(7, this.lNoticeChannelCount)
    t.writeInt32(8, this.iItemCountByGroup)
    t.writeInt32(9, this.iItemGroup)
    t.writeInt32(10, this.iDisplayInfo)
    t.writeInt32(11, this.iSuperPupleLevel)
    t.writeInt32(12, this.iTemplateType)
    t.writeString(13, this.sExpand)
    t.writeBoolean(14, this.bBusi)
    t.writeInt32(15, this.iShowTime)
    t.writeInt64(16, this.lPresenterYY)
    t.writeInt64(17, this.lSid)
    t.writeInt64(18, this.lSubSid)
    t.writeInt64(19, this.lRoomId)
}

Huya.SendItemNoticeWordBroadcastPacket.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType)
    this.iItemCount = t.readInt32(1, false, this.iItemCount)
    this.lSenderSid = t.readInt64(2, false, this.lSenderSid)
    this.lSenderUid = t.readInt64(3, false, this.lSenderUid)
    this.sSenderNick = t.readString(4, false, this.sSenderNick)
    this.lPresenterUid = t.readInt64(5, false, this.lPresenterUid)
    this.sPresenterNick = t.readString(6, false, this.sPresenterNick)
    this.lNoticeChannelCount = t.readInt64(7, false, this.lNoticeChannelCount)
    this.iItemCountByGroup = t.readInt32(8, false, this.iItemCountByGroup)
    this.iItemGroup = t.readInt32(9, false, this.iItemGroup)
    this.iDisplayInfo = t.readInt32(10, false, this.iDisplayInfo)
    this.iSuperPupleLevel = t.readInt32(11, false, this.iSuperPupleLevel)
    this.iTemplateType = t.readInt32(12, false, this.iTemplateType)
    this.sExpand = t.readString(13, false, this.sExpand)
    this.bBusi = t.readBoolean(14, false, this.bBusi)
    this.iShowTime = t.readInt32(15, false, this.iShowTime)
    this.lPresenterYY = t.readInt64(16, false, this.lPresenterYY)
    this.lSid = t.readInt64(17, false, this.lSid)
    this.lSubSid = t.readInt64(18, false, this.lSubSid)
    this.lRoomId = t.readInt64(19, false, this.lRoomId)
}

Huya.BeginLiveNotice = function () {
    this.lPresenterUid = 0
    this.iGameId = 0
    this.sGameName = ""
    this.iRandomRange = 0
    this.iStreamType = 0
    this.vStreamInfo = new Taf.Vector(new Huya.StreamInfo)
    this.vCdnList = new Taf.Vector(new Taf.STRING)
    this.lLiveId = 0
    this.iPCDefaultBitRate = 0
    this.iWebDefaultBitRate = 0
    this.iMobileDefaultBitRate = 0
    this.lMultiStreamFlag = 0
    this.sNick = ""
    this.lYYId = 0
    this.lAttendeeCount = 0
    this.iCodecType = 0
    this.iScreenType = 0
    this.vMultiStreamInfo = new Taf.Vector(new Huya.MultiStreamInfo)
    this.sLiveDesc = ""
    this.lLiveCompatibleFlag = 0
    this.sAvatarUrl = ""
    this.iSourceType = 0
    this.sSubchannelName = ""
    this.sVideoCaptureUrl = ""
    this.iStartTime = 0
    this.lChannelId = 0
    this.lSubChannelId = 0
    this.sLocation = ""
    this.iCdnPolicyLevel = 0
    this.iGameType = 0
    this.mMiscInfo = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.iShortChannel = 0
    this.iRoomId = 0
    this.bIsRoomSecret = 0
    this.iHashPolicy = 0
}

Huya.BeginLiveNotice.prototype._clone = function () {
    return new Huya.BeginLiveNotice
}

Huya.BeginLiveNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BeginLiveNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BeginLiveNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPresenterUid)
    t.writeInt32(1, this.iGameId)
    t.writeString(2, this.sGameName)
    t.writeInt32(3, this.iRandomRange)
    t.writeInt32(4, this.iStreamType)
    t.writeVector(5, this.vStreamInfo)
    t.writeVector(6, this.vCdnList)
    t.writeInt64(7, this.lLiveId)
    t.writeInt32(8, this.iPCDefaultBitRate)
    t.writeInt32(9, this.iWebDefaultBitRate)
    t.writeInt32(10, this.iMobileDefaultBitRate)
    t.writeInt64(11, this.lMultiStreamFlag)
    t.writeString(12, this.sNick)
    t.writeInt64(13, this.lYYId)
    t.writeInt64(14, this.lAttendeeCount)
    t.writeInt32(15, this.iCodecType)
    t.writeInt32(16, this.iScreenType)
    t.writeVector(17, this.vMultiStreamInfo)
    t.writeString(18, this.sLiveDesc)
    t.writeInt64(19, this.lLiveCompatibleFlag)
    t.writeString(20, this.sAvatarUrl)
    t.writeInt32(21, this.iSourceType)
    t.writeString(22, this.sSubchannelName)
    t.writeString(23, this.sVideoCaptureUrl)
    t.writeInt32(24, this.iStartTime)
    t.writeInt64(25, this.lChannelId)
    t.writeInt64(26, this.lSubChannelId)
    t.writeString(27, this.sLocation)
    t.writeInt32(28, this.iCdnPolicyLevel)
    t.writeInt32(29, this.iGameType)
    t.writeMap(30, this.mMiscInfo)
    t.writeInt32(31, this.iShortChannel)
    t.writeInt32(32, this.iRoomId)
    t.writeInt32(33, this.bIsRoomSecret)
    t.writeInt32(34, this.iHashPolicy)
}

Huya.BeginLiveNotice.prototype.readFrom = function (t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid)
    this.iGameId = t.readInt32(1, false, this.iGameId)
    this.sGameName = t.readString(2, false, this.sGameName)
    this.iRandomRange = t.readInt32(3, false, this.iRandomRange)
    this.iStreamType = t.readInt32(4, false, this.iStreamType)
    this.vStreamInfo = t.readVector(5, false, this.vStreamInfo)
    this.vCdnList = t.readVector(6, false, this.vCdnList)
    this.lLiveId = t.readInt64(7, false, this.lLiveId)
    this.iPCDefaultBitRate = t.readInt32(8, false, this.iPCDefaultBitRate)
    this.iWebDefaultBitRate = t.readInt32(9, false, this.iWebDefaultBitRate)
    this.iMobileDefaultBitRate = t.readInt32(10, false, this.iMobileDefaultBitRate)
    this.lMultiStreamFlag = t.readInt64(11, false, this.lMultiStreamFlag)
    this.sNick = t.readString(12, false, this.sNick)
    this.lYYId = t.readInt64(13, false, this.lYYId)
    this.lAttendeeCount = t.readInt64(14, false, this.lAttendeeCount)
    this.iCodecType = t.readInt32(15, false, this.iCodecType)
    this.iScreenType = t.readInt32(16, false, this.iScreenType)
    this.vMultiStreamInfo = t.readVector(17, false, this.vMultiStreamInfo)
    this.sLiveDesc = t.readString(18, false, this.sLiveDesc)
    this.lLiveCompatibleFlag = t.readInt64(19, false, this.lLiveCompatibleFlag)
    this.sAvatarUrl = t.readString(20, false, this.sAvatarUrl)
    this.iSourceType = t.readInt32(21, false, this.iSourceType)
    this.sSubchannelName = t.readString(22, false, this.sSubchannelName)
    this.sVideoCaptureUrl = t.readString(23, false, this.sVideoCaptureUrl)
    this.iStartTime = t.readInt32(24, false, this.iStartTime)
    this.lChannelId = t.readInt64(25, false, this.lChannelId)
    this.lSubChannelId = t.readInt64(26, false, this.lSubChannelId)
    this.sLocation = t.readString(27, false, this.sLocation)
    this.iCdnPolicyLevel = t.readInt32(28, false, this.iCdnPolicyLevel)
    this.iGameType = t.readInt32(29, false, this.iGameType)
    this.mMiscInfo = t.readMap(30, false, this.mMiscInfo)
    this.iShortChannel = t.readInt32(31, false, this.iShortChannel)
    this.iRoomId = t.readInt32(32, false, this.iRoomId)
    this.bIsRoomSecret = t.readInt32(33, false, this.bIsRoomSecret)
    this.iHashPolicy = t.readInt32(34, false, this.iHashPolicy)
}

Huya.EndLiveNotice = function () {
    this.lPresenterUid = 0
    this.iReason = 0
    this.lLiveId = 0
    this.sReason = ""
}

Huya.EndLiveNotice.prototype._clone = function () {
    return new Huya.EndLiveNotice
}

Huya.EndLiveNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.EndLiveNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.EndLiveNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPresenterUid)
    t.writeInt32(1, this.iReason)
    t.writeInt64(2, this.lLiveId)
    t.writeString(3, this.sReason)
}

Huya.EndLiveNotice.prototype.readFrom = function (t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid)
    this.iReason = t.readInt32(1, false, this.iReason)
    this.lLiveId = t.readInt64(2, false, this.lLiveId)
    this.sReason = t.readString(3, false, this.sReason)
}

Huya.LiveInfoChangedNotice = function () {
    this.lPresenterUid = 0
    this.iGameId = 0
    this.sGameName = ""
    this.lLiveId = 0
    this.sLiveDesc = ""
}

Huya.LiveInfoChangedNotice.prototype._clone = function () {
    return new Huya.LiveInfoChangedNotice
}

Huya.LiveInfoChangedNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveInfoChangedNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveInfoChangedNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPresenterUid)
    t.writeInt32(1, this.iGameId)
    t.writeString(2, this.sGameName)
    t.writeInt64(3, this.lLiveId)
    t.writeString(4, this.sLiveDesc)
}

Huya.LiveInfoChangedNotice.prototype.readFrom = function (t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid)
    this.iGameId = t.readInt32(1, false, this.iGameId)
    this.sGameName = t.readString(2, false, this.sGameName)
    this.lLiveId = t.readInt64(3, false, this.lLiveId)
    this.sLiveDesc = t.readString(4, false, this.sLiveDesc)
}

Huya.NobleNotice = function () {
    this.tNobleInfo = new Huya.NobleBase
}

Huya.NobleNotice.prototype._clone = function () {
    return new Huya.NobleNotice
}

Huya.NobleNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tNobleInfo)
}

Huya.NobleNotice.prototype.readFrom = function (t) {
    this.tNobleInfo = t.readStruct(0, false, this.tNobleInfo)
}

Huya.NobleItem = function () {
    this.iNobleLevel = 0
    this.lDeadLine = 0
}

Huya.NobleItem.prototype._clone = function () {
    return new Huya.NobleItem
}

Huya.NobleItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleItem.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iNobleLevel)
    t.writeInt64(1, this.lDeadLine)
}

Huya.NobleItem.prototype.readFrom = function (t) {
    this.iNobleLevel = t.readInt32(0, false, this.iNobleLevel)
    this.lDeadLine = t.readInt64(1, false, this.lDeadLine)
}

Huya.NobleEnterNotice = function () {
    this.tNobleInfo = new Huya.NobleBase
}

Huya.NobleEnterNotice.prototype._clone = function () {
    return new Huya.NobleEnterNotice
}

Huya.NobleEnterNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleEnterNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleEnterNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tNobleInfo)
}

Huya.NobleEnterNotice.prototype.readFrom = function (t) {
    this.tNobleInfo = t.readStruct(0, false, this.tNobleInfo)
}

Huya.NobleSpeakReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.sMsg = ""
    this.tSender = new Huya.SenderItem
    this.tNoble = new Huya.NobleItem
    this.tFans = new Huya.FansItem
    this.tVipSimle = new Huya.VipSmileItem
    this.tStamp = new Huya.StampItem
    this.tMass = new Huya.MassItem
    this.mReserver = new Taf.Map(new Taf.STRING, new Taf.STRING)
}

Huya.NobleSpeakReq.prototype._clone = function () {
    return new Huya.NobleSpeakReq
}

Huya.NobleSpeakReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleSpeakReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleSpeakReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
    t.writeString(4, this.sMsg)
    t.writeStruct(5, this.tSender)
    t.writeStruct(6, this.tNoble)
    t.writeStruct(7, this.tFans)
    t.writeStruct(8, this.tVipSimle)
    t.writeStruct(9, this.tStamp)
    t.writeStruct(10, this.tMass)
    t.writeMap(11, this.mReserver)
}

Huya.NobleSpeakReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.sMsg = t.readString(4, false, this.sMsg)
    this.tSender = t.readStruct(5, false, this.tSender)
    this.tNoble = t.readStruct(6, false, this.tNoble)
    this.tFans = t.readStruct(7, false, this.tFans)
    this.tVipSimle = t.readStruct(8, false, this.tVipSimle)
    this.tStamp = t.readStruct(9, false, this.tStamp)
    this.tMass = t.readStruct(10, false, this.tMass)
    this.mReserver = t.readMap(11, false, this.mReserver)
}

Huya.NobleSpeakResp = function () {
    this.iRespCode = 0
    this.lUid = 0
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
}

Huya.NobleSpeakResp.prototype._clone = function () {
    return new Huya.NobleSpeakResp
}

Huya.NobleSpeakResp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleSpeakResp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleSpeakResp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRespCode)
    t.writeInt64(1, this.lUid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
    t.writeInt64(4, this.lPid)
}

Huya.NobleSpeakResp.prototype.readFrom = function (t) {
    this.iRespCode = t.readInt32(0, false, this.iRespCode)
    this.lUid = t.readInt64(1, false, this.lUid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.lPid = t.readInt64(4, false, this.lPid)
}

Huya.NobleSpeakBrst = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.sMsg = ""
    this.tSender = new Huya.SenderItem
    this.tNoble = new Huya.NobleItem
    this.tFans = new Huya.FansItem
    this.tVipSimle = new Huya.VipSmileItem
    this.tStamp = new Huya.StampItem
    this.tMass = new Huya.MassItem
    this.mReserver = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.iChatCache = 0
    this.iRoomAuditLevel = 0
}

Huya.NobleSpeakBrst.prototype._clone = function () {
    return new Huya.NobleSpeakBrst
}

Huya.NobleSpeakBrst.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleSpeakBrst.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleSpeakBrst.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
    t.writeString(4, this.sMsg)
    t.writeStruct(5, this.tSender)
    t.writeStruct(6, this.tNoble)
    t.writeStruct(7, this.tFans)
    t.writeStruct(8, this.tVipSimle)
    t.writeStruct(9, this.tStamp)
    t.writeStruct(10, this.tMass)
    t.writeMap(11, this.mReserver)
    t.writeInt32(12, this.iChatCache)
    t.writeInt32(13, this.iRoomAuditLevel)
}

Huya.NobleSpeakBrst.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.sMsg = t.readString(4, false, this.sMsg)
    this.tSender = t.readStruct(5, false, this.tSender)
    this.tNoble = t.readStruct(6, false, this.tNoble)
    this.tFans = t.readStruct(7, false, this.tFans)
    this.tVipSimle = t.readStruct(8, false, this.tVipSimle)
    this.tStamp = t.readStruct(9, false, this.tStamp)
    this.tMass = t.readStruct(10, false, this.tMass)
    this.mReserver = t.readMap(11, false, this.mReserver)
    this.iChatCache = t.readInt32(12, false, this.iChatCache)
    this.iRoomAuditLevel = t.readInt32(13, false, this.iRoomAuditLevel)
}

Huya.SenderItem = function () {
    this.lSenderUid = 0
    this.lYYid = 0
    this.iSenderRole = 0
    this.iSenderGender = 0
    this.sSenderNick = ""
}

Huya.SenderItem.prototype._clone = function () {
    return new Huya.SenderItem
}

Huya.SenderItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SenderItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SenderItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lSenderUid)
    t.writeInt64(1, this.lYYid)
    t.writeInt32(2, this.iSenderRole)
    t.writeInt32(3, this.iSenderGender)
    t.writeString(4, this.sSenderNick)
}

Huya.SenderItem.prototype.readFrom = function (t) {
    this.lSenderUid = t.readInt64(0, false, this.lSenderUid)
    this.lYYid = t.readInt64(1, false, this.lYYid)
    this.iSenderRole = t.readInt32(2, false, this.iSenderRole)
    this.iSenderGender = t.readInt32(3, false, this.iSenderGender)
    this.sSenderNick = t.readString(4, false, this.sSenderNick)
}

Huya.FansItem = function () {
    this.iFansLevel = 0
    this.sFansNick = ""
    this.sFansPresenterNick = ""
}

Huya.FansItem.prototype._clone = function () {
    return new Huya.FansItem
}

Huya.FansItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansItem.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iFansLevel)
    t.writeString(1, this.sFansNick)
    t.writeString(2, this.sFansPresenterNick)
}

Huya.FansItem.prototype.readFrom = function (t) {
    this.iFansLevel = t.readInt32(0, false, this.iFansLevel)
    this.sFansNick = t.readString(1, false, this.sFansNick)
    this.sFansPresenterNick = t.readString(2, false, this.sFansPresenterNick)
}

Huya.VipSmileItem = function () {
    this.sVipSmileKey = ""
    this.sVipSmilePath = ""
}

Huya.VipSmileItem.prototype._clone = function () {
    return new Huya.VipSmileItem
}

Huya.VipSmileItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipSmileItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipSmileItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sVipSmileKey)
    t.writeString(1, this.sVipSmilePath)
}

Huya.VipSmileItem.prototype.readFrom = function (t) {
    this.sVipSmileKey = t.readString(0, false, this.sVipSmileKey)
    this.sVipSmilePath = t.readString(1, false, this.sVipSmilePath)
}

Huya.StampItem = function () {
    this.sSealIconPath = ""
    this.sKeyImg = ""
    this.lStampTime = 0
    this.lStampEndTime = 0
    this.iValidity = 0
    this.sStampUserNick = ""
}

Huya.StampItem.prototype._clone = function () {
    return new Huya.StampItem
}

Huya.StampItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.StampItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.StampItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sSealIconPath)
    t.writeString(1, this.sKeyImg)
    t.writeInt64(2, this.lStampTime)
    t.writeInt64(3, this.lStampEndTime)
    t.writeInt32(4, this.iValidity)
    t.writeString(5, this.sStampUserNick)
}

Huya.StampItem.prototype.readFrom = function (t) {
    this.sSealIconPath = t.readString(0, false, this.sSealIconPath)
    this.sKeyImg = t.readString(1, false, this.sKeyImg)
    this.lStampTime = t.readInt64(2, false, this.lStampTime)
    this.lStampEndTime = t.readInt64(3, false, this.lStampEndTime)
    this.iValidity = t.readInt32(4, false, this.iValidity)
    this.sStampUserNick = t.readString(5, false, this.sStampUserNick)
}

Huya.MassItem = function () {
    this.iGoldHostLevel = 0
    this.iSuperPupleLevel = 0
    this.iVipLevel = 0
    this.iUserLevel = 0
    this.iIsVipRed = 0
    this.iAtSomebody = 0
    this.sAtSomebodyNick = ""
    this.ibarrageColor = 0
    this.sDevSourceType = ""
}

Huya.MassItem.prototype._clone = function () {
    return new Huya.MassItem
}

Huya.MassItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MassItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MassItem.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iGoldHostLevel)
    t.writeInt32(1, this.iSuperPupleLevel)
    t.writeInt32(2, this.iVipLevel)
    t.writeInt32(3, this.iUserLevel)
    t.writeInt32(4, this.iIsVipRed)
    t.writeInt32(5, this.iAtSomebody)
    t.writeString(6, this.sAtSomebodyNick)
    t.writeInt32(7, this.ibarrageColor)
    t.writeString(8, this.sDevSourceType)
}

Huya.MassItem.prototype.readFrom = function (t) {
    this.iGoldHostLevel = t.readInt32(0, false, this.iGoldHostLevel)
    this.iSuperPupleLevel = t.readInt32(1, false, this.iSuperPupleLevel)
    this.iVipLevel = t.readInt32(2, false, this.iVipLevel)
    this.iUserLevel = t.readInt32(3, false, this.iUserLevel)
    this.iIsVipRed = t.readInt32(4, false, this.iIsVipRed)
    this.iAtSomebody = t.readInt32(5, false, this.iAtSomebody)
    this.sAtSomebodyNick = t.readString(6, false, this.sAtSomebodyNick)
    this.ibarrageColor = t.readInt32(7, false, this.ibarrageColor)
    this.sDevSourceType = t.readString(8, false, this.sDevSourceType)
}

Huya.NobleInfoReq = function () {
    this.tUserId = new Huya.UserId
    this.iNoCache = 0
    this.lUid = 0
}

Huya.NobleInfoReq.prototype._clone = function () {
    return new Huya.NobleInfoReq
}

Huya.NobleInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt32(1, this.iNoCache)
    t.writeInt64(2, this.lUid)
}

Huya.NobleInfoReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.iNoCache = t.readInt32(1, false, this.iNoCache)
    this.lUid = t.readInt64(2, false, this.lUid)
}

Huya.NobleInfoRsp = function () {
    this.tInfo = new Huya.NobleInfo
}

Huya.NobleInfoRsp.prototype._clone = function () {
    return new Huya.NobleInfoRsp
}

Huya.NobleInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleInfoRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tInfo)
}

Huya.NobleInfoRsp.prototype.readFrom = function (t) {
    this.tInfo = t.readStruct(0, false, this.tInfo)
}

Huya.NobleInfo = function () {
    this.lUid = 0
    this.lPid = 0
    this.lValidDate = 0
    this.sNobleName = ""
    this.iNobleLevel = 0
    this.iNoblePet = 0
    this.iNobleStatus = 0
    this.iNobleType = 0
    this.iRemainDays = 0
}

Huya.NobleInfo.prototype._clone = function () {
    return new Huya.NobleInfo
}

Huya.NobleInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lValidDate)
    t.writeString(3, this.sNobleName)
    t.writeInt32(4, this.iNobleLevel)
    t.writeInt32(5, this.iNoblePet)
    t.writeInt32(6, this.iNobleStatus)
    t.writeInt32(7, this.iNobleType)
    t.writeInt32(8, this.iRemainDays)
}

Huya.NobleInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lValidDate = t.readInt64(2, false, this.lValidDate)
    this.sNobleName = t.readString(3, false, this.sNobleName)
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel)
    this.iNoblePet = t.readInt32(5, false, this.iNoblePet)
    this.iNobleStatus = t.readInt32(6, false, this.iNobleStatus)
    this.iNobleType = t.readInt32(7, false, this.iNobleType)
    this.iRemainDays = t.readInt32(8, false, this.iRemainDays)
}

Huya.NobleBase = function () {
    this.lUid = 0
    this.sNickName = ""
    this.iLevel = 0
    this.sName = ""
    this.iPet = 0
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
    this.lStartTime = 0
    this.lEndTime = 0
    this.iLeftDay = 0
    this.iStatus = 0
    this.iOpenFlag = 0
    this.iMonths = 0
    this.sPNickName = ""
    this.lShortSid = 0
    this.iSourceType = 0
    this.iPayType = 0
    this.sLogoUrl = ""
    this.vDecorationPrefix = new Taf.Vector(new Huya.DecorationInfo)
    this.vDecorationSuffix = new Taf.Vector(new Huya.DecorationInfo)
}

Huya.NobleBase.prototype._clone = function () {
    return new Huya.NobleBase
}

Huya.NobleBase.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NobleBase.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NobleBase.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeInt32(2, this.iLevel)
    t.writeString(3, this.sName)
    t.writeInt32(4, this.iPet)
    t.writeInt64(5, this.lPid)
    t.writeInt64(6, this.lTid)
    t.writeInt64(7, this.lSid)
    t.writeInt64(8, this.lStartTime)
    t.writeInt64(9, this.lEndTime)
    t.writeInt32(10, this.iLeftDay)
    t.writeInt32(11, this.iStatus)
    t.writeInt32(12, this.iOpenFlag)
    t.writeInt32(13, this.iMonths)
    t.writeString(14, this.sPNickName)
    t.writeInt64(15, this.lShortSid)
    t.writeInt32(16, this.iSourceType)
    t.writeInt64(17, this.iPayType)
    t.writeString(18, this.sLogoUrl)
    t.writeVector(19, this.vDecorationPrefix)
    t.writeVector(20, this.vDecorationSuffix)
}

Huya.NobleBase.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.iLevel = t.readInt32(2, false, this.iLevel)
    this.sName = t.readString(3, false, this.sName)
    this.iPet = t.readInt32(4, false, this.iPet)
    this.lPid = t.readInt64(5, false, this.lPid)
    this.lTid = t.readInt64(6, false, this.lTid)
    this.lSid = t.readInt64(7, false, this.lSid)
    this.lStartTime = t.readInt64(8, false, this.lStartTime)
    this.lEndTime = t.readInt64(9, false, this.lEndTime)
    this.iLeftDay = t.readInt32(10, false, this.iLeftDay)
    this.iStatus = t.readInt32(11, false, this.iStatus)
    this.iOpenFlag = t.readInt32(12, false, this.iOpenFlag)
    this.iMonths = t.readInt32(13, false, this.iMonths)
    this.sPNickName = t.readString(14, false, this.sPNickName)
    this.lShortSid = t.readInt64(15, false, this.lShortSid)
    this.iSourceType = t.readInt32(16, false, this.iSourceType)
    this.iPayType = t.readInt64(17, false, this.iPayType)
    this.sLogoUrl = t.readString(18, false, this.sLogoUrl)
    this.vDecorationPrefix = t.readVector(19, false, this.vDecorationPrefix)
    this.vDecorationSuffix = t.readVector(20, false, this.vDecorationSuffix)
}

Huya.GetPropsListReq = function () {
    this.tUserId = new Huya.UserId
    this.sMd5 = ""
    this.iTemplateType = 64
    this.sVersion = ""
    this.iAppId = 0
    this.lPresenterUid = 0
    this.lSid = 0
    this.lSubSid = 0
    this.iGameId = 0
}

Huya.GetPropsListReq.prototype._clone = function () {
    return new Huya.GetPropsListReq
}

Huya.GetPropsListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPropsListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPropsListReq.prototype.writeTo = function (t) {
    t.writeStruct(1, this.tUserId)
    t.writeString(2, this.sMd5)
    t.writeInt32(3, this.iTemplateType)
    t.writeString(4, this.sVersion)
    t.writeInt32(5, this.iAppId)
    t.writeInt64(6, this.lPresenterUid)
    t.writeInt64(7, this.lSid)
    t.writeInt64(8, this.lSubSid)
    t.writeInt32(9, this.iGameId)
}

Huya.GetPropsListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(1, false, this.tUserId)
    this.sMd5 = t.readString(2, false, this.sMd5)
    this.iTemplateType = t.readInt32(3, false, this.iTemplateType)
    this.sVersion = t.readString(4, false, this.sVersion)
    this.iAppId = t.readInt32(5, false, this.iAppId)
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid)
    this.lSid = t.readInt64(7, false, this.lSid)
    this.lSubSid = t.readInt64(8, false, this.lSubSid)
    this.iGameId = t.readInt32(9, false, this.iGameId)
}

Huya.GetPropsListRsp = function () {
    this.vPropsItemList = new Taf.Vector(new Huya.PropsItem)
    this.sMd5 = ""
    this.iNewEffectSwitch = 0
    this.iMirrorRoomShowNum = 0
    this.iGameRoomShowNum = 0
}

Huya.GetPropsListRsp.prototype._clone = function () {
    return new Huya.GetPropsListRsp
}

Huya.GetPropsListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPropsListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPropsListRsp.prototype.writeTo = function (t) {
    t.writeVector(1, this.vPropsItemList)
    t.writeString(2, this.sMd5)
    t.writeInt16(3, this.iNewEffectSwitch)
    t.writeInt16(4, this.iMirrorRoomShowNum)
    t.writeInt16(5, this.iGameRoomShowNum)
}

Huya.GetPropsListRsp.prototype.readFrom = function (t) {
    this.vPropsItemList = t.readVector(1, false, this.vPropsItemList)
    this.sMd5 = t.readString(2, false, this.sMd5)
    this.iNewEffectSwitch = t.readInt16(3, false, this.iNewEffectSwitch)
    this.iMirrorRoomShowNum = t.readInt16(4, false, this.iMirrorRoomShowNum)
    this.iGameRoomShowNum = t.readInt16(5, false, this.iGameRoomShowNum)
}

Huya.PropsItem = function () {
    this.iPropsId = 0
    this.sPropsName = ""
    this.iPropsYb = 0
    this.iPropsGreenBean = 0
    this.iPropsWhiteBean = 0
    this.iPropsGoldenBean = 0
    this.iPropsRed = 0
    this.iPropsPopular = 0
    this.iPropsExpendNum = -1
    this.iPropsFansValue = -1
    this.vPropsNum = new Taf.Vector(new Taf.INT32)
    this.iPropsMaxNum = 0
    this.iPropsBatterFlag = 0
    this.vPropsChannel = new Taf.Vector(new Taf.INT32)
    this.sPropsToolTip = ""
    this.vPropsIdentity = new Taf.Vector(new Huya.PropsIdentity)
    this.iPropsWeights = 0
    this.iPropsLevel = 0
    this.tDisplayInfo = new Huya.DisplayInfo
    this.tSpecialInfo = new Huya.SpecialInfo
    this.iPropsGrade = 0
    this.iPropsGroupNum = 0
    this.sPropsCommBannerResource = ""
    this.sPropsOwnBannerResource = ""
    this.iPropsShowFlag = 0
    this.iTemplateType = 0
    this.iShelfStatus = 0
    this.sAndroidLogo = ""
    this.sIpadLogo = ""
    this.sIphoneLogo = ""
    this.sPropsCommBannerResourceEx = ""
    this.sPropsOwnBannerResourceEx = ""
    this.vPresenterUid = new Taf.Vector(new Taf.INT64)
    this.vPropView = new Taf.Vector(new Huya.PropView)
    this.iFaceUSwitch = 0
    this.iDisplayCd = 0
    this.iCount = 0
    this.iVbCount = 0
    this.vWebPropsNum = new Taf.Vector(new Taf.STRING)
}

Huya.PropsItem.prototype._clone = function () {
    return new Huya.PropsItem
}

Huya.PropsItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PropsItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PropsItem.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iPropsId)
    t.writeString(2, this.sPropsName)
    t.writeInt32(3, this.iPropsYb)
    t.writeInt32(4, this.iPropsGreenBean)
    t.writeInt32(5, this.iPropsWhiteBean)
    t.writeInt32(6, this.iPropsGoldenBean)
    t.writeInt32(7, this.iPropsRed)
    t.writeInt32(8, this.iPropsPopular)
    t.writeInt32(9, this.iPropsExpendNum)
    t.writeInt32(10, this.iPropsFansValue)
    t.writeVector(11, this.vPropsNum)
    t.writeInt32(12, this.iPropsMaxNum)
    t.writeInt32(13, this.iPropsBatterFlag)
    t.writeVector(14, this.vPropsChannel)
    t.writeString(15, this.sPropsToolTip)
    t.writeVector(16, this.vPropsIdentity)
    t.writeInt32(17, this.iPropsWeights)
    t.writeInt32(18, this.iPropsLevel)
    t.writeStruct(19, this.tDisplayInfo)
    t.writeStruct(20, this.tSpecialInfo)
    t.writeInt32(21, this.iPropsGrade)
    t.writeInt32(22, this.iPropsGroupNum)
    t.writeString(23, this.sPropsCommBannerResource)
    t.writeString(24, this.sPropsOwnBannerResource)
    t.writeInt32(25, this.iPropsShowFlag)
    t.writeInt32(26, this.iTemplateType)
    t.writeInt32(27, this.iShelfStatus)
    t.writeString(28, this.sAndroidLogo)
    t.writeString(29, this.sIpadLogo)
    t.writeString(30, this.sIphoneLogo)
    t.writeString(31, this.sPropsCommBannerResourceEx)
    t.writeString(32, this.sPropsOwnBannerResourceEx)
    t.writeVector(33, this.vPresenterUid)
    t.writeVector(34, this.vPropView)
    t.writeInt16(35, this.iFaceUSwitch)
    t.writeInt16(36, this.iDisplayCd)
    t.writeInt16(37, this.iCount)
    t.writeInt32(38, this.iVbCount)
    t.writeVector(39, this.vWebPropsNum)
}

Huya.PropsItem.prototype.readFrom = function (t) {
    this.iPropsId = t.readInt32(1, false, this.iPropsId)
    this.sPropsName = t.readString(2, false, this.sPropsName)
    this.iPropsYb = t.readInt32(3, false, this.iPropsYb)
    this.iPropsGreenBean = t.readInt32(4, false, this.iPropsGreenBean)
    this.iPropsWhiteBean = t.readInt32(5, false, this.iPropsWhiteBean)
    this.iPropsGoldenBean = t.readInt32(6, false, this.iPropsGoldenBean)
    this.iPropsRed = t.readInt32(7, false, this.iPropsRed)
    this.iPropsPopular = t.readInt32(8, false, this.iPropsPopular)
    this.iPropsExpendNum = t.readInt32(9, false, this.iPropsExpendNum)
    this.iPropsFansValue = t.readInt32(10, false, this.iPropsFansValue)
    this.vPropsNum = t.readVector(11, false, this.vPropsNum)
    this.iPropsMaxNum = t.readInt32(12, false, this.iPropsMaxNum)
    this.iPropsBatterFlag = t.readInt32(13, false, this.iPropsBatterFlag)
    this.vPropsChannel = t.readVector(14, false, this.vPropsChannel)
    this.sPropsToolTip = t.readString(15, false, this.sPropsToolTip)
    this.vPropsIdentity = t.readVector(16, false, this.vPropsIdentity)
    this.iPropsWeights = t.readInt32(17, false, this.iPropsWeights)
    this.iPropsLevel = t.readInt32(18, false, this.iPropsLevel)
    this.tDisplayInfo = t.readStruct(19, false, this.tDisplayInfo)
    this.tSpecialInfo = t.readStruct(20, false, this.tSpecialInfo)
    this.iPropsGrade = t.readInt32(21, false, this.iPropsGrade)
    this.iPropsGroupNum = t.readInt32(22, false, this.iPropsGroupNum)
    this.sPropsCommBannerResource = t.readString(23, false, this.sPropsCommBannerResource)
    this.sPropsOwnBannerResource = t.readString(24, false, this.sPropsOwnBannerResource)
    this.iPropsShowFlag = t.readInt32(25, false, this.iPropsShowFlag)
    this.iTemplateType = t.readInt32(26, false, this.iTemplateType)
    this.iShelfStatus = t.readInt32(27, false, this.iShelfStatus)
    this.sAndroidLogo = t.readString(28, false, this.sAndroidLogo)
    this.sIpadLogo = t.readString(29, false, this.sIpadLogo)
    this.sIphoneLogo = t.readString(30, false, this.sIphoneLogo)
    this.sPropsCommBannerResourceEx = t.readString(31, false, this.sPropsCommBannerResourceEx)
    this.sPropsOwnBannerResourceEx = t.readString(32, false, this.sPropsOwnBannerResourceEx)
    this.vPresenterUid = t.readVector(33, false, this.vPresenterUid)
    this.vPropView = t.readVector(34, false, this.vPropView)
    this.iFaceUSwitch = t.readInt16(35, false, this.iFaceUSwitch)
    this.iDisplayCd = t.readInt16(36, false, this.iDisplayCd)
    this.iCount = t.readInt16(37, false, this.iCount)
    this.iVbCount = t.readInt32(38, false, this.iVbCount)
    this.vWebPropsNum = t.readVector(39, false, this.vWebPropsNum)
}

Huya.PropsIdentity = function () {
    this.iPropsIdType = 0
    this.sPropsPic18 = ""
    this.sPropsPic24 = ""
    this.sPropsPicGif = ""
    this.sPropsBannerResource = ""
    this.sPropsBannerSize = ""
    this.sPropsBannerMaxTime = ""
    this.sPropsChatBannerResource = ""
    this.sPropsChatBannerSize = ""
    this.sPropsChatBannerMaxTime = ""
    this.iPropsChatBannerPos = 0
    this.iPropsChatBannerIsCombo = 0
    this.sPropsRollContent = ""
    this.iPropsBannerAnimationstyle = 0
    this.sPropFaceu = ""
    this.sPropH5Resource = ""
    this.sPropsWeb = ""
    this.sWitch = 0
    this.sCornerMark = ""
    this.iPropViewId = 0
    this.sPropStreamerResource = ""
    this.iStreamerFrameRate = 0
    this.sPropsPic108 = ""
    this.sPcBannerResource = ""
    this.sPropBigGiftPc = ""
    this.sPropBigGiftWeb = ""
    this.iWebBigGiftFrameRate = 0
}

Huya.PropsIdentity.prototype._clone = function () {
    return new Huya.PropsIdentity
}

Huya.PropsIdentity.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PropsIdentity.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PropsIdentity.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iPropsIdType)
    t.writeString(2, this.sPropsPic18)
    t.writeString(3, this.sPropsPic24)
    t.writeString(4, this.sPropsPicGif)
    t.writeString(5, this.sPropsBannerResource)
    t.writeString(6, this.sPropsBannerSize)
    t.writeString(7, this.sPropsBannerMaxTime)
    t.writeString(8, this.sPropsChatBannerResource)
    t.writeString(9, this.sPropsChatBannerSize)
    t.writeString(10, this.sPropsChatBannerMaxTime)
    t.writeInt32(11, this.iPropsChatBannerPos)
    t.writeInt32(12, this.iPropsChatBannerIsCombo)
    t.writeString(13, this.sPropsRollContent)
    t.writeInt32(14, this.iPropsBannerAnimationstyle)
    t.writeString(15, this.sPropFaceu)
    t.writeString(16, this.sPropH5Resource)
    t.writeString(17, this.sPropsWeb)
    t.writeInt32(18, this.sWitch)
    t.writeString(19, this.sCornerMark)
    t.writeInt32(20, this.iPropViewId)
    t.writeString(21, this.sPropStreamerResource)
    t.writeInt16(22, this.iStreamerFrameRate)
    t.writeString(23, this.sPropsPic108)
    t.writeString(24, this.sPcBannerResource)
    t.writeString(25, this.sPropBigGiftPc)
    t.writeString(26, this.sPropBigGiftWeb)
    t.writeInt32(27, this.iWebBigGiftFrameRate)
}

Huya.PropsIdentity.prototype.readFrom = function (t) {
    this.iPropsIdType = t.readInt32(1, false, this.iPropsIdType)
    this.sPropsPic18 = t.readString(2, false, this.sPropsPic18)
    this.sPropsPic24 = t.readString(3, false, this.sPropsPic24)
    this.sPropsPicGif = t.readString(4, false, this.sPropsPicGif)
    this.sPropsBannerResource = t.readString(5, false, this.sPropsBannerResource)
    this.sPropsBannerSize = t.readString(6, false, this.sPropsBannerSize)
    this.sPropsBannerMaxTime = t.readString(7, false, this.sPropsBannerMaxTime)
    this.sPropsChatBannerResource = t.readString(8, false, this.sPropsChatBannerResource)
    this.sPropsChatBannerSize = t.readString(9, false, this.sPropsChatBannerSize)
    this.sPropsChatBannerMaxTime = t.readString(10, false, this.sPropsChatBannerMaxTime)
    this.iPropsChatBannerPos = t.readInt32(11, false, this.iPropsChatBannerPos)
    this.iPropsChatBannerIsCombo = t.readInt32(12, false, this.iPropsChatBannerIsCombo)
    this.sPropsRollContent = t.readString(13, false, this.sPropsRollContent)
    this.iPropsBannerAnimationstyle = t.readInt32(14, false, this.iPropsBannerAnimationstyle)
    this.sPropFaceu = t.readString(15, false, this.sPropFaceu)
    this.sPropH5Resource = t.readString(16, false, this.sPropH5Resource)
    this.sPropsWeb = t.readString(17, false, this.sPropsWeb)
    this.sWitch = t.readInt32(18, false, this.sWitch)
    this.sCornerMark = t.readString(19, false, this.sCornerMark)
    this.iPropViewId = t.readInt32(20, false, this.iPropViewId)
    this.sPropStreamerResource = t.readString(21, false, this.sPropStreamerResource)
    this.iStreamerFrameRate = t.readInt16(22, false, this.iStreamerFrameRate)
    this.sPropsPic108 = t.readString(23, false, this.sPropsPic108)
    this.sPcBannerResource = t.readString(24, false, this.sPcBannerResource)
    this.sPropBigGiftPc = t.readString(25, false, this.sPropBigGiftPc)
    this.sPropBigGiftWeb = t.readString(26, false, this.sPropBigGiftWeb)
    this.iWebBigGiftFrameRate = t.readInt32(27, false, this.iWebBigGiftFrameRate)
}

Huya.PropView = function () {
    this.id = 0
    this.name = ""
    this.uids = new Taf.Map(new Taf.INT64, new Taf.INT16)
    this.tips = ""
    this.gameids = new Taf.Map(new Taf.INT64, new Taf.INT16)
}

Huya.PropView.prototype._clone = function () {
    return new Huya.PropView
}

Huya.PropView.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PropView.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PropView.prototype.writeTo = function (t) {
    t.writeInt32(0, this.id)
    t.writeString(1, this.name)
    t.writeMap(2, this.uids)
    t.writeString(3, this.tips)
    t.writeMap(4, this.gameids)
}

Huya.PropView.prototype.readFrom = function (t) {
    this.id = t.readInt32(0, false, this.id)
    this.name = t.readString(1, false, this.name)
    this.uids = t.readMap(2, false, this.uids)
    this.tips = t.readString(3, false, this.tips)
    this.gameids = t.readMap(4, false, this.gameids)
}

Huya.DisplayInfo = function () {
    this.iMarqueeScopeMin = 0
    this.iMarqueeScopeMax = 0
    this.iCurrentVideoNum = 0
    this.iCurrentVideoMin = 0
    this.iCurrentVideoMax = 0
    this.iAllVideoNum = 0
    this.iAllVideoMin = 0
    this.iAllVideoMax = 0
    this.iCurrentScreenNum = 0
    this.iCurrentScreenMin = 0
    this.iCurrentScreenMax = 0
}

Huya.DisplayInfo.prototype._clone = function () {
    return new Huya.DisplayInfo
}

Huya.DisplayInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.DisplayInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.DisplayInfo.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iMarqueeScopeMin)
    t.writeInt32(2, this.iMarqueeScopeMax)
    t.writeInt32(3, this.iCurrentVideoNum)
    t.writeInt32(4, this.iCurrentVideoMin)
    t.writeInt32(5, this.iCurrentVideoMax)
    t.writeInt32(6, this.iAllVideoNum)
    t.writeInt32(7, this.iAllVideoMin)
    t.writeInt32(8, this.iAllVideoMax)
    t.writeInt32(9, this.iCurrentScreenNum)
    t.writeInt32(10, this.iCurrentScreenMin)
    t.writeInt32(11, this.iCurrentScreenMax)
}

Huya.DisplayInfo.prototype.readFrom = function (t) {
    this.iMarqueeScopeMin = t.readInt32(1, false, this.iMarqueeScopeMin)
    this.iMarqueeScopeMax = t.readInt32(2, false, this.iMarqueeScopeMax)
    this.iCurrentVideoNum = t.readInt32(3, false, this.iCurrentVideoNum)
    this.iCurrentVideoMin = t.readInt32(4, false, this.iCurrentVideoMin)
    this.iCurrentVideoMax = t.readInt32(5, false, this.iCurrentVideoMax)
    this.iAllVideoNum = t.readInt32(6, false, this.iAllVideoNum)
    this.iAllVideoMin = t.readInt32(7, false, this.iAllVideoMin)
    this.iAllVideoMax = t.readInt32(8, false, this.iAllVideoMax)
    this.iCurrentScreenNum = t.readInt32(9, false, this.iCurrentScreenNum)
    this.iCurrentScreenMin = t.readInt32(10, false, this.iCurrentScreenMin)
    this.iCurrentScreenMax = t.readInt32(11, false, this.iCurrentScreenMax)
}

Huya.SpecialInfo = function () {
    this.iFirstSingle = 0
    this.iFirstGroup = 0
    this.sFirstTips = ""
    this.iSecondSingle = 0
    this.iSecondGroup = 0
    this.sSecondTips = ""
    this.iThirdSingle = 0
    this.iThirdGroup = 0
    this.sThirdTips = ""
    this.iWorldSingle = 0
    this.iWorldGroup = 0
    this.iAmbilightNum = 0
    this.iAmbilightUpgradeNum = 0
    this.iWorldBannerNum = 0
    this.iShowType = 0
    this.iOpenFaceu = 0
    this.iOpenGesture = 0
}

Huya.SpecialInfo.prototype._clone = function () {
    return new Huya.SpecialInfo
}

Huya.SpecialInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SpecialInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SpecialInfo.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iFirstSingle)
    t.writeInt32(2, this.iFirstGroup)
    t.writeString(3, this.sFirstTips)
    t.writeInt32(4, this.iSecondSingle)
    t.writeInt32(5, this.iSecondGroup)
    t.writeString(6, this.sSecondTips)
    t.writeInt32(7, this.iThirdSingle)
    t.writeInt32(8, this.iThirdGroup)
    t.writeString(9, this.sThirdTips)
    t.writeInt32(10, this.iWorldSingle)
    t.writeInt32(11, this.iWorldGroup)
    t.writeInt32(12, this.iAmbilightNum)
    t.writeInt32(13, this.iAmbilightUpgradeNum)
    t.writeInt32(14, this.iWorldBannerNum)
    t.writeInt16(15, this.iShowType)
    t.writeInt16(16, this.iOpenFaceu)
    t.writeInt16(17, this.iOpenGesture)
}

Huya.SpecialInfo.prototype.readFrom = function (t) {
    this.iFirstSingle = t.readInt32(1, false, this.iFirstSingle)
    this.iFirstGroup = t.readInt32(2, false, this.iFirstGroup)
    this.sFirstTips = t.readString(3, false, this.sFirstTips)
    this.iSecondSingle = t.readInt32(4, false, this.iSecondSingle)
    this.iSecondGroup = t.readInt32(5, false, this.iSecondGroup)
    this.sSecondTips = t.readString(6, false, this.sSecondTips)
    this.iThirdSingle = t.readInt32(7, false, this.iThirdSingle)
    this.iThirdGroup = t.readInt32(8, false, this.iThirdGroup)
    this.sThirdTips = t.readString(9, false, this.sThirdTips)
    this.iWorldSingle = t.readInt32(10, false, this.iWorldSingle)
    this.iWorldGroup = t.readInt32(11, false, this.iWorldGroup)
    this.iAmbilightNum = t.readInt32(12, false, this.iAmbilightNum)
    this.iAmbilightUpgradeNum = t.readInt32(13, false, this.iAmbilightUpgradeNum)
    this.iWorldBannerNum = t.readInt32(14, false, this.iWorldBannerNum)
    this.iShowType = t.readInt16(15, false, this.iShowType)
    this.iOpenFaceu = t.readInt16(16, false, this.iOpenFaceu)
    this.iOpenGesture = t.readInt16(17, false, this.iOpenGesture)
}

Huya.TokenCdnInfo = function () {
    this.sCdnName = ""
    this.sUrl = ""
    this.sStreamName = ""
}

Huya.TokenCdnInfo.prototype._clone = function () {
    return new Huya.TokenCdnInfo
}

Huya.TokenCdnInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TokenCdnInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TokenCdnInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sCdnName)
    t.writeString(1, this.sUrl)
    t.writeString(2, this.sStreamName)
}

Huya.TokenCdnInfo.prototype.readFrom = function (t) {
    this.sCdnName = t.readString(0, false, this.sCdnName)
    this.sUrl = t.readString(1, false, this.sUrl)
    this.sStreamName = t.readString(2, false, this.sStreamName)
}

Huya.CdnAntiCodeInfo = function () {
    this.sCdnName = ""
    this.sFlvAntiCode = ""
    this.sHlsAntiCode = ""
}

Huya.CdnAntiCodeInfo.prototype._clone = function () {
    return new Huya.CdnAntiCodeInfo
}

Huya.CdnAntiCodeInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.CdnAntiCodeInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.CdnAntiCodeInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sCdnName)
    t.writeString(1, this.sFlvAntiCode)
    t.writeString(2, this.sHlsAntiCode)
}

Huya.CdnAntiCodeInfo.prototype.readFrom = function (t) {
    this.sCdnName = t.readString(0, false, this.sCdnName)
    this.sFlvAntiCode = t.readString(1, false, this.sFlvAntiCode)
    this.sHlsAntiCode = t.readString(2, false, this.sHlsAntiCode)
}

Huya.BatchGetCdnTokenReq = function () {
    this.vCdnInfos = new Taf.Vector(new Huya.TokenCdnInfo)
    this.sStreamName = ""
}

Huya.BatchGetCdnTokenReq.prototype._clone = function () {
    return new Huya.BatchGetCdnTokenReq
}

Huya.BatchGetCdnTokenReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BatchGetCdnTokenReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BatchGetCdnTokenReq.prototype.writeTo = function (t) {
    t.writeVector(0, this.vCdnInfos)
    t.writeString(1, this.sStreamName)
}

Huya.BatchGetCdnTokenReq.prototype.readFrom = function (t) {
    this.vCdnInfos = t.readVector(0, false, this.vCdnInfos)
    this.sStreamName = t.readString(1, false, this.sStreamName)
}

Huya.BatchGetCdnTokenRsp = function () {
    this.vCdnAntiCodes = new Taf.Vector(new Huya.CdnAntiCodeInfo)
}

Huya.BatchGetCdnTokenRsp.prototype._clone = function () {
    return new Huya.BatchGetCdnTokenRsp
}

Huya.BatchGetCdnTokenRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BatchGetCdnTokenRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BatchGetCdnTokenRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vCdnAntiCodes)
}

Huya.BatchGetCdnTokenRsp.prototype.readFrom = function (t) {
    this.vCdnAntiCodes = t.readVector(0, false, this.vCdnAntiCodes)
}

Huya.GetWebdbUserInfoReq = function () {
    this.lUid = 0
    this.lImid = 0
    this.sPassport = ""
    this.sAccount = ""
    this.bCacheFirst = true
}

Huya.GetWebdbUserInfoReq.prototype._clone = function () {
    return new Huya.GetWebdbUserInfoReq
}

Huya.GetWebdbUserInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetWebdbUserInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetWebdbUserInfoReq.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lImid)
    t.writeString(2, this.sPassport)
    t.writeString(3, this.sAccount)
    t.writeBoolean(4, this.bCacheFirst)
}

Huya.GetWebdbUserInfoReq.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lImid = t.readInt64(1, false, this.lImid)
    this.sPassport = t.readString(2, false, this.sPassport)
    this.sAccount = t.readString(3, false, this.sAccount)
    this.bCacheFirst = t.readBoolean(4, false, this.bCacheFirst)
}

Huya.GetWebdbUserInfoRsp = function () {
    this.tUserInfo = new Huya.DBUserInfo
}

Huya.GetWebdbUserInfoRsp.prototype._clone = function () {
    return new Huya.GetWebdbUserInfoRsp
}

Huya.GetWebdbUserInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetWebdbUserInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetWebdbUserInfoRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserInfo)
}

Huya.GetWebdbUserInfoRsp.prototype.readFrom = function (t) {
    this.tUserInfo = t.readStruct(0, false, this.tUserInfo)
}

Huya.DBUserInfo = function () {
    this.lUid = 0
    this.sPassport = ""
    this.sAccount = ""
    this.sNick = ""
    this.iSex = 0
    this.iBirthday = 0
    this.sArea = ""
    this.sProvince = ""
    this.sCity = ""
    this.sSign = ""
    this.sIntro = ""
    this.iJifen = 0
    this.sRegisterTime = ""
    this.sHdlogo = ""
    this.sSessionCard = ""
    this.lImid = 0
    this.iLogoIndex = 0
}

Huya.DBUserInfo.prototype._clone = function () {
    return new Huya.DBUserInfo
}

Huya.DBUserInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.DBUserInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.DBUserInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sPassport)
    t.writeString(2, this.sAccount)
    t.writeString(3, this.sNick)
    t.writeInt32(4, this.iSex)
    t.writeInt32(5, this.iBirthday)
    t.writeString(6, this.sArea)
    t.writeString(7, this.sProvince)
    t.writeString(8, this.sCity)
    t.writeString(9, this.sSign)
    t.writeString(10, this.sIntro)
    t.writeInt32(11, this.iJifen)
    t.writeString(12, this.sRegisterTime)
    t.writeString(13, this.sHdlogo)
    t.writeString(14, this.sSessionCard)
    t.writeInt64(16, this.lImid)
    t.writeInt32(17, this.iLogoIndex)
}

Huya.DBUserInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sPassport = t.readString(1, false, this.sPassport)
    this.sAccount = t.readString(2, false, this.sAccount)
    this.sNick = t.readString(3, false, this.sNick)
    this.iSex = t.readInt32(4, false, this.iSex)
    this.iBirthday = t.readInt32(5, false, this.iBirthday)
    this.sArea = t.readString(6, false, this.sArea)
    this.sProvince = t.readString(7, false, this.sProvince)
    this.sCity = t.readString(8, false, this.sCity)
    this.sSign = t.readString(9, false, this.sSign)
    this.sIntro = t.readString(10, false, this.sIntro)
    this.iJifen = t.readInt32(11, false, this.iJifen)
    this.sRegisterTime = t.readString(12, false, this.sRegisterTime)
    this.sHdlogo = t.readString(13, false, this.sHdlogo)
    this.sSessionCard = t.readString(14, false, this.sSessionCard)
    this.lImid = t.readInt64(16, false, this.lImid)
    this.iLogoIndex = t.readInt32(17, false, this.iLogoIndex)
}

Huya.GiftInfo = function () {
    this.iItemType = 0
    this.iItemCount = 0
}

Huya.GiftInfo.prototype._clone = function () {
    return new Huya.GiftInfo
}

Huya.GiftInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GiftInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GiftInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType)
    t.writeInt32(1, this.iItemCount)
}

Huya.GiftInfo.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType)
    this.iItemCount = t.readInt32(1, false, this.iItemCount)
}

Huya.GetUserBoxInfoReq = function () {
    this.tId = new Huya.UserId
    this.sChannel = ""
    this.sIp = ""
}

Huya.GetUserBoxInfoReq.prototype._clone = function () {
    return new Huya.GetUserBoxInfoReq
}

Huya.GetUserBoxInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserBoxInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserBoxInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeString(1, this.sChannel)
    t.writeString(2, this.sIp)
}

Huya.GetUserBoxInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.sChannel = t.readString(1, false, this.sChannel)
    this.sIp = t.readString(2, false, this.sIp)
}

Huya.GetUserBoxInfoRsp = function () {
    this.lUid = 0
    this.tTask1 = new Huya.BoxTaskInfo
    this.tTask2 = new Huya.BoxTaskInfo
    this.tTask3 = new Huya.BoxTaskInfo
    this.tTask4 = new Huya.BoxTaskInfo
    this.tTask5 = new Huya.BoxTaskInfo
    this.tTask6 = new Huya.BoxTaskInfo
    this.iBoxLevel = 0
}

Huya.GetUserBoxInfoRsp.prototype._clone = function () {
    return new Huya.GetUserBoxInfoRsp
}

Huya.GetUserBoxInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserBoxInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserBoxInfoRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeStruct(1, this.tTask1)
    t.writeStruct(2, this.tTask2)
    t.writeStruct(3, this.tTask3)
    t.writeStruct(4, this.tTask4)
    t.writeStruct(5, this.tTask5)
    t.writeStruct(7, this.tTask6)
    t.writeInt32(8, this.iBoxLevel)
}

Huya.GetUserBoxInfoRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.tTask1 = t.readStruct(1, false, this.tTask1)
    this.tTask2 = t.readStruct(2, false, this.tTask2)
    this.tTask3 = t.readStruct(3, false, this.tTask3)
    this.tTask4 = t.readStruct(4, false, this.tTask4)
    this.tTask5 = t.readStruct(5, false, this.tTask5)
    this.tTask6 = t.readStruct(7, false, this.tTask6)
    this.iBoxLevel = t.readInt32(8, false, this.iBoxLevel)
}

Huya.FinishTaskNoticeReq = function () {
    this.tId = new Huya.UserId
    this.lSid = 0
    this.lSubSid = 0
    this.iTaskId = 0
    this.sPassport = ""
    this.iFromType = 0
    this.fVersion = 1
    this.sTime = ""
    this.sMd5 = ""
    this.sChannel = ""
    this.sIp = ""
    this.iPrizeType = 0
    this.lPid = 0
}

Huya.FinishTaskNoticeReq.prototype._clone = function () {
    return new Huya.FinishTaskNoticeReq
}

Huya.FinishTaskNoticeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FinishTaskNoticeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FinishTaskNoticeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt32(3, this.iTaskId)
    t.writeString(4, this.sPassport)
    t.writeInt32(5, this.iFromType)
    t.writeFloat(6, this.fVersion)
    t.writeString(7, this.sTime)
    t.writeString(8, this.sMd5)
    t.writeString(9, this.sChannel)
    t.writeString(10, this.sIp)
    t.writeInt32(11, this.iPrizeType)
    t.writeInt64(12, this.lPid)
}

Huya.FinishTaskNoticeReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.iTaskId = t.readInt32(3, false, this.iTaskId)
    this.sPassport = t.readString(4, false, this.sPassport)
    this.iFromType = t.readInt32(5, false, this.iFromType)
    this.fVersion = t.readFloat(6, false, this.fVersion)
    this.sTime = t.readString(7, false, this.sTime)
    this.sMd5 = t.readString(8, false, this.sMd5)
    this.sChannel = t.readString(9, false, this.sChannel)
    this.sIp = t.readString(10, false, this.sIp)
    this.iPrizeType = t.readInt32(11, false, this.iPrizeType)
    this.lPid = t.readInt64(12, false, this.lPid)
}

Huya.FinishTaskNoticeRsp = function () {
    this.iRspCode = 0
    this.iTaskId = 0
    this.iPrizeType = 0
}

Huya.FinishTaskNoticeRsp.prototype._clone = function () {
    return new Huya.FinishTaskNoticeRsp
}

Huya.FinishTaskNoticeRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FinishTaskNoticeRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FinishTaskNoticeRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRspCode)
    t.writeInt32(1, this.iTaskId)
    t.writeInt32(3, this.iPrizeType)
}

Huya.FinishTaskNoticeRsp.prototype.readFrom = function (t) {
    this.iRspCode = t.readInt32(0, false, this.iRspCode)
    this.iTaskId = t.readInt32(1, false, this.iTaskId)
    this.iPrizeType = t.readInt32(3, false, this.iPrizeType)
}

Huya.AwardBoxPrizeReq = function () {
    this.tId = new Huya.UserId
    this.lSid = 0
    this.lSubSid = 0
    this.iTaskId = 0
    this.sPassport = ""
    this.iFromType = 0
    this.fVersion = 1
    this.sTime = ""
    this.sMd5 = ""
    this.sChannel = ""
    this.sIp = ""
    this.iPrizeType = 0
    this.lPid = 0
    this.iADType = 0
}

Huya.AwardBoxPrizeReq.prototype._clone = function () {
    return new Huya.AwardBoxPrizeReq
}

Huya.AwardBoxPrizeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AwardBoxPrizeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AwardBoxPrizeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt32(3, this.iTaskId)
    t.writeString(4, this.sPassport)
    t.writeInt32(5, this.iFromType)
    t.writeFloat(6, this.fVersion)
    t.writeString(7, this.sTime)
    t.writeString(8, this.sMd5)
    t.writeString(9, this.sChannel)
    t.writeString(10, this.sIp)
    t.writeInt32(11, this.iPrizeType)
    t.writeInt64(12, this.lPid)
    t.writeInt32(13, this.iADType)
}

Huya.AwardBoxPrizeReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.iTaskId = t.readInt32(3, false, this.iTaskId)
    this.sPassport = t.readString(4, false, this.sPassport)
    this.iFromType = t.readInt32(5, false, this.iFromType)
    this.fVersion = t.readFloat(6, false, this.fVersion)
    this.sTime = t.readString(7, false, this.sTime)
    this.sMd5 = t.readString(8, false, this.sMd5)
    this.sChannel = t.readString(9, false, this.sChannel)
    this.sIp = t.readString(10, false, this.sIp)
    this.iPrizeType = t.readInt32(11, false, this.iPrizeType)
    this.lPid = t.readInt64(12, false, this.lPid)
    this.iADType = t.readInt32(13, false, this.iADType)
}

Huya.AwardBoxPrizeRsp = function () {
    this.iRspCode = 0
    this.iTaskId = 0
    this.iItemType = 0
    this.iCount = 0
    this.iRewardLevel = 0
    this.iOptStatus = 0
    this.sOptText = ""
    this.iPrizeType = 0
    this.sDiyAwardName = ""
    this.iADType = 0
    this.iGiftType = 0
    this.sCode = ""
    this.sDiyAwardName4App = ""
    this.iExistsSysMeg = 0
}

Huya.AwardBoxPrizeRsp.prototype._clone = function () {
    return new Huya.AwardBoxPrizeRsp
}

Huya.AwardBoxPrizeRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AwardBoxPrizeRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AwardBoxPrizeRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRspCode)
    t.writeInt32(1, this.iTaskId)
    t.writeInt32(2, this.iItemType)
    t.writeInt32(3, this.iCount)
    t.writeInt32(4, this.iRewardLevel)
    t.writeInt32(5, this.iOptStatus)
    t.writeString(6, this.sOptText)
    t.writeInt32(7, this.iPrizeType)
    t.writeString(8, this.sDiyAwardName)
    t.writeInt32(9, this.iADType)
    t.writeInt32(10, this.iGiftType)
    t.writeString(11, this.sCode)
    t.writeString(12, this.sDiyAwardName4App)
    t.writeInt32(13, this.iExistsSysMeg)
}

Huya.AwardBoxPrizeRsp.prototype.readFrom = function (t) {
    this.iRspCode = t.readInt32(0, false, this.iRspCode)
    this.iTaskId = t.readInt32(1, false, this.iTaskId)
    this.iItemType = t.readInt32(2, false, this.iItemType)
    this.iCount = t.readInt32(3, false, this.iCount)
    this.iRewardLevel = t.readInt32(4, false, this.iRewardLevel)
    this.iOptStatus = t.readInt32(5, false, this.iOptStatus)
    this.sOptText = t.readString(6, false, this.sOptText)
    this.iPrizeType = t.readInt32(7, false, this.iPrizeType)
    this.sDiyAwardName = t.readString(8, false, this.sDiyAwardName)
    this.iADType = t.readInt32(9, false, this.iADType)
    this.iGiftType = t.readInt32(10, false, this.iGiftType)
    this.sCode = t.readString(11, false, this.sCode)
    this.sDiyAwardName4App = t.readString(12, false, this.sDiyAwardName4App)
    this.iExistsSysMeg = t.readInt32(13, false, this.iExistsSysMeg)
}

Huya.BoxTaskInfo = function () {
    this.iStat = 0
    this.iItemType = 0
    this.iItemCount = 0
    this.iRewardLevel = 0
    this.iTaskId = 0
}

Huya.BoxTaskInfo.prototype._clone = function () {
    return new Huya.BoxTaskInfo
}

Huya.BoxTaskInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BoxTaskInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BoxTaskInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iStat)
    t.writeInt32(1, this.iItemType)
    t.writeInt32(2, this.iItemCount)
    t.writeInt32(3, this.iRewardLevel)
    t.writeInt32(4, this.iTaskId)
}

Huya.BoxTaskInfo.prototype.readFrom = function (t) {
    this.iStat = t.readInt32(0, false, this.iStat)
    this.iItemType = t.readInt32(1, false, this.iItemType)
    this.iItemCount = t.readInt32(2, false, this.iItemCount)
    this.iRewardLevel = t.readInt32(3, false, this.iRewardLevel)
    this.iTaskId = t.readInt32(4, false, this.iTaskId)
}

Huya.InterveneCountRsp = function () {
    this.lTimeStamp = 0
    this.iExpire = 0
    this.lChannelId = 0
    this.vCountInfos = new Taf.Vector(new Huya.InterveneCountInfo)
}

Huya.InterveneCountRsp.prototype._clone = function () {
    return new Huya.InterveneCountRsp
}

Huya.InterveneCountRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.InterveneCountRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.InterveneCountRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTimeStamp)
    t.writeInt32(1, this.iExpire)
    t.writeInt64(2, this.lChannelId)
    t.writeVector(3, this.vCountInfos)
}

Huya.InterveneCountRsp.prototype.readFrom = function (t) {
    this.lTimeStamp = t.readInt64(0, false, this.lTimeStamp)
    this.iExpire = t.readInt32(1, false, this.iExpire)
    this.lChannelId = t.readInt64(2, false, this.lChannelId)
    this.vCountInfos = t.readVector(3, false, this.vCountInfos)
}

Huya.InterveneCountInfo = function () {
    this.lSubChannelId = 0
    this.lAttendeeCount = 0
}

Huya.InterveneCountInfo.prototype._clone = function () {
    return new Huya.InterveneCountInfo
}

Huya.InterveneCountInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.InterveneCountInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.InterveneCountInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lSubChannelId)
    t.writeInt64(1, this.lAttendeeCount)
}

Huya.InterveneCountInfo.prototype.readFrom = function (t) {
    this.lSubChannelId = t.readInt64(0, false, this.lSubChannelId)
    this.lAttendeeCount = t.readInt64(1, false, this.lAttendeeCount)
}

Huya.AuditorEnterLiveNotice = function () {
    this.iUserType = 0
    this.lUid = 0
    this.sNick = ""
    this.bSendMessagePopUp = false
    this.sSendMessageTips = ""
    this.lSubcid = 0
    this.iSendMessagePopUpAmtTime = 0
    this.iGHManagerType = 0
}

Huya.AuditorEnterLiveNotice.prototype._clone = function () {
    return new Huya.AuditorEnterLiveNotice
}

Huya.AuditorEnterLiveNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AuditorEnterLiveNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AuditorEnterLiveNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iUserType)
    t.writeInt64(1, this.lUid)
    t.writeString(2, this.sNick)
    t.writeBoolean(3, this.bSendMessagePopUp)
    t.writeString(4, this.sSendMessageTips)
    t.writeInt64(5, this.lSubcid)
    t.writeInt32(6, this.iSendMessagePopUpAmtTime)
    t.writeInt32(7, this.iGHManagerType)
}

Huya.AuditorEnterLiveNotice.prototype.readFrom = function (t) {
    this.iUserType = t.readInt32(0, false, this.iUserType)
    this.lUid = t.readInt64(1, false, this.lUid)
    this.sNick = t.readString(2, false, this.sNick)
    this.bSendMessagePopUp = t.readBoolean(3, false, this.bSendMessagePopUp)
    this.sSendMessageTips = t.readString(4, false, this.sSendMessageTips)
    this.lSubcid = t.readInt64(5, false, this.lSubcid)
    this.iSendMessagePopUpAmtTime = t.readInt32(6, false, this.iSendMessagePopUpAmtTime)
    this.iGHManagerType = t.readInt32(7, false, this.iGHManagerType)
}

Huya.GetAuditorRoleReq = function () {
    this.tId = new Huya.UserId
    this.lPresenterUid = 0
    this.lSubcid = 0
    this.lTid = 0
}

Huya.GetAuditorRoleReq.prototype._clone = function () {
    return new Huya.GetAuditorRoleReq
}

Huya.GetAuditorRoleReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetAuditorRoleReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetAuditorRoleReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPresenterUid)
    t.writeInt64(2, this.lSubcid)
    t.writeInt64(3, this.lTid)
}

Huya.GetAuditorRoleReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid)
    this.lSubcid = t.readInt64(2, false, this.lSubcid)
    this.lTid = t.readInt64(3, false, this.lTid)
}

Huya.AuditorRoleChangeNotice = function () {
    this.iOldUserType = 0
    this.iNewUserType = 0
    this.lUid = 0
    this.lSubcid = 0
    this.sNick = ""
    this.bPopUp = false
    this.sSystemTips = ""
    this.bSendMessagePopUp = false
    this.sSendMessageTips = ""
    this.iSendMessagePopUpAmtTime = 0
    this.lPid = 0
}

Huya.AuditorRoleChangeNotice.prototype._clone = function () {
    return new Huya.AuditorRoleChangeNotice
}

Huya.AuditorRoleChangeNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AuditorRoleChangeNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AuditorRoleChangeNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iOldUserType)
    t.writeInt32(1, this.iNewUserType)
    t.writeInt64(2, this.lUid)
    t.writeInt64(3, this.lSubcid)
    t.writeString(4, this.sNick)
    t.writeBoolean(5, this.bPopUp)
    t.writeString(6, this.sSystemTips)
    t.writeBoolean(7, this.bSendMessagePopUp)
    t.writeString(8, this.sSendMessageTips)
    t.writeInt32(9, this.iSendMessagePopUpAmtTime)
    t.writeInt64(10, this.lPid)
}

Huya.AuditorRoleChangeNotice.prototype.readFrom = function (t) {
    this.iOldUserType = t.readInt32(0, false, this.iOldUserType)
    this.iNewUserType = t.readInt32(1, false, this.iNewUserType)
    this.lUid = t.readInt64(2, false, this.lUid)
    this.lSubcid = t.readInt64(3, false, this.lSubcid)
    this.sNick = t.readString(4, false, this.sNick)
    this.bPopUp = t.readBoolean(5, false, this.bPopUp)
    this.sSystemTips = t.readString(6, false, this.sSystemTips)
    this.bSendMessagePopUp = t.readBoolean(7, false, this.bSendMessagePopUp)
    this.sSendMessageTips = t.readString(8, false, this.sSendMessageTips)
    this.iSendMessagePopUpAmtTime = t.readInt32(9, false, this.iSendMessagePopUpAmtTime)
    this.lPid = t.readInt64(10, false, this.lPid)
}

Huya.AttendeeCountNotice = function () {
    this.iAttendeeCount = 0
}

Huya.AttendeeCountNotice.prototype._clone = function () {
    return new Huya.AttendeeCountNotice
}

Huya.AttendeeCountNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AttendeeCountNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AttendeeCountNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iAttendeeCount)
}

Huya.AttendeeCountNotice.prototype.readFrom = function (t) {
    this.iAttendeeCount = t.readInt32(0, false, this.iAttendeeCount)
}

Huya.ExternalUser = function () {
    this.sId = ""
    this.sToken = ""
    this.sOther = ""
}

Huya.ExternalUser.prototype._clone = function () {
    return new Huya.ExternalUser
}

Huya.ExternalUser.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ExternalUser.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ExternalUser.prototype.writeTo = function (t) {
    t.writeString(0, this.sId)
    t.writeString(1, this.sToken)
    t.writeString(2, this.sOther)
}

Huya.ExternalUser.prototype.readFrom = function (t) {
    this.sId = t.readString(0, false, this.sId)
    this.sToken = t.readString(1, false, this.sToken)
    this.sOther = t.readString(2, false, this.sOther)
}

Huya.VipCardReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.lUid = 0
}

Huya.VipCardReq.prototype._clone = function () {
    return new Huya.VipCardReq
}

Huya.VipCardReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipCardReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipCardReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
    t.writeInt64(4, this.lUid)
}

Huya.VipCardReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.lUid = t.readInt64(4, false, this.lUid)
}

Huya.VipCardRsp = function () {
    this.lUid = 0
    this.sNickName = ""
    this.tNobleInfo = new Huya.NobleInfo
    this.tGuardInfo = new Huya.GuardInfo
    this.tFansInfo = new Huya.FansInfoEx
    this.sLogoURL = ""
    this.iUserLevel = 0
    this.iGender = 0
    this.iAge = 0
    this.sSign = ""
    this.sLocation = ""
    this.sUserPageUrl = ""
    this.sArea = ""
    this.sPresenterName = ""
    this.iSubscribeStatus = 0
    this.iSubscribedCount = 0
    this.lYYId = 0
    this.vInterestGame = new Taf.Vector(new Taf.STRING)
    this.sLogoDecoUrl = ""
}

Huya.VipCardRsp.prototype._clone = function () {
    return new Huya.VipCardRsp
}

Huya.VipCardRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipCardRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipCardRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeStruct(2, this.tNobleInfo)
    t.writeStruct(3, this.tGuardInfo)
    t.writeStruct(4, this.tFansInfo)
    t.writeString(5, this.sLogoURL)
    t.writeInt32(6, this.iUserLevel)
    t.writeInt32(7, this.iGender)
    t.writeInt32(8, this.iAge)
    t.writeString(9, this.sSign)
    t.writeString(10, this.sLocation)
    t.writeString(11, this.sUserPageUrl)
    t.writeString(12, this.sArea)
    t.writeString(13, this.sPresenterName)
    t.writeInt32(14, this.iSubscribeStatus)
    t.writeInt32(15, this.iSubscribedCount)
    t.writeInt64(16, this.lYYId)
    t.writeVector(17, this.vInterestGame)
    t.writeString(18, this.sLogoDecoUrl)
}

Huya.VipCardRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.tNobleInfo = t.readStruct(2, false, this.tNobleInfo)
    this.tGuardInfo = t.readStruct(3, false, this.tGuardInfo)
    this.tFansInfo = t.readStruct(4, false, this.tFansInfo)
    this.sLogoURL = t.readString(5, false, this.sLogoURL)
    this.iUserLevel = t.readInt32(6, false, this.iUserLevel)
    this.iGender = t.readInt32(7, false, this.iGender)
    this.iAge = t.readInt32(8, false, this.iAge)
    this.sSign = t.readString(9, false, this.sSign)
    this.sLocation = t.readString(10, false, this.sLocation)
    this.sUserPageUrl = t.readString(11, false, this.sUserPageUrl)
    this.sArea = t.readString(12, false, this.sArea)
    this.sPresenterName = t.readString(13, false, this.sPresenterName)
    this.iSubscribeStatus = t.readInt32(14, false, this.iSubscribeStatus)
    this.iSubscribedCount = t.readInt32(15, false, this.iSubscribedCount)
    this.lYYId = t.readInt64(16, false, this.lYYId)
    this.vInterestGame = t.readVector(17, false, this.vInterestGame)
    this.sLogoDecoUrl = t.readString(18, false, this.sLogoDecoUrl)
}

Huya.FansInfoEx = function () {
    this.lUid = 0
    this.lBadgeId = 0
    this.sBadgeName = ""
    this.iBadgeLevel = 0
    this.iScore = 0
    this.iBadgeType = 0
}

Huya.FansInfoEx.prototype._clone = function () {
    return new Huya.FansInfoEx
}

Huya.FansInfoEx.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansInfoEx.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansInfoEx.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lBadgeId)
    t.writeString(2, this.sBadgeName)
    t.writeInt32(3, this.iBadgeLevel)
    t.writeInt32(4, this.iScore)
    t.writeInt32(6, this.iBadgeType)
}

Huya.FansInfoEx.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId)
    this.sBadgeName = t.readString(2, false, this.sBadgeName)
    this.iBadgeLevel = t.readInt32(3, false, this.iBadgeLevel)
    this.iScore = t.readInt32(4, false, this.iScore)
    this.iBadgeType = t.readInt32(6, false, this.iBadgeType)
}

Huya.WeekStarPropsIds = function () {
    this.vPropsId = new Taf.Vector(new Taf.INT64)
    this.iType = 0
    this.iAppShowType = 0
    this.iWeekStarType = 0
    this.iGameID = 0
}

Huya.WeekStarPropsIds.prototype._clone = function () {
    return new Huya.WeekStarPropsIds
}

Huya.WeekStarPropsIds.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekStarPropsIds.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekStarPropsIds.prototype.writeTo = function (t) {
    t.writeVector(0, this.vPropsId)
    t.writeInt32(1, this.iType)
    t.writeInt32(2, this.iAppShowType)
    t.writeInt32(3, this.iWeekStarType)
    t.writeInt32(4, this.iGameID)
}

Huya.WeekStarPropsIds.prototype.readFrom = function (t) {
    this.vPropsId = t.readVector(0, false, this.vPropsId)
    this.iType = t.readInt32(1, false, this.iType)
    this.iAppShowType = t.readInt32(2, false, this.iAppShowType)
    this.iWeekStarType = t.readInt32(3, false, this.iWeekStarType)
    this.iGameID = t.readInt32(4, false, this.iGameID)
}

Huya.WeekStarPropsIdsReq = function () {
    this.tUserId = new Huya.UserId
    this.iWeekStarType = 0
    this.iGameID = 0
}

Huya.WeekStarPropsIdsReq.prototype._clone = function () {
    return new Huya.WeekStarPropsIdsReq
}

Huya.WeekStarPropsIdsReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekStarPropsIdsReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekStarPropsIdsReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt32(1, this.iWeekStarType)
    t.writeInt32(2, this.iGameID)
}

Huya.WeekStarPropsIdsReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.iWeekStarType = t.readInt32(1, false, this.iWeekStarType)
    this.iGameID = t.readInt32(2, false, this.iGameID)
}

Huya.WeekStarPropsIdsTab = function () {
    this.mapType2Props = new Taf.Map(new Taf.INT32, new Huya.WeekStarPropsIds)
}

Huya.WeekStarPropsIdsTab.prototype._clone = function () {
    return new Huya.WeekStarPropsIdsTab
}

Huya.WeekStarPropsIdsTab.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekStarPropsIdsTab.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekStarPropsIdsTab.prototype.writeTo = function (t) {
    t.writeMap(0, this.mapType2Props)
}

Huya.WeekStarPropsIdsTab.prototype.readFrom = function (t) {
    this.mapType2Props = t.readMap(0, false, this.mapType2Props)
}

Huya.VipEnterBanner = function () {
    this.lUid = 0
    this.sNickName = ""
    this.lPid = 0
    this.tNobleInfo = new Huya.NobleInfo
    this.tGuardInfo = new Huya.GuardInfo
    this.tWeekRankInfo = new Huya.WeekRankInfo
    this.sLogoURL = ""
    this.bFromNearby = false
    this.sLocation = ""
    this.tDecorationInfo = new Huya.DecorationInfoRsp
}

Huya.VipEnterBanner.prototype._clone = function () {
    return new Huya.VipEnterBanner
}

Huya.VipEnterBanner.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.VipEnterBanner.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.VipEnterBanner.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeInt64(2, this.lPid)
    t.writeStruct(3, this.tNobleInfo)
    t.writeStruct(4, this.tGuardInfo)
    t.writeStruct(5, this.tWeekRankInfo)
    t.writeString(6, this.sLogoURL)
    t.writeBoolean(7, this.bFromNearby)
    t.writeString(8, this.sLocation)
    t.writeStruct(9, this.tDecorationInfo)
}

Huya.VipEnterBanner.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.lPid = t.readInt64(2, false, this.lPid)
    this.tNobleInfo = t.readStruct(3, false, this.tNobleInfo)
    this.tGuardInfo = t.readStruct(4, false, this.tGuardInfo)
    this.tWeekRankInfo = t.readStruct(5, false, this.tWeekRankInfo)
    this.sLogoURL = t.readString(6, false, this.sLogoURL)
    this.bFromNearby = t.readBoolean(7, false, this.bFromNearby)
    this.sLocation = t.readString(8, false, this.sLocation)
    this.tDecorationInfo = t.readStruct(9, false, this.tDecorationInfo)
}

Huya.WeekRankInfo = function () {
    this.lUid = 0
    this.iRank = 0
}

Huya.WeekRankInfo.prototype._clone = function () {
    return new Huya.WeekRankInfo
}

Huya.WeekRankInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WeekRankInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WeekRankInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iRank)
}

Huya.WeekRankInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iRank = t.readInt32(1, false, this.iRank)
}

Huya.UserLevelUpgradeNotice = function () {
    this.lUid = 0
    this.iNewLevel = 0
    this.iOldLevel = 0
}

Huya.UserLevelUpgradeNotice.prototype._clone = function () {
    return new Huya.UserLevelUpgradeNotice
}

Huya.UserLevelUpgradeNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserLevelUpgradeNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserLevelUpgradeNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iNewLevel)
    t.writeInt32(2, this.iOldLevel)
}

Huya.UserLevelUpgradeNotice.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iNewLevel = t.readInt32(1, false, this.iNewLevel)
    this.iOldLevel = t.readInt32(2, false, this.iOldLevel)
}

Huya.UserNovieTaskCompleteNotice = function () {
    this.lUid = 0
    this.tInfo = new Huya.UserTaskInfo
}

Huya.UserNovieTaskCompleteNotice.prototype._clone = function () {
    return new Huya.UserNovieTaskCompleteNotice
}

Huya.UserNovieTaskCompleteNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserNovieTaskCompleteNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserNovieTaskCompleteNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeStruct(1, this.tInfo)
}

Huya.UserNovieTaskCompleteNotice.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.tInfo = t.readStruct(1, false, this.tInfo)
}

Huya.UserTaskInfo = function () {
    this.iId = 0
    this.sName = ""
    this.sDesc = ""
    this.iType = 0
    this.iProgressMode = 0
    this.iTargetLevel = 0
    this.tSubTaskTargetLevel = new Taf.Map(new Taf.STRING, new Taf.INT32)
    this.sClassName = ""
    this.bEnable = true
    this.iProgress = 0
    this.bAwardPrize = true
    this.tPrize = new Taf.Map(new Taf.STRING, new Taf.INT32)
    this.sIcon = ""
    this.iExper = 0
    this.iDisplay = 0
    this.sMobileDesc = ""
}

Huya.UserTaskInfo.prototype._clone = function () {
    return new Huya.UserTaskInfo
}

Huya.UserTaskInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserTaskInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserTaskInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iId)
    t.writeString(1, this.sName)
    t.writeString(2, this.sDesc)
    t.writeInt32(3, this.iType)
    t.writeInt32(4, this.iProgressMode)
    t.writeInt32(5, this.iTargetLevel)
    t.writeMap(6, this.tSubTaskTargetLevel)
    t.writeString(7, this.sClassName)
    t.writeBoolean(8, this.bEnable)
    t.writeInt32(9, this.iProgress)
    t.writeBoolean(10, this.bAwardPrize)
    t.writeMap(11, this.tPrize)
    t.writeString(12, this.sIcon)
    t.writeInt32(13, this.iExper)
    t.writeInt32(14, this.iDisplay)
    t.writeString(15, this.sMobileDesc)
}

Huya.UserTaskInfo.prototype.readFrom = function (t) {
    this.iId = t.readInt32(0, false, this.iId)
    this.sName = t.readString(1, false, this.sName)
    this.sDesc = t.readString(2, false, this.sDesc)
    this.iType = t.readInt32(3, false, this.iType)
    this.iProgressMode = t.readInt32(4, false, this.iProgressMode)
    this.iTargetLevel = t.readInt32(5, false, this.iTargetLevel)
    this.tSubTaskTargetLevel = t.readMap(6, false, this.tSubTaskTargetLevel)
    this.sClassName = t.readString(7, false, this.sClassName)
    this.bEnable = t.readBoolean(8, false, this.bEnable)
    this.iProgress = t.readInt32(9, false, this.iProgress)
    this.bAwardPrize = t.readBoolean(10, false, this.bAwardPrize)
    this.tPrize = t.readMap(11, false, this.tPrize)
    this.sIcon = t.readString(12, false, this.sIcon)
    this.iExper = t.readInt32(13, false, this.iExper)
    this.iDisplay = t.readInt32(14, false, this.iDisplay)
    this.sMobileDesc = t.readString(15, false, this.sMobileDesc)
}

Huya.GetGameInfoListReq = function () {
    this.tId = new Huya.UserId
    this.lTopSid = 0
    this.lSubSid = 0
    this.lPid = 0
}

Huya.GetGameInfoListReq.prototype._clone = function () {
    return new Huya.GetGameInfoListReq
}

Huya.GetGameInfoListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetGameInfoListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetGameInfoListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt64(3, this.lPid)
}

Huya.GetGameInfoListReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.lPid = t.readInt64(3, false, this.lPid)
}

Huya.GetGameInfoListRsp = function () {
    this.vGameNoticeInfoList = new Taf.Vector(new Huya.GameNoticeInfoList)
    this.iCommission = 0
}

Huya.GetGameInfoListRsp.prototype._clone = function () {
    return new Huya.GetGameInfoListRsp
}

Huya.GetGameInfoListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetGameInfoListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetGameInfoListRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGameNoticeInfoList)
    t.writeInt32(1, this.iCommission)
}

Huya.GetGameInfoListRsp.prototype.readFrom = function (t) {
    this.vGameNoticeInfoList = t.readVector(0, false, this.vGameNoticeInfoList)
    this.iCommission = t.readInt32(1, false, this.iCommission)
}

Huya.GetRemainBeanNumReq = function () {
    this.tId = new Huya.UserId
    this.lTopSid = 0
    this.lSubSid = 0
    this.lPid = 0
    this.iUnitId = 0
    this.iBetOdds = 0
}

Huya.GetRemainBeanNumReq.prototype._clone = function () {
    return new Huya.GetRemainBeanNumReq
}

Huya.GetRemainBeanNumReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRemainBeanNumReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRemainBeanNumReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt64(3, this.lPid)
    t.writeInt32(4, this.iUnitId)
    t.writeInt32(5, this.iBetOdds)
}

Huya.GetRemainBeanNumReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.iUnitId = t.readInt32(4, false, this.iUnitId)
    this.iBetOdds = t.readInt32(5, false, this.iBetOdds)
}

Huya.GetRemainBeanNumRsp = function () {
    this.iCode = 0
    this.iBetType = 0
    this.iBetRemainNum = 0
    this.iBuyAllNum = 0
    this.lBetRemainNum = 0
    this.lBuyAllNum = 0
}

Huya.GetRemainBeanNumRsp.prototype._clone = function () {
    return new Huya.GetRemainBeanNumRsp
}

Huya.GetRemainBeanNumRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRemainBeanNumRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRemainBeanNumRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCode)
    t.writeInt32(1, this.iBetType)
    t.writeInt32(2, this.iBetRemainNum)
    t.writeInt32(3, this.iBuyAllNum)
    t.writeInt64(4, this.lBetRemainNum)
    t.writeInt64(5, this.lBuyAllNum)
}

Huya.GetRemainBeanNumRsp.prototype.readFrom = function (t) {
    this.iCode = t.readInt32(0, false, this.iCode)
    this.iBetType = t.readInt32(1, false, this.iBetType)
    this.iBetRemainNum = t.readInt32(2, false, this.iBetRemainNum)
    this.iBuyAllNum = t.readInt32(3, false, this.iBuyAllNum)
    this.lBetRemainNum = t.readInt64(4, false, this.lBetRemainNum)
    this.lBuyAllNum = t.readInt64(5, false, this.lBuyAllNum)
}

Huya.QueryPackageReq = function () {
    this.tId = new Huya.UserId
    this.lTopSid = 0
    this.lSubSid = 0
}

Huya.QueryPackageReq.prototype._clone = function () {
    return new Huya.QueryPackageReq
}

Huya.QueryPackageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.QueryPackageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.QueryPackageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
}

Huya.QueryPackageReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
}

Huya.QueryPackageRsp = function () {
    this.iCode = 0
    this.iItemWhiteBeanCount = 0
    this.iItemGreenBeanCount = 0
    this.lItemWhiteBeanCount = 0
    this.lItemGreenBeanCount = 0
}

Huya.QueryPackageRsp.prototype._clone = function () {
    return new Huya.QueryPackageRsp
}

Huya.QueryPackageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.QueryPackageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.QueryPackageRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCode)
    t.writeInt32(1, this.iItemWhiteBeanCount)
    t.writeInt32(2, this.iItemGreenBeanCount)
    t.writeInt64(3, this.lItemWhiteBeanCount)
    t.writeInt64(4, this.lItemGreenBeanCount)
}

Huya.QueryPackageRsp.prototype.readFrom = function (t) {
    this.iCode = t.readInt32(0, false, this.iCode)
    this.iItemWhiteBeanCount = t.readInt32(1, false, this.iItemWhiteBeanCount)
    this.iItemGreenBeanCount = t.readInt32(2, false, this.iItemGreenBeanCount)
    this.lItemWhiteBeanCount = t.readInt64(3, false, this.lItemWhiteBeanCount)
    this.lItemGreenBeanCount = t.readInt64(4, false, this.lItemGreenBeanCount)
}

Huya.QueryCardPackageReq = function () {
    this.tUserId = new Huya.UserId
    this.vUids = new Taf.Vector(new Taf.INT64)
    this.vItemTypes = new Taf.Vector(new Taf.INT32)
    this.vCardTypes = new Taf.Vector(new Taf.INT32)
    this.lExpiredTime = 0
    this.iIsStorage = 0
    this.iType = 0
}

Huya.QueryCardPackageReq.prototype._clone = function () {
    return new Huya.QueryCardPackageReq
}

Huya.QueryCardPackageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.QueryCardPackageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.QueryCardPackageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeVector(1, this.vUids)
    t.writeVector(2, this.vItemTypes)
    t.writeVector(3, this.vCardTypes)
    t.writeInt64(4, this.lExpiredTime)
    t.writeInt32(5, this.iIsStorage)
    t.writeInt32(6, this.iType)
}

Huya.QueryCardPackageReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.vUids = t.readVector(1, false, this.vUids)
    this.vItemTypes = t.readVector(2, false, this.vItemTypes)
    this.vCardTypes = t.readVector(3, false, this.vCardTypes)
    this.lExpiredTime = t.readInt64(4, false, this.lExpiredTime)
    this.iIsStorage = t.readInt32(5, false, this.iIsStorage)
    this.iType = t.readInt32(6, false, this.iType)
}

Huya.QueryCardPackageRsp = function () {
    this.vItemsInUsers = new Taf.Vector(new Huya.UserPackageItemInfo)
}

Huya.QueryCardPackageRsp.prototype._clone = function () {
    return new Huya.QueryCardPackageRsp
}

Huya.QueryCardPackageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.QueryCardPackageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.QueryCardPackageRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vItemsInUsers)
}

Huya.QueryCardPackageRsp.prototype.readFrom = function (t) {
    this.vItemsInUsers = t.readVector(0, false, this.vItemsInUsers)
}

Huya.UserPackageItemInfo = function () {
    this.lUid = 0
    this.iItemType = 0
    this.sCardName = ""
    this.iCardType = 0
    this.lExpireTime = 0
    this.iIsPay = 0
    this.lItemCount = 0
}

Huya.UserPackageItemInfo.prototype._clone = function () {
    return new Huya.UserPackageItemInfo
}

Huya.UserPackageItemInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserPackageItemInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserPackageItemInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iItemType)
    t.writeString(2, this.sCardName)
    t.writeInt32(3, this.iCardType)
    t.writeInt32(4, this.lExpireTime)
    t.writeInt32(5, this.iIsPay)
    t.writeInt64(6, this.lItemCount)
}

Huya.UserPackageItemInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iItemType = t.readInt32(1, false, this.iItemType)
    this.sCardName = t.readString(2, false, this.sCardName)
    this.iCardType = t.readInt32(3, false, this.iCardType)
    this.lExpireTime = t.readInt32(4, false, this.lExpireTime)
    this.iIsPay = t.readInt32(5, false, this.iIsPay)
    this.lItemCount = t.readInt64(6, false, this.lItemCount)
}

Huya.BuyBetReq = function () {
    this.tId = new Huya.UserId
    this.lTopSid = 0
    this.lSubSid = 0
    this.lPid = 0
    this.iUnitId = 0
    this.iBetOdds = 0
    this.sUserName = ""
    this.iExchangeAmount = 0
    this.sTokencakey = ""
    this.sOrderId = ""
}

Huya.BuyBetReq.prototype._clone = function () {
    return new Huya.BuyBetReq
}

Huya.BuyBetReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BuyBetReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BuyBetReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt64(3, this.lPid)
    t.writeInt32(4, this.iUnitId)
    t.writeInt32(5, this.iBetOdds)
    t.writeString(6, this.sUserName)
    t.writeInt32(7, this.iExchangeAmount)
    t.writeString(8, this.sTokencakey)
    t.writeString(9, this.sOrderId)
}

Huya.BuyBetReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.iUnitId = t.readInt32(4, false, this.iUnitId)
    this.iBetOdds = t.readInt32(5, false, this.iBetOdds)
    this.sUserName = t.readString(6, false, this.sUserName)
    this.iExchangeAmount = t.readInt32(7, false, this.iExchangeAmount)
    this.sTokencakey = t.readString(8, false, this.sTokencakey)
    this.sOrderId = t.readString(9, false, this.sOrderId)
}

Huya.BuyBetRsp = function () {
    this.iCode = 0
    this.iBetType = 0
    this.iBetOdds = 0
    this.iSuccessExchangeAmount = 0
    this.iFailedExchangeAmount = 0
    this.iNestBestOdds = 0
}

Huya.BuyBetRsp.prototype._clone = function () {
    return new Huya.BuyBetRsp
}

Huya.BuyBetRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BuyBetRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BuyBetRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCode)
    t.writeInt32(1, this.iBetType)
    t.writeInt32(2, this.iBetOdds)
    t.writeInt32(3, this.iSuccessExchangeAmount)
    t.writeInt32(4, this.iFailedExchangeAmount)
    t.writeInt32(5, this.iNestBestOdds)
}

Huya.BuyBetRsp.prototype.readFrom = function (t) {
    this.iCode = t.readInt32(0, false, this.iCode)
    this.iBetType = t.readInt32(1, false, this.iBetType)
    this.iBetOdds = t.readInt32(2, false, this.iBetOdds)
    this.iSuccessExchangeAmount = t.readInt32(3, false, this.iSuccessExchangeAmount)
    this.iFailedExchangeAmount = t.readInt32(4, false, this.iFailedExchangeAmount)
    this.iNestBestOdds = t.readInt32(5, false, this.iNestBestOdds)
}

Huya.BetReq = function () {
    this.tId = new Huya.UserId
    this.lTopSid = 0
    this.lSubSid = 0
    this.lPid = 0
    this.sBankerName = ""
    this.iBetAmount = 0
    this.iBetOdds = 0
    this.iGameUnitId = 0
    this.iBetType = 0
    this.sTokencakey = ""
    this.sOrderId = ""
}

Huya.BetReq.prototype._clone = function () {
    return new Huya.BetReq
}

Huya.BetReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BetReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BetReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt64(3, this.lPid)
    t.writeString(4, this.sBankerName)
    t.writeInt32(5, this.iBetAmount)
    t.writeInt32(6, this.iBetOdds)
    t.writeInt32(7, this.iGameUnitId)
    t.writeInt32(8, this.iBetType)
    t.writeString(9, this.sTokencakey)
    t.writeString(10, this.sOrderId)
}

Huya.BetReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.sBankerName = t.readString(4, false, this.sBankerName)
    this.iBetAmount = t.readInt32(5, false, this.iBetAmount)
    this.iBetOdds = t.readInt32(6, false, this.iBetOdds)
    this.iGameUnitId = t.readInt32(7, false, this.iGameUnitId)
    this.iBetType = t.readInt32(8, false, this.iBetType)
    this.sTokencakey = t.readString(9, false, this.sTokencakey)
    this.sOrderId = t.readString(10, false, this.sOrderId)
}

Huya.BetRsp = function () {
    this.iCode = 0
}

Huya.BetRsp.prototype._clone = function () {
    return new Huya.BetRsp
}

Huya.BetRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BetRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BetRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCode)
}

Huya.BetRsp.prototype.readFrom = function (t) {
    this.iCode = t.readInt32(0, false, this.iCode)
}

Huya.MyBetInfo = function () {
    this.iBetId = 0
    this.sBankerName = ""
    this.iOperationType = 0
    this.iBetType = 0
    this.iBetAmount = 0
    this.iBetExchangeAmount = 0
    this.iBetOdds = 0
    this.lBetTime = 0
    this.sBetWinnerName = ""
    this.sGameName = ""
    this.lBetExchangeAmount = 0
}

Huya.MyBetInfo.prototype._clone = function () {
    return new Huya.MyBetInfo
}

Huya.MyBetInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MyBetInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MyBetInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iBetId)
    t.writeString(1, this.sBankerName)
    t.writeInt32(2, this.iOperationType)
    t.writeInt32(3, this.iBetType)
    t.writeInt32(4, this.iBetAmount)
    t.writeInt32(5, this.iBetExchangeAmount)
    t.writeInt32(6, this.iBetOdds)
    t.writeInt64(7, this.lBetTime)
    t.writeString(8, this.sBetWinnerName)
    t.writeString(9, this.sGameName)
    t.writeInt64(10, this.lBetExchangeAmount)
}

Huya.MyBetInfo.prototype.readFrom = function (t) {
    this.iBetId = t.readInt32(0, false, this.iBetId)
    this.sBankerName = t.readString(1, false, this.sBankerName)
    this.iOperationType = t.readInt32(2, false, this.iOperationType)
    this.iBetType = t.readInt32(3, false, this.iBetType)
    this.iBetAmount = t.readInt32(4, false, this.iBetAmount)
    this.iBetExchangeAmount = t.readInt32(5, false, this.iBetExchangeAmount)
    this.iBetOdds = t.readInt32(6, false, this.iBetOdds)
    this.lBetTime = t.readInt64(7, false, this.lBetTime)
    this.sBetWinnerName = t.readString(8, false, this.sBetWinnerName)
    this.sGameName = t.readString(9, false, this.sGameName)
    this.lBetExchangeAmount = t.readInt64(10, false, this.lBetExchangeAmount)
}

Huya.BatchGameInfoNotice = function () {
    this.vGameNoticeInfoList = new Taf.Vector(new Huya.GameNoticeInfoList)
    this.lTopSid = 0
    this.lSubSid = 0
    this.iCommission = 0
}

Huya.BatchGameInfoNotice.prototype._clone = function () {
    return new Huya.BatchGameInfoNotice
}

Huya.BatchGameInfoNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BatchGameInfoNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BatchGameInfoNotice.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGameNoticeInfoList)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt32(3, this.iCommission)
}

Huya.BatchGameInfoNotice.prototype.readFrom = function (t) {
    this.vGameNoticeInfoList = t.readVector(0, false, this.vGameNoticeInfoList)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.iCommission = t.readInt32(3, false, this.iCommission)
}

Huya.GameNoticeInfoList = function () {
    this.vGameNoticeInfo = new Taf.Vector(new Huya.GameNoticeInfo)
}

Huya.GameNoticeInfoList.prototype._clone = function () {
    return new Huya.GameNoticeInfoList
}

Huya.GameNoticeInfoList.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameNoticeInfoList.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameNoticeInfoList.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGameNoticeInfo)
}

Huya.GameNoticeInfoList.prototype.readFrom = function (t) {
    this.vGameNoticeInfo = t.readVector(0, false, this.vGameNoticeInfo)
}

Huya.GameNoticeInfo = function () {
    this.iGameId = 0
    this.iGameStats = 0
    this.lGameStarterUid = 0
    this.sGameName = ""
    this.lGameStarttime = 0
    this.sGameDescription = ""
    this.vGameUnitInfo = new Taf.Vector(new Huya.GameUnitInfoV1)
    this.iStarterTotalGames = 0
    this.iStarterUncloseGames = 0
    this.iStarterCreditValue = 0
    this.iExchangeCredit = 0
    this.iBetType = 0
    this.lGameBetOffTime = 0
    this.iGameBetOffRetTime = 0
}

Huya.GameNoticeInfo.prototype._clone = function () {
    return new Huya.GameNoticeInfo
}

Huya.GameNoticeInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameNoticeInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameNoticeInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iGameId)
    t.writeInt32(1, this.iGameStats)
    t.writeInt64(2, this.lGameStarterUid)
    t.writeString(3, this.sGameName)
    t.writeInt64(4, this.lGameStarttime)
    t.writeString(5, this.sGameDescription)
    t.writeVector(6, this.vGameUnitInfo)
    t.writeInt32(7, this.iStarterTotalGames)
    t.writeInt32(8, this.iStarterUncloseGames)
    t.writeInt32(9, this.iStarterCreditValue)
    t.writeInt32(10, this.iExchangeCredit)
    t.writeInt32(11, this.iBetType)
    t.writeInt32(12, this.lGameBetOffTime)
    t.writeInt32(13, this.iGameBetOffRetTime)
}

Huya.GameNoticeInfo.prototype.readFrom = function (t) {
    this.iGameId = t.readInt32(0, false, this.iGameId)
    this.iGameStats = t.readInt32(1, false, this.iGameStats)
    this.lGameStarterUid = t.readInt64(2, false, this.lGameStarterUid)
    this.sGameName = t.readString(3, false, this.sGameName)
    this.lGameStarttime = t.readInt64(4, false, this.lGameStarttime)
    this.sGameDescription = t.readString(5, false, this.sGameDescription)
    this.vGameUnitInfo = t.readVector(6, false, this.vGameUnitInfo)
    this.iStarterTotalGames = t.readInt32(7, false, this.iStarterTotalGames)
    this.iStarterUncloseGames = t.readInt32(8, false, this.iStarterUncloseGames)
    this.iStarterCreditValue = t.readInt32(9, false, this.iStarterCreditValue)
    this.iExchangeCredit = t.readInt32(10, false, this.iExchangeCredit)
    this.iBetType = t.readInt32(11, false, this.iBetType)
    this.lGameBetOffTime = t.readInt32(12, false, this.lGameBetOffTime)
    this.iGameBetOffRetTime = t.readInt32(13, false, this.iGameBetOffRetTime)
}

Huya.GameInfoChangeNotice = function () {
    this.iGameId = 0
    this.iGameStats = 0
    this.vGameUnitInfo = new Taf.Vector(new Huya.GameUnitInfoV1)
    this.lTopSid = 0
    this.lSubSid = 0
}

Huya.GameInfoChangeNotice.prototype._clone = function () {
    return new Huya.GameInfoChangeNotice
}

Huya.GameInfoChangeNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameInfoChangeNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameInfoChangeNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iGameId)
    t.writeInt32(1, this.iGameStats)
    t.writeVector(2, this.vGameUnitInfo)
    t.writeInt64(3, this.lTopSid)
    t.writeInt64(4, this.lSubSid)
}

Huya.GameInfoChangeNotice.prototype.readFrom = function (t) {
    this.iGameId = t.readInt32(0, false, this.iGameId)
    this.iGameStats = t.readInt32(1, false, this.iGameStats)
    this.vGameUnitInfo = t.readVector(2, false, this.vGameUnitInfo)
    this.lTopSid = t.readInt64(3, false, this.lTopSid)
    this.lSubSid = t.readInt64(4, false, this.lSubSid)
}

Huya.GameUnitInfoV1 = function () {
    this.iGameUnitId = 0
    this.sGameUnitName = ""
    this.iBetOdds = 0
    this.iBetExchangeAmount = 0
    this.lBetExchangeAmount = 0
}

Huya.GameUnitInfoV1.prototype._clone = function () {
    return new Huya.GameUnitInfoV1
}

Huya.GameUnitInfoV1.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameUnitInfoV1.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameUnitInfoV1.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iGameUnitId)
    t.writeString(1, this.sGameUnitName)
    t.writeInt32(2, this.iBetOdds)
    t.writeInt32(3, this.iBetExchangeAmount)
    t.writeInt64(4, this.lBetExchangeAmount)
}

Huya.GameUnitInfoV1.prototype.readFrom = function (t) {
    this.iGameUnitId = t.readInt32(0, false, this.iGameUnitId)
    this.sGameUnitName = t.readString(1, false, this.sGameUnitName)
    this.iBetOdds = t.readInt32(2, false, this.iBetOdds)
    this.iBetExchangeAmount = t.readInt32(3, false, this.iBetExchangeAmount)
    this.lBetExchangeAmount = t.readInt64(4, false, this.lBetExchangeAmount)
}

Huya.EndHistoryGameNotice = function () {
    this.vHistoryGameInfo = new Taf.Vector(new Huya.HistoryGameInfo)
    this.lTopSid = 0
    this.lSubSid = 0
}

Huya.EndHistoryGameNotice.prototype._clone = function () {
    return new Huya.EndHistoryGameNotice
}

Huya.EndHistoryGameNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.EndHistoryGameNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.EndHistoryGameNotice.prototype.writeTo = function (t) {
    t.writeVector(0, this.vHistoryGameInfo)
    t.writeInt64(1, this.lTopSid)
    t.writeInt64(2, this.lSubSid)
}

Huya.EndHistoryGameNotice.prototype.readFrom = function (t) {
    this.vHistoryGameInfo = t.readVector(0, false, this.vHistoryGameInfo)
    this.lTopSid = t.readInt64(1, false, this.lTopSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
}

Huya.HistoryGameInfo = function () {
    this.sTopicName = ""
    this.iBreakFlag = 0
    this.sWinnerName = ""
}

Huya.HistoryGameInfo.prototype._clone = function () {
    return new Huya.HistoryGameInfo
}

Huya.HistoryGameInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.HistoryGameInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.HistoryGameInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sTopicName)
    t.writeInt32(1, this.iBreakFlag)
    t.writeString(2, this.sWinnerName)
}

Huya.HistoryGameInfo.prototype.readFrom = function (t) {
    this.sTopicName = t.readString(0, false, this.sTopicName)
    this.iBreakFlag = t.readInt32(1, false, this.iBreakFlag)
    this.sWinnerName = t.readString(2, false, this.sWinnerName)
}

Huya.GameSettlementNotice = function () {
    this.vGameUnitNames = new Taf.Vector(new Taf.STRING)
    this.iWinnerUnitId = 0
    this.iBetIncome = 0
    this.iBuyIncome = 0
    this.lGameTime = 0
    this.vMyInfoList = new Taf.Vector(new Huya.MyBetInfo)
    this.iGameId = 0
    this.lBetIncome = 0
}

Huya.GameSettlementNotice.prototype._clone = function () {
    return new Huya.GameSettlementNotice
}

Huya.GameSettlementNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameSettlementNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameSettlementNotice.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGameUnitNames)
    t.writeInt32(1, this.iWinnerUnitId)
    t.writeInt32(2, this.iBetIncome)
    t.writeInt32(3, this.iBuyIncome)
    t.writeInt64(4, this.lGameTime)
    t.writeVector(5, this.vMyInfoList)
    t.writeInt32(6, this.iGameId)
    t.writeInt64(7, this.lBetIncome)
}

Huya.GameSettlementNotice.prototype.readFrom = function (t) {
    this.vGameUnitNames = t.readVector(0, false, this.vGameUnitNames)
    this.iWinnerUnitId = t.readInt32(1, false, this.iWinnerUnitId)
    this.iBetIncome = t.readInt32(2, false, this.iBetIncome)
    this.iBuyIncome = t.readInt32(3, false, this.iBuyIncome)
    this.lGameTime = t.readInt64(4, false, this.lGameTime)
    this.vMyInfoList = t.readVector(5, false, this.vMyInfoList)
    this.iGameId = t.readInt32(6, false, this.iGameId)
    this.lBetIncome = t.readInt64(7, false, this.lBetIncome)
}

Huya.PresenterEndGameNotice = function () {
    this.iGameId = 0
    this.iGameUnitId = 0
    this.iGameResult = 0
}

Huya.PresenterEndGameNotice.prototype._clone = function () {
    return new Huya.PresenterEndGameNotice
}

Huya.PresenterEndGameNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterEndGameNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterEndGameNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iGameId)
    t.writeInt32(1, this.iGameUnitId)
    t.writeInt32(2, this.iGameResult)
}

Huya.PresenterEndGameNotice.prototype.readFrom = function (t) {
    this.iGameId = t.readInt32(0, false, this.iGameId)
    this.iGameUnitId = t.readInt32(1, false, this.iGameUnitId)
    this.iGameResult = t.readInt32(2, false, this.iGameResult)
}

Huya.GetAssistantReq = function () {
    this.tId = new Huya.UserId
    this.lPid = 0
    this.lAssistantUid = 0
}

Huya.GetAssistantReq.prototype._clone = function () {
    return new Huya.GetAssistantReq
}

Huya.GetAssistantReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetAssistantReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetAssistantReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lAssistantUid)
}

Huya.GetAssistantReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lAssistantUid = t.readInt64(2, false, this.lAssistantUid)
}

Huya.GetAssistantRsp = function () {
    this.iCode = 0
    this.lAssistantUid = 0
}

Huya.GetAssistantRsp.prototype._clone = function () {
    return new Huya.GetAssistantRsp
}

Huya.GetAssistantRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetAssistantRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetAssistantRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCode)
    t.writeInt64(1, this.lAssistantUid)
}

Huya.GetAssistantRsp.prototype.readFrom = function (t) {
    this.iCode = t.readInt32(0, false, this.iCode)
    this.lAssistantUid = t.readInt64(1, false, this.lAssistantUid)
}

Huya.ShowScreenSkinNotify = function () {
    this.data = new Huya.ScreenSkinData
}

Huya.ShowScreenSkinNotify.prototype._clone = function () {
    return new Huya.ShowScreenSkinNotify
}

Huya.ShowScreenSkinNotify.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ShowScreenSkinNotify.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ShowScreenSkinNotify.prototype.writeTo = function (t) {
    t.writeStruct(0, this.data)
}

Huya.ShowScreenSkinNotify.prototype.readFrom = function (t) {
    this.data = t.readStruct(0, false, this.data)
}

Huya.HideScreenSkinNotify = function () {
    this.lId = 0
}

Huya.HideScreenSkinNotify.prototype._clone = function () {
    return new Huya.HideScreenSkinNotify
}

Huya.HideScreenSkinNotify.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.HideScreenSkinNotify.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.HideScreenSkinNotify.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lId)
}

Huya.HideScreenSkinNotify.prototype.readFrom = function (t) {
    this.lId = t.readInt64(0, false, this.lId)
}

Huya.ScreenSkinData = function () {
    this.lId = 0
    this.sTitle = ""
    this.sPicUrl = ""
    this.iStatus = 0
    this.iTemplate = 0
    this.iPresenterUid = 0
    this.sWebPicUrl = ""
}

Huya.ScreenSkinData.prototype._clone = function () {
    return new Huya.ScreenSkinData
}

Huya.ScreenSkinData.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ScreenSkinData.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ScreenSkinData.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lId)
    t.writeString(1, this.sTitle)
    t.writeString(2, this.sPicUrl)
    t.writeInt16(3, this.iStatus)
    t.writeInt32(4, this.iTemplate)
    t.writeInt64(5, this.iPresenterUid)
    t.writeString(6, this.sWebPicUrl)
}

Huya.ScreenSkinData.prototype.readFrom = function (t) {
    this.lId = t.readInt64(0, false, this.lId)
    this.sTitle = t.readString(1, false, this.sTitle)
    this.sPicUrl = t.readString(2, false, this.sPicUrl)
    this.iStatus = t.readInt16(3, false, this.iStatus)
    this.iTemplate = t.readInt32(4, false, this.iTemplate)
    this.iPresenterUid = t.readInt64(5, false, this.iPresenterUid)
    this.sWebPicUrl = t.readString(6, false, this.sWebPicUrl)
}

Huya.getScreenSkinReq = function () {
    this.tId = new Huya.UserId
    this.lPresenterUid = 0
    this.iTemplate = 0
    this.iFromType = 0
}

Huya.getScreenSkinReq.prototype._clone = function () {
    return new Huya.getScreenSkinReq
}

Huya.getScreenSkinReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.getScreenSkinReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.getScreenSkinReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPresenterUid)
    t.writeInt32(2, this.iTemplate)
    t.writeInt32(3, this.iFromType)
}

Huya.getScreenSkinReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid)
    this.iTemplate = t.readInt32(2, false, this.iTemplate)
    this.iFromType = t.readInt32(3, false, this.iFromType)
}

Huya.getScreenSkinRsp = function () {
    this.iRetCode = 0
    this.data = new Huya.ScreenSkinData
}

Huya.getScreenSkinRsp.prototype._clone = function () {
    return new Huya.getScreenSkinRsp
}

Huya.getScreenSkinRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.getScreenSkinRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.getScreenSkinRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRetCode)
    t.writeStruct(1, this.data)
}

Huya.getScreenSkinRsp.prototype.readFrom = function (t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode)
    this.data = t.readStruct(1, false, this.data)
}

Huya.GetRoomAuditConfReq = function () {
    this.tId = new Huya.UserId
    this.lTopCid = 0
    this.lSubCid = 0
    this.lPresenterUid = 0
}

Huya.GetRoomAuditConfReq.prototype._clone = function () {
    return new Huya.GetRoomAuditConfReq
}

Huya.GetRoomAuditConfReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRoomAuditConfReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRoomAuditConfReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTopCid)
    t.writeInt64(2, this.lSubCid)
    t.writeInt64(3, this.lPresenterUid)
}

Huya.GetRoomAuditConfReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTopCid = t.readInt64(1, false, this.lTopCid)
    this.lSubCid = t.readInt64(2, false, this.lSubCid)
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid)
}

Huya.GetRoomAuditConfRsp = function () {
    this.lPresenterUid = 0
    this.vSpeakSwitchItem = new Taf.Vector(new Huya.SpeakSwitchItem)
}

Huya.GetRoomAuditConfRsp.prototype._clone = function () {
    return new Huya.GetRoomAuditConfRsp
}

Huya.GetRoomAuditConfRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRoomAuditConfRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRoomAuditConfRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPresenterUid)
    t.writeVector(1, this.vSpeakSwitchItem)
}

Huya.GetRoomAuditConfRsp.prototype.readFrom = function (t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid)
    this.vSpeakSwitchItem = t.readVector(1, false, this.vSpeakSwitchItem)
}

Huya.SpeakSwitchItem = function () {
    this.iItemID = 0
    this.iValue = 0
}

Huya.SpeakSwitchItem.prototype._clone = function () {
    return new Huya.SpeakSwitchItem
}

Huya.SpeakSwitchItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SpeakSwitchItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SpeakSwitchItem.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemID)
    t.writeInt32(1, this.iValue)
}

Huya.SpeakSwitchItem.prototype.readFrom = function (t) {
    this.iItemID = t.readInt32(0, false, this.iItemID)
    this.iValue = t.readInt32(1, false, this.iValue)
}

Huya.ERoomAuditConfItem = {
    EItem_NormalNoSpeak: 1001,
    EItem_TextLimit: 1002,
    EItem_SpeakCD: 1003,
    EItem_ResetNoSpeakConf: 1004
}
Huya.GetPresenterDetailReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
}

Huya.GetPresenterDetailReq.prototype._clone = function () {
    return new Huya.GetPresenterDetailReq
}

Huya.GetPresenterDetailReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPresenterDetailReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPresenterDetailReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
}

Huya.GetPresenterDetailReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
}

Huya.GetPresenterDetailRsp = function () {
    this.mMiscInfo = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.iStartTime = 0
}

Huya.GetPresenterDetailRsp.prototype._clone = function () {
    return new Huya.GetPresenterDetailRsp
}

Huya.GetPresenterDetailRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPresenterDetailRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPresenterDetailRsp.prototype.writeTo = function (t) {
    t.writeMap(0, this.mMiscInfo)
    t.writeInt32(1, this.iStartTime)
}

Huya.GetPresenterDetailRsp.prototype.readFrom = function (t) {
    this.mMiscInfo = t.readMap(0, false, this.mMiscInfo)
    this.iStartTime = t.readInt32(1, false, this.iStartTime)
}

Huya.BadgeNameRsp = function () {
    this.lPid = 0
    this.sBadgeName = ""
    this.iBadgeType = 0
    this.lBadgeId = 0
}

Huya.BadgeNameRsp.prototype._clone = function () {
    return new Huya.BadgeNameRsp
}

Huya.BadgeNameRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeNameRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeNameRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeString(1, this.sBadgeName)
    t.writeInt32(2, this.iBadgeType)
    t.writeInt64(3, this.lBadgeId)
}

Huya.BadgeNameRsp.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.sBadgeName = t.readString(1, false, this.sBadgeName)
    this.iBadgeType = t.readInt32(2, false, this.iBadgeType)
    this.lBadgeId = t.readInt64(3, false, this.lBadgeId)
}

Huya.GameBaseInfo = function () {
    this.iId = 0
    this.sFullName = ""
    this.sShortName = ""
    this.sIcon = ""
    this.iCategory = 0
    this.sCategoryName = ""
    this.iExeId = 0
}

Huya.GameBaseInfo.prototype._clone = function () {
    return new Huya.GameBaseInfo
}

Huya.GameBaseInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameBaseInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameBaseInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iId)
    t.writeString(1, this.sFullName)
    t.writeString(2, this.sShortName)
    t.writeString(3, this.sIcon)
    t.writeInt32(4, this.iCategory)
    t.writeString(5, this.sCategoryName)
    t.writeInt32(6, this.iExeId)
}

Huya.GameBaseInfo.prototype.readFrom = function (t) {
    this.iId = t.readInt32(0, false, this.iId)
    this.sFullName = t.readString(1, false, this.sFullName)
    this.sShortName = t.readString(2, false, this.sShortName)
    this.sIcon = t.readString(3, false, this.sIcon)
    this.iCategory = t.readInt32(4, false, this.iCategory)
    this.sCategoryName = t.readString(5, false, this.sCategoryName)
    this.iExeId = t.readInt32(6, false, this.iExeId)
}

Huya.AwardUser = function () {
    this.sUserNick = ""
    this.iPrizeType = 0
    this.sPrizeName = ""
}

Huya.AwardUser.prototype._clone = function () {
    return new Huya.AwardUser
}

Huya.AwardUser.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.AwardUser.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.AwardUser.prototype.writeTo = function (t) {
    t.writeString(0, this.sUserNick)
    t.writeInt16(1, this.iPrizeType)
    t.writeString(2, this.sPrizeName)
}

Huya.AwardUser.prototype.readFrom = function (t) {
    this.sUserNick = t.readString(0, false, this.sUserNick)
    this.iPrizeType = t.readInt16(1, false, this.iPrizeType)
    this.sPrizeName = t.readString(2, false, this.sPrizeName)
}

Huya.TreasureResultBroadcastPacket = function () {
    this.lStarterUid = 0
    this.sStarterNick = ""
    this.iShortChannelId = 0
    this.vAwardUsers = new Taf.Vector(new Huya.AwardUser)
    this.lTid = 0
    this.lSid = 0
    this.iTreasureType = 0
    this.sTreasureName = ""
    this.lPid = 0
}

Huya.TreasureResultBroadcastPacket.prototype._clone = function () {
    return new Huya.TreasureResultBroadcastPacket
}

Huya.TreasureResultBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TreasureResultBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TreasureResultBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lStarterUid)
    t.writeString(1, this.sStarterNick)
    t.writeInt32(2, this.iShortChannelId)
    t.writeVector(3, this.vAwardUsers)
    t.writeInt64(4, this.lTid)
    t.writeInt64(5, this.lSid)
    t.writeInt32(6, this.iTreasureType)
    t.writeString(7, this.sTreasureName)
    t.writeInt64(8, this.lPid)
}

Huya.TreasureResultBroadcastPacket.prototype.readFrom = function (t) {
    this.lStarterUid = t.readInt64(0, false, this.lStarterUid)
    this.sStarterNick = t.readString(1, false, this.sStarterNick)
    this.iShortChannelId = t.readInt32(2, false, this.iShortChannelId)
    this.vAwardUsers = t.readVector(3, false, this.vAwardUsers)
    this.lTid = t.readInt64(4, false, this.lTid)
    this.lSid = t.readInt64(5, false, this.lSid)
    this.iTreasureType = t.readInt32(6, false, this.iTreasureType)
    this.sTreasureName = t.readString(7, false, this.sTreasureName)
    this.lPid = t.readInt64(8, false, this.lPid)
}

Huya.TreasureUpdateNotice = function () {
    this.lSendUid = 0
    this.sSendNick = ""
    this.iQueneSize = 0
    this.iCountDown = 0
    this.iState = 0
    this.Id = ""
    this.iTreasureType = 0
    this.sTreasureName = ""
}

Huya.TreasureUpdateNotice.prototype._clone = function () {
    return new Huya.TreasureUpdateNotice
}

Huya.TreasureUpdateNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TreasureUpdateNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TreasureUpdateNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lSendUid)
    t.writeString(1, this.sSendNick)
    t.writeInt16(2, this.iQueneSize)
    t.writeInt32(3, this.iCountDown)
    t.writeInt16(4, this.iState)
    t.writeString(5, this.Id)
    t.writeInt32(6, this.iTreasureType)
    t.writeString(7, this.sTreasureName)
}

Huya.TreasureUpdateNotice.prototype.readFrom = function (t) {
    this.lSendUid = t.readInt64(0, false, this.lSendUid)
    this.sSendNick = t.readString(1, false, this.sSendNick)
    this.iQueneSize = t.readInt16(2, false, this.iQueneSize)
    this.iCountDown = t.readInt32(3, false, this.iCountDown)
    this.iState = t.readInt16(4, false, this.iState)
    this.Id = t.readString(5, false, this.Id)
    this.iTreasureType = t.readInt32(6, false, this.iTreasureType)
    this.sTreasureName = t.readString(7, false, this.sTreasureName)
}

Huya.TreasureLotteryDrawReq = function () {
    this.tId = new Huya.UserId
    this.sStarterNick = ""
    this.lSid = 0
    this.lSubSid = 0
    this.iFromType = 0
    this.lRoomId = 0
    this.lPid = 0
}

Huya.TreasureLotteryDrawReq.prototype._clone = function () {
    return new Huya.TreasureLotteryDrawReq
}

Huya.TreasureLotteryDrawReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TreasureLotteryDrawReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TreasureLotteryDrawReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeString(1, this.sStarterNick)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lSubSid)
    t.writeInt16(4, this.iFromType)
    t.writeInt64(5, this.lRoomId)
    t.writeInt64(6, this.lPid)
}

Huya.TreasureLotteryDrawReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.sStarterNick = t.readString(1, false, this.sStarterNick)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lSubSid = t.readInt64(3, false, this.lSubSid)
    this.iFromType = t.readInt16(4, false, this.iFromType)
    this.lRoomId = t.readInt64(5, false, this.lRoomId)
    this.lPid = t.readInt64(6, false, this.lPid)
}

Huya.TreasureLotteryDrawRsp = function () {
    this.lStarterUid = 0
    this.iRetCode = 0
    this.iPrizeType = 0
    this.sNickName = ""
    this.sPrizeName = ""
}

Huya.TreasureLotteryDrawRsp.prototype._clone = function () {
    return new Huya.TreasureLotteryDrawRsp
}

Huya.TreasureLotteryDrawRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TreasureLotteryDrawRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TreasureLotteryDrawRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lStarterUid)
    t.writeInt32(1, this.iRetCode)
    t.writeInt16(2, this.iPrizeType)
    t.writeString(3, this.sNickName)
    t.writeString(4, this.sPrizeName)
}

Huya.TreasureLotteryDrawRsp.prototype.readFrom = function (t) {
    this.lStarterUid = t.readInt64(0, false, this.lStarterUid)
    this.iRetCode = t.readInt32(1, false, this.iRetCode)
    this.iPrizeType = t.readInt16(2, false, this.iPrizeType)
    this.sNickName = t.readString(3, false, this.sNickName)
    this.sPrizeName = t.readString(4, false, this.sPrizeName)
}

Huya.QueryTreasureInfoReq = function () {
    this.tId = new Huya.UserId
    this.lSid = 0
    this.lSubSid = 0
    this.iFromType = 0
    this.lRoomId = 0
    this.lPid = 0
}

Huya.QueryTreasureInfoReq.prototype._clone = function () {
    return new Huya.QueryTreasureInfoReq
}

Huya.QueryTreasureInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.QueryTreasureInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.QueryTreasureInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt16(4, this.iFromType)
    t.writeInt64(5, this.lRoomId)
    t.writeInt64(6, this.lPid)
}

Huya.QueryTreasureInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.iFromType = t.readInt16(4, false, this.iFromType)
    this.lRoomId = t.readInt64(5, false, this.lRoomId)
    this.lPid = t.readInt64(6, false, this.lPid)
}

Huya.QueryTreasureInfoRsp = function () {
    this.iRetCode = 0
    this.iQueneSize = 0
    this.iStatus = 0
    this.iCountDown = 0
    this.lUid = 0
    this.sNickName = ""
    this.iTreasureType = 0
    this.sTreasureName = ""
}

Huya.QueryTreasureInfoRsp.prototype._clone = function () {
    return new Huya.QueryTreasureInfoRsp
}

Huya.QueryTreasureInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.QueryTreasureInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.QueryTreasureInfoRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRetCode)
    t.writeInt16(1, this.iQueneSize)
    t.writeInt16(2, this.iStatus)
    t.writeInt32(3, this.iCountDown)
    t.writeInt64(4, this.lUid)
    t.writeString(5, this.sNickName)
    t.writeInt32(6, this.iTreasureType)
    t.writeString(7, this.sTreasureName)
}

Huya.QueryTreasureInfoRsp.prototype.readFrom = function (t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode)
    this.iQueneSize = t.readInt16(1, false, this.iQueneSize)
    this.iStatus = t.readInt16(2, false, this.iStatus)
    this.iCountDown = t.readInt32(3, false, this.iCountDown)
    this.lUid = t.readInt64(4, false, this.lUid)
    this.sNickName = t.readString(5, false, this.sNickName)
    this.iTreasureType = t.readInt32(6, false, this.iTreasureType)
    this.sTreasureName = t.readString(7, false, this.sTreasureName)
}

Huya.TreasureLotteryResultNoticePacket = function () {
    this.lStarterUid = 0
    this.lSid = 0
    this.lSubSid = 0
    this.lTimeStamp = 0
    this.iPrizeType = 0
    this.lUserUid = 0
    this.sKey = ""
    this.sCode = ""
    this.sPrizeName = ""
    this.sStarterNick = ""
    this.sUserNick = ""
    this.lRoomId = 0
}

Huya.TreasureLotteryResultNoticePacket.prototype._clone = function () {
    return new Huya.TreasureLotteryResultNoticePacket
}

Huya.TreasureLotteryResultNoticePacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TreasureLotteryResultNoticePacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TreasureLotteryResultNoticePacket.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lStarterUid)
    t.writeInt64(1, this.lSid)
    t.writeInt64(2, this.lSubSid)
    t.writeInt64(3, this.lTimeStamp)
    t.writeInt16(4, this.iPrizeType)
    t.writeInt64(5, this.lUserUid)
    t.writeString(6, this.sKey)
    t.writeString(7, this.sCode)
    t.writeString(8, this.sPrizeName)
    t.writeString(9, this.sStarterNick)
    t.writeString(10, this.sUserNick)
    t.writeInt64(11, this.lRoomId)
}

Huya.TreasureLotteryResultNoticePacket.prototype.readFrom = function (t) {
    this.lStarterUid = t.readInt64(0, false, this.lStarterUid)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
    this.lTimeStamp = t.readInt64(3, false, this.lTimeStamp)
    this.iPrizeType = t.readInt16(4, false, this.iPrizeType)
    this.lUserUid = t.readInt64(5, false, this.lUserUid)
    this.sKey = t.readString(6, false, this.sKey)
    this.sCode = t.readString(7, false, this.sCode)
    this.sPrizeName = t.readString(8, false, this.sPrizeName)
    this.sStarterNick = t.readString(9, false, this.sStarterNick)
    this.sUserNick = t.readString(10, false, this.sUserNick)
    this.lRoomId = t.readInt64(11, false, this.lRoomId)
}

Huya.ViewerListReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
}

Huya.ViewerListReq.prototype._clone = function () {
    return new Huya.ViewerListReq
}

Huya.ViewerListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ViewerListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ViewerListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
}

Huya.ViewerListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
}

Huya.ViewerListRsp = function () {
    this.lTid = 0
    this.lSid = 0
    this.vViewerItem = new Taf.Vector(new Huya.ViewerItem)
    this.iNobleNum = 0
    this.iUserNum = 0
}

Huya.ViewerListRsp.prototype._clone = function () {
    return new Huya.ViewerListRsp
}

Huya.ViewerListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ViewerListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ViewerListRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTid)
    t.writeInt64(1, this.lSid)
    t.writeVector(2, this.vViewerItem)
    t.writeInt32(3, this.iNobleNum)
    t.writeInt32(4, this.iUserNum)
}

Huya.ViewerListRsp.prototype.readFrom = function (t) {
    this.lTid = t.readInt64(0, false, this.lTid)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.vViewerItem = t.readVector(2, false, this.vViewerItem)
    this.iNobleNum = t.readInt32(3, false, this.iNobleNum)
    this.iUserNum = t.readInt32(4, false, this.iUserNum)
}

Huya.ViewerItem = function () {
    this.lUid = 0
    this.sNickName = ""
    this.sLogo = ""
    this.iNobleLevel = 0
    this.iUserLevel = 0
}

Huya.ViewerItem.prototype._clone = function () {
    return new Huya.ViewerItem
}

Huya.ViewerItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ViewerItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ViewerItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeString(2, this.sLogo)
    t.writeInt32(3, this.iNobleLevel)
    t.writeInt32(4, this.iUserLevel)
}

Huya.ViewerItem.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.sLogo = t.readString(2, false, this.sLogo)
    this.iNobleLevel = t.readInt32(3, false, this.iNobleLevel)
    this.iUserLevel = t.readInt32(4, false, this.iUserLevel)
}

Huya.FansSupportListReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
}

Huya.FansSupportListReq.prototype._clone = function () {
    return new Huya.FansSupportListReq
}

Huya.FansSupportListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansSupportListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansSupportListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
}

Huya.FansSupportListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
}

Huya.FansSupportListRsp = function () {
    this.lPid = 0
    this.vFansSupportList = new Taf.Vector(new Huya.FansSupportItem)
    this.sBadgeName = ""
}

Huya.FansSupportListRsp.prototype._clone = function () {
    return new Huya.FansSupportListRsp
}

Huya.FansSupportListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansSupportListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansSupportListRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeVector(1, this.vFansSupportList)
    t.writeString(2, this.sBadgeName)
}

Huya.FansSupportListRsp.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.vFansSupportList = t.readVector(1, false, this.vFansSupportList)
    this.sBadgeName = t.readString(2, false, this.sBadgeName)
}

Huya.FansSupportItem = function () {
    this.lUid = 0
    this.sNickName = ""
    this.sLogo = ""
    this.iFansLevel = 0
    this.iGuardianLevel = 0
    this.sBadgeName = ""
    this.iUserLevel = 0
    this.iNobleLevel = 0
}

Huya.FansSupportItem.prototype._clone = function () {
    return new Huya.FansSupportItem
}

Huya.FansSupportItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansSupportItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansSupportItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeString(2, this.sLogo)
    t.writeInt32(3, this.iFansLevel)
    t.writeInt32(4, this.iGuardianLevel)
    t.writeString(5, this.sBadgeName)
    t.writeInt32(6, this.iUserLevel)
    t.writeInt32(7, this.iNobleLevel)
}

Huya.FansSupportItem.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.sLogo = t.readString(2, false, this.sLogo)
    this.iFansLevel = t.readInt32(3, false, this.iFansLevel)
    this.iGuardianLevel = t.readInt32(4, false, this.iGuardianLevel)
    this.sBadgeName = t.readString(5, false, this.sBadgeName)
    this.iUserLevel = t.readInt32(6, false, this.iUserLevel)
    this.iNobleLevel = t.readInt32(7, false, this.iNobleLevel)
}

Huya.LinkMicStatusChangeNotice = function () {
    this.lLMSessionId = 0
    this.iLinkMicStatus = 0
    this.lOwnerUid = 0
    this.vLMPresenterInfos = new Taf.Vector(new Huya.LMPresenterInfo)
    this.lPid = 0
}

Huya.LinkMicStatusChangeNotice.prototype._clone = function () {
    return new Huya.LinkMicStatusChangeNotice
}

Huya.LinkMicStatusChangeNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LinkMicStatusChangeNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LinkMicStatusChangeNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLMSessionId)
    t.writeInt32(1, this.iLinkMicStatus)
    t.writeInt64(2, this.lOwnerUid)
    t.writeVector(3, this.vLMPresenterInfos)
    t.writeInt64(4, this.lPid)
}

Huya.LinkMicStatusChangeNotice.prototype.readFrom = function (t) {
    this.lLMSessionId = t.readInt64(0, false, this.lLMSessionId)
    this.iLinkMicStatus = t.readInt32(1, false, this.iLinkMicStatus)
    this.lOwnerUid = t.readInt64(2, false, this.lOwnerUid)
    this.vLMPresenterInfos = t.readVector(3, false, this.vLMPresenterInfos)
    this.lPid = t.readInt64(4, false, this.lPid)
}

Huya.LMPresenterInfo = function () {
    this.lUid = 0
    this.lChannelId = 0
    this.lSubChannelId = 0
    this.sNick = ""
    this.sAvatarUrl = ""
    this.iActivityCount = 0
    this.iLevel = 0
    this.lYYId = 0
    this.sGameName = ""
    this.iSourceType = 0
    this.iScreenType = 0
    this.bLive = true
    this.sChannelName = ""
    this.sChannelTitle = ""
    this.sVideoCaptureUrl = ""
    this.iRoomId = 0
}

Huya.LMPresenterInfo.prototype._clone = function () {
    return new Huya.LMPresenterInfo
}

Huya.LMPresenterInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LMPresenterInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LMPresenterInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lChannelId)
    t.writeInt64(2, this.lSubChannelId)
    t.writeString(3, this.sNick)
    t.writeString(4, this.sAvatarUrl)
    t.writeInt32(5, this.iActivityCount)
    t.writeInt32(6, this.iLevel)
    t.writeInt64(7, this.lYYId)
    t.writeString(8, this.sGameName)
    t.writeInt32(9, this.iSourceType)
    t.writeInt32(10, this.iScreenType)
    t.writeBoolean(11, this.bLive)
    t.writeString(12, this.sChannelName)
    t.writeString(13, this.sChannelTitle)
    t.writeString(14, this.sVideoCaptureUrl)
    t.writeInt32(15, this.iRoomId)
}

Huya.LMPresenterInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lChannelId = t.readInt64(1, false, this.lChannelId)
    this.lSubChannelId = t.readInt64(2, false, this.lSubChannelId)
    this.sNick = t.readString(3, false, this.sNick)
    this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl)
    this.iActivityCount = t.readInt32(5, false, this.iActivityCount)
    this.iLevel = t.readInt32(6, false, this.iLevel)
    this.lYYId = t.readInt64(7, false, this.lYYId)
    this.sGameName = t.readString(8, false, this.sGameName)
    this.iSourceType = t.readInt32(9, false, this.iSourceType)
    this.iScreenType = t.readInt32(10, false, this.iScreenType)
    this.bLive = t.readBoolean(11, false, this.bLive)
    this.sChannelName = t.readString(12, false, this.sChannelName)
    this.sChannelTitle = t.readString(13, false, this.sChannelTitle)
    this.sVideoCaptureUrl = t.readString(14, false, this.sVideoCaptureUrl)
    this.iRoomId = t.readInt32(15, false, this.iRoomId)
}

Huya.GetLinkMicPresenterInfoReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
}

Huya.GetLinkMicPresenterInfoReq.prototype._clone = function () {
    return new Huya.GetLinkMicPresenterInfoReq
}

Huya.GetLinkMicPresenterInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetLinkMicPresenterInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetLinkMicPresenterInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
}

Huya.GetLinkMicPresenterInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
}

Huya.GetLinkMicPresenterInfoRsp = function () {
    this.lLMSessionId = 0
    this.iLinkMicStatus = 0
    this.lOwnerUid = 0
    this.vLMPresenterInfos = new Taf.Vector(new Huya.LMPresenterInfo)
    this.mPid2SubscribeStatus = new Taf.Map(new Taf.INT64, new Taf.INT32)
    this.bDirector = false
}

Huya.GetLinkMicPresenterInfoRsp.prototype._clone = function () {
    return new Huya.GetLinkMicPresenterInfoRsp
}

Huya.GetLinkMicPresenterInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetLinkMicPresenterInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetLinkMicPresenterInfoRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLMSessionId)
    t.writeInt32(1, this.iLinkMicStatus)
    t.writeInt64(2, this.lOwnerUid)
    t.writeVector(3, this.vLMPresenterInfos)
    t.writeMap(4, this.mPid2SubscribeStatus)
    t.writeBoolean(5, this.bDirector)
}

Huya.GetLinkMicPresenterInfoRsp.prototype.readFrom = function (t) {
    this.lLMSessionId = t.readInt64(0, false, this.lLMSessionId)
    this.iLinkMicStatus = t.readInt32(1, false, this.iLinkMicStatus)
    this.lOwnerUid = t.readInt64(2, false, this.lOwnerUid)
    this.vLMPresenterInfos = t.readVector(3, false, this.vLMPresenterInfos)
    this.mPid2SubscribeStatus = t.readMap(4, false, this.mPid2SubscribeStatus)
    this.bDirector = t.readBoolean(5, false, this.bDirector)
}

Huya.SubscribeInfoNotify = function () {
    this.tTo = new Huya.Activity
    this.iToCount = 0
}

Huya.SubscribeInfoNotify.prototype._clone = function () {
    return new Huya.SubscribeInfoNotify
}

Huya.SubscribeInfoNotify.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SubscribeInfoNotify.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SubscribeInfoNotify.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tTo)
    t.writeInt32(1, this.iToCount)
}

Huya.SubscribeInfoNotify.prototype.readFrom = function (t) {
    this.tTo = t.readStruct(0, false, this.tTo)
    this.iToCount = t.readInt32(1, false, this.iToCount)
}

Huya.Activity = function () {
    this.iType = 0
    this.sKey = ""
}

Huya.Activity.prototype._clone = function () {
    return new Huya.Activity
}

Huya.Activity.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.Activity.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.Activity.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeString(1, this.sKey)
}

Huya.Activity.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.sKey = t.readString(1, false, this.sKey)
}

Huya.BannerNotice = function () {
    this.lBannerId = 0
    this.mParam = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.tChInfo = new Huya.PresenterChannelInfo
}

Huya.BannerNotice.prototype._clone = function () {
    return new Huya.BannerNotice
}

Huya.BannerNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BannerNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BannerNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lBannerId)
    t.writeMap(1, this.mParam)
    t.writeStruct(2, this.tChInfo)
}

Huya.BannerNotice.prototype.readFrom = function (t) {
    this.lBannerId = t.readInt64(0, false, this.lBannerId)
    this.mParam = t.readMap(1, false, this.mParam)
    this.tChInfo = t.readStruct(2, false, this.tChInfo)
}

Huya.GetUserLevelInfoReq = function () {
    this.tId = new Huya.UserId
}

Huya.GetUserLevelInfoReq.prototype._clone = function () {
    return new Huya.GetUserLevelInfoReq
}

Huya.GetUserLevelInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserLevelInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserLevelInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
}

Huya.GetUserLevelInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
}

Huya.GetUserLevelInfoRsp = function () {
    this.tUserProfile = new Huya.UserProfile
    this.lCurrLevelExp = 0
    this.lNextLevelExp = 0
    this.lDailyIncExp = 0
    this.lNext2LevelExp = 0
}

Huya.GetUserLevelInfoRsp.prototype._clone = function () {
    return new Huya.GetUserLevelInfoRsp
}

Huya.GetUserLevelInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserLevelInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserLevelInfoRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserProfile)
    t.writeInt64(1, this.lCurrLevelExp)
    t.writeInt64(2, this.lNextLevelExp)
    t.writeInt64(3, this.lDailyIncExp)
    t.writeInt64(4, this.lNext2LevelExp)
}

Huya.GetUserLevelInfoRsp.prototype.readFrom = function (t) {
    this.tUserProfile = t.readStruct(0, false, this.tUserProfile)
    this.lCurrLevelExp = t.readInt64(1, false, this.lCurrLevelExp)
    this.lNextLevelExp = t.readInt64(2, false, this.lNextLevelExp)
    this.lDailyIncExp = t.readInt64(3, false, this.lDailyIncExp)
    this.lNext2LevelExp = t.readInt64(4, false, this.lNext2LevelExp)
}

Huya.UserProfile = function () {
    this.tUserBase = new Huya.UserBase
    this.tPresenterBase = new Huya.PresenterBase
    this.tRecentLive = new Huya.GameLiveInfo
}

Huya.UserProfile.prototype._clone = function () {
    return new Huya.UserProfile
}

Huya.UserProfile.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserProfile.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserProfile.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserBase)
    t.writeStruct(1, this.tPresenterBase)
    t.writeStruct(2, this.tRecentLive)
}

Huya.UserProfile.prototype.readFrom = function (t) {
    this.tUserBase = t.readStruct(0, false, this.tUserBase)
    this.tPresenterBase = t.readStruct(1, false, this.tPresenterBase)
    this.tRecentLive = t.readStruct(2, false, this.tRecentLive)
}

Huya.UserBase = function () {
    this.lUid = 0
    this.sNickName = ""
    this.sAvatarUrl = ""
    this.iGender = 0
    this.lYYId = 0
    this.iCertified = 0
    this.iSubscribedCount = 0
    this.iSubscribeToCount = 0
    this.iUserLevel = 0
    this.lUserExp = 0
    this.iBirthday = 0
    this.sSign = ""
    this.sArea = ""
    this.sLocation = ""
    this.sRegisterTime = ""
    this.iFreezeTime = 0
    this.iBindPhone = 0
}

Huya.UserBase.prototype._clone = function () {
    return new Huya.UserBase
}

Huya.UserBase.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserBase.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserBase.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNickName)
    t.writeString(2, this.sAvatarUrl)
    t.writeInt32(3, this.iGender)
    t.writeInt64(4, this.lYYId)
    t.writeInt32(5, this.iCertified)
    t.writeInt32(6, this.iSubscribedCount)
    t.writeInt32(7, this.iSubscribeToCount)
    t.writeInt32(8, this.iUserLevel)
    t.writeInt64(9, this.lUserExp)
    t.writeInt32(10, this.iBirthday)
    t.writeString(11, this.sSign)
    t.writeString(12, this.sArea)
    t.writeString(13, this.sLocation)
    t.writeString(14, this.sRegisterTime)
    t.writeInt32(15, this.iFreezeTime)
    t.writeInt32(16, this.iBindPhone)
}

Huya.UserBase.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.sAvatarUrl = t.readString(2, false, this.sAvatarUrl)
    this.iGender = t.readInt32(3, false, this.iGender)
    this.lYYId = t.readInt64(4, false, this.lYYId)
    this.iCertified = t.readInt32(5, false, this.iCertified)
    this.iSubscribedCount = t.readInt32(6, false, this.iSubscribedCount)
    this.iSubscribeToCount = t.readInt32(7, false, this.iSubscribeToCount)
    this.iUserLevel = t.readInt32(8, false, this.iUserLevel)
    this.lUserExp = t.readInt64(9, false, this.lUserExp)
    this.iBirthday = t.readInt32(10, false, this.iBirthday)
    this.sSign = t.readString(11, false, this.sSign)
    this.sArea = t.readString(12, false, this.sArea)
    this.sLocation = t.readString(13, false, this.sLocation)
    this.sRegisterTime = t.readString(14, false, this.sRegisterTime)
    this.iFreezeTime = t.readInt32(15, false, this.iFreezeTime)
    this.iBindPhone = t.readInt32(16, false, this.iBindPhone)
}

Huya.PresenterBase = function () {
    this.iIsPresenter = 0
    this.sPresenterName = ""
    this.lSignedChannel = 0
    this.sPrivateHost = ""
    this.iRecType = 0
    this.iFreeze = 0
    this.iPresenterLevel = 0
    this.lPresenterExp = 0
    this.vPresentedGames = new Taf.Vector(new Huya.GameBaseInfo)
    this.iCertified = 0
    this.iRoomId = 0
}

Huya.PresenterBase.prototype._clone = function () {
    return new Huya.PresenterBase
}

Huya.PresenterBase.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterBase.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterBase.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iIsPresenter)
    t.writeString(1, this.sPresenterName)
    t.writeInt64(2, this.lSignedChannel)
    t.writeString(3, this.sPrivateHost)
    t.writeInt32(4, this.iRecType)
    t.writeInt32(5, this.iFreeze)
    t.writeInt32(6, this.iPresenterLevel)
    t.writeInt64(7, this.lPresenterExp)
    t.writeVector(8, this.vPresentedGames)
    t.writeInt32(9, this.iCertified)
    t.writeInt32(10, this.iRoomId)
}

Huya.PresenterBase.prototype.readFrom = function (t) {
    this.iIsPresenter = t.readInt32(0, false, this.iIsPresenter)
    this.sPresenterName = t.readString(1, false, this.sPresenterName)
    this.lSignedChannel = t.readInt64(2, false, this.lSignedChannel)
    this.sPrivateHost = t.readString(3, false, this.sPrivateHost)
    this.iRecType = t.readInt32(4, false, this.iRecType)
    this.iFreeze = t.readInt32(5, false, this.iFreeze)
    this.iPresenterLevel = t.readInt32(6, false, this.iPresenterLevel)
    this.lPresenterExp = t.readInt64(7, false, this.lPresenterExp)
    this.vPresentedGames = t.readVector(8, false, this.vPresentedGames)
    this.iCertified = t.readInt32(9, false, this.iCertified)
    this.iRoomId = t.readInt32(10, false, this.iRoomId)
}

Huya.GameLiveInfo = function () {
    this.lLiveId = 0
    this.lUid = 0
    this.lChannelId = 0
    this.iShortChannel = 0
    this.lSubchannel = 0
    this.sSubchannelName = ""
    this.iGameId = 0
    this.sGameName = ""
    this.iAttendeeCount = 0
    this.eGender = Huya.EGender.MALE
    this.iAid = 0
    this.sNick = ""
    this.sAvatarUrl = ""
    this.iStartTime = 0
    this.iEndTime = 0
    this.iSourceType = 0
    this.bIsCameraOpen = false
    this.bIsRoomSecret = false
    this.sVideoCaptureUrl = ""
    this.iCdnAttendee = 0
    this.lYYId = 0
    this.bCertified = false
    this.iRecType = 0
    this.lSignChannel = 0
    this.sLiveDesc = ""
    this.iLevel = 0
    this.sGameShortName = ""
    this.iGameType = 0
    this.sPrivateHost = ""
    this.iActivityCount = 0
    this.iStreamType = 0
    this.iBitRate = 0
    this.iResolution = 0
    this.iFrameRate = 0
    this.iIsMultiStream = 0
    this.iExeGameId = 0
    this.lExp = 0
    this.sReplayHls = ""
    this.lMultiStreamFlag = 0
    this.iScreenType = 0
    this.iChannelType = 0
    this.sLocation = ""
    this.iCodecType = 0
    this.vPresenterTags = new Taf.Vector(new Huya.GameLiveTag)
    this.vGameTags = new Taf.Vector(new Huya.GameLiveTag)
    this.lLiveCompatibleFlag = 0
    this.sTraceId = ""
    this.iRoomId = 0
}

Huya.GameLiveInfo.prototype._clone = function () {
    return new Huya.GameLiveInfo
}

Huya.GameLiveInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameLiveInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameLiveInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLiveId)
    t.writeInt64(1, this.lUid)
    t.writeInt64(2, this.lChannelId)
    t.writeInt32(3, this.iShortChannel)
    t.writeInt64(4, this.lSubchannel)
    t.writeString(5, this.sSubchannelName)
    t.writeInt32(6, this.iGameId)
    t.writeString(7, this.sGameName)
    t.writeInt32(8, this.iAttendeeCount)
    t.writeInt32(9, this.eGender)
    t.writeInt32(10, this.iAid)
    t.writeString(11, this.sNick)
    t.writeString(12, this.sAvatarUrl)
    t.writeInt32(13, this.iStartTime)
    t.writeInt32(14, this.iEndTime)
    t.writeInt32(15, this.iSourceType)
    t.writeBoolean(16, this.bIsCameraOpen)
    t.writeBoolean(17, this.bIsRoomSecret)
    t.writeString(18, this.sVideoCaptureUrl)
    t.writeInt32(19, this.iCdnAttendee)
    t.writeInt64(20, this.lYYId)
    t.writeBoolean(21, this.bCertified)
    t.writeInt32(22, this.iRecType)
    t.writeInt64(23, this.lSignChannel)
    t.writeString(24, this.sLiveDesc)
    t.writeInt32(25, this.iLevel)
    t.writeString(26, this.sGameShortName)
    t.writeInt32(27, this.iGameType)
    t.writeString(28, this.sPrivateHost)
    t.writeInt32(29, this.iActivityCount)
    t.writeInt32(30, this.iStreamType)
    t.writeInt32(31, this.iBitRate)
    t.writeInt32(32, this.iResolution)
    t.writeInt32(33, this.iFrameRate)
    t.writeInt32(34, this.iIsMultiStream)
    t.writeInt32(35, this.iExeGameId)
    t.writeInt64(36, this.lExp)
    t.writeString(37, this.sReplayHls)
    t.writeInt64(38, this.lMultiStreamFlag)
    t.writeInt32(39, this.iScreenType)
    t.writeInt32(40, this.iChannelType)
    t.writeString(41, this.sLocation)
    t.writeInt32(42, this.iCodecType)
    t.writeVector(43, this.vPresenterTags)
    t.writeVector(44, this.vGameTags)
    t.writeInt64(45, this.lLiveCompatibleFlag)
    t.writeString(46, this.sTraceId)
    t.writeInt32(47, this.iRoomId)
}

Huya.GameLiveInfo.prototype.readFrom = function (t) {
    this.lLiveId = t.readInt64(0, false, this.lLiveId)
    this.lUid = t.readInt64(1, false, this.lUid)
    this.lChannelId = t.readInt64(2, false, this.lChannelId)
    this.iShortChannel = t.readInt32(3, false, this.iShortChannel)
    this.lSubchannel = t.readInt64(4, false, this.lSubchannel)
    this.sSubchannelName = t.readString(5, false, this.sSubchannelName)
    this.iGameId = t.readInt32(6, false, this.iGameId)
    this.sGameName = t.readString(7, false, this.sGameName)
    this.iAttendeeCount = t.readInt32(8, false, this.iAttendeeCount)
    this.eGender = t.readInt32(9, false, this.eGender)
    this.iAid = t.readInt32(10, false, this.iAid)
    this.sNick = t.readString(11, false, this.sNick)
    this.sAvatarUrl = t.readString(12, false, this.sAvatarUrl)
    this.iStartTime = t.readInt32(13, false, this.iStartTime)
    this.iEndTime = t.readInt32(14, false, this.iEndTime)
    this.iSourceType = t.readInt32(15, false, this.iSourceType)
    this.bIsCameraOpen = t.readBoolean(16, false, this.bIsCameraOpen)
    this.bIsRoomSecret = t.readBoolean(17, false, this.bIsRoomSecret)
    this.sVideoCaptureUrl = t.readString(18, false, this.sVideoCaptureUrl)
    this.iCdnAttendee = t.readInt32(19, false, this.iCdnAttendee)
    this.lYYId = t.readInt64(20, false, this.lYYId)
    this.bCertified = t.readBoolean(21, false, this.bCertified)
    this.iRecType = t.readInt32(22, false, this.iRecType)
    this.lSignChannel = t.readInt64(23, false, this.lSignChannel)
    this.sLiveDesc = t.readString(24, false, this.sLiveDesc)
    this.iLevel = t.readInt32(25, false, this.iLevel)
    this.sGameShortName = t.readString(26, false, this.sGameShortName)
    this.iGameType = t.readInt32(27, false, this.iGameType)
    this.sPrivateHost = t.readString(28, false, this.sPrivateHost)
    this.iActivityCount = t.readInt32(29, false, this.iActivityCount)
    this.iStreamType = t.readInt32(30, false, this.iStreamType)
    this.iBitRate = t.readInt32(31, false, this.iBitRate)
    this.iResolution = t.readInt32(32, false, this.iResolution)
    this.iFrameRate = t.readInt32(33, false, this.iFrameRate)
    this.iIsMultiStream = t.readInt32(34, false, this.iIsMultiStream)
    this.iExeGameId = t.readInt32(35, false, this.iExeGameId)
    this.lExp = t.readInt64(36, false, this.lExp)
    this.sReplayHls = t.readString(37, false, this.sReplayHls)
    this.lMultiStreamFlag = t.readInt64(38, false, this.lMultiStreamFlag)
    this.iScreenType = t.readInt32(39, false, this.iScreenType)
    this.iChannelType = t.readInt32(40, false, this.iChannelType)
    this.sLocation = t.readString(41, false, this.sLocation)
    this.iCodecType = t.readInt32(42, false, this.iCodecType)
    this.vPresenterTags = t.readVector(43, false, this.vPresenterTags)
    this.vGameTags = t.readVector(44, false, this.vGameTags)
    this.lLiveCompatibleFlag = t.readInt64(45, false, this.lLiveCompatibleFlag)
    this.sTraceId = t.readString(46, false, this.sTraceId)
    this.iRoomId = t.readInt32(47, false, this.iRoomId)
}

Huya.GameLiveTag = function () {
    this.iTagId = 0
    this.sTagName = ""
    this.bIsShow = true
    this.iBindingGameId = 0
    this.iShowType = 0
}

Huya.GameLiveTag.prototype._clone = function () {
    return new Huya.GameLiveTag
}

Huya.GameLiveTag.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameLiveTag.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameLiveTag.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iTagId)
    t.writeString(1, this.sTagName)
    t.writeBoolean(2, this.bIsShow)
    t.writeInt32(3, this.iBindingGameId)
    t.writeInt32(4, this.iShowType)
}

Huya.GameLiveTag.prototype.readFrom = function (t) {
    this.iTagId = t.readInt32(0, false, this.iTagId)
    this.sTagName = t.readString(1, false, this.sTagName)
    this.bIsShow = t.readBoolean(2, false, this.bIsShow)
    this.iBindingGameId = t.readInt32(3, false, this.iBindingGameId)
    this.iShowType = t.readInt32(4, false, this.iShowType)
}

Huya.MatchRaffleResultNotice = function () {
    this.sPrizeName = ""
    this.sUrl = ""
    this.sShowDoc = ""
    this.sIcon = ""
    this.tBanner = new Huya.MatchRaffleBanner
}

Huya.MatchRaffleResultNotice.prototype._clone = function () {
    return new Huya.MatchRaffleResultNotice
}

Huya.MatchRaffleResultNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MatchRaffleResultNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MatchRaffleResultNotice.prototype.writeTo = function (t) {
    t.writeString(0, this.sPrizeName)
    t.writeString(1, this.sUrl)
    t.writeString(2, this.sShowDoc)
    t.writeString(3, this.sIcon)
    t.writeStruct(4, this.tBanner)
}

Huya.MatchRaffleResultNotice.prototype.readFrom = function (t) {
    this.sPrizeName = t.readString(0, false, this.sPrizeName)
    this.sUrl = t.readString(1, false, this.sUrl)
    this.sShowDoc = t.readString(2, false, this.sShowDoc)
    this.sIcon = t.readString(3, false, this.sIcon)
    this.tBanner = t.readStruct(4, false, this.tBanner)
}

Huya.MatchRaffleBanner = function () {
    this.sPcBanner = ""
    this.sH5Banner = ""
    this.sFlashBanner = ""
    this.sAdrBanner = ""
    this.sIosBanner = ""
    this.sPadBanner = ""
}

Huya.MatchRaffleBanner.prototype._clone = function () {
    return new Huya.MatchRaffleBanner
}

Huya.MatchRaffleBanner.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MatchRaffleBanner.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MatchRaffleBanner.prototype.writeTo = function (t) {
    t.writeString(0, this.sPcBanner)
    t.writeString(1, this.sH5Banner)
    t.writeString(2, this.sFlashBanner)
    t.writeString(3, this.sAdrBanner)
    t.writeString(4, this.sIosBanner)
    t.writeString(5, this.sPadBanner)
}

Huya.MatchRaffleBanner.prototype.readFrom = function (t) {
    this.sPcBanner = t.readString(0, false, this.sPcBanner)
    this.sH5Banner = t.readString(1, false, this.sH5Banner)
    this.sFlashBanner = t.readString(2, false, this.sFlashBanner)
    this.sAdrBanner = t.readString(3, false, this.sAdrBanner)
    this.sIosBanner = t.readString(4, false, this.sIosBanner)
    this.sPadBanner = t.readString(5, false, this.sPadBanner)
}

Huya.GuardianPresenterInfoNotice = function () {
    this.lUid = 0
    this.sNick = ""
    this.iLevel = 0
    this.lGuardianUid = 0
    this.sGuardianNick = ""
    this.eNoticeType = 0
    this.iOpenDays = 0
    this.iLastLevel = 0
    this.iNobleLevel = 0
}

Huya.GuardianPresenterInfoNotice.prototype._clone = function () {
    return new Huya.GuardianPresenterInfoNotice
}

Huya.GuardianPresenterInfoNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GuardianPresenterInfoNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GuardianPresenterInfoNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sNick)
    t.writeInt32(2, this.iLevel)
    t.writeInt64(3, this.lGuardianUid)
    t.writeString(4, this.sGuardianNick)
    t.writeInt32(5, this.eNoticeType)
    t.writeInt32(6, this.iOpenDays)
    t.writeInt32(7, this.iLastLevel)
    t.writeInt32(8, this.iNobleLevel)
}

Huya.GuardianPresenterInfoNotice.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sNick = t.readString(1, false, this.sNick)
    this.iLevel = t.readInt32(2, false, this.iLevel)
    this.lGuardianUid = t.readInt64(3, false, this.lGuardianUid)
    this.sGuardianNick = t.readString(4, false, this.sGuardianNick)
    this.eNoticeType = t.readInt32(5, false, this.eNoticeType)
    this.iOpenDays = t.readInt32(6, false, this.iOpenDays)
    this.iLastLevel = t.readInt32(7, false, this.iLastLevel)
    this.iNobleLevel = t.readInt32(8, false, this.iNobleLevel)
}

Huya.SubscribeReq = function () {
    this.tId = new Huya.UserId
    this.tFrom = new Huya.Subscriber
    this.tTo = new Huya.Activity
    this.iAction = 0
}

Huya.SubscribeReq.prototype._clone = function () {
    return new Huya.SubscribeReq
}

Huya.SubscribeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SubscribeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SubscribeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tFrom)
    t.writeStruct(2, this.tTo)
    t.writeInt32(3, this.iAction)
}

Huya.SubscribeReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tFrom = t.readStruct(1, false, this.tFrom)
    this.tTo = t.readStruct(2, false, this.tTo)
    this.iAction = t.readInt32(3, false, this.iAction)
}

Huya.SubscribeResp = function () {
    this.tFrom = new Huya.Subscriber
    this.tTo = new Huya.Activity
    this.iAction = 0
    this.iFlag = 0
}

Huya.SubscribeResp.prototype._clone = function () {
    return new Huya.SubscribeResp
}

Huya.SubscribeResp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SubscribeResp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SubscribeResp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tFrom)
    t.writeStruct(1, this.tTo)
    t.writeInt32(2, this.iAction)
    t.writeInt32(3, this.iFlag)
}

Huya.SubscribeResp.prototype.readFrom = function (t) {
    this.tFrom = t.readStruct(0, false, this.tFrom)
    this.tTo = t.readStruct(1, false, this.tTo)
    this.iAction = t.readInt32(2, false, this.iAction)
    this.iFlag = t.readInt32(3, false, this.iFlag)
}

Huya.UnsubscribeReq = function () {
    this.tId = new Huya.UserId
    this.tFrom = new Huya.Subscriber
    this.tTo = new Huya.Activity
}

Huya.UnsubscribeReq.prototype._clone = function () {
    return new Huya.UnsubscribeReq
}

Huya.UnsubscribeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UnsubscribeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UnsubscribeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tFrom)
    t.writeStruct(2, this.tTo)
}

Huya.UnsubscribeReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tFrom = t.readStruct(1, false, this.tFrom)
    this.tTo = t.readStruct(2, false, this.tTo)
}

Huya.UnsubscribeResp = function () {
    this.tFrom = new Huya.Subscriber
    this.tTo = new Huya.Activity
    this.iFlag = 0
}

Huya.UnsubscribeResp.prototype._clone = function () {
    return new Huya.UnsubscribeResp
}

Huya.UnsubscribeResp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UnsubscribeResp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UnsubscribeResp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tFrom)
    t.writeStruct(1, this.tTo)
    t.writeInt32(3, this.iFlag)
}

Huya.UnsubscribeResp.prototype.readFrom = function (t) {
    this.tFrom = t.readStruct(0, false, this.tFrom)
    this.tTo = t.readStruct(1, false, this.tTo)
    this.iFlag = t.readInt32(3, false, this.iFlag)
}

Huya.SubscribeStatusReq = function () {
    this.tId = new Huya.UserId
    this.tFrom = new Huya.Subscriber
    this.tTo = new Huya.Activity
}

Huya.SubscribeStatusReq.prototype._clone = function () {
    return new Huya.SubscribeStatusReq
}

Huya.SubscribeStatusReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SubscribeStatusReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SubscribeStatusReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tFrom)
    t.writeStruct(2, this.tTo)
}

Huya.SubscribeStatusReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tFrom = t.readStruct(1, false, this.tFrom)
    this.tTo = t.readStruct(2, false, this.tTo)
}

Huya.SubscribeStatusResp = function () {
    this.tFrom = new Huya.Subscriber
    this.tTo = new Huya.Activity
    this.iSubscribedCount = 0
    this.iStatus = 0
}

Huya.SubscribeStatusResp.prototype._clone = function () {
    return new Huya.SubscribeStatusResp
}

Huya.SubscribeStatusResp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SubscribeStatusResp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SubscribeStatusResp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tFrom)
    t.writeStruct(1, this.tTo)
    t.writeInt32(2, this.iSubscribedCount)
    t.writeInt32(3, this.iStatus)
}

Huya.SubscribeStatusResp.prototype.readFrom = function (t) {
    this.tFrom = t.readStruct(0, false, this.tFrom)
    this.tTo = t.readStruct(1, false, this.tTo)
    this.iSubscribedCount = t.readInt32(2, false, this.iSubscribedCount)
    this.iStatus = t.readInt32(3, false, this.iStatus)
}

Huya.Subscriber = function () {
    this.iType = 0
    this.sKey = ""
    this.lSubscribeTime = 0
}

Huya.Subscriber.prototype._clone = function () {
    return new Huya.Subscriber
}

Huya.Subscriber.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.Subscriber.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.Subscriber.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeString(1, this.sKey)
    t.writeInt64(2, this.lSubscribeTime)
}

Huya.Subscriber.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.sKey = t.readString(1, false, this.sKey)
    this.lSubscribeTime = t.readInt64(2, false, this.lSubscribeTime)
}

Huya.PresenterChannelInfo = function () {
    this.lYYId = 0
    this.lTid = 0
    this.lSid = 0
    this.iSourceType = 0
    this.iScreenType = 0
    this.lUid = 0
    this.iGameId = 0
    this.iRoomId = 0
}

Huya.PresenterChannelInfo.prototype._clone = function () {
    return new Huya.PresenterChannelInfo
}

Huya.PresenterChannelInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterChannelInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterChannelInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lYYId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(3, this.lSid)
    t.writeInt32(4, this.iSourceType)
    t.writeInt32(5, this.iScreenType)
    t.writeInt64(6, this.lUid)
    t.writeInt32(7, this.iGameId)
    t.writeInt32(8, this.iRoomId)
}

Huya.PresenterChannelInfo.prototype.readFrom = function (t) {
    this.lYYId = t.readInt64(0, false, this.lYYId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.iSourceType = t.readInt32(4, false, this.iSourceType)
    this.iScreenType = t.readInt32(5, false, this.iScreenType)
    this.lUid = t.readInt64(6, false, this.lUid)
    this.iGameId = t.readInt32(7, false, this.iGameId)
    this.iRoomId = t.readInt32(8, false, this.iRoomId)
}

Huya.GetRelationReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
}

Huya.GetRelationReq.prototype._clone = function () {
    return new Huya.GetRelationReq
}

Huya.GetRelationReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRelationReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRelationReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
}

Huya.GetRelationReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
}

Huya.GetRelationRsp = function () {
    this.tItem = new Huya.RelationItem
}

Huya.GetRelationRsp.prototype._clone = function () {
    return new Huya.GetRelationRsp
}

Huya.GetRelationRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRelationRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRelationRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tItem)
}

Huya.GetRelationRsp.prototype.readFrom = function (t) {
    this.tItem = t.readStruct(0, false, this.tItem)
}

Huya.RelationItem = function () {
    this.lUid = 0
    this.iRelation = 0
    this.iSubscribeToTime = 0
    this.iSubscribeFromTime = 0
    this.iBlackTime = 0
    this.iModifyTime = 0
}

Huya.RelationItem.prototype._clone = function () {
    return new Huya.RelationItem
}

Huya.RelationItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RelationItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RelationItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iRelation)
    t.writeInt32(2, this.iSubscribeToTime)
    t.writeInt32(3, this.iSubscribeFromTime)
    t.writeInt32(4, this.iBlackTime)
    t.writeInt32(5, this.iModifyTime)
}

Huya.RelationItem.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iRelation = t.readInt32(1, false, this.iRelation)
    this.iSubscribeToTime = t.readInt32(2, false, this.iSubscribeToTime)
    this.iSubscribeFromTime = t.readInt32(3, false, this.iSubscribeFromTime)
    this.iBlackTime = t.readInt32(4, false, this.iBlackTime)
    this.iModifyTime = t.readInt32(5, false, this.iModifyTime)
}

Huya.ModRelationReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
    this.iOp = 0
}

Huya.ModRelationReq.prototype._clone = function () {
    return new Huya.ModRelationReq
}

Huya.ModRelationReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ModRelationReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ModRelationReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
    t.writeInt32(2, this.iOp)
}

Huya.ModRelationReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
    this.iOp = t.readInt32(2, false, this.iOp)
}

Huya.ModRelationRsp = function () {
    this.iNewRelation = 0
    this.sMessage = ""
}

Huya.ModRelationRsp.prototype._clone = function () {
    return new Huya.ModRelationRsp
}

Huya.ModRelationRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ModRelationRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ModRelationRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iNewRelation)
    t.writeString(1, this.sMessage)
}

Huya.ModRelationRsp.prototype.readFrom = function (t) {
    this.iNewRelation = t.readInt32(0, false, this.iNewRelation)
    this.sMessage = t.readString(1, false, this.sMessage)
}

Huya.GetRelationBatchReq = function () {
    this.tId = new Huya.UserId
    this.vUid = new Taf.Vector(new Taf.INT64)
}

Huya.GetRelationBatchReq.prototype._clone = function () {
    return new Huya.GetRelationBatchReq
}

Huya.GetRelationBatchReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRelationBatchReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRelationBatchReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeVector(1, this.vUid)
}

Huya.GetRelationBatchReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.vUid = t.readVector(1, false, this.vUid)
}

Huya.GetRelationBatchRsp = function () {
    this.mItem = new Taf.Map(new Taf.INT64, new Huya.RelationItem)
}

Huya.GetRelationBatchRsp.prototype._clone = function () {
    return new Huya.GetRelationBatchRsp
}

Huya.GetRelationBatchRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRelationBatchRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRelationBatchRsp.prototype.writeTo = function (t) {
    t.writeMap(0, this.mItem)
}

Huya.GetRelationBatchRsp.prototype.readFrom = function (t) {
    this.mItem = t.readMap(0, false, this.mItem)
}

Huya.LiveAdvertisementInfo = function () {
    this.iType = 0
    this.sTagUrl = ""
    this.iHLeftPercent = 0
    this.iHRightPercent = 0
    this.iVAbovePercent = 0
    this.iVBelowPercent = 0
    this.iLifeTime = 0
    this.iLoadTime = 0
    this.iPlayNow = 0
    this.sAdPercent = ""
    this.iIsCountDown = 0
    this.iId = 0
    this.sTitle = ""
    this.iPlayNum = 0
    this.iHasPlayNum = 0
}

Huya.LiveAdvertisementInfo.prototype._clone = function () {
    return new Huya.LiveAdvertisementInfo
}

Huya.LiveAdvertisementInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveAdvertisementInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveAdvertisementInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeString(1, this.sTagUrl)
    t.writeInt32(2, this.iHLeftPercent)
    t.writeInt32(3, this.iHRightPercent)
    t.writeInt32(4, this.iVAbovePercent)
    t.writeInt32(5, this.iVBelowPercent)
    t.writeInt32(6, this.iLifeTime)
    t.writeInt32(7, this.iLoadTime)
    t.writeInt32(8, this.iPlayNow)
    t.writeString(9, this.sAdPercent)
    t.writeInt32(10, this.iIsCountDown)
    t.writeInt32(11, this.iId)
    t.writeString(12, this.sTitle)
    t.writeInt32(13, this.iPlayNum)
    t.writeInt32(14, this.iHasPlayNum)
}

Huya.LiveAdvertisementInfo.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.sTagUrl = t.readString(1, false, this.sTagUrl)
    this.iHLeftPercent = t.readInt32(2, false, this.iHLeftPercent)
    this.iHRightPercent = t.readInt32(3, false, this.iHRightPercent)
    this.iVAbovePercent = t.readInt32(4, false, this.iVAbovePercent)
    this.iVBelowPercent = t.readInt32(5, false, this.iVBelowPercent)
    this.iLifeTime = t.readInt32(6, false, this.iLifeTime)
    this.iLoadTime = t.readInt32(7, false, this.iLoadTime)
    this.iPlayNow = t.readInt32(8, false, this.iPlayNow)
    this.sAdPercent = t.readString(9, false, this.sAdPercent)
    this.iIsCountDown = t.readInt32(10, false, this.iIsCountDown)
    this.iId = t.readInt32(11, false, this.iId)
    this.sTitle = t.readString(12, false, this.sTitle)
    this.iPlayNum = t.readInt32(13, false, this.iPlayNum)
    this.iHasPlayNum = t.readInt32(14, false, this.iHasPlayNum)
}

Huya.GetLiveAdInfoReq = function () {
    this.tId = new Huya.UserId
    this.lPresenterUid = 0
}

Huya.GetLiveAdInfoReq.prototype._clone = function () {
    return new Huya.GetLiveAdInfoReq
}

Huya.GetLiveAdInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetLiveAdInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetLiveAdInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPresenterUid)
}

Huya.GetLiveAdInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid)
}

Huya.GetLiveAdInfoRsp = function () {
    this.tAdInfo = new Huya.LiveAdvertisementInfo
    this.iIsConfig = 0
    this.tEndLiveAdInfo = new Huya.LiveAdvertisementInfo
    this.iIsEndLiveConfig = 0
}

Huya.GetLiveAdInfoRsp.prototype._clone = function () {
    return new Huya.GetLiveAdInfoRsp
}

Huya.GetLiveAdInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetLiveAdInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetLiveAdInfoRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tAdInfo)
    t.writeInt32(1, this.iIsConfig)
    t.writeStruct(2, this.tEndLiveAdInfo)
    t.writeInt32(3, this.iIsEndLiveConfig)
}

Huya.GetLiveAdInfoRsp.prototype.readFrom = function (t) {
    this.tAdInfo = t.readStruct(0, false, this.tAdInfo)
    this.iIsConfig = t.readInt32(1, false, this.iIsConfig)
    this.tEndLiveAdInfo = t.readStruct(2, false, this.tEndLiveAdInfo)
    this.iIsEndLiveConfig = t.readInt32(3, false, this.iIsEndLiveConfig)
}

Huya.LiveAdvertisementNotice = function () {
    this.tAdInfo = new Huya.LiveAdvertisementInfo
    this.iAdrPlay = 0
    this.iIosPlay = 0
    this.iAdrtvPlay = 0
    this.iIPadPlay = 0
    this.iAdrPadPlay = 0
    this.iWebPlay = 0
}

Huya.LiveAdvertisementNotice.prototype._clone = function () {
    return new Huya.LiveAdvertisementNotice
}

Huya.LiveAdvertisementNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LiveAdvertisementNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LiveAdvertisementNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tAdInfo)
    t.writeInt32(1, this.iAdrPlay)
    t.writeInt32(2, this.iIosPlay)
    t.writeInt32(3, this.iAdrtvPlay)
    t.writeInt32(4, this.iIPadPlay)
    t.writeInt32(5, this.iAdrPadPlay)
    t.writeInt32(6, this.iWebPlay)
}

Huya.LiveAdvertisementNotice.prototype.readFrom = function (t) {
    this.tAdInfo = t.readStruct(0, false, this.tAdInfo)
    this.iAdrPlay = t.readInt32(1, false, this.iAdrPlay)
    this.iIosPlay = t.readInt32(2, false, this.iIosPlay)
    this.iAdrtvPlay = t.readInt32(3, false, this.iAdrtvPlay)
    this.iIPadPlay = t.readInt32(4, false, this.iIPadPlay)
    this.iAdrPadPlay = t.readInt32(5, false, this.iAdrPadPlay)
    this.iWebPlay = t.readInt32(6, false, this.iWebPlay)
}

Huya.ActivityMsgReq = function () {
    this.tUserId = new Huya.UserId
    this.iActivityId = 0
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
    this.iChannelType = 0
    this.iSubUri = 0
}

Huya.ActivityMsgReq.prototype._clone = function () {
    return new Huya.ActivityMsgReq
}

Huya.ActivityMsgReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ActivityMsgReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ActivityMsgReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt32(1, this.iActivityId)
    t.writeInt64(2, this.lPid)
    t.writeInt64(3, this.lTid)
    t.writeInt64(4, this.lSid)
    t.writeInt32(5, this.iChannelType)
    t.writeInt32(6, this.iSubUri)
}

Huya.ActivityMsgReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.iActivityId = t.readInt32(1, false, this.iActivityId)
    this.lPid = t.readInt64(2, false, this.lPid)
    this.lTid = t.readInt64(3, false, this.lTid)
    this.lSid = t.readInt64(4, false, this.lSid)
    this.iChannelType = t.readInt32(5, false, this.iChannelType)
    this.iSubUri = t.readInt32(6, false, this.iSubUri)
}

Huya.ActivityMsgRsp = function () {
    this.iEnable = 0
    this.vSerializedMsg = new Taf.Vector(new Huya.ActivitySerializedMsg)
    this.iTimeStamp = 0
}

Huya.ActivityMsgRsp.prototype._clone = function () {
    return new Huya.ActivityMsgRsp
}

Huya.ActivityMsgRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ActivityMsgRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ActivityMsgRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iEnable)
    t.writeVector(1, this.vSerializedMsg)
    t.writeInt32(2, this.iTimeStamp)
}

Huya.ActivityMsgRsp.prototype.readFrom = function (t) {
    this.iEnable = t.readInt32(0, false, this.iEnable)
    this.vSerializedMsg = t.readVector(1, false, this.vSerializedMsg)
    this.iTimeStamp = t.readInt32(2, false, this.iTimeStamp)
}

Huya.ActivitySerializedMsg = function () {
    this.iSubUri = 0
    this.vContent = new Taf.BinBuffer
}

Huya.ActivitySerializedMsg.prototype._clone = function () {
    return new Huya.ActivitySerializedMsg
}

Huya.ActivitySerializedMsg.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ActivitySerializedMsg.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ActivitySerializedMsg.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iSubUri)
    t.writeBytes(1, this.vContent)
}

Huya.ActivitySerializedMsg.prototype.readFrom = function (t) {
    this.iSubUri = t.readInt32(0, false, this.iSubUri)
    this.vContent = t.readBytes(1, false, this.vContent)
}

Huya.GetGameLiveHisUponReq = function () {
    this.lUid = 0
    this.iMinutes = 0
    this.iNumberWanted = 0
}

Huya.GetGameLiveHisUponReq.prototype._clone = function () {
    return new Huya.GetGameLiveHisUponReq
}

Huya.GetGameLiveHisUponReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetGameLiveHisUponReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetGameLiveHisUponReq.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iMinutes)
    t.writeInt32(2, this.iNumberWanted)
}

Huya.GetGameLiveHisUponReq.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iMinutes = t.readInt32(1, false, this.iMinutes)
    this.iNumberWanted = t.readInt32(2, false, this.iNumberWanted)
}

Huya.GetGameLiveHisUponRsp = function () {
    this.lUid = 0
    this.vHistoryList = new Taf.Vector(new Huya.GameLiveHlsInfo)
}

Huya.GetGameLiveHisUponRsp.prototype._clone = function () {
    return new Huya.GetGameLiveHisUponRsp
}

Huya.GetGameLiveHisUponRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetGameLiveHisUponRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetGameLiveHisUponRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeVector(1, this.vHistoryList)
}

Huya.GetGameLiveHisUponRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.vHistoryList = t.readVector(1, false, this.vHistoryList)
}

Huya.GameLiveHlsInfo = function () {
    this.tGameInfo = new Huya.GameLiveInfo
    this.sHlsUrl = ""
    this.iVideoSyncTime = 0
}

Huya.GameLiveHlsInfo.prototype._clone = function () {
    return new Huya.GameLiveHlsInfo
}

Huya.GameLiveHlsInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GameLiveHlsInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GameLiveHlsInfo.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tGameInfo)
    t.writeString(1, this.sHlsUrl)
    t.writeInt32(2, this.iVideoSyncTime)
}

Huya.GameLiveHlsInfo.prototype.readFrom = function (t) {
    this.tGameInfo = t.readStruct(0, false, this.tGameInfo)
    this.sHlsUrl = t.readString(1, false, this.sHlsUrl)
    this.iVideoSyncTime = t.readInt32(2, false, this.iVideoSyncTime)
}

Huya.GetVideoHisUponReq = function () {
    this.lUid = 0
    this.lLiveId = 0
}

Huya.GetVideoHisUponReq.prototype._clone = function () {
    return new Huya.GetVideoHisUponReq
}

Huya.GetVideoHisUponReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetVideoHisUponReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetVideoHisUponReq.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lLiveId)
}

Huya.GetVideoHisUponReq.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lLiveId = t.readInt64(1, false, this.lLiveId)
}

Huya.GetVideoHisUponRsp = function () {
    this.lUid = 0
    this.vHistoryList = new Taf.Vector(new Huya.GameLiveHlsInfo)
}

Huya.GetVideoHisUponRsp.prototype._clone = function () {
    return new Huya.GetVideoHisUponRsp
}

Huya.GetVideoHisUponRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetVideoHisUponRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetVideoHisUponRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeVector(1, this.vHistoryList)
}

Huya.GetVideoHisUponRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.vHistoryList = t.readVector(1, false, this.vHistoryList)
}

Huya.SendReplayMessageReq = function () {
    this.tId = new Huya.UserId
    this.sSenderNickName = ""
    this.iGroupType = 0
    this.iGroupId = 0
    this.sMessage = ""
}

Huya.SendReplayMessageReq.prototype._clone = function () {
    return new Huya.SendReplayMessageReq
}

Huya.SendReplayMessageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendReplayMessageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendReplayMessageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeString(1, this.sSenderNickName)
    t.writeInt32(2, this.iGroupType)
    t.writeInt32(3, this.iGroupId)
    t.writeString(4, this.sMessage)
}

Huya.SendReplayMessageReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.sSenderNickName = t.readString(1, false, this.sSenderNickName)
    this.iGroupType = t.readInt32(2, false, this.iGroupType)
    this.iGroupId = t.readInt32(3, false, this.iGroupId)
    this.sMessage = t.readString(4, false, this.sMessage)
}

Huya.SendReplayMessageRsp = function () {
    this.lUid = 0
    this.iValidate = 0
}

Huya.SendReplayMessageRsp.prototype._clone = function () {
    return new Huya.SendReplayMessageRsp
}

Huya.SendReplayMessageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendReplayMessageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendReplayMessageRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iValidate)
}

Huya.SendReplayMessageRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iValidate = t.readInt32(1, false, this.iValidate)
}

Huya.PresenterActivityReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
}

Huya.PresenterActivityReq.prototype._clone = function () {
    return new Huya.PresenterActivityReq
}

Huya.PresenterActivityReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterActivityReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterActivityReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
}

Huya.PresenterActivityReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
}

Huya.PresenterActivityRsp = function () {
    this.tAct = new Huya.PresenterActivityEx
}

Huya.PresenterActivityRsp.prototype._clone = function () {
    return new Huya.PresenterActivityRsp
}

Huya.PresenterActivityRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterActivityRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterActivityRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tAct)
}

Huya.PresenterActivityRsp.prototype.readFrom = function (t) {
    this.tAct = t.readStruct(0, false, this.tAct)
}

Huya.PresenterActivityEx = function () {
    this.tAct = new Huya.ActivityEx
    this.lUid = 0
    this.lYYId = 0
    this.sNick = ""
    this.sAvatar = ""
    this.bLive = true
    this.tLive = new Huya.GameLiveInfo
    this.iLevel = 0
    this.iCanBeSubscribed = 0
    this.iSubscribeStatus = 0
    this.lSubscribeCount = 0
    this.iGender = 0
    this.iFansNum = 0
    this.iDiamondFansNum = 0
    this.iDiamondFansQuota = 0
    this.sDiamondUrl = ""
    this.iIsPresenter = 0
    this.iCertified = 0
    this.iRoomId = 0
    this.sScheduleTime = ""
    this.sDescription = ""
    this.iRelation = 0
}

Huya.PresenterActivityEx.prototype._clone = function () {
    return new Huya.PresenterActivityEx
}

Huya.PresenterActivityEx.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterActivityEx.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterActivityEx.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tAct)
    t.writeInt64(1, this.lUid)
    t.writeInt64(2, this.lYYId)
    t.writeString(3, this.sNick)
    t.writeString(4, this.sAvatar)
    t.writeBoolean(5, this.bLive)
    t.writeStruct(6, this.tLive)
    t.writeInt32(7, this.iLevel)
    t.writeInt32(8, this.iCanBeSubscribed)
    t.writeInt32(9, this.iSubscribeStatus)
    t.writeInt64(10, this.lSubscribeCount)
    t.writeInt32(11, this.iGender)
    t.writeInt32(12, this.iFansNum)
    t.writeInt32(13, this.iDiamondFansNum)
    t.writeInt32(14, this.iDiamondFansQuota)
    t.writeString(15, this.sDiamondUrl)
    t.writeInt32(16, this.iIsPresenter)
    t.writeInt32(17, this.iCertified)
    t.writeInt32(18, this.iRoomId)
    t.writeString(19, this.sScheduleTime)
    t.writeString(20, this.sDescription)
    t.writeInt32(21, this.iRelation)
}

Huya.PresenterActivityEx.prototype.readFrom = function (t) {
    this.tAct = t.readStruct(0, false, this.tAct)
    this.lUid = t.readInt64(1, false, this.lUid)
    this.lYYId = t.readInt64(2, false, this.lYYId)
    this.sNick = t.readString(3, false, this.sNick)
    this.sAvatar = t.readString(4, false, this.sAvatar)
    this.bLive = t.readBoolean(5, false, this.bLive)
    this.tLive = t.readStruct(6, false, this.tLive)
    this.iLevel = t.readInt32(7, false, this.iLevel)
    this.iCanBeSubscribed = t.readInt32(8, false, this.iCanBeSubscribed)
    this.iSubscribeStatus = t.readInt32(9, false, this.iSubscribeStatus)
    this.lSubscribeCount = t.readInt64(10, false, this.lSubscribeCount)
    this.iGender = t.readInt32(11, false, this.iGender)
    this.iFansNum = t.readInt32(12, false, this.iFansNum)
    this.iDiamondFansNum = t.readInt32(13, false, this.iDiamondFansNum)
    this.iDiamondFansQuota = t.readInt32(14, false, this.iDiamondFansQuota)
    this.sDiamondUrl = t.readString(15, false, this.sDiamondUrl)
    this.iIsPresenter = t.readInt32(16, false, this.iIsPresenter)
    this.iCertified = t.readInt32(17, false, this.iCertified)
    this.iRoomId = t.readInt32(18, false, this.iRoomId)
    this.sScheduleTime = t.readString(19, false, this.sScheduleTime)
    this.sDescription = t.readString(20, false, this.sDescription)
    this.iRelation = t.readInt32(21, false, this.iRelation)
}

Huya.ActivityEx = function () {
    this.iType = 0
    this.sKey = ""
    this.lAid = 0
    this.iDateline = 0
}

Huya.ActivityEx.prototype._clone = function () {
    return new Huya.ActivityEx
}

Huya.ActivityEx.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ActivityEx.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ActivityEx.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeString(1, this.sKey)
    t.writeInt64(2, this.lAid)
    t.writeInt32(3, this.iDateline)
}

Huya.ActivityEx.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.sKey = t.readString(1, false, this.sKey)
    this.lAid = t.readInt64(2, false, this.lAid)
    this.iDateline = t.readInt32(3, false, this.iDateline)
}

Huya.GetCdnTokenExReq = function () {
    this.sFlvUrl = ""
    this.sStreamName = ""
    this.iLoopTime = 0
}

Huya.GetCdnTokenExReq.prototype._clone = function () {
    return new Huya.GetCdnTokenExReq
}

Huya.GetCdnTokenExReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetCdnTokenExReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetCdnTokenExReq.prototype.writeTo = function (t) {
    t.writeString(0, this.sFlvUrl)
    t.writeString(1, this.sStreamName)
    t.writeInt32(2, this.iLoopTime)
}

Huya.GetCdnTokenExReq.prototype.readFrom = function (t) {
    this.sFlvUrl = t.readString(0, false, this.sFlvUrl)
    this.sStreamName = t.readString(1, false, this.sStreamName)
    this.iLoopTime = t.readInt32(2, false, this.iLoopTime)
}

Huya.GetCdnTokenExRsp = function () {
    this.sFlvToken = ""
    this.iExpireTime = 0
}

Huya.GetCdnTokenExRsp.prototype._clone = function () {
    return new Huya.GetCdnTokenExRsp
}

Huya.GetCdnTokenExRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetCdnTokenExRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetCdnTokenExRsp.prototype.writeTo = function (t) {
    t.writeString(0, this.sFlvToken)
    t.writeInt32(1, this.iExpireTime)
}

Huya.GetCdnTokenExRsp.prototype.readFrom = function (t) {
    this.sFlvToken = t.readString(0, false, this.sFlvToken)
    this.iExpireTime = t.readInt32(1, false, this.iExpireTime)
}

Huya.SetBadgeVReq = function () {
    this.tUserId = new Huya.UserId
    this.lFansUid = 0
    this.lBadgeId = 0
    this.iVFlag = 0
    this.iEffectiveDay = 0
}

Huya.SetBadgeVReq.prototype._clone = function () {
    return new Huya.SetBadgeVReq
}

Huya.SetBadgeVReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SetBadgeVReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SetBadgeVReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lFansUid)
    t.writeInt64(2, this.lBadgeId)
    t.writeInt32(3, this.iVFlag)
    t.writeInt32(4, this.iEffectiveDay)
}

Huya.SetBadgeVReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lFansUid = t.readInt64(1, false, this.lFansUid)
    this.lBadgeId = t.readInt64(2, false, this.lBadgeId)
    this.iVFlag = t.readInt32(3, false, this.iVFlag)
    this.iEffectiveDay = t.readInt32(4, false, this.iEffectiveDay)
}

Huya.SetBadgeVRsp = function () {
    this.iRet = 0
    this.lFansUid = 0
    this.lBadgeId = 0
    this.iVFlag = -1
    this.lVExpiredTS = 0
}

Huya.SetBadgeVRsp.prototype._clone = function () {
    return new Huya.SetBadgeVRsp
}

Huya.SetBadgeVRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SetBadgeVRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SetBadgeVRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRet)
    t.writeInt64(1, this.lFansUid)
    t.writeInt64(2, this.lBadgeId)
    t.writeInt32(3, this.iVFlag)
    t.writeInt64(4, this.lVExpiredTS)
}

Huya.SetBadgeVRsp.prototype.readFrom = function (t) {
    this.iRet = t.readInt32(0, false, this.iRet)
    this.lFansUid = t.readInt64(1, false, this.lFansUid)
    this.lBadgeId = t.readInt64(2, false, this.lBadgeId)
    this.iVFlag = t.readInt32(3, false, this.iVFlag)
    this.lVExpiredTS = t.readInt64(4, false, this.lVExpiredTS)
}

Huya.Metric = function () {
    this.sMetricName = ""
    this.vDimension = new Taf.Vector(new Huya.Dimension)
    this.iTS = 0
    this.iSuccess = 0
    this.iRetCode = 0
    this.fValue = 0
    this.eUnit = 0
    this.tStatsSet = new Huya.StatsSet
    this.sExtDesc = ""
    this.vExLog = new Taf.Vector(new Huya.Dimension)
}

Huya.Metric.prototype._clone = function () {
    return new Huya.Metric
}

Huya.Metric.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.Metric.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.Metric.prototype.writeTo = function (t) {
    t.writeString(0, this.sMetricName)
    t.writeVector(1, this.vDimension)
    t.writeInt64(2, this.iTS)
    t.writeInt32(3, this.iSuccess)
    t.writeInt32(4, this.iRetCode)
    t.writeDouble(5, this.fValue)
    t.writeInt32(6, this.eUnit)
    t.writeStruct(7, this.tStatsSet)
    t.writeString(8, this.sExtDesc)
    t.writeVector(9, this.vExLog)
}

Huya.Metric.prototype.readFrom = function (t) {
    this.sMetricName = t.readString(0, true, this.sMetricName)
    this.vDimension = t.readVector(1, false, this.vDimension)
    this.iTS = t.readInt64(2, false, this.iTS)
    this.iSuccess = t.readInt32(3, false, this.iSuccess)
    this.iRetCode = t.readInt32(4, false, this.iRetCode)
    this.fValue = t.readDouble(5, false, this.fValue)
    this.eUnit = t.readInt32(6, false, this.eUnit)
    this.tStatsSet = t.readStruct(7, false, this.tStatsSet)
    this.sExtDesc = t.readString(8, false, this.sExtDesc)
    this.vExLog = t.readVector(9, false, this.vExLog)
}

Huya.Dimension = function () {
    this.sName = ""
    this.sValue = ""
}

Huya.Dimension.prototype._clone = function () {
    return new Huya.Dimension
}

Huya.Dimension.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.Dimension.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.Dimension.prototype.writeTo = function (t) {
    t.writeString(0, this.sName)
    t.writeString(1, this.sValue)
}

Huya.Dimension.prototype.readFrom = function (t) {
    this.sName = t.readString(0, false, this.sName)
    this.sValue = t.readString(1, false, this.sValue)
}

Huya.EUnit = {
    EUnit_None: 0,
    EUnit_Seconds: 1,
    EUnit_Microseconds: 2,
    EUnit_Milliseconds: 3,
    EUnit_Bytes: 4,
    EUnit_Kilobytes: 5,
    EUnit_Megabytes: 6,
    EUnit_Gigabytes: 7,
    EUnit_Terabytes: 8,
    EUnit_Bits: 9,
    EUnit_Kilobits: 10,
    EUnit_Megabits: 11,
    EUnit_Gigabits: 12,
    EUnit_Terabits: 13,
    EUnit_Percent: 14,
    EUnit_Count: 15,
    EUnit_BytesPerSecond: 16,
    EUnit_KilobytesPerSecond: 17,
    EUnit_MegabytesPerSecond: 18,
    EUnit_GigabytesPerSecond: 19,
    EUnit_TerabytesPerSecond: 20,
    EUnit_BitsPerSecond: 21,
    EUnit_KilobitsPerSecond: 22,
    EUnit_MegabitsPerSecond: 23,
    EUnit_GigabitsPerSecond: 24,
    EUnit_TerabitsPerSecond: 25,
    EUnit_CountPerSecond: 26
}
Huya.MetricSet = function () {
    this.tId = new Huya.UserId
    this.vMetric = new Taf.Vector(new Huya.Metric)
}

Huya.MetricSet.prototype._clone = function () {
    return new Huya.MetricSet
}

Huya.MetricSet.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MetricSet.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MetricSet.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeVector(1, this.vMetric)
}

Huya.MetricSet.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, true, this.tId)
    this.vMetric = t.readVector(1, true, this.vMetric)
}

Huya.StatsSet = function () {
    this.fSum = 0
    this.fMaxValue = 0
    this.fMinValue = 0
    this.lSampleCnt = 0
}

Huya.StatsSet.prototype._clone = function () {
    return new Huya.StatsSet
}

Huya.StatsSet.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.StatsSet.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.StatsSet.prototype.writeTo = function (t) {
    t.writeDouble(0, this.fSum)
    t.writeDouble(1, this.fMaxValue)
    t.writeDouble(2, this.fMinValue)
    t.writeInt64(3, this.lSampleCnt)
}

Huya.StatsSet.prototype.readFrom = function (t) {
    this.fSum = t.readDouble(0, false, this.fSum)
    this.fMaxValue = t.readDouble(1, false, this.fMaxValue)
    this.fMinValue = t.readDouble(2, false, this.fMinValue)
    this.lSampleCnt = t.readInt64(3, false, this.lSampleCnt)
}

Huya.MetricDetailSet = function () {
    this.tId = new Huya.UserId
    this.vMetricDetail = new Taf.Vector(new Huya.MetricDetail)
}

Huya.MetricDetailSet.prototype._clone = function () {
    return new Huya.MetricDetailSet
}

Huya.MetricDetailSet.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MetricDetailSet.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MetricDetailSet.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeVector(1, this.vMetricDetail)
}

Huya.MetricDetailSet.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, true, this.tId)
    this.vMetricDetail = t.readVector(1, true, this.vMetricDetail)
}

Huya.MetricDetail = function () {
    this.sMetricName = ""
    this.iTS = 0
    this.vDimension = new Taf.Vector(new Huya.Dimension)
    this.vFiled = new Taf.Vector(new Huya.Field)
    this.vExLog = new Taf.Vector(new Huya.Dimension)
}

Huya.MetricDetail.prototype._clone = function () {
    return new Huya.MetricDetail
}

Huya.MetricDetail.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MetricDetail.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MetricDetail.prototype.writeTo = function (t) {
    t.writeString(0, this.sMetricName)
    t.writeInt64(1, this.iTS)
    t.writeVector(2, this.vDimension)
    t.writeVector(3, this.vFiled)
    t.writeVector(4, this.vExLog)
}

Huya.MetricDetail.prototype.readFrom = function (t) {
    this.sMetricName = t.readString(0, true, this.sMetricName)
    this.iTS = t.readInt64(1, false, this.iTS)
    this.vDimension = t.readVector(2, false, this.vDimension)
    this.vFiled = t.readVector(3, false, this.vFiled)
    this.vExLog = t.readVector(4, false, this.vExLog)
}

Huya.Field = function () {
    this.sName = ""
    this.fValue = 0
}

Huya.Field.prototype._clone = function () {
    return new Huya.Field
}

Huya.Field.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.Field.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.Field.prototype.writeTo = function (t) {
    t.writeString(0, this.sName)
    t.writeDouble(1, this.fValue)
}

Huya.Field.prototype.readFrom = function (t) {
    this.sName = t.readString(0, false, this.sName)
    this.fValue = t.readDouble(1, false, this.fValue)
}

Huya.SetUserProfileReq = function () {
    this.tId = new Huya.UserId
    this.iGender = -1
    this.iBirthday = -1
    this.sSign = "[NOMODIFY]"
    this.sArea = ""
    this.sLocation = ""
    this.sNickName = ""
}

Huya.SetUserProfileReq.prototype._clone = function () {
    return new Huya.SetUserProfileReq
}

Huya.SetUserProfileReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SetUserProfileReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SetUserProfileReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt32(1, this.iGender)
    t.writeInt32(2, this.iBirthday)
    t.writeString(3, this.sSign)
    t.writeString(4, this.sArea)
    t.writeString(5, this.sLocation)
    t.writeString(6, this.sNickName)
}

Huya.SetUserProfileReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.iGender = t.readInt32(1, false, this.iGender)
    this.iBirthday = t.readInt32(2, false, this.iBirthday)
    this.sSign = t.readString(3, false, this.sSign)
    this.sArea = t.readString(4, false, this.sArea)
    this.sLocation = t.readString(5, false, this.sLocation)
    this.sNickName = t.readString(6, false, this.sNickName)
}

Huya.SetUserProfileRsp = function () {
    this.tUserProfile = new Huya.UserProfile
    this.sTip = ""
}

Huya.SetUserProfileRsp.prototype._clone = function () {
    return new Huya.SetUserProfileRsp
}

Huya.SetUserProfileRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SetUserProfileRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SetUserProfileRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserProfile)
    t.writeString(1, this.sTip)
}

Huya.SetUserProfileRsp.prototype.readFrom = function (t) {
    this.tUserProfile = t.readStruct(0, false, this.tUserProfile)
    this.sTip = t.readString(1, false, this.sTip)
}

Huya.MaiXuChangeNotice = function () {
    this.lTid = 0
    this.lSid = 0
    this.vUids = new Taf.Vector(new Taf.INT64)
}

Huya.MaiXuChangeNotice.prototype._clone = function () {
    return new Huya.MaiXuChangeNotice
}

Huya.MaiXuChangeNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MaiXuChangeNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MaiXuChangeNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTid)
    t.writeInt64(1, this.lSid)
    t.writeVector(2, this.vUids)
}

Huya.MaiXuChangeNotice.prototype.readFrom = function (t) {
    this.lTid = t.readInt64(0, false, this.lTid)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.vUids = t.readVector(2, false, this.vUids)
}

Huya.MaiXuSearchReq = function () {
    this.tId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
}

Huya.MaiXuSearchReq.prototype._clone = function () {
    return new Huya.MaiXuSearchReq
}

Huya.MaiXuSearchReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MaiXuSearchReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MaiXuSearchReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
}

Huya.MaiXuSearchReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
}

Huya.MaiXuSearchRsp = function () {
    this.vUids = new Taf.Vector(new Taf.INT64)
}

Huya.MaiXuSearchRsp.prototype._clone = function () {
    return new Huya.MaiXuSearchRsp
}

Huya.MaiXuSearchRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MaiXuSearchRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MaiXuSearchRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vUids)
}

Huya.MaiXuSearchRsp.prototype.readFrom = function (t) {
    this.vUids = t.readVector(0, false, this.vUids)
}

Huya.NewsTickerItem = function () {
    this.sContent = ""
    this.sColor = ""
}

Huya.NewsTickerItem.prototype._clone = function () {
    return new Huya.NewsTickerItem
}

Huya.NewsTickerItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NewsTickerItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NewsTickerItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sContent)
    t.writeString(1, this.sColor)
}

Huya.NewsTickerItem.prototype.readFrom = function (t) {
    this.sContent = t.readString(0, false, this.sContent)
    this.sColor = t.readString(1, false, this.sColor)
}

Huya.NewsTicker = function () {
    this.vItem = new Taf.Vector(new Huya.NewsTickerItem)
}

Huya.NewsTicker.prototype._clone = function () {
    return new Huya.NewsTicker
}

Huya.NewsTicker.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.NewsTicker.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.NewsTicker.prototype.writeTo = function (t) {
    t.writeVector(0, this.vItem)
}

Huya.NewsTicker.prototype.readFrom = function (t) {
    this.vItem = t.readVector(0, false, this.vItem)
}

Huya.SupportCampInfoReq = function () {
    this.lPid = 0
    this.lUid = 0
}

Huya.SupportCampInfoReq.prototype._clone = function () {
    return new Huya.SupportCampInfoReq
}

Huya.SupportCampInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SupportCampInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SupportCampInfoReq.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeInt64(1, this.lUid)
}

Huya.SupportCampInfoReq.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.lUid = t.readInt64(1, false, this.lUid)
}

Huya.SupportCampInfoRsp = function () {
    this.iType = 0
    this.iActId = 0
    this.iSubId = 0
    this.vInfo = new Taf.Vector(new Huya.SupportCampItem)
    this.iPriority = 0
}

Huya.SupportCampInfoRsp.prototype._clone = function () {
    return new Huya.SupportCampInfoRsp
}

Huya.SupportCampInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SupportCampInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SupportCampInfoRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeInt32(1, this.iActId)
    t.writeInt32(2, this.iSubId)
    t.writeVector(3, this.vInfo)
    t.writeInt32(4, this.iPriority)
}

Huya.SupportCampInfoRsp.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.iActId = t.readInt32(1, false, this.iActId)
    this.iSubId = t.readInt32(2, false, this.iSubId)
    this.vInfo = t.readVector(3, false, this.vInfo)
    this.iPriority = t.readInt32(4, false, this.iPriority)
}

Huya.SupportCampItem = function () {
    this.lXid = 0
    this.vChatText = new Taf.Vector(new Taf.STRING)
    this.vFlowText = new Taf.Vector(new Taf.STRING)
    this.vPanelText = new Taf.Vector(new Taf.STRING)
    this.sLogoUrl = ""
}

Huya.SupportCampItem.prototype._clone = function () {
    return new Huya.SupportCampItem
}

Huya.SupportCampItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SupportCampItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SupportCampItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lXid)
    t.writeVector(1, this.vChatText)
    t.writeVector(2, this.vFlowText)
    t.writeVector(3, this.vPanelText)
    t.writeString(4, this.sLogoUrl)
}

Huya.SupportCampItem.prototype.readFrom = function (t) {
    this.lXid = t.readInt64(0, false, this.lXid)
    this.vChatText = t.readVector(1, false, this.vChatText)
    this.vFlowText = t.readVector(2, false, this.vFlowText)
    this.vPanelText = t.readVector(3, false, this.vPanelText)
    this.sLogoUrl = t.readString(4, false, this.sLogoUrl)
}

Huya.UserSupportCampReq = function () {
    this.iType = 0
    this.iActId = 0
    this.iSubId = 0
    this.lPid = 0
    this.lUid = 0
}

Huya.UserSupportCampReq.prototype._clone = function () {
    return new Huya.UserSupportCampReq
}

Huya.UserSupportCampReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserSupportCampReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserSupportCampReq.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeInt32(1, this.iActId)
    t.writeInt32(2, this.iSubId)
    t.writeInt64(3, this.lPid)
    t.writeInt64(4, this.lUid)
}

Huya.UserSupportCampReq.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.iActId = t.readInt32(1, false, this.iActId)
    this.iSubId = t.readInt32(2, false, this.iSubId)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.lUid = t.readInt64(4, false, this.lUid)
}

Huya.UserSupportCampRsp = function () {
    this.iType = 0
    this.iActId = 0
    this.iSubId = 0
    this.lXid = 0
}

Huya.UserSupportCampRsp.prototype._clone = function () {
    return new Huya.UserSupportCampRsp
}

Huya.UserSupportCampRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserSupportCampRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserSupportCampRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iType)
    t.writeInt32(1, this.iActId)
    t.writeInt32(2, this.iSubId)
    t.writeInt64(3, this.lXid)
}

Huya.UserSupportCampRsp.prototype.readFrom = function (t) {
    this.iType = t.readInt32(0, false, this.iType)
    this.iActId = t.readInt32(1, false, this.iActId)
    this.iSubId = t.readInt32(2, false, this.iSubId)
    this.lXid = t.readInt64(3, false, this.lXid)
}