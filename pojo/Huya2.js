import Taf from "./Taf"
const Huya = {};
export default Huya

Huya.LotteryUserReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
}

Huya.LotteryUserReq.prototype._clone = function () {
    return new Huya.LotteryUserReq
}

Huya.LotteryUserReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryUserReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryUserReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
}

Huya.LotteryUserReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
}

Huya.LotteryPanel = function () {
    this.iState = 0
    this.tAward = new Huya.LotteryAwardInfo
    this.tData = new Huya.LotteryData
    this.tExtraAwardInfo = new Huya.LotteryExtraAwardInfo
    this.vGift2TicketCfgs = new Taf.Vector(new Huya.Gift2TicketCfg)
    this.iTicketPrice = 0
}

Huya.LotteryPanel.prototype._clone = function () {
    return new Huya.LotteryPanel
}

Huya.LotteryPanel.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryPanel.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryPanel.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iState)
    t.writeStruct(1, this.tAward)
    t.writeStruct(2, this.tData)
    t.writeStruct(3, this.tExtraAwardInfo)
    t.writeVector(4, this.vGift2TicketCfgs)
    t.writeInt32(5, this.iTicketPrice)
}

Huya.LotteryPanel.prototype.readFrom = function (t) {
    this.iState = t.readInt32(0, false, this.iState)
    this.tAward = t.readStruct(1, false, this.tAward)
    this.tData = t.readStruct(2, false, this.tData)
    this.tExtraAwardInfo = t.readStruct(3, false, this.tExtraAwardInfo)
    this.vGift2TicketCfgs = t.readVector(4, false, this.vGift2TicketCfgs)
    this.iTicketPrice = t.readInt32(5, false, this.iTicketPrice)
}

Huya.LotteryAwardInfo = function () {
    this.lLotteryId = 0
    this.lPid = 0
    this.iSettleState = 0
    this.lTimestamp = 0
    this.iAwardUserNum = 0
    this.vInfo = new Taf.Vector(new Huya.LotteryUserAwardInfo)
    this.tCurClassInfo = new Huya.LotteryAwardClassInfo
}

Huya.LotteryAwardInfo.prototype._clone = function () {
    return new Huya.LotteryAwardInfo
}

Huya.LotteryAwardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryAwardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryAwardInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLotteryId)
    t.writeInt64(1, this.lPid)
    t.writeInt32(2, this.iSettleState)
    t.writeInt64(3, this.lTimestamp)
    t.writeInt32(4, this.iAwardUserNum)
    t.writeVector(5, this.vInfo)
    t.writeStruct(6, this.tCurClassInfo)
}

Huya.LotteryAwardInfo.prototype.readFrom = function (t) {
    this.lLotteryId = t.readInt64(0, false, this.lLotteryId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.iSettleState = t.readInt32(2, false, this.iSettleState)
    this.lTimestamp = t.readInt64(3, false, this.lTimestamp)
    this.iAwardUserNum = t.readInt32(4, false, this.iAwardUserNum)
    this.vInfo = t.readVector(5, false, this.vInfo)
    this.tCurClassInfo = t.readStruct(6, false, this.tCurClassInfo)
}

Huya.LotteryData = function () {
    this.tAggreData = new Huya.LotteryAggreData
    this.vInfo = new Taf.Vector(new Huya.UserTicketInfo)
}

Huya.LotteryData.prototype._clone = function () {
    return new Huya.LotteryData
}

Huya.LotteryData.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryData.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryData.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tAggreData)
    t.writeVector(1, this.vInfo)
}

Huya.LotteryData.prototype.readFrom = function (t) {
    this.tAggreData = t.readStruct(0, false, this.tAggreData)
    this.vInfo = t.readVector(1, false, this.vInfo)
}

Huya.LotteryExtraAwardInfo = function () {
    this.mClass2ExtraAward = new Taf.Map(new Taf.INT32, new Huya.LotteryAwardItem)
    this.iExtraAwardMode = 0
}

Huya.LotteryExtraAwardInfo.prototype._clone = function () {
    return new Huya.LotteryExtraAwardInfo
}

Huya.LotteryExtraAwardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryExtraAwardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryExtraAwardInfo.prototype.writeTo = function (t) {
    t.writeMap(0, this.mClass2ExtraAward)
    t.writeInt32(1, this.iExtraAwardMode)
}

Huya.LotteryExtraAwardInfo.prototype.readFrom = function (t) {
    this.mClass2ExtraAward = t.readMap(0, false, this.mClass2ExtraAward)
    this.iExtraAwardMode = t.readInt32(1, false, this.iExtraAwardMode)
}

Huya.LotteryUserAwardInfo = function () {
    this.lUid = 0
    this.lYYid = 0
    this.sNickName = ""
    this.sLogo = ""
    this.sAwardName = ""
}

Huya.LotteryUserAwardInfo.prototype._clone = function () {
    return new Huya.LotteryUserAwardInfo
}

Huya.LotteryUserAwardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryUserAwardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryUserAwardInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lYYid)
    t.writeString(2, this.sNickName)
    t.writeString(3, this.sLogo)
    t.writeString(4, this.sAwardName)
}

Huya.LotteryUserAwardInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lYYid = t.readInt64(1, false, this.lYYid)
    this.sNickName = t.readString(2, false, this.sNickName)
    this.sLogo = t.readString(3, false, this.sLogo)
    this.sAwardName = t.readString(4, false, this.sAwardName)
}

Huya.LotteryAwardClassInfo = function () {
    this.iClass = 0
    this.iClassType = 0
    this.sLogo = ""
    this.sMiniLogo = ""
    this.sName = ""
    this.iTicketNum = 0
    this.sNextClassName = ""
    this.iNextClassTicketNum = 0
    this.tGreenBeanAward = new Huya.LotteryAwardItem
    this.tSpecialAward = new Huya.LotteryAwardItem
    this.tExtraAward = new Huya.LotteryAwardItem
}

Huya.LotteryAwardClassInfo.prototype._clone = function () {
    return new Huya.LotteryAwardClassInfo
}

Huya.LotteryAwardClassInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryAwardClassInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryAwardClassInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iClass)
    t.writeInt32(1, this.iClassType)
    t.writeString(2, this.sLogo)
    t.writeString(3, this.sMiniLogo)
    t.writeString(4, this.sName)
    t.writeInt32(5, this.iTicketNum)
    t.writeString(6, this.sNextClassName)
    t.writeInt32(7, this.iNextClassTicketNum)
    t.writeStruct(8, this.tGreenBeanAward)
    t.writeStruct(9, this.tSpecialAward)
    t.writeStruct(10, this.tExtraAward)
}

Huya.LotteryAwardClassInfo.prototype.readFrom = function (t) {
    this.iClass = t.readInt32(0, false, this.iClass)
    this.iClassType = t.readInt32(1, false, this.iClassType)
    this.sLogo = t.readString(2, false, this.sLogo)
    this.sMiniLogo = t.readString(3, false, this.sMiniLogo)
    this.sName = t.readString(4, false, this.sName)
    this.iTicketNum = t.readInt32(5, false, this.iTicketNum)
    this.sNextClassName = t.readString(6, false, this.sNextClassName)
    this.iNextClassTicketNum = t.readInt32(7, false, this.iNextClassTicketNum)
    this.tGreenBeanAward = t.readStruct(8, false, this.tGreenBeanAward)
    this.tSpecialAward = t.readStruct(9, false, this.tSpecialAward)
    this.tExtraAward = t.readStruct(10, false, this.tExtraAward)
}

Huya.LotteryAwardItem = function () {
    this.sAwardName = ""
    this.sAwardLogo = ""
    this.iAwardUserNum = 0
    this.sAwardDesc = ""
    this.iAwardNum = 0
    this.iAwardType = -1
}

Huya.LotteryAwardItem.prototype._clone = function () {
    return new Huya.LotteryAwardItem
}

Huya.LotteryAwardItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryAwardItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryAwardItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sAwardName)
    t.writeString(1, this.sAwardLogo)
    t.writeInt32(2, this.iAwardUserNum)
    t.writeString(3, this.sAwardDesc)
    t.writeInt32(4, this.iAwardNum)
    t.writeInt32(5, this.iAwardType)
}

Huya.LotteryAwardItem.prototype.readFrom = function (t) {
    this.sAwardName = t.readString(0, false, this.sAwardName)
    this.sAwardLogo = t.readString(1, false, this.sAwardLogo)
    this.iAwardUserNum = t.readInt32(2, false, this.iAwardUserNum)
    this.sAwardDesc = t.readString(3, false, this.sAwardDesc)
    this.iAwardNum = t.readInt32(4, false, this.iAwardNum)
    this.iAwardType = t.readInt32(5, false, this.iAwardType)
}

Huya.LotteryAggreData = function () {
    this.lLotteryId = 0
    this.lPid = 0
    this.tCurClassInfo = new Huya.LotteryAwardClassInfo
    this.iTicketNum = 0
    this.iUserNum = 0
    this.iAwardUserNum = 0
    this.tDiyAwardInfo = new Huya.LotteryDiyAwardInfo
}

Huya.LotteryAggreData.prototype._clone = function () {
    return new Huya.LotteryAggreData
}

Huya.LotteryAggreData.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryAggreData.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryAggreData.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLotteryId)
    t.writeInt64(1, this.lPid)
    t.writeStruct(2, this.tCurClassInfo)
    t.writeInt32(3, this.iTicketNum)
    t.writeInt32(4, this.iUserNum)
    t.writeInt32(5, this.iAwardUserNum)
    t.writeStruct(6, this.tDiyAwardInfo)
}

Huya.LotteryAggreData.prototype.readFrom = function (t) {
    this.lLotteryId = t.readInt64(0, false, this.lLotteryId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.tCurClassInfo = t.readStruct(2, false, this.tCurClassInfo)
    this.iTicketNum = t.readInt32(3, false, this.iTicketNum)
    this.iUserNum = t.readInt32(4, false, this.iUserNum)
    this.iAwardUserNum = t.readInt32(5, false, this.iAwardUserNum)
    this.tDiyAwardInfo = t.readStruct(6, false, this.tDiyAwardInfo)
}

Huya.UserTicketInfo = function () {
    this.lUid = 0
    this.lYYid = 0
    this.sNickName = ""
    this.sLogo = ""
    this.iTicketNum = 0
}

Huya.UserTicketInfo.prototype._clone = function () {
    return new Huya.UserTicketInfo
}

Huya.UserTicketInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserTicketInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserTicketInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lYYid)
    t.writeString(2, this.sNickName)
    t.writeString(3, this.sLogo)
    t.writeInt32(4, this.iTicketNum)
}

Huya.UserTicketInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lYYid = t.readInt64(1, false, this.lYYid)
    this.sNickName = t.readString(2, false, this.sNickName)
    this.sLogo = t.readString(3, false, this.sLogo)
    this.iTicketNum = t.readInt32(4, false, this.iTicketNum)
}

Huya.LotteryUserInfoRsp = function () {
    this.lUid = 0
    this.iTicketNum = 0
}

Huya.LotteryUserInfoRsp.prototype._clone = function () {
    return new Huya.LotteryUserInfoRsp
}

Huya.LotteryUserInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryUserInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryUserInfoRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iTicketNum)
}

Huya.LotteryUserInfoRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iTicketNum = t.readInt32(1, false, this.iTicketNum)
}

Huya.BuyTicketReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.lLotteryId = 0
    this.iTicketNum = 0
}

Huya.BuyTicketReq.prototype._clone = function () {
    return new Huya.BuyTicketReq
}

Huya.BuyTicketReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BuyTicketReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BuyTicketReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
    t.writeInt64(4, this.lLotteryId)
    t.writeInt32(5, this.iTicketNum)
}

Huya.BuyTicketReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.lLotteryId = t.readInt64(4, false, this.lLotteryId)
    this.iTicketNum = t.readInt32(5, false, this.iTicketNum)
}

Huya.BuyTicketRsp = function () {
    this.iRet = 0
    this.tInfo = new Huya.LotteryUserInfoRsp
    this.iTicketNum = 0
    this.sNotEnoughMsg = ""
}

Huya.BuyTicketRsp.prototype._clone = function () {
    return new Huya.BuyTicketRsp
}

Huya.BuyTicketRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BuyTicketRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BuyTicketRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRet)
    t.writeStruct(1, this.tInfo)
    t.writeInt32(2, this.iTicketNum)
    t.writeString(3, this.sNotEnoughMsg)
}

Huya.BuyTicketRsp.prototype.readFrom = function (t) {
    this.iRet = t.readInt32(0, false, this.iRet)
    this.tInfo = t.readStruct(1, false, this.tInfo)
    this.iTicketNum = t.readInt32(2, false, this.iTicketNum)
    this.sNotEnoughMsg = t.readString(3, false, this.sNotEnoughMsg)
}

Huya.LotteryEndNotice = function () {
    this.lLotteryId = 0
}

Huya.LotteryEndNotice.prototype._clone = function () {
    return new Huya.LotteryEndNotice
}

Huya.LotteryEndNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryEndNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryEndNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLotteryId)
}

Huya.LotteryEndNotice.prototype.readFrom = function (t) {
    this.lLotteryId = t.readInt64(0, false, this.lLotteryId)
}

Huya.LotteryAnnounce = function () {
    this.lPid = 0
    this.sNickName = ""
    this.sContent = ""
    this.tChInfo = new Huya.PresenterChannelInfo
}

Huya.LotteryAnnounce.prototype._clone = function () {
    return new Huya.LotteryAnnounce
}

Huya.LotteryAnnounce.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryAnnounce.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryAnnounce.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeString(1, this.sNickName)
    t.writeString(2, this.sContent)
    t.writeStruct(3, this.tChInfo)
}

Huya.LotteryAnnounce.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.sContent = t.readString(2, false, this.sContent)
    this.tChInfo = t.readStruct(3, false, this.tChInfo)
}

Huya.LotteryDiyTerm = function () {
    this.sKey = ""
    this.sDesc = ""
    this.lValue = 0
}

Huya.LotteryDiyTerm.prototype._clone = function () {
    return new Huya.LotteryDiyTerm
}

Huya.LotteryDiyTerm.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryDiyTerm.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryDiyTerm.prototype.writeTo = function (t) {
    t.writeString(0, this.sKey)
    t.writeString(1, this.sDesc)
    t.writeInt64(2, this.lValue)
}

Huya.LotteryDiyTerm.prototype.readFrom = function (t) {
    this.sKey = t.readString(0, false, this.sKey)
    this.sDesc = t.readString(1, false, this.sDesc)
    this.lValue = t.readInt64(2, false, this.lValue)
}

Huya.LotteryDiyAward = function () {
    this.lTypeId = 0
    this.sName = ""
    this.sPic = ""
    this.sDesc = ""
    this.sGetDesc = ""
    this.iLv = 0
    this.iNum = 0
    this.iUsrNum = 0
}

Huya.LotteryDiyAward.prototype._clone = function () {
    return new Huya.LotteryDiyAward
}

Huya.LotteryDiyAward.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryDiyAward.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryDiyAward.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTypeId)
    t.writeString(1, this.sName)
    t.writeString(2, this.sPic)
    t.writeString(3, this.sDesc)
    t.writeString(4, this.sGetDesc)
    t.writeInt32(5, this.iLv)
    t.writeInt32(6, this.iNum)
    t.writeInt32(7, this.iUsrNum)
}

Huya.LotteryDiyAward.prototype.readFrom = function (t) {
    this.lTypeId = t.readInt64(0, false, this.lTypeId)
    this.sName = t.readString(1, false, this.sName)
    this.sPic = t.readString(2, false, this.sPic)
    this.sDesc = t.readString(3, false, this.sDesc)
    this.sGetDesc = t.readString(4, false, this.sGetDesc)
    this.iLv = t.readInt32(5, false, this.iLv)
    this.iNum = t.readInt32(6, false, this.iNum)
    this.iUsrNum = t.readInt32(7, false, this.iUsrNum)
}

Huya.LotteryDiyAwardInfo = function () {
    this.iTicketNum = 0
    this.vTerms = new Taf.Vector(new Huya.LotteryDiyTerm)
    this.vDiyAwards = new Taf.Vector(new Huya.LotteryDiyAward)
}

Huya.LotteryDiyAwardInfo.prototype._clone = function () {
    return new Huya.LotteryDiyAwardInfo
}

Huya.LotteryDiyAwardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.LotteryDiyAwardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.LotteryDiyAwardInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iTicketNum)
    t.writeVector(1, this.vTerms)
    t.writeVector(2, this.vDiyAwards)
}

Huya.LotteryDiyAwardInfo.prototype.readFrom = function (t) {
    this.iTicketNum = t.readInt32(0, false, this.iTicketNum)
    this.vTerms = t.readVector(1, false, this.vTerms)
    this.vDiyAwards = t.readVector(2, false, this.vDiyAwards)
}

Huya.Gift2TicketCfg = function () {
    this.iItemId = 0
    this.iItemPrice = 0
    this.iNum = 0
}

Huya.Gift2TicketCfg.prototype._clone = function () {
    return new Huya.Gift2TicketCfg
}

Huya.Gift2TicketCfg.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.Gift2TicketCfg.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.Gift2TicketCfg.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemId)
    t.writeInt32(1, this.iItemPrice)
    t.writeInt32(2, this.iNum)
}

Huya.Gift2TicketCfg.prototype.readFrom = function (t) {
    this.iItemId = t.readInt32(0, false, this.iItemId)
    this.iItemPrice = t.readInt32(1, false, this.iItemPrice)
    this.iNum = t.readInt32(2, false, this.iNum)
}

Huya.OnTVUserReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
    this.iSupportFlag = 0
}

Huya.OnTVUserReq.prototype._clone = function () {
    return new Huya.OnTVUserReq
}

Huya.OnTVUserReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVUserReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVUserReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
    t.writeInt32(4, this.iSupportFlag)
}

Huya.OnTVUserReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.iSupportFlag = t.readInt32(4, false, this.iSupportFlag)
}

Huya.OnTVPanel = function () {
    this.iState = 0
    this.tAward = new Huya.OnTVAwardInfo
    this.tInfo = new Huya.OnTVGameInfo
    this.iIsDiy = 0
    this.tDiy = new Huya.OnTVCfgDiy
}

Huya.OnTVPanel.prototype._clone = function () {
    return new Huya.OnTVPanel
}

Huya.OnTVPanel.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVPanel.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVPanel.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iState)
    t.writeStruct(1, this.tAward)
    t.writeStruct(2, this.tInfo)
    t.writeInt32(3, this.iIsDiy)
    t.writeStruct(4, this.tDiy)
}

Huya.OnTVPanel.prototype.readFrom = function (t) {
    this.iState = t.readInt32(0, false, this.iState)
    this.tAward = t.readStruct(1, false, this.tAward)
    this.tInfo = t.readStruct(2, false, this.tInfo)
    this.iIsDiy = t.readInt32(3, false, this.iIsDiy)
    this.tDiy = t.readStruct(4, false, this.tDiy)
}

Huya.OnTVEndNotice = function () {
    this.lOnTVId = 0
}

Huya.OnTVEndNotice.prototype._clone = function () {
    return new Huya.OnTVEndNotice
}

Huya.OnTVEndNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVEndNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVEndNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lOnTVId)
}

Huya.OnTVEndNotice.prototype.readFrom = function (t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId)
}

Huya.OnTVCfgDiy = function () {
    this.tBarrage = new Huya.OnTVCfgDiyBarrage
    this.tFlag = new Huya.OnTVCfgDiyFlag
    this.tPanel = new Huya.OnTVCfgDiyPanel
}

Huya.OnTVCfgDiy.prototype._clone = function () {
    return new Huya.OnTVCfgDiy
}

Huya.OnTVCfgDiy.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVCfgDiy.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVCfgDiy.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tBarrage)
    t.writeStruct(1, this.tFlag)
    t.writeStruct(2, this.tPanel)
}

Huya.OnTVCfgDiy.prototype.readFrom = function (t) {
    this.tBarrage = t.readStruct(0, false, this.tBarrage)
    this.tFlag = t.readStruct(1, false, this.tFlag)
    this.tPanel = t.readStruct(2, false, this.tPanel)
}

Huya.OnTVCfgDiyBarrage = function () {
    this.sIcon = ""
}

Huya.OnTVCfgDiyBarrage.prototype._clone = function () {
    return new Huya.OnTVCfgDiyBarrage
}

Huya.OnTVCfgDiyBarrage.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVCfgDiyBarrage.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVCfgDiyBarrage.prototype.writeTo = function (t) {
    t.writeString(0, this.sIcon)
}

Huya.OnTVCfgDiyBarrage.prototype.readFrom = function (t) {
    this.sIcon = t.readString(0, false, this.sIcon)
}

Huya.OnTVCfgDiyFlag = function () {
    this.sName = "上电视"
    this.sPic = "http://livewebbs2.msstatic.com/ontv_<ua>.png"
}

Huya.OnTVCfgDiyFlag.prototype._clone = function () {
    return new Huya.OnTVCfgDiyFlag
}

Huya.OnTVCfgDiyFlag.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVCfgDiyFlag.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVCfgDiyFlag.prototype.writeTo = function (t) {
    t.writeString(0, this.sName)
    t.writeString(1, this.sPic)
}

Huya.OnTVCfgDiyFlag.prototype.readFrom = function (t) {
    this.sName = t.readString(0, false, this.sName)
    this.sPic = t.readString(1, false, this.sPic)
}

Huya.OnTVCfgDiyPanel = function () {
    this.sLogo = ""
    this.sButtonIcon = ""
    this.sAD = ""
    this.sName = ""
    this.sADJump = ""
    this.sUIJson = ""
}

Huya.OnTVCfgDiyPanel.prototype._clone = function () {
    return new Huya.OnTVCfgDiyPanel
}

Huya.OnTVCfgDiyPanel.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVCfgDiyPanel.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVCfgDiyPanel.prototype.writeTo = function (t) {
    t.writeString(0, this.sLogo)
    t.writeString(1, this.sButtonIcon)
    t.writeString(2, this.sAD)
    t.writeString(3, this.sName)
    t.writeString(4, this.sADJump)
    t.writeString(5, this.sUIJson)
}

Huya.OnTVCfgDiyPanel.prototype.readFrom = function (t) {
    this.sLogo = t.readString(0, false, this.sLogo)
    this.sButtonIcon = t.readString(1, false, this.sButtonIcon)
    this.sAD = t.readString(2, false, this.sAD)
    this.sName = t.readString(3, false, this.sName)
    this.sADJump = t.readString(4, false, this.sADJump)
    this.sUIJson = t.readString(5, false, this.sUIJson)
}

Huya.OnTVUserInfoRsp = function () {
    this.lUid = 0
    this.iBarrageNum = 0
    this.iIsFans = 0
    this.iFansLevel = 0
    this.sBadgeName = ""
    this.lBadgeId = 0
    this.iBadgeType = 0
}

Huya.OnTVUserInfoRsp.prototype._clone = function () {
    return new Huya.OnTVUserInfoRsp
}

Huya.OnTVUserInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVUserInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVUserInfoRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iBarrageNum)
    t.writeInt32(2, this.iIsFans)
    t.writeInt32(3, this.iFansLevel)
    t.writeString(4, this.sBadgeName)
    t.writeInt64(5, this.lBadgeId)
    t.writeInt32(6, this.iBadgeType)
}

Huya.OnTVUserInfoRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iBarrageNum = t.readInt32(1, false, this.iBarrageNum)
    this.iIsFans = t.readInt32(2, false, this.iIsFans)
    this.iFansLevel = t.readInt32(3, false, this.iFansLevel)
    this.sBadgeName = t.readString(4, false, this.sBadgeName)
    this.lBadgeId = t.readInt64(5, false, this.lBadgeId)
    this.iBadgeType = t.readInt32(6, false, this.iBadgeType)
}

Huya.SendOnTVBarrageReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.lOnTVId = 0
    this.tBarrage = new Huya.OnTVBarrage
    this.lPrice = 0
}

Huya.SendOnTVBarrageReq.prototype._clone = function () {
    return new Huya.SendOnTVBarrageReq
}

Huya.SendOnTVBarrageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendOnTVBarrageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendOnTVBarrageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
    t.writeInt64(4, this.lOnTVId)
    t.writeStruct(5, this.tBarrage)
    t.writeInt64(6, this.lPrice)
}

Huya.SendOnTVBarrageReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.lOnTVId = t.readInt64(4, false, this.lOnTVId)
    this.tBarrage = t.readStruct(5, false, this.tBarrage)
    this.lPrice = t.readInt64(6, false, this.lPrice)
}

Huya.SendOnTVBarrageRsp = function () {
    this.iRet = 0
    this.tInfo = new Huya.OnTVUserInfoRsp
}

Huya.SendOnTVBarrageRsp.prototype._clone = function () {
    return new Huya.SendOnTVBarrageRsp
}

Huya.SendOnTVBarrageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendOnTVBarrageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendOnTVBarrageRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRet)
    t.writeStruct(1, this.tInfo)
}

Huya.SendOnTVBarrageRsp.prototype.readFrom = function (t) {
    this.iRet = t.readInt32(0, false, this.iRet)
    this.tInfo = t.readStruct(1, false, this.tInfo)
}

Huya.OnTVAwardInfo = function () {
    this.lOnTVId = 0
    this.vInfo = new Taf.Vector(new Huya.OnTVUserAwardInfo)
    this.iBarrageNum = 0
    this.iUserNum = 0
    this.iNewFansNum = 0
    this.vItemBarrageCount = new Taf.Vector(new Huya.OnTVItemBarrageCount)
}

Huya.OnTVAwardInfo.prototype._clone = function () {
    return new Huya.OnTVAwardInfo
}

Huya.OnTVAwardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVAwardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVAwardInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lOnTVId)
    t.writeVector(1, this.vInfo)
    t.writeInt32(2, this.iBarrageNum)
    t.writeInt32(3, this.iUserNum)
    t.writeInt32(4, this.iNewFansNum)
    t.writeVector(5, this.vItemBarrageCount)
}

Huya.OnTVAwardInfo.prototype.readFrom = function (t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId)
    this.vInfo = t.readVector(1, false, this.vInfo)
    this.iBarrageNum = t.readInt32(2, false, this.iBarrageNum)
    this.iUserNum = t.readInt32(3, false, this.iUserNum)
    this.iNewFansNum = t.readInt32(4, false, this.iNewFansNum)
    this.vItemBarrageCount = t.readVector(5, false, this.vItemBarrageCount)
}

Huya.OnTVUserAwardInfo = function () {
    this.lUid = 0
    this.lYYid = 0
    this.sNickName = ""
    this.sLogo = ""
    this.sAwardName = ""
    this.tBarrage = new Huya.OnTVBarrage
}

Huya.OnTVUserAwardInfo.prototype._clone = function () {
    return new Huya.OnTVUserAwardInfo
}

Huya.OnTVUserAwardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVUserAwardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVUserAwardInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lYYid)
    t.writeString(2, this.sNickName)
    t.writeString(3, this.sLogo)
    t.writeString(4, this.sAwardName)
    t.writeStruct(5, this.tBarrage)
}

Huya.OnTVUserAwardInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lYYid = t.readInt64(1, false, this.lYYid)
    this.sNickName = t.readString(2, false, this.sNickName)
    this.sLogo = t.readString(3, false, this.sLogo)
    this.sAwardName = t.readString(4, false, this.sAwardName)
    this.tBarrage = t.readStruct(5, false, this.tBarrage)
}

Huya.OnTVBarrage = function () {
    this.lUid = 0
    this.sContent = ""
    this.iTVType = 0
    this.iTVColor = 0
}

Huya.OnTVBarrage.prototype._clone = function () {
    return new Huya.OnTVBarrage
}

Huya.OnTVBarrage.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVBarrage.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVBarrage.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeString(1, this.sContent)
    t.writeInt32(2, this.iTVType)
    t.writeInt32(3, this.iTVColor)
}

Huya.OnTVBarrage.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.sContent = t.readString(1, false, this.sContent)
    this.iTVType = t.readInt32(2, false, this.iTVType)
    this.iTVColor = t.readInt32(3, false, this.iTVColor)
}

Huya.OnTVGameInfo = function () {
    this.lOnTVId = 0
    this.tSettingInfo = new Huya.OnTVSettingInfo
    this.tData = new Huya.OnTVData
}

Huya.OnTVGameInfo.prototype._clone = function () {
    return new Huya.OnTVGameInfo
}

Huya.OnTVGameInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVGameInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVGameInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lOnTVId)
    t.writeStruct(1, this.tSettingInfo)
    t.writeStruct(2, this.tData)
}

Huya.OnTVGameInfo.prototype.readFrom = function (t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId)
    this.tSettingInfo = t.readStruct(1, false, this.tSettingInfo)
    this.tData = t.readStruct(2, false, this.tData)
}

Huya.OnTVSettingInfo = function () {
    this.sTitle = ""
    this.tAward = new Huya.OnTVAwardItem
    this.vTVPrice = new Taf.Vector(new Huya.TVPrice)
    this.lPid = 0
    this.sLogo = ""
    this.iAwardMode = 0
    this.vPack = new Taf.Vector(new Huya.OnTVItemPackage)
    this.iPartic = 0
}

Huya.OnTVSettingInfo.prototype._clone = function () {
    return new Huya.OnTVSettingInfo
}

Huya.OnTVSettingInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVSettingInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVSettingInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sTitle)
    t.writeStruct(1, this.tAward)
    t.writeVector(2, this.vTVPrice)
    t.writeInt64(3, this.lPid)
    t.writeString(4, this.sLogo)
    t.writeInt32(5, this.iAwardMode)
    t.writeVector(6, this.vPack)
    t.writeInt32(7, this.iPartic)
}

Huya.OnTVSettingInfo.prototype.readFrom = function (t) {
    this.sTitle = t.readString(0, false, this.sTitle)
    this.tAward = t.readStruct(1, false, this.tAward)
    this.vTVPrice = t.readVector(2, false, this.vTVPrice)
    this.lPid = t.readInt64(3, false, this.lPid)
    this.sLogo = t.readString(4, false, this.sLogo)
    this.iAwardMode = t.readInt32(5, false, this.iAwardMode)
    this.vPack = t.readVector(6, false, this.vPack)
    this.iPartic = t.readInt32(7, false, this.iPartic)
}

Huya.OnTVData = function () {
    this.lOnTVId = 0
    this.iBarrageNum = 0
    this.lStartTS = 0
    this.iLeftTime = 0
    this.iUserNum = 0
    this.lEndTS = 0
    this.vItemBarrageCount = new Taf.Vector(new Huya.OnTVItemBarrageCount)
}

Huya.OnTVData.prototype._clone = function () {
    return new Huya.OnTVData
}

Huya.OnTVData.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVData.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVData.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lOnTVId)
    t.writeInt32(1, this.iBarrageNum)
    t.writeInt64(2, this.lStartTS)
    t.writeInt32(3, this.iLeftTime)
    t.writeInt32(4, this.iUserNum)
    t.writeInt32(5, this.lEndTS)
    t.writeVector(6, this.vItemBarrageCount)
}

Huya.OnTVData.prototype.readFrom = function (t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId)
    this.iBarrageNum = t.readInt32(1, false, this.iBarrageNum)
    this.lStartTS = t.readInt64(2, false, this.lStartTS)
    this.iLeftTime = t.readInt32(3, false, this.iLeftTime)
    this.iUserNum = t.readInt32(4, false, this.iUserNum)
    this.lEndTS = t.readInt32(5, false, this.lEndTS)
    this.vItemBarrageCount = t.readVector(6, false, this.vItemBarrageCount)
}

Huya.OnTVAwardItem = function () {
    this.sAwardName = ""
    this.iAwardNum = 0
}

Huya.OnTVAwardItem.prototype._clone = function () {
    return new Huya.OnTVAwardItem
}

Huya.OnTVAwardItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVAwardItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVAwardItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sAwardName)
    t.writeInt32(1, this.iAwardNum)
}

Huya.OnTVAwardItem.prototype.readFrom = function (t) {
    this.sAwardName = t.readString(0, false, this.sAwardName)
    this.iAwardNum = t.readInt32(1, false, this.iAwardNum)
}

Huya.TVPrice = function () {
    this.iTVType = 0
    this.iPrice = 0
    this.iFreeFansLevel = 0
}

Huya.TVPrice.prototype._clone = function () {
    return new Huya.TVPrice
}

Huya.TVPrice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TVPrice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TVPrice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iTVType)
    t.writeInt32(1, this.iPrice)
    t.writeInt32(2, this.iFreeFansLevel)
}

Huya.TVPrice.prototype.readFrom = function (t) {
    this.iTVType = t.readInt32(0, false, this.iTVType)
    this.iPrice = t.readInt32(1, false, this.iPrice)
    this.iFreeFansLevel = t.readInt32(2, false, this.iFreeFansLevel)
}

Huya.OnTVBarrageNotice = function () {
    this.lUid = 0
    this.tBarrage = new Huya.OnTVBarrage
    this.sNickName = ""
    this.iNobleLevel = 0
    this.lBadgeId = 0
    this.sBadgeName = ""
    this.iBadgeLevel = 0
    this.lNobleValidDate = 0
    this.iAwardMode = 0
    this.lPid = 0
    this.sDiyIcon = ""
    this.iBadgeType = 0
}

Huya.OnTVBarrageNotice.prototype._clone = function () {
    return new Huya.OnTVBarrageNotice
}

Huya.OnTVBarrageNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVBarrageNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVBarrageNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeStruct(1, this.tBarrage)
    t.writeString(2, this.sNickName)
    t.writeInt32(3, this.iNobleLevel)
    t.writeInt64(4, this.lBadgeId)
    t.writeString(5, this.sBadgeName)
    t.writeInt32(6, this.iBadgeLevel)
    t.writeInt32(7, this.lNobleValidDate)
    t.writeInt32(8, this.iAwardMode)
    t.writeInt64(9, this.lPid)
    t.writeString(10, this.sDiyIcon)
    t.writeInt32(11, this.iBadgeType)
}

Huya.OnTVBarrageNotice.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.tBarrage = t.readStruct(1, false, this.tBarrage)
    this.sNickName = t.readString(2, false, this.sNickName)
    this.iNobleLevel = t.readInt32(3, false, this.iNobleLevel)
    this.lBadgeId = t.readInt64(4, false, this.lBadgeId)
    this.sBadgeName = t.readString(5, false, this.sBadgeName)
    this.iBadgeLevel = t.readInt32(6, false, this.iBadgeLevel)
    this.lNobleValidDate = t.readInt32(7, false, this.lNobleValidDate)
    this.iAwardMode = t.readInt32(8, false, this.iAwardMode)
    this.lPid = t.readInt64(9, false, this.lPid)
    this.sDiyIcon = t.readString(10, false, this.sDiyIcon)
    this.iBadgeType = t.readInt32(11, false, this.iBadgeType)
}

Huya.BadgeItemReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
}

Huya.BadgeItemReq.prototype._clone = function () {
    return new Huya.BadgeItemReq
}

Huya.BadgeItemReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeItemReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeItemReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
}

Huya.BadgeItemReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
}

Huya.BadgeItemRsp = function () {
    this.iItemType = 0
    this.iItemCount = 0
    this.lPid = 0
    this.sBadgeName = ""
    this.iBadgeType = 0
    this.lBadgeId = 0
    this.tFaithItem = new Huya.FaithBadgeItem
}

Huya.BadgeItemRsp.prototype._clone = function () {
    return new Huya.BadgeItemRsp
}

Huya.BadgeItemRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeItemRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeItemRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType)
    t.writeInt32(1, this.iItemCount)
    t.writeInt64(2, this.lPid)
    t.writeString(3, this.sBadgeName)
    t.writeInt32(4, this.iBadgeType)
    t.writeInt64(5, this.lBadgeId)
    t.writeStruct(6, this.tFaithItem)
}

Huya.BadgeItemRsp.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType)
    this.iItemCount = t.readInt32(1, false, this.iItemCount)
    this.lPid = t.readInt64(2, false, this.lPid)
    this.sBadgeName = t.readString(3, false, this.sBadgeName)
    this.iBadgeType = t.readInt32(4, false, this.iBadgeType)
    this.lBadgeId = t.readInt64(5, false, this.lBadgeId)
    this.tFaithItem = t.readStruct(6, false, this.tFaithItem)
}

Huya.OnTVItemPackage = function () {
    this.iItemId = 0
    this.iItemNum = 0
    this.iTVType = 0
    this.iTVColor = 0
    this.sContent = ""
}

Huya.OnTVItemPackage.prototype._clone = function () {
    return new Huya.OnTVItemPackage
}

Huya.OnTVItemPackage.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVItemPackage.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVItemPackage.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemId)
    t.writeInt32(1, this.iItemNum)
    t.writeInt32(2, this.iTVType)
    t.writeInt32(3, this.iTVColor)
    t.writeString(4, this.sContent)
}

Huya.OnTVItemPackage.prototype.readFrom = function (t) {
    this.iItemId = t.readInt32(0, false, this.iItemId)
    this.iItemNum = t.readInt32(1, false, this.iItemNum)
    this.iTVType = t.readInt32(2, false, this.iTVType)
    this.iTVColor = t.readInt32(3, false, this.iTVColor)
    this.sContent = t.readString(4, false, this.sContent)
}

Huya.OnTVItemBarrageCount = function () {
    this.iTVType = 0
    this.iTVColor = 0
    this.iNum = 0
    this.sContent = ""
    this.iItemId = 0
    this.iItemNum = 0
}

Huya.OnTVItemBarrageCount.prototype._clone = function () {
    return new Huya.OnTVItemBarrageCount
}

Huya.OnTVItemBarrageCount.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.OnTVItemBarrageCount.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.OnTVItemBarrageCount.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iTVType)
    t.writeInt32(1, this.iTVColor)
    t.writeInt32(2, this.iNum)
    t.writeString(3, this.sContent)
    t.writeInt32(4, this.iItemId)
    t.writeInt32(5, this.iItemNum)
}

Huya.OnTVItemBarrageCount.prototype.readFrom = function (t) {
    this.iTVType = t.readInt32(0, false, this.iTVType)
    this.iTVColor = t.readInt32(1, false, this.iTVColor)
    this.iNum = t.readInt32(2, false, this.iNum)
    this.sContent = t.readString(3, false, this.sContent)
    this.iItemId = t.readInt32(4, false, this.iItemId)
    this.iItemNum = t.readInt32(5, false, this.iItemNum)
}

Huya.GetGameAdReq = function () {
    this.tUserId = new Huya.UserId
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
}

Huya.GetGameAdReq.prototype._clone = function () {
    return new Huya.GetGameAdReq
}

Huya.GetGameAdReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetGameAdReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetGameAdReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lTid)
    t.writeInt64(2, this.lSid)
    t.writeInt64(3, this.lPid)
}

Huya.GetGameAdReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lTid = t.readInt64(1, false, this.lTid)
    this.lSid = t.readInt64(2, false, this.lSid)
    this.lPid = t.readInt64(3, false, this.lPid)
}

Huya.GetSequenceReq = function () {
    this.tId = new Huya.UserId
    this.iSeqNum = 0
    this.iFromType = 0
    this.iBusinessType = 0
    this.sSgin = ""
}

Huya.GetSequenceReq.prototype._clone = function () {
    return new Huya.GetSequenceReq
}

Huya.GetSequenceReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetSequenceReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetSequenceReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt32(1, this.iSeqNum)
    t.writeInt32(2, this.iFromType)
    t.writeInt32(3, this.iBusinessType)
    t.writeString(4, this.sSgin)
}

Huya.GetSequenceReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.iSeqNum = t.readInt32(1, false, this.iSeqNum)
    this.iFromType = t.readInt32(2, false, this.iFromType)
    this.iBusinessType = t.readInt32(3, false, this.iBusinessType)
    this.sSgin = t.readString(4, false, this.sSgin)
}

Huya.GetSequenceRsp = function () {
    this.iRetCode = 0
    this.sSeq = ""
}

Huya.GetSequenceRsp.prototype._clone = function () {
    return new Huya.GetSequenceRsp
}

Huya.GetSequenceRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetSequenceRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetSequenceRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRetCode)
    t.writeString(1, this.sSeq)
}

Huya.GetSequenceRsp.prototype.readFrom = function (t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode)
    this.sSeq = t.readString(1, false, this.sSeq)
}

Huya.BadgeConfigInfoReq = function () {
    this.tUserId = new Huya.UserId
}

Huya.BadgeConfigInfoReq.prototype._clone = function () {
    return new Huya.BadgeConfigInfoReq
}

Huya.BadgeConfigInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeConfigInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeConfigInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
}

Huya.BadgeConfigInfoReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
}

Huya.BadgeConfigInfoRsp = function () {
    this.mPersonalBadgeLogo = new Taf.Map(new Taf.INT64, new Taf.STRING)
    this.mFaithBadgeLogo = new Taf.Map(new Taf.INT64, new Taf.STRING)
}

Huya.BadgeConfigInfoRsp.prototype._clone = function () {
    return new Huya.BadgeConfigInfoRsp
}

Huya.BadgeConfigInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeConfigInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeConfigInfoRsp.prototype.writeTo = function (t) {
    t.writeMap(1, this.mPersonalBadgeLogo)
    t.writeMap(2, this.mFaithBadgeLogo)
}

Huya.BadgeConfigInfoRsp.prototype.readFrom = function (t) {
    this.mPersonalBadgeLogo = t.readMap(1, false, this.mPersonalBadgeLogo)
    this.mFaithBadgeLogo = t.readMap(2, false, this.mFaithBadgeLogo)
}

Huya.ReportMessageReq = function () {
    this.tId = new Huya.UserId
    this.tScene = new Huya.RMessageScene
    this.tMessage = new Huya.RMessageBase
}

Huya.ReportMessageReq.prototype._clone = function () {
    return new Huya.ReportMessageReq
}

Huya.ReportMessageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ReportMessageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ReportMessageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tScene)
    t.writeStruct(2, this.tMessage)
}

Huya.ReportMessageReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tScene = t.readStruct(1, false, this.tScene)
    this.tMessage = t.readStruct(2, false, this.tMessage)
}

Huya.ReportMessageRsp = function () {
    this.iResult = 0
}

Huya.ReportMessageRsp.prototype._clone = function () {
    return new Huya.ReportMessageRsp
}

Huya.ReportMessageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ReportMessageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ReportMessageRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iResult)
}

Huya.ReportMessageRsp.prototype.readFrom = function (t) {
    this.iResult = t.readInt32(0, false, this.iResult)
}

Huya.DecorationInfoRsp = function () {
    this.vDecorationPrefix = new Taf.Vector(new Huya.DecorationInfo)
    this.vDecorationSuffix = new Taf.Vector(new Huya.DecorationInfo)
    this.tFormat = new Huya.ContentFormat
    this.tBulletFormat = new Huya.BulletFormat
    this.vForwardChannels = new Taf.Vector(new Huya.ChannelPair)
    this.iModifyMask = 0
    this.vBulletPrefix = new Taf.Vector(new Huya.DecorationInfo)
    this.tUserInfo = new Huya.SenderInfo
    this.vBulletSuffix = new Taf.Vector(new Huya.DecorationInfo)
}

Huya.DecorationInfoRsp.prototype._clone = function () {
    return new Huya.DecorationInfoRsp
}

Huya.DecorationInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.DecorationInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.DecorationInfoRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vDecorationPrefix)
    t.writeVector(1, this.vDecorationSuffix)
    t.writeStruct(2, this.tFormat)
    t.writeStruct(3, this.tBulletFormat)
    t.writeVector(4, this.vForwardChannels)
    t.writeInt32(5, this.iModifyMask)
    t.writeVector(6, this.vBulletPrefix)
    t.writeStruct(7, this.tUserInfo)
    t.writeVector(8, this.vBulletSuffix)
}

Huya.DecorationInfoRsp.prototype.readFrom = function (t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix)
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix)
    this.tFormat = t.readStruct(2, false, this.tFormat)
    this.tBulletFormat = t.readStruct(3, false, this.tBulletFormat)
    this.vForwardChannels = t.readVector(4, false, this.vForwardChannels)
    this.iModifyMask = t.readInt32(5, false, this.iModifyMask)
    this.vBulletPrefix = t.readVector(6, false, this.vBulletPrefix)
    this.tUserInfo = t.readStruct(7, false, this.tUserInfo)
    this.vBulletSuffix = t.readVector(8, false, this.vBulletSuffix)
}

Huya.ChannelPair = function () {
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
}

Huya.ChannelPair.prototype._clone = function () {
    return new Huya.ChannelPair
}

Huya.ChannelPair.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ChannelPair.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ChannelPair.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTid)
    t.writeInt64(1, this.lSid)
    t.writeInt64(2, this.lPid)
}

Huya.ChannelPair.prototype.readFrom = function (t) {
    this.lTid = t.readInt64(0, false, this.lTid)
    this.lSid = t.readInt64(1, false, this.lSid)
    this.lPid = t.readInt64(2, false, this.lPid)
}

Huya.UserIdentityInfo = function () {
    this.vDecorationPrefix = new Taf.Vector(new Huya.DecorationInfo)
    this.vDecorationSuffix = new Taf.Vector(new Huya.DecorationInfo)
}

Huya.UserIdentityInfo.prototype._clone = function () {
    return new Huya.UserIdentityInfo
}

Huya.UserIdentityInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserIdentityInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserIdentityInfo.prototype.writeTo = function (t) {
    t.writeVector(0, this.vDecorationPrefix)
    t.writeVector(1, this.vDecorationSuffix)
}

Huya.UserIdentityInfo.prototype.readFrom = function (t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix)
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix)
}

Huya.WSRedirect = function () {
    this.vRemoveIps = new Taf.Vector(new Taf.STRING)
    this.sRedirectIp = ""
}

Huya.WSRedirect.prototype._clone = function () {
    return new Huya.WSRedirect
}

Huya.WSRedirect.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSRedirect.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSRedirect.prototype.writeTo = function (t) {
    t.writeVector(0, this.vRemoveIps)
    t.writeString(1, this.sRedirectIp)
}

Huya.WSRedirect.prototype.readFrom = function (t) {
    this.vRemoveIps = t.readVector(0, false, this.vRemoveIps)
    this.sRedirectIp = t.readString(1, false, this.sRedirectIp)
}

Huya.WSPushMessage_V2 = function () {
    this.sGroupId = ""
    this.vMsgItem = new Taf.Vector(new Huya.WSMsgItem)
}

Huya.WSPushMessage_V2.prototype._clone = function () {
    return new Huya.WSPushMessage_V2
}

Huya.WSPushMessage_V2.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSPushMessage_V2.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSPushMessage_V2.prototype.writeTo = function (t) {
    t.writeString(0, this.sGroupId)
    t.writeVector(1, this.vMsgItem)
}

Huya.WSPushMessage_V2.prototype.readFrom = function (t) {
    this.sGroupId = t.readString(0, false, this.sGroupId)
    this.vMsgItem = t.readVector(1, false, this.vMsgItem)
}

Huya.WSMsgItem = function () {
    this.iUri = 0
    this.sMsg = new Taf.BinBuffer
}

Huya.WSMsgItem.prototype._clone = function () {
    return new Huya.WSMsgItem
}

Huya.WSMsgItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSMsgItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSMsgItem.prototype.writeTo = function (t) {
    t.writeInt64(0, this.iUri)
    t.writeBytes(1, this.sMsg)
}

Huya.WSMsgItem.prototype.readFrom = function (t) {
    this.iUri = t.readInt64(0, false, this.iUri)
    this.sMsg = t.readBytes(1, false, this.sMsg)
}

Huya.WSRegisterGroupReq = function () {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
    this.sToken = ""
}

Huya.WSRegisterGroupReq.prototype._clone = function () {
    return new Huya.WSRegisterGroupReq
}

Huya.WSRegisterGroupReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSRegisterGroupReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSRegisterGroupReq.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGroupId)
    t.writeString(1, this.sToken)
}

Huya.WSRegisterGroupReq.prototype.readFrom = function (t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
    this.sToken = t.readString(1, false, this.sToken)
}

Huya.WSRegisterGroupRsp = function () {
    this.iResCode = 0
}

Huya.WSRegisterGroupRsp.prototype._clone = function () {
    return new Huya.WSRegisterGroupRsp
}

Huya.WSRegisterGroupRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSRegisterGroupRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSRegisterGroupRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iResCode)
}

Huya.WSRegisterGroupRsp.prototype.readFrom = function (t) {
    this.iResCode = t.readInt32(0, false, this.iResCode)
}

Huya.WSUnRegisterGroupReq = function () {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}

Huya.WSUnRegisterGroupReq.prototype._clone = function () {
    return new Huya.WSUnRegisterGroupReq
}

Huya.WSUnRegisterGroupReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSUnRegisterGroupReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSUnRegisterGroupReq.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGroupId)
}

Huya.WSUnRegisterGroupReq.prototype.readFrom = function (t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}

Huya.WSUnRegisterGroupRsp = function () {
    this.iResCode = 0
}

Huya.WSUnRegisterGroupRsp.prototype._clone = function () {
    return new Huya.WSUnRegisterGroupRsp
}

Huya.WSUnRegisterGroupRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.WSUnRegisterGroupRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.WSUnRegisterGroupRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iResCode)
}

Huya.WSUnRegisterGroupRsp.prototype.readFrom = function (t) {
    this.iResCode = t.readInt32(0, false, this.iResCode)
}

Huya.GetTreasureBoxInfoReq = function () {
    this.tId = new Huya.UserId
    this.sChannel = ""
    this.sIp = ""
    this.lPid = 0
}

Huya.GetTreasureBoxInfoReq.prototype._clone = function () {
    return new Huya.GetTreasureBoxInfoReq
}

Huya.GetTreasureBoxInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetTreasureBoxInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetTreasureBoxInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeString(1, this.sChannel)
    t.writeString(2, this.sIp)
    t.writeInt64(3, this.lPid)
}

Huya.GetTreasureBoxInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.sChannel = t.readString(1, false, this.sChannel)
    this.sIp = t.readString(2, false, this.sIp)
    this.lPid = t.readInt64(3, false, this.lPid)
}

Huya.GetTreasureBoxInfoRsp = function () {
    this.lUid = 0
    this.vBoxTaskInfo = new Taf.Vector(new Huya.BoxTaskInfo)
    this.iBoxLevel = 0
    this.vADBoxInfo = new Taf.Vector(new Huya.ADBoxTaskInfo)
    this.sBackGroundURL = ""
    this.iTipsCount = 0
    this.sTipsPic = ""
    this.sBBGPic = ""
}

Huya.GetTreasureBoxInfoRsp.prototype._clone = function () {
    return new Huya.GetTreasureBoxInfoRsp
}

Huya.GetTreasureBoxInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetTreasureBoxInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetTreasureBoxInfoRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeVector(1, this.vBoxTaskInfo)
    t.writeInt32(2, this.iBoxLevel)
    t.writeVector(3, this.vADBoxInfo)
    t.writeString(4, this.sBackGroundURL)
    t.writeInt32(5, this.iTipsCount)
    t.writeString(6, this.sTipsPic)
    t.writeString(7, this.sBBGPic)
}

Huya.GetTreasureBoxInfoRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.vBoxTaskInfo = t.readVector(1, false, this.vBoxTaskInfo)
    this.iBoxLevel = t.readInt32(2, false, this.iBoxLevel)
    this.vADBoxInfo = t.readVector(3, false, this.vADBoxInfo)
    this.sBackGroundURL = t.readString(4, false, this.sBackGroundURL)
    this.iTipsCount = t.readInt32(5, false, this.iTipsCount)
    this.sTipsPic = t.readString(6, false, this.sTipsPic)
    this.sBBGPic = t.readString(7, false, this.sBBGPic)
}

Huya.ADBoxTaskInfo = function () {
    this.iTaskId = 0
    this.iStat = 0
    this.iADType = 0
    this.iItemCount = 0
    this.iRewardLevel = 0
    this.sADPic = ""
    this.sGetPic = ""
    this.sGetJmp = ""
    this.sUnGetPic = ""
    this.sUnGetJmp = ""
    this.iGiftType = 0
    this.sTitle = ""
}

Huya.ADBoxTaskInfo.prototype._clone = function () {
    return new Huya.ADBoxTaskInfo
}

Huya.ADBoxTaskInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ADBoxTaskInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ADBoxTaskInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iTaskId)
    t.writeInt32(1, this.iStat)
    t.writeInt32(2, this.iADType)
    t.writeInt32(3, this.iItemCount)
    t.writeInt32(4, this.iRewardLevel)
    t.writeString(5, this.sADPic)
    t.writeString(6, this.sGetPic)
    t.writeString(7, this.sGetJmp)
    t.writeString(8, this.sUnGetPic)
    t.writeString(9, this.sUnGetJmp)
    t.writeInt32(10, this.iGiftType)
    t.writeString(11, this.sTitle)
}

Huya.ADBoxTaskInfo.prototype.readFrom = function (t) {
    this.iTaskId = t.readInt32(0, false, this.iTaskId)
    this.iStat = t.readInt32(1, false, this.iStat)
    this.iADType = t.readInt32(2, false, this.iADType)
    this.iItemCount = t.readInt32(3, false, this.iItemCount)
    this.iRewardLevel = t.readInt32(4, false, this.iRewardLevel)
    this.sADPic = t.readString(5, false, this.sADPic)
    this.sGetPic = t.readString(6, false, this.sGetPic)
    this.sGetJmp = t.readString(7, false, this.sGetJmp)
    this.sUnGetPic = t.readString(8, false, this.sUnGetPic)
    this.sUnGetJmp = t.readString(9, false, this.sUnGetJmp)
    this.iGiftType = t.readInt32(10, false, this.iGiftType)
    this.sTitle = t.readString(11, false, this.sTitle)
}

Huya.GetPresenterLiveScheduleInfoReq = function () {
    this.tId = new Huya.UserId
    this.lPresenterId = 0
}

Huya.GetPresenterLiveScheduleInfoReq.prototype._clone = function () {
    return new Huya.GetPresenterLiveScheduleInfoReq
}

Huya.GetPresenterLiveScheduleInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPresenterLiveScheduleInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPresenterLiveScheduleInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPresenterId)
}

Huya.GetPresenterLiveScheduleInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPresenterId = t.readInt64(1, false, this.lPresenterId)
}

Huya.GetPresenterLiveScheduleInfoRsp = function () {
    this.sMessage = ""
    this.sSchedule = ""
    this.sDescription = ""
}

Huya.GetPresenterLiveScheduleInfoRsp.prototype._clone = function () {
    return new Huya.GetPresenterLiveScheduleInfoRsp
}

Huya.GetPresenterLiveScheduleInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPresenterLiveScheduleInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPresenterLiveScheduleInfoRsp.prototype.writeTo = function (t) {
    t.writeString(0, this.sMessage)
    t.writeString(1, this.sSchedule)
    t.writeString(2, this.sDescription)
}

Huya.GetPresenterLiveScheduleInfoRsp.prototype.readFrom = function (t) {
    this.sMessage = t.readString(0, false, this.sMessage)
    this.sSchedule = t.readString(1, false, this.sSchedule)
    this.sDescription = t.readString(2, false, this.sDescription)
}

Huya.PresenterLevelProgressReq = function () {
    this.tId = new Huya.UserId
    this.lPid = 0
}

Huya.PresenterLevelProgressReq.prototype._clone = function () {
    return new Huya.PresenterLevelProgressReq
}

Huya.PresenterLevelProgressReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterLevelProgressReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterLevelProgressReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPid)
}

Huya.PresenterLevelProgressReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPid = t.readInt64(1, false, this.lPid)
}

Huya.PresenterLevelProgressRsp = function () {
    this.tLevelBase = new Huya.PresenterLevelBase
    this.lCurrLevelExp = 0
    this.lNextLevelExp = 0
    this.lNext2LevelExp = 0
    this.tGrowInfo = new Huya.PresenterGrowInfo
    this.iLightUp = 0
    this.iLevelMax = 0
}

Huya.PresenterLevelProgressRsp.prototype._clone = function () {
    return new Huya.PresenterLevelProgressRsp
}

Huya.PresenterLevelProgressRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterLevelProgressRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterLevelProgressRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tLevelBase)
    t.writeInt64(1, this.lCurrLevelExp)
    t.writeInt64(2, this.lNextLevelExp)
    t.writeInt64(3, this.lNext2LevelExp)
    t.writeStruct(4, this.tGrowInfo)
    t.writeInt32(5, this.iLightUp)
    t.writeInt32(6, this.iLevelMax)
}

Huya.PresenterLevelProgressRsp.prototype.readFrom = function (t) {
    this.tLevelBase = t.readStruct(0, false, this.tLevelBase)
    this.lCurrLevelExp = t.readInt64(1, false, this.lCurrLevelExp)
    this.lNextLevelExp = t.readInt64(2, false, this.lNextLevelExp)
    this.lNext2LevelExp = t.readInt64(3, false, this.lNext2LevelExp)
    this.tGrowInfo = t.readStruct(4, false, this.tGrowInfo)
    this.iLightUp = t.readInt32(5, false, this.iLightUp)
    this.iLevelMax = t.readInt32(6, false, this.iLevelMax)
}

Huya.PresenterLevelNotice = function () {
    this.tLevelBase = new Huya.PresenterLevelBase
    this.lCurrLevelExp = 0
    this.lNextLevelExp = 0
    this.lNext2LevelExp = 0
    this.tGrowInfo = new Huya.PresenterGrowInfo
    this.iLightUp = 0
    this.iLevelMax = 0
}

Huya.PresenterLevelNotice.prototype._clone = function () {
    return new Huya.PresenterLevelNotice
}

Huya.PresenterLevelNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterLevelNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterLevelNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tLevelBase)
    t.writeInt64(1, this.lCurrLevelExp)
    t.writeInt64(2, this.lNextLevelExp)
    t.writeInt64(3, this.lNext2LevelExp)
    t.writeStruct(4, this.tGrowInfo)
    t.writeInt32(5, this.iLightUp)
    t.writeInt32(6, this.iLevelMax)
}

Huya.PresenterLevelNotice.prototype.readFrom = function (t) {
    this.tLevelBase = t.readStruct(0, false, this.tLevelBase)
    this.lCurrLevelExp = t.readInt64(1, false, this.lCurrLevelExp)
    this.lNextLevelExp = t.readInt64(2, false, this.lNextLevelExp)
    this.lNext2LevelExp = t.readInt64(3, false, this.lNext2LevelExp)
    this.tGrowInfo = t.readStruct(4, false, this.tGrowInfo)
    this.iLightUp = t.readInt32(5, false, this.iLightUp)
    this.iLevelMax = t.readInt32(6, false, this.iLevelMax)
}

Huya.PresenterLevelBase = function () {
    this.lPid = 0
    this.iLevel = 0
    this.lExp = 0
}

Huya.PresenterLevelBase.prototype._clone = function () {
    return new Huya.PresenterLevelBase
}

Huya.PresenterLevelBase.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterLevelBase.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterLevelBase.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeInt32(1, this.iLevel)
    t.writeInt64(2, this.lExp)
}

Huya.PresenterLevelBase.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.iLevel = t.readInt32(1, false, this.iLevel)
    this.lExp = t.readInt64(2, false, this.lExp)
}

Huya.PresenterGrowInfo = function () {
    this.lWeeklyExp = 0
    this.lWeeklyIncExp = 0
    this.iRank = 0
}

Huya.PresenterGrowInfo.prototype._clone = function () {
    return new Huya.PresenterGrowInfo
}

Huya.PresenterGrowInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterGrowInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterGrowInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lWeeklyExp)
    t.writeInt64(1, this.lWeeklyIncExp)
    t.writeInt32(2, this.iRank)
}

Huya.PresenterGrowInfo.prototype.readFrom = function (t) {
    this.lWeeklyExp = t.readInt64(0, false, this.lWeeklyExp)
    this.lWeeklyIncExp = t.readInt64(1, false, this.lWeeklyIncExp)
    this.iRank = t.readInt32(2, false, this.iRank)
}

Huya.PresenterLevelBaseReq = function () {
    this.tId = new Huya.UserId
    this.lPid = 0
}

Huya.PresenterLevelBaseReq.prototype._clone = function () {
    return new Huya.PresenterLevelBaseReq
}

Huya.PresenterLevelBaseReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterLevelBaseReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterLevelBaseReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPid)
}

Huya.PresenterLevelBaseReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPid = t.readInt64(1, false, this.lPid)
}

Huya.PresenterLevelBaseRsp = function () {
    this.tLevelBase = new Huya.PresenterLevelBase
    this.iLightUp = 0
}

Huya.PresenterLevelBaseRsp.prototype._clone = function () {
    return new Huya.PresenterLevelBaseRsp
}

Huya.PresenterLevelBaseRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PresenterLevelBaseRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PresenterLevelBaseRsp.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tLevelBase)
    t.writeInt32(1, this.iLightUp)
}

Huya.PresenterLevelBaseRsp.prototype.readFrom = function (t) {
    this.tLevelBase = t.readStruct(0, false, this.tLevelBase)
    this.iLightUp = t.readInt32(1, false, this.iLightUp)
}

Huya.ItemLotterySubNotice = function () {
    this.lSenderUid = 0
    this.lPid = 0
    this.sSenderNick = ""
    this.sPidNick = ""
    this.lTid = 0
    this.lSid = 0
    this.iItemType = 0
    this.iItemCount = 0
    this.iLotteryItemType = 0
    this.iLotteryItemCount = 0
    this.sOrderId = ""
    this.sExpand = ""
    this.sSenderIcon = ""
    this.sPresenterIcon = ""
}

Huya.ItemLotterySubNotice.prototype._clone = function () {
    return new Huya.ItemLotterySubNotice
}

Huya.ItemLotterySubNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ItemLotterySubNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ItemLotterySubNotice.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lSenderUid)
    t.writeInt64(1, this.lPid)
    t.writeString(2, this.sSenderNick)
    t.writeString(3, this.sPidNick)
    t.writeInt64(4, this.lTid)
    t.writeInt64(5, this.lSid)
    t.writeInt32(6, this.iItemType)
    t.writeInt32(7, this.iItemCount)
    t.writeInt32(8, this.iLotteryItemType)
    t.writeInt32(9, this.iLotteryItemCount)
    t.writeString(10, this.sOrderId)
    t.writeString(11, this.sExpand)
    t.writeString(12, this.sSenderIcon)
    t.writeString(13, this.sPresenterIcon)
}

Huya.ItemLotterySubNotice.prototype.readFrom = function (t) {
    this.lSenderUid = t.readInt64(0, false, this.lSenderUid)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.sSenderNick = t.readString(2, false, this.sSenderNick)
    this.sPidNick = t.readString(3, false, this.sPidNick)
    this.lTid = t.readInt64(4, false, this.lTid)
    this.lSid = t.readInt64(5, false, this.lSid)
    this.iItemType = t.readInt32(6, false, this.iItemType)
    this.iItemCount = t.readInt32(7, false, this.iItemCount)
    this.iLotteryItemType = t.readInt32(8, false, this.iLotteryItemType)
    this.iLotteryItemCount = t.readInt32(9, false, this.iLotteryItemCount)
    this.sOrderId = t.readString(10, false, this.sOrderId)
    this.sExpand = t.readString(11, false, this.sExpand)
    this.sSenderIcon = t.readString(12, false, this.sSenderIcon)
    this.sPresenterIcon = t.readString(13, false, this.sPresenterIcon)
}

Huya.ItemLotteryGameNotice = function () {
    this.sSenderNick = ""
    this.sPidNick = ""
    this.lTid = 0
    this.lSid = 0
    this.lPid = 0
    this.iItemType = 0
    this.iItemCount = 0
    this.iLotteryItemType = 0
    this.iLotteryItemCount = 0
}

Huya.ItemLotteryGameNotice.prototype._clone = function () {
    return new Huya.ItemLotteryGameNotice
}

Huya.ItemLotteryGameNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ItemLotteryGameNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ItemLotteryGameNotice.prototype.writeTo = function (t) {
    t.writeString(0, this.sSenderNick)
    t.writeString(1, this.sPidNick)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
    t.writeInt64(4, this.lPid)
    t.writeInt32(5, this.iItemType)
    t.writeInt64(6, this.iItemCount)
    t.writeInt32(7, this.iLotteryItemType)
    t.writeInt32(8, this.iLotteryItemCount)
}

Huya.ItemLotteryGameNotice.prototype.readFrom = function (t) {
    this.sSenderNick = t.readString(0, false, this.sSenderNick)
    this.sPidNick = t.readString(1, false, this.sPidNick)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.lPid = t.readInt64(4, false, this.lPid)
    this.iItemType = t.readInt32(5, false, this.iItemType)
    this.iItemCount = t.readInt64(6, false, this.iItemCount)
    this.iLotteryItemType = t.readInt32(7, false, this.iLotteryItemType)
    this.iLotteryItemCount = t.readInt32(8, false, this.iLotteryItemCount)
}

Huya.GetRctTimedMessageReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
}

Huya.GetRctTimedMessageReq.prototype._clone = function () {
    return new Huya.GetRctTimedMessageReq
}

Huya.GetRctTimedMessageReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRctTimedMessageReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRctTimedMessageReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
}

Huya.GetRctTimedMessageReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
}

Huya.GetRctTimedMessageRsp = function () {
    this.vTimedMesasgeNotice = new Taf.Vector(new Huya.TimedMessageNotice)
}

Huya.GetRctTimedMessageRsp.prototype._clone = function () {
    return new Huya.GetRctTimedMessageRsp
}

Huya.GetRctTimedMessageRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRctTimedMessageRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRctTimedMessageRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vTimedMesasgeNotice)
}

Huya.GetRctTimedMessageRsp.prototype.readFrom = function (t) {
    this.vTimedMesasgeNotice = t.readVector(0, false, this.vTimedMesasgeNotice)
}

Huya.TimedMessageNotice = function () {
    this.tNotice = new Huya.MessageNotice
    this.lCreatedTime = 0
}

Huya.TimedMessageNotice.prototype._clone = function () {
    return new Huya.TimedMessageNotice
}

Huya.TimedMessageNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.TimedMessageNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.TimedMessageNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tNotice)
    t.writeInt64(1, this.lCreatedTime)
}

Huya.TimedMessageNotice.prototype.readFrom = function (t) {
    this.tNotice = t.readStruct(0, false, this.tNotice)
    this.lCreatedTime = t.readInt64(1, false, this.lCreatedTime)
}


Huya.GetRMessageListReq = function () {
    this.tId = new Huya.UserId
    this.tScene = new Huya.RMessageScene
}

Huya.GetRMessageListReq.prototype._clone = function () {
    return new Huya.GetRMessageListReq
}

Huya.GetRMessageListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRMessageListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRMessageListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tScene)
}

Huya.GetRMessageListReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tScene = t.readStruct(1, false, this.tScene)
}

Huya.RMessageScene = function () {
    this.lLiveId = 0
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
}

Huya.RMessageScene.prototype._clone = function () {
    return new Huya.RMessageScene
}

Huya.RMessageScene.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RMessageScene.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RMessageScene.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLiveId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
}

Huya.RMessageScene.prototype.readFrom = function (t) {
    this.lLiveId = t.readInt64(0, false, this.lLiveId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
}

Huya.GetRMessageListRsp = function () {
    this.vReportedMessages = new Taf.Vector(new Huya.RMessage)
}

Huya.GetRMessageListRsp.prototype._clone = function () {
    return new Huya.GetRMessageListRsp
}

Huya.GetRMessageListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRMessageListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRMessageListRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vReportedMessages)
}

Huya.GetRMessageListRsp.prototype.readFrom = function (t) {
    this.vReportedMessages = t.readVector(0, false, this.vReportedMessages)
}

Huya.RMessage = function () {
    this.tBase = new Huya.RMessageBase
    this.tStat = new Huya.RMessageStatistics
}

Huya.RMessage.prototype._clone = function () {
    return new Huya.RMessage
}

Huya.RMessage.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RMessage.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RMessage.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tBase)
    t.writeStruct(1, this.tStat)
}

Huya.RMessage.prototype.readFrom = function (t) {
    this.tBase = t.readStruct(0, false, this.tBase)
    this.tStat = t.readStruct(1, false, this.tStat)
}

Huya.RMessageBase = function () {
    this.lSenderUid = 0
    this.sSenderNick = ""
    this.sContent = ""
    this.lPid = 0
}

Huya.RMessageBase.prototype._clone = function () {
    return new Huya.RMessageBase
}

Huya.RMessageBase.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RMessageBase.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RMessageBase.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lSenderUid)
    t.writeString(1, this.sSenderNick)
    t.writeString(2, this.sContent)
    t.writeInt64(3, this.lPid)
}

Huya.RMessageBase.prototype.readFrom = function (t) {
    this.lSenderUid = t.readInt64(0, false, this.lSenderUid)
    this.sSenderNick = t.readString(1, false, this.sSenderNick)
    this.sContent = t.readString(2, false, this.sContent)
    this.lPid = t.readInt64(3, false, this.lPid)
}

Huya.RMessageStatistics = function () {
    this.iRCount = 0
}

Huya.RMessageStatistics.prototype._clone = function () {
    return new Huya.RMessageStatistics
}

Huya.RMessageStatistics.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RMessageStatistics.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RMessageStatistics.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRCount)
}

Huya.RMessageStatistics.prototype.readFrom = function (t) {
    this.iRCount = t.readInt32(0, false, this.iRCount)
}

Huya.RMessageNotify = function () {
    this.lLiveId = 0
}

Huya.RMessageNotify.prototype._clone = function () {
    return new Huya.RMessageNotify
}

Huya.RMessageNotify.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RMessageNotify.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RMessageNotify.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lLiveId)
}

Huya.RMessageNotify.prototype.readFrom = function (t) {
    this.lLiveId = t.readInt64(0, false, this.lLiveId)
}

Huya.RMessageSceneWb = function () {
    this.sLiveId = ""
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
}

Huya.RMessageSceneWb.prototype._clone = function () {
    return new Huya.RMessageSceneWb
}

Huya.RMessageSceneWb.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.RMessageSceneWb.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.RMessageSceneWb.prototype.writeTo = function (t) {
    t.writeString(0, this.sLiveId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
}

Huya.RMessageSceneWb.prototype.readFrom = function (t) {
    this.sLiveId = t.readString(0, false, this.sLiveId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
}

Huya.GetRMessageListWbReq = function () {
    this.tId = new Huya.UserId
    this.tScene = new Huya.RMessageSceneWb
}

Huya.GetRMessageListWbReq.prototype._clone = function () {
    return new Huya.GetRMessageListWbReq
}

Huya.GetRMessageListWbReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetRMessageListWbReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetRMessageListWbReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeStruct(1, this.tScene)
}

Huya.GetRMessageListWbReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.tScene = t.readStruct(1, false, this.tScene)
}

Huya.GetDirectorProgramListReq = function () {
    this.tId = new Huya.UserId
    this.lLiveUid = 0
}

Huya.GetDirectorProgramListReq.prototype._clone = function () {
    return new Huya.GetDirectorProgramListReq
}

Huya.GetDirectorProgramListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetDirectorProgramListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetDirectorProgramListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lLiveUid)
}

Huya.GetDirectorProgramListReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lLiveUid = t.readInt64(1, false, this.lLiveUid)
}

Huya.GetDirectorProgramListRsp = function () {
    this.vProgramList = new Taf.Vector(new Huya.DirectorProgram)
    this.mPid2SubscribeStatus = new Taf.Map(new Taf.INT64, new Taf.INT32)
    this.bHasProgram = false
}

Huya.GetDirectorProgramListRsp.prototype._clone = function () {
    return new Huya.GetDirectorProgramListRsp
}

Huya.GetDirectorProgramListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetDirectorProgramListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetDirectorProgramListRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vProgramList)
    t.writeMap(1, this.mPid2SubscribeStatus)
    t.writeBoolean(2, this.bHasProgram)
}

Huya.GetDirectorProgramListRsp.prototype.readFrom = function (t) {
    this.vProgramList = t.readVector(0, false, this.vProgramList)
    this.mPid2SubscribeStatus = t.readMap(1, false, this.mPid2SubscribeStatus)
    this.bHasProgram = t.readBoolean(2, false, this.bHasProgram)
}

Huya.DirectorProgram = function () {
    this.lPid = 0
    this.sNick = ""
    this.sAvatarUrl = ""
    this.lStartTime = 0
    this.bLive = true
    this.sGameName = ""
    this.lYYId = 0
    this.iRoomId = 0
}

Huya.DirectorProgram.prototype._clone = function () {
    return new Huya.DirectorProgram
}

Huya.DirectorProgram.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.DirectorProgram.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.DirectorProgram.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeString(1, this.sNick)
    t.writeString(2, this.sAvatarUrl)
    t.writeInt64(3, this.lStartTime)
    t.writeBoolean(4, this.bLive)
    t.writeString(5, this.sGameName)
    t.writeInt64(6, this.lYYId)
    t.writeInt32(7, this.iRoomId)
}

Huya.DirectorProgram.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.sNick = t.readString(1, false, this.sNick)
    this.sAvatarUrl = t.readString(2, false, this.sAvatarUrl)
    this.lStartTime = t.readInt64(3, false, this.lStartTime)
    this.bLive = t.readBoolean(4, false, this.bLive)
    this.sGameName = t.readString(5, false, this.sGameName)
    this.lYYId = t.readInt64(6, false, this.lYYId)
    this.iRoomId = t.readInt32(7, false, this.iRoomId)
}

Huya.GetPugcVipListReq = function () {
    this.tId = new Huya.UserId
    this.lPugcUid = 0
}

Huya.GetPugcVipListReq.prototype._clone = function () {
    return new Huya.GetPugcVipListReq
}

Huya.GetPugcVipListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPugcVipListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPugcVipListReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPugcUid)
}

Huya.GetPugcVipListReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPugcUid = t.readInt64(1, false, this.lPugcUid)
}

Huya.GetPugcVipListRsp = function () {
    this.lPugcUid = 0
    this.vVipList = new Taf.Vector(new Huya.PugcVipInfo)
    this.iCurId = 0
    this.lCurVipUid = 0
}

Huya.GetPugcVipListRsp.prototype._clone = function () {
    return new Huya.GetPugcVipListRsp
}

Huya.GetPugcVipListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetPugcVipListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetPugcVipListRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPugcUid)
    t.writeVector(1, this.vVipList)
    t.writeInt32(2, this.iCurId)
    t.writeInt64(3, this.lCurVipUid)
}

Huya.GetPugcVipListRsp.prototype.readFrom = function (t) {
    this.lPugcUid = t.readInt64(0, false, this.lPugcUid)
    this.vVipList = t.readVector(1, false, this.vVipList)
    this.iCurId = t.readInt32(2, false, this.iCurId)
    this.lCurVipUid = t.readInt64(3, false, this.lCurVipUid)
}

Huya.PugcVipInfo = function () {
    this.id = 0
    this.iStartTime = 0
    this.iRoomId = 0
    this.lYYId = 0
    this.lUid = 0
    this.lTopSid = 0
    this.lSubSid = 0
    this.sAvatarUrl = ""
    this.sNick = ""
    this.sGameName = ""
    this.iRelation = 0
}

Huya.PugcVipInfo.prototype._clone = function () {
    return new Huya.PugcVipInfo
}

Huya.PugcVipInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.PugcVipInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.PugcVipInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.id)
    t.writeInt32(1, this.iStartTime)
    t.writeInt32(2, this.iRoomId)
    t.writeInt64(3, this.lYYId)
    t.writeInt64(4, this.lUid)
    t.writeInt64(5, this.lTopSid)
    t.writeInt64(6, this.lSubSid)
    t.writeString(7, this.sAvatarUrl)
    t.writeString(8, this.sNick)
    t.writeString(9, this.sGameName)
    t.writeInt32(10, this.iRelation)
}

Huya.PugcVipInfo.prototype.readFrom = function (t) {
    this.id = t.readInt32(0, false, this.id)
    this.iStartTime = t.readInt32(1, false, this.iStartTime)
    this.iRoomId = t.readInt32(2, false, this.iRoomId)
    this.lYYId = t.readInt64(3, false, this.lYYId)
    this.lUid = t.readInt64(4, false, this.lUid)
    this.lTopSid = t.readInt64(5, false, this.lTopSid)
    this.lSubSid = t.readInt64(6, false, this.lSubSid)
    this.sAvatarUrl = t.readString(7, false, this.sAvatarUrl)
    this.sNick = t.readString(8, false, this.sNick)
    this.sGameName = t.readString(9, false, this.sGameName)
    this.iRelation = t.readInt32(10, false, this.iRelation)
}

Huya.IsPugcRoomReq = function () {
    this.tId = new Huya.UserId
    this.lUid = 0
}

Huya.IsPugcRoomReq.prototype._clone = function () {
    return new Huya.IsPugcRoomReq
}

Huya.IsPugcRoomReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.IsPugcRoomReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.IsPugcRoomReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lUid)
}

Huya.IsPugcRoomReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lUid = t.readInt64(1, false, this.lUid)
}

Huya.IsPugcRoomRsp = function () {
    this.lUid = 0
    this.iStat = 0
    this.iLiveStat = 0
}

Huya.IsPugcRoomRsp.prototype._clone = function () {
    return new Huya.IsPugcRoomRsp
}

Huya.IsPugcRoomRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.IsPugcRoomRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.IsPugcRoomRsp.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt32(1, this.iStat)
    t.writeInt32(2, this.iLiveStat)
}

Huya.IsPugcRoomRsp.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.iStat = t.readInt32(1, false, this.iStat)
    this.iLiveStat = t.readInt32(2, false, this.iLiveStat)
}

Huya.GetCurCheckRoomStatusReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
}

Huya.GetCurCheckRoomStatusReq.prototype._clone = function () {
    return new Huya.GetCurCheckRoomStatusReq
}

Huya.GetCurCheckRoomStatusReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetCurCheckRoomStatusReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetCurCheckRoomStatusReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
}

Huya.GetCurCheckRoomStatusReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
}

Huya.CheckRoomStatus = function () {
    this.vPidList = new Taf.Vector(new Huya.CRPresenterInfo)
}

Huya.CheckRoomStatus.prototype._clone = function () {
    return new Huya.CheckRoomStatus
}

Huya.CheckRoomStatus.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.CheckRoomStatus.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.CheckRoomStatus.prototype.writeTo = function (t) {
    t.writeVector(0, this.vPidList)
}

Huya.CheckRoomStatus.prototype.readFrom = function (t) {
    this.vPidList = t.readVector(0, false, this.vPidList)
}

Huya.CRPresenterInfo = function () {
    this.lPid = 0
    this.sNickName = ""
    this.sIconUrl = ""
    this.lTopCid = 0
    this.lSubCid = 0
    this.iType = 0
    this.lRoomId = 0
    this.lYYID = 0
    this.iSourceType = 0
    this.iScreenType = 0
}

Huya.CRPresenterInfo.prototype._clone = function () {
    return new Huya.CRPresenterInfo
}

Huya.CRPresenterInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.CRPresenterInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.CRPresenterInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeString(1, this.sNickName)
    t.writeString(2, this.sIconUrl)
    t.writeInt64(3, this.lTopCid)
    t.writeInt64(4, this.lSubCid)
    t.writeInt32(5, this.iType)
    t.writeInt64(6, this.lRoomId)
    t.writeInt64(7, this.lYYID)
    t.writeInt32(8, this.iSourceType)
    t.writeInt32(9, this.iScreenType)
}

Huya.CRPresenterInfo.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.sNickName = t.readString(1, false, this.sNickName)
    this.sIconUrl = t.readString(2, false, this.sIconUrl)
    this.lTopCid = t.readInt64(3, false, this.lTopCid)
    this.lSubCid = t.readInt64(4, false, this.lSubCid)
    this.iType = t.readInt32(5, false, this.iType)
    this.lRoomId = t.readInt64(6, false, this.lRoomId)
    this.lYYID = t.readInt64(7, false, this.lYYID)
    this.iSourceType = t.readInt32(8, false, this.iSourceType)
    this.iScreenType = t.readInt32(9, false, this.iScreenType)
}

Huya.CKRoomUserEnterReq = function () {
    this.tUserId = new Huya.UserId
    this.lFromPid = 0
    this.lToPid = 0
}

Huya.CKRoomUserEnterReq.prototype._clone = function () {
    return new Huya.CKRoomUserEnterReq
}

Huya.CKRoomUserEnterReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.CKRoomUserEnterReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.CKRoomUserEnterReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lFromPid)
    t.writeInt64(2, this.lToPid)
}

Huya.CKRoomUserEnterReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lFromPid = t.readInt64(1, false, this.lFromPid)
    this.lToPid = t.readInt64(2, false, this.lToPid)
}

Huya.CheckRoomRsp = function () {
    this.iRet = 0
    this.sDes = ""
}

Huya.CheckRoomRsp.prototype._clone = function () {
    return new Huya.CheckRoomRsp
}

Huya.CheckRoomRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.CheckRoomRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.CheckRoomRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRet)
    t.writeString(1, this.sDes)
}

Huya.CheckRoomRsp.prototype.readFrom = function (t) {
    this.iRet = t.readInt32(0, false, this.iRet)
    this.sDes = t.readString(1, false, this.sDes)
}

Huya.MatchRecLiveProfile = function () {
    this.lUid = 0
    this.lYYId = 0
    this.iRoomId = 0
    this.sNick = ""
    this.sLiveDesc = ""
    this.sVideoCaptureUrl = ""
}

Huya.MatchRecLiveProfile.prototype._clone = function () {
    return new Huya.MatchRecLiveProfile
}

Huya.MatchRecLiveProfile.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MatchRecLiveProfile.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MatchRecLiveProfile.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid)
    t.writeInt64(1, this.lYYId)
    t.writeInt64(2, this.iRoomId)
    t.writeString(3, this.sNick)
    t.writeString(4, this.sLiveDesc)
    t.writeString(5, this.sVideoCaptureUrl)
}

Huya.MatchRecLiveProfile.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid)
    this.lYYId = t.readInt64(1, false, this.lYYId)
    this.iRoomId = t.readInt64(2, false, this.iRoomId)
    this.sNick = t.readString(3, false, this.sNick)
    this.sLiveDesc = t.readString(4, false, this.sLiveDesc)
    this.sVideoCaptureUrl = t.readString(5, false, this.sVideoCaptureUrl)
}

Huya.MatchRecLiveList = function () {
    this.iListId = 0
    this.sTitle = ""
    this.vProfiles = new Taf.Vector(new Huya.MatchRecLiveProfile)
    this.iShowTime = 0
}

Huya.MatchRecLiveList.prototype._clone = function () {
    return new Huya.MatchRecLiveList
}

Huya.MatchRecLiveList.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MatchRecLiveList.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MatchRecLiveList.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iListId)
    t.writeString(1, this.sTitle)
    t.writeVector(2, this.vProfiles)
    t.writeInt32(3, this.iShowTime)
}

Huya.MatchRecLiveList.prototype.readFrom = function (t) {
    this.iListId = t.readInt32(0, false, this.iListId)
    this.sTitle = t.readString(1, false, this.sTitle)
    this.vProfiles = t.readVector(2, false, this.vProfiles)
    this.iShowTime = t.readInt32(3, false, this.iShowTime)
}

Huya.MatchRecLiveInfo = function () {
    this.vRecList = new Taf.Vector(new Huya.MatchRecLiveList)
}

Huya.MatchRecLiveInfo.prototype._clone = function () {
    return new Huya.MatchRecLiveInfo
}

Huya.MatchRecLiveInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MatchRecLiveInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MatchRecLiveInfo.prototype.writeTo = function (t) {
    t.writeVector(0, this.vRecList)
}

Huya.MatchRecLiveInfo.prototype.readFrom = function (t) {
    this.vRecList = t.readVector(0, false, this.vRecList)
}

Huya.MatchWebPushLiveRsp = function () {
    this.iUri = 0
    this.vBuff = new Taf.BinBuffer
}

Huya.MatchWebPushLiveRsp.prototype._clone = function () {
    return new Huya.MatchWebPushLiveRsp
}

Huya.MatchWebPushLiveRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.MatchWebPushLiveRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.MatchWebPushLiveRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iUri)
    t.writeBytes(1, this.vBuff)
}

Huya.MatchWebPushLiveRsp.prototype.readFrom = function (t) {
    this.iUri = t.readInt32(0, false, this.iUri)
    this.vBuff = t.readBytes(1, false, this.vBuff)
}

Huya.SettingSetupReq = function () {
    this.tId = new Huya.UserId
    this.vItems = new Taf.Vector(new Huya.UserSettingItem)
}

Huya.SettingSetupReq.prototype._clone = function () {
    return new Huya.SettingSetupReq
}

Huya.SettingSetupReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SettingSetupReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SettingSetupReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeVector(1, this.vItems)
}

Huya.SettingSetupReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.vItems = t.readVector(1, false, this.vItems)
}

Huya.SettingSetupRsp = function () {
    this.iLevel = 0
    this.sMessage = ""
}

Huya.SettingSetupRsp.prototype._clone = function () {
    return new Huya.SettingSetupRsp
}

Huya.SettingSetupRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SettingSetupRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SettingSetupRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iLevel)
    t.writeString(1, this.sMessage)
}

Huya.SettingSetupRsp.prototype.readFrom = function (t) {
    this.iLevel = t.readInt32(0, false, this.iLevel)
    this.sMessage = t.readString(1, false, this.sMessage)
}

Huya.SettingFetchReq = function () {
    this.tId = new Huya.UserId
    this.vKeys = new Taf.Vector(new Taf.STRING)
    this.bEnableCached = true
}

Huya.SettingFetchReq.prototype._clone = function () {
    return new Huya.SettingFetchReq
}

Huya.SettingFetchReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SettingFetchReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SettingFetchReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeVector(1, this.vKeys)
    t.writeBoolean(2, this.bEnableCached)
}

Huya.SettingFetchReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.vKeys = t.readVector(1, false, this.vKeys)
    this.bEnableCached = t.readBoolean(2, false, this.bEnableCached)
}

Huya.SettingFetchRsp = function () {
    this.vItems = new Taf.Vector(new Huya.UserSettingItem)
}

Huya.SettingFetchRsp.prototype._clone = function () {
    return new Huya.SettingFetchRsp
}

Huya.SettingFetchRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SettingFetchRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SettingFetchRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vItems)
}

Huya.SettingFetchRsp.prototype.readFrom = function (t) {
    this.vItems = t.readVector(0, false, this.vItems)
}

Huya.UserSettingItem = function () {
    this.sKey = ""
    this.sValue = ""
}

Huya.UserSettingItem.prototype._clone = function () {
    return new Huya.UserSettingItem
}

Huya.UserSettingItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserSettingItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserSettingItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sKey)
    t.writeString(1, this.sValue)
}

Huya.UserSettingItem.prototype.readFrom = function (t) {
    this.sKey = t.readString(0, false, this.sKey)
    this.sValue = t.readString(1, false, this.sValue)
}

Huya.UserSupportEffectRsp = function () {
    this.iEffectType = 0
    this.sEffectWord = ""
}

Huya.UserSupportEffectRsp.prototype._clone = function () {
    return new Huya.UserSupportEffectRsp
}

Huya.UserSupportEffectRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserSupportEffectRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserSupportEffectRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iEffectType)
    t.writeString(1, this.sEffectWord)
}

Huya.UserSupportEffectRsp.prototype.readFrom = function (t) {
    this.iEffectType = t.readInt32(0, false, this.iEffectType)
    this.sEffectWord = t.readString(1, false, this.sEffectWord)
}

Huya.ActivityTorMsgReq = function () {
    this.tUserId = new Huya.UserId
    this.iActivityId = 0
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
    this.iChannelType = 0
    this.iSubUri = 0
}

Huya.ActivityTorMsgReq.prototype._clone = function () {
    return new Huya.ActivityTorMsgReq
}

Huya.ActivityTorMsgReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ActivityTorMsgReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ActivityTorMsgReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt32(1, this.iActivityId)
    t.writeInt64(2, this.lPid)
    t.writeInt64(3, this.lTid)
    t.writeInt64(4, this.lSid)
    t.writeInt32(5, this.iChannelType)
    t.writeInt32(6, this.iSubUri)
}

Huya.ActivityTorMsgReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.iActivityId = t.readInt32(1, false, this.iActivityId)
    this.lPid = t.readInt64(2, false, this.lPid)
    this.lTid = t.readInt64(3, false, this.lTid)
    this.lSid = t.readInt64(4, false, this.lSid)
    this.iChannelType = t.readInt32(5, false, this.iChannelType)
    this.iSubUri = t.readInt32(6, false, this.iSubUri)
}

Huya.ActivityTorMsgRsp = function () {
    this.iEnable = 0
    this.vSerializedMsg = new Taf.Vector(new Huya.ActivitySerializedMsg)
    this.iTimeStamp = 0
}

Huya.ActivityTorMsgRsp.prototype._clone = function () {
    return new Huya.ActivityTorMsgRsp
}

Huya.ActivityTorMsgRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.ActivityTorMsgRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.ActivityTorMsgRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iEnable)
    t.writeVector(1, this.vSerializedMsg)
    t.writeInt32(2, this.iTimeStamp)
}

Huya.ActivityTorMsgRsp.prototype.readFrom = function (t) {
    this.iEnable = t.readInt32(0, false, this.iEnable)
    this.vSerializedMsg = t.readVector(1, false, this.vSerializedMsg)
    this.iTimeStamp = t.readInt32(2, false, this.iTimeStamp)
}


Huya.SendItemNoticeGameBroadcastPacket = function () {
    this.iItemType = 0
    this.iItemCount = 0
    this.lSenderUid = 0
    this.sSenderNick = ""
    this.lPresenterUid = 0
    this.sPresenterNick = ""
    this.lSid = 0
    this.lSubSid = 0
    this.lRoomId = 0
    this.iTemplateType = 0
}

Huya.SendItemNoticeGameBroadcastPacket.prototype._clone = function () {
    return new Huya.SendItemNoticeGameBroadcastPacket
}

Huya.SendItemNoticeGameBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.SendItemNoticeGameBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.SendItemNoticeGameBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType)
    t.writeInt32(1, this.iItemCount)
    t.writeInt64(3, this.lSenderUid)
    t.writeString(4, this.sSenderNick)
    t.writeInt64(5, this.lPresenterUid)
    t.writeString(6, this.sPresenterNick)
    t.writeInt64(7, this.lSid)
    t.writeInt64(8, this.lSubSid)
    t.writeInt64(9, this.lRoomId)
    t.writeInt32(10, this.iTemplateType)
}

Huya.SendItemNoticeGameBroadcastPacket.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType)
    this.iItemCount = t.readInt32(1, false, this.iItemCount)
    this.lSenderUid = t.readInt64(3, false, this.lSenderUid)
    this.sSenderNick = t.readString(4, false, this.sSenderNick)
    this.lPresenterUid = t.readInt64(5, false, this.lPresenterUid)
    this.sPresenterNick = t.readString(6, false, this.sPresenterNick)
    this.lSid = t.readInt64(7, false, this.lSid)
    this.lSubSid = t.readInt64(8, false, this.lSubSid)
    this.lRoomId = t.readInt64(9, false, this.lRoomId)
    this.iTemplateType = t.readInt32(10, false, this.iTemplateType)
}

Huya.GetUserInitInfoReq = function () {
    this.tId = new Huya.UserId
    this.lPid = 0
    this.lTid = 0
    this.lSid = 0
    this.vURIs = new Taf.Vector(new Taf.INT32)
}

Huya.GetUserInitInfoReq.prototype._clone = function () {
    return new Huya.GetUserInitInfoReq
}

Huya.GetUserInitInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserInitInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserInitInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lTid)
    t.writeInt64(3, this.lSid)
    t.writeVector(4, this.vURIs)
}

Huya.GetUserInitInfoReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lTid = t.readInt64(2, false, this.lTid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.vURIs = t.readVector(4, false, this.vURIs)
}

Huya.UserInitPacket = function () {
    this.iURI = 0
    this.iCode = 1
    this.sMsg = ""
    this.vData = new Taf.BinBuffer
}

Huya.UserInitPacket.prototype._clone = function () {
    return new Huya.UserInitPacket
}

Huya.UserInitPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UserInitPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UserInitPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iURI)
    t.writeInt32(1, this.iCode)
    t.writeString(2, this.sMsg)
    t.writeBytes(3, this.vData)
}

Huya.UserInitPacket.prototype.readFrom = function (t) {
    this.iURI = t.readInt32(0, false, this.iURI)
    this.iCode = t.readInt32(1, false, this.iCode)
    this.sMsg = t.readString(2, false, this.sMsg)
    this.vData = t.readBytes(3, false, this.vData)
}

Huya.GetUserInitInfoRsp = function () {
    this.iCode = 0
    this.vPkt = new Taf.Vector(new Huya.UserInitPacket)
}

Huya.GetUserInitInfoRsp.prototype._clone = function () {
    return new Huya.GetUserInitInfoRsp
}

Huya.GetUserInitInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetUserInitInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetUserInitInfoRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCode)
    t.writeVector(1, this.vPkt)
}

Huya.GetUserInitInfoRsp.prototype.readFrom = function (t) {
    this.iCode = t.readInt32(0, false, this.iCode)
    this.vPkt = t.readVector(1, false, this.vPkt)
}

Huya.StreamerNode = function () {
    this.iGiftLevel = 0
    this.iStreamerLevel = 0
    this.iMaterialType = 0
}

Huya.StreamerNode.prototype._clone = function () {
    return new Huya.StreamerNode
}

Huya.StreamerNode.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.StreamerNode.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.StreamerNode.prototype.writeTo = function (t) {
    t.writeInt16(0, this.iGiftLevel)
    t.writeInt16(1, this.iStreamerLevel)
    t.writeInt16(2, this.iMaterialType)
}

Huya.StreamerNode.prototype.readFrom = function (t) {
    this.iGiftLevel = t.readInt16(0, false, this.iGiftLevel)
    this.iStreamerLevel = t.readInt16(1, false, this.iStreamerLevel)
    this.iMaterialType = t.readInt16(2, false, this.iMaterialType)
}


Huya.FansPrivilegeReq = function () {
    this.tUserId = new Huya.UserId
}

Huya.FansPrivilegeReq.prototype._clone = function () {
    return new Huya.FansPrivilegeReq
}

Huya.FansPrivilegeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansPrivilegeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansPrivilegeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
}

Huya.FansPrivilegeReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
}

Huya.FansPrivilegeRsp = function () {
    this.iChatBadge = 0
    this.iGiftNum = 0
    this.iVipBar = 0
    this.iFansRank = 0
    this.iVFlag = 0
    this.iFansBarrage = 0
}

Huya.FansPrivilegeRsp.prototype._clone = function () {
    return new Huya.FansPrivilegeRsp
}

Huya.FansPrivilegeRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FansPrivilegeRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FansPrivilegeRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iChatBadge)
    t.writeInt32(1, this.iGiftNum)
    t.writeInt32(2, this.iVipBar)
    t.writeInt32(3, this.iFansRank)
    t.writeInt32(4, this.iVFlag)
    t.writeInt32(5, this.iFansBarrage)
}

Huya.FansPrivilegeRsp.prototype.readFrom = function (t) {
    this.iChatBadge = t.readInt32(0, false, this.iChatBadge)
    this.iGiftNum = t.readInt32(1, false, this.iGiftNum)
    this.iVipBar = t.readInt32(2, false, this.iVipBar)
    this.iFansRank = t.readInt32(3, false, this.iFansRank)
    this.iVFlag = t.readInt32(4, false, this.iVFlag)
    this.iFansBarrage = t.readInt32(5, false, this.iFansBarrage)
}

Huya.BadgeInfoReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
    this.lToUid = 0
}

Huya.BadgeInfoReq.prototype._clone = function () {
    return new Huya.BadgeInfoReq
}

Huya.BadgeInfoReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeInfoReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeInfoReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lToUid)
}

Huya.BadgeInfoReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lToUid = t.readInt64(2, false, this.lToUid)
}

Huya.UseBadgeReq = function () {
    this.tUserId = new Huya.UserId
    this.lBadgeId = 0
    this.lToUid = 0
    this.iBadgeType = 0
}

Huya.UseBadgeReq.prototype._clone = function () {
    return new Huya.UseBadgeReq
}

Huya.UseBadgeReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.UseBadgeReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.UseBadgeReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lBadgeId)
    t.writeInt64(2, this.lToUid)
    t.writeInt32(3, this.iBadgeType)
}

Huya.UseBadgeReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId)
    this.lToUid = t.readInt64(2, false, this.lToUid)
    this.iBadgeType = t.readInt32(3, false, this.iBadgeType)
}

Huya.BadgeNameReq = function () {
    this.tUserId = new Huya.UserId
    this.lPid = 0
    this.lToUid = 0
}

Huya.BadgeNameReq.prototype._clone = function () {
    return new Huya.BadgeNameReq
}

Huya.BadgeNameReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.BadgeNameReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.BadgeNameReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeInt64(1, this.lPid)
    t.writeInt64(2, this.lToUid)
}

Huya.BadgeNameReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.lPid = t.readInt64(1, false, this.lPid)
    this.lToUid = t.readInt64(2, false, this.lToUid)
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

Huya.FaithInfo = function () {
    this.sFaithName = ""
    this.vPresenter = new Taf.Vector(new Huya.FaithPresenter)
}

Huya.FaithInfo.prototype._clone = function () {
    return new Huya.FaithInfo
}

Huya.FaithInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FaithInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FaithInfo.prototype.writeTo = function (t) {
    t.writeString(0, this.sFaithName)
    t.writeVector(1, this.vPresenter)
}

Huya.FaithInfo.prototype.readFrom = function (t) {
    this.sFaithName = t.readString(0, false, this.sFaithName)
    this.vPresenter = t.readVector(1, false, this.vPresenter)
}

Huya.FaithPresenter = function () {
    this.lPid = 0
    this.sLogo = ""
}

Huya.FaithPresenter.prototype._clone = function () {
    return new Huya.FaithPresenter
}

Huya.FaithPresenter.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FaithPresenter.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FaithPresenter.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lPid)
    t.writeString(1, this.sLogo)
}

Huya.FaithPresenter.prototype.readFrom = function (t) {
    this.lPid = t.readInt64(0, false, this.lPid)
    this.sLogo = t.readString(1, false, this.sLogo)
}

Huya.FaithBadgeItem = function () {
    this.sObtainWay = ""
    this.sFaithName = ""
    this.sFaithContent = ""
    this.vFaithPic = new Taf.Vector(new Taf.STRING)
    this.sActionName = ""
    this.sActionUrl = ""
}

Huya.FaithBadgeItem.prototype._clone = function () {
    return new Huya.FaithBadgeItem
}

Huya.FaithBadgeItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.FaithBadgeItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.FaithBadgeItem.prototype.writeTo = function (t) {
    t.writeString(0, this.sObtainWay)
    t.writeString(1, this.sFaithName)
    t.writeString(2, this.sFaithContent)
    t.writeVector(3, this.vFaithPic)
    t.writeString(4, this.sActionName)
    t.writeString(5, this.sActionUrl)
}

Huya.FaithBadgeItem.prototype.readFrom = function (t) {
    this.sObtainWay = t.readString(0, false, this.sObtainWay)
    this.sFaithName = t.readString(1, false, this.sFaithName)
    this.sFaithContent = t.readString(2, false, this.sFaithContent)
    this.vFaithPic = t.readVector(3, false, this.vFaithPic)
    this.sActionName = t.readString(4, false, this.sActionName)
    this.sActionUrl = t.readString(5, false, this.sActionUrl)
}


Huya.GetBatchPropsItemReq = function () {
    this.tUserId = new Huya.UserId
    this.vPropId = new Taf.Vector(new Taf.INT32)
    this.lPresenterUid = 0
    this.lSid = 0
    this.lSubSid = 0
    this.iGameId = 0
}

Huya.GetBatchPropsItemReq.prototype._clone = function () {
    return new Huya.GetBatchPropsItemReq
}

Huya.GetBatchPropsItemReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetBatchPropsItemReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetBatchPropsItemReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserId)
    t.writeVector(1, this.vPropId)
    t.writeInt64(2, this.lPresenterUid)
    t.writeInt64(3, this.lSid)
    t.writeInt64(4, this.lSubSid)
    t.writeInt32(5, this.iGameId)
}

Huya.GetBatchPropsItemReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
    this.vPropId = t.readVector(1, false, this.vPropId)
    this.lPresenterUid = t.readInt64(2, false, this.lPresenterUid)
    this.lSid = t.readInt64(3, false, this.lSid)
    this.lSubSid = t.readInt64(4, false, this.lSubSid)
    this.iGameId = t.readInt32(5, false, this.iGameId)
}

Huya.GetBatchPropsItemRsp = function () {
    this.vPropsItem = new Taf.Vector(new Huya.PropsItem)
}

Huya.GetBatchPropsItemRsp.prototype._clone = function () {
    return new Huya.GetBatchPropsItemRsp
}

Huya.GetBatchPropsItemRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}

Huya.GetBatchPropsItemRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}

Huya.GetBatchPropsItemRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vPropsItem)
}

Huya.GetBatchPropsItemRsp.prototype.readFrom = function (t) {
    this.vPropsItem = t.readVector(0, false, this.vPropsItem)
}