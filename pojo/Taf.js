const Taf = {};

export default Taf

Taf.INT8 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt8(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt8(e, true, i)
    }

    this._className = function () {
        return Taf.CHAR
    }
}

Taf.INT16 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt16(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt16(e, true, i)
    }

    this._className = function () {
        return Taf.SHORT
    }
}

Taf.INT32 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt32(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt32(e, true, i)
    }

    this._className = function () {
        return Taf.INT32
    }
}

Taf.INT64 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt64(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt64(e, true, i)
    }

    this._className = function () {
        return Taf.INT64
    }
}

Taf.UINT8 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt16(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt16(e, true, i)
    }

    this._className = function () {
        return Taf.SHORT
    }
}

Taf.UInt16 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt32(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt32(e, true, i)
    }

    this._className = function () {
        return Taf.INT32
    }
}

Taf.UInt32 = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt64(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt64(e, true, i)
    }

    this._className = function () {
        return Taf.INT64
    }
}

Taf.Float = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeFloat(e, i)
    }

    this._read = function (t, e, i) {
        return t.readFloat(e, true, i)
    }

    this._className = function () {
        return Taf.FLOAT
    }
}

Taf.Double = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeDouble(e, i)
    }

    this._read = function (t, e, i) {
        return t.readDouble(e, true, i)
    }

    this._className = function () {
        return Taf.DOUBLE
    }
}

Taf.STRING = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeString(e, i)
    }

    this._read = function (t, e, i) {
        return t.readString(e, true, i)
    }

    this._className = function () {
        return Taf.STRING
    }
}

Taf.BOOLEAN = function () {
    this._clone = function () {
        return false
    }

    this._write = function (t, e, i) {
        return t.writeBoolean(e, i)
    }

    this._read = function (t, e, i) {
        return t.readBoolean(e, true, i)
    }

    this._className = function () {
        return Taf.BOOLEAN
    }
}

Taf.ENUM = function () {
    this._clone = function () {
        return 0
    }

    this._write = function (t, e, i) {
        return t.writeInt32(e, i)
    }

    this._read = function (t, e, i) {
        return t.readInt32(e, true, i)
    }
}

Taf.Vector = function (t) {
    this.proto = t
    this.value = new Array
}

Taf.Vector.prototype._clone = function () {
    return new Taf.Vector(this.proto)
}

Taf.Vector.prototype._write = function (t, e, i) {
    return t.writeVector(e, i)
}

Taf.Vector.prototype._read = function (t, e, i) {
    return t.readVector(e, true, i)
}

Taf.Vector.prototype._className = function () {
    return Taf.TypeHelp.VECTOR.replace("$t", this.proto._className())
}

Taf.Map = function (t, e) {
    this.kproto = t
    this.vproto = e
    this.value = new Object
}

Taf.Map.prototype._clone = function () {
    return new Taf.Map(this.kproto, this.vproto)
}

Taf.Map.prototype._write = function (t, e, i) {
    return t.writeMap(e, i)
}

Taf.Map.prototype._read = function (t, e, i) {
    return t.readMap(e, true, i)
}

Taf.Map.prototype.put = function (t, e) {
    this.value[t] = e
}

Taf.Map.prototype.get = function (t) {
    return this.value[t]
}

Taf.Map.prototype.remove = function (t) {
    delete this.value[t]
}

Taf.Map.prototype.clear = function () {
    this.value = new Object
}

Taf.Map.prototype.size = function () {
    var t = 0
    for (var e in this.value) {
        t++
    }
    return t
}

Taf.Vector.prototype._className = function () {
    return Taf.TypeHelp.Map.replace("$k", this.kproto._className()).replace("$v", this.vproto._className())
}

Taf.DataHelp = {
    EN_INT8: 0,
    EN_INT16: 1,
    EN_INT32: 2,
    EN_INT64: 3,
    EN_FLOAT: 4,
    EN_DOUBLE: 5,
    EN_STRING1: 6,
    EN_STRING4: 7,
    EN_MAP: 8,
    EN_LIST: 9,
    EN_STRUCTBEGIN: 10,
    EN_STRUCTEND: 11,
    EN_ZERO: 12,
    EN_SIMPLELIST: 13
}
Taf.TypeHelp = {
    BOOLEAN: "bool",
    CHAR: "char",
    SHORT: "short",
    INT32: "int32",
    INT64: "int64",
    FLOAT: "float",
    DOUBLE: "double",
    STRING: "string",
    VECTOR: "list<$t>",
    MAP: "map<$k, $v>"
}
Taf.BinBuffer = function (t) {
    this.buf = null
    this.vew = null
    this.len = 0
    this.position = 0
    if (t != null && t != undefined && t instanceof Taf.BinBuffer) {
        this.buf = t.buf
        this.vew = new DataView(this.buf)
        this.len = t.length
        this.position = t.position
    }
    if (t != null && t != undefined && t instanceof ArrayBuffer) {
        this.buf = t
        this.vew = new DataView(this.buf)
        this.len = this.vew.byteLength
        this.position = 0
    }
    this.__defineGetter__("length", function () {
        return this.len
    })
    this.__defineGetter__("buffer", function () {
        return this.buf
    })
}

Taf.BinBuffer.prototype._write = function (t, e, i) {
    return t.writeBytes(e, i)
}

Taf.BinBuffer.prototype._read = function (t, e, i) {
    return t.readBytes(e, true, i)
}

Taf.BinBuffer.prototype._clone = function () {
    return new Taf.BinBuffer
}

Taf.BinBuffer.prototype.allocate = function (t) {
    t = this.position + t
    if (this.buf != null && this.buf.length > t) {
        return
    }
    var e = new ArrayBuffer(Math.max(256, t * 2))
    if (this.buf != null) {
        new Uint8Array(e).set(new Uint8Array(this.buf))
        this.buf = undefined
    }
    this.buf = e
    this.vew = undefined
    this.vew = new DataView(this.buf)
}

Taf.BinBuffer.prototype.getBuffer = function () {
    var t = new ArrayBuffer(this.len)
    new Uint8Array(t).set(new Uint8Array(this.buf, 0, this.len))
    return t
}

Taf.BinBuffer.prototype.memset = function (t, e, i) {
    this.allocate(i)
    new Uint8Array(this.buf).set(new Uint8Array(t, e, i), this.position)
}

Taf.BinBuffer.prototype.writeInt8 = function (t) {
    this.allocate(1)
    this.vew.setInt8(this.position, t)
    this.position += 1
    this.len = this.position
}

Taf.BinBuffer.prototype.writeUInt8 = function (t) {
    this.allocate(1)
    this.vew.setUint8(this.position++, t)
    this.len = this.position
}

Taf.BinBuffer.prototype.writeInt16 = function (t) {
    this.allocate(2)
    this.vew.setInt16(this.position, t)
    this.position += 2
    this.len = this.position
}

Taf.BinBuffer.prototype.writeUInt16 = function (t) {
    this.allocate(2)
    this.vew.setUint16(this.position, t)
    this.position += 2
    this.len = this.position
}

Taf.BinBuffer.prototype.writeInt32 = function (t) {
    this.allocate(4)
    this.vew.setInt32(this.position, t)
    this.position += 4
    this.len = this.position
}

Taf.BinBuffer.prototype.writeUInt32 = function (t) {
    this.allocate(4)
    this.vew.setUint32(this.position, t)
    this.position += 4
    this.len = this.position
}

Taf.BinBuffer.prototype.writeInt64 = function (t) {
    this.allocate(8)
    this.vew.setUint32(this.position, parseInt(t / 4294967296))
    this.vew.setUint32(this.position + 4, t % 4294967296)
    this.position += 8
    this.len = this.position
}

Taf.BinBuffer.prototype.writeFloat = function (t) {
    this.allocate(4)
    this.vew.setFloat32(this.position, t)
    this.position += 4
    this.len = this.position
}

Taf.BinBuffer.prototype.writeDouble = function (t) {
    this.allocate(8)
    this.vew.setFloat64(this.position, t)
    this.position += 8
    this.len = this.position
}

Taf.BinBuffer.prototype.writeString = function (t) {
    for (var e = [], i = 0; i < t.length; i++) {
        e.push(t.charCodeAt(i) & 255)
    }
    this.allocate(e.length)
    new Uint8Array(this.buf).set(new Uint8Array(e), this.position)
    this.position += e.length
    this.len = this.position
}

Taf.BinBuffer.prototype.writeBytes = function (t) {
    if (t.length == 0 || t.buf == null)
        return
    this.allocate(t.length)
    new Uint8Array(this.buf).set(new Uint8Array(t.buf, 0, t.length), this.position)
    this.position += t.length
    this.len = this.position
}

Taf.BinBuffer.prototype.readInt8 = function () {
    return this.vew.getInt8(this.position++)
}

Taf.BinBuffer.prototype.readInt16 = function () {
    this.position += 2
    return this.vew.getInt16(this.position - 2)
}

Taf.BinBuffer.prototype.readInt32 = function () {
    this.position += 4
    return this.vew.getInt32(this.position - 4)
}

Taf.BinBuffer.prototype.readUInt8 = function () {
    this.position += 1
    return this.vew.getUint8(this.position - 1)
}

Taf.BinBuffer.prototype.readUInt16 = function () {
    this.position += 2
    return this.vew.getUint16(this.position - 2)
}

Taf.BinBuffer.prototype.readUInt32 = function () {
    this.position += 4
    return this.vew.getUint32(this.position - 4)
}

Taf.BinBuffer.prototype.readInt64 = function () {
    var t = this.vew.getUint32(this.position)
    var e = this.vew.getUint32(this.position + 4)
    this.position += 8
    return t * 4294967296 + e
}

Taf.BinBuffer.prototype.readFloat = function () {
    var t = this.vew.getFloat32(this.position)
    this.position += 4
    return t
}

Taf.BinBuffer.prototype.readDouble = function () {
    var t = this.vew.getFloat64(this.position)
    this.position += 8
    return t
}

Taf.BinBuffer.prototype.readString = function (t) {
    for (var e = [], i = 0; i < t; i++) {
        e.push(String.fromCharCode(this.vew.getUint8(this.position++)))
    }
    var r = e.join("")
    try {
        r = decodeURIComponent(escape(r))
    } catch (t) {
    }
    return r
}

Taf.BinBuffer.prototype.readBytes = function (t) {
    var e = new Taf.BinBuffer
    e.allocate(t)
    e.memset(this.buf, this.position, t)
    e.position = 0
    e.len = t
    this.position = this.position + t
    return e
}

Taf.JceOutputStream = function () {
    this.buf = new Taf.BinBuffer
    this.getBinBuffer = function () {
        return this.buf
    }

    this.getBuffer = function () {
        return this.buf.getBuffer()
    }
}

Taf.JceOutputStream.prototype.writeTo = function (t, e) {
    if (t < 15) {
        this.buf.writeUInt8(t << 4 & 240 | e)
    } else {
        this.buf.writeUInt16((240 | e) << 8 | t)
    }
}

Taf.JceOutputStream.prototype.writeBoolean = function (t, e) {
    this.writeInt8(t, e == true ? 1 : 0)
}

Taf.JceOutputStream.prototype.writeInt8 = function (t, e) {
    if (e == 0) {
        this.writeTo(t, Taf.DataHelp.EN_ZERO)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_INT8)
        this.buf.writeInt8(e)
    }
}

Taf.JceOutputStream.prototype.writeInt16 = function (t, e) {
    if (e >= -128 && e <= 127) {
        this.writeInt8(t, e)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_INT16)
        this.buf.writeInt16(e)
    }
}

Taf.JceOutputStream.prototype.writeInt32 = function (t, e) {
    if (e >= -32768 && e <= 32767) {
        this.writeInt16(t, e)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_INT32)
        this.buf.writeInt32(e)
    }
}

Taf.JceOutputStream.prototype.writeInt64 = function (t, e) {
    if (e >= -2147483648 && e <= 2147483647) {
        this.writeInt32(t, e)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_INT64)
        this.buf.writeInt64(e)
    }
}

Taf.JceOutputStream.prototype.writeUInt8 = function (t, e) {
    this.writeInt16(t, e)
}

Taf.JceOutputStream.prototype.writeUInt16 = function (t, e) {
    this.writeInt32(t, e)
}

Taf.JceOutputStream.prototype.writeUInt32 = function (t, e) {
    this.writeInt64(t, e)
}

Taf.JceOutputStream.prototype.writeFloat = function (t, e) {
    if (e == 0) {
        this.writeTo(t, Taf.DataHelp.EN_ZERO)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_FLOAT)
        this.buf.writeFloat(e)
    }
}

Taf.JceOutputStream.prototype.writeDouble = function (t, e) {
    if (e == 0) {
        this.writeTo(t, Taf.DataHelp.EN_ZERO)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_DOUBLE)
        this.buf.writeDouble(e)
    }
}

Taf.JceOutputStream.prototype.writeStruct = function (t, e) {
    if (e.writeTo == undefined) {
        throw Error("not defined writeTo Function")
    }
    this.writeTo(t, Taf.DataHelp.EN_STRUCTBEGIN)
    e.writeTo(this)
    this.writeTo(0, Taf.DataHelp.EN_STRUCTEND)
}

Taf.JceOutputStream.prototype.writeString = function (t, e) {
    var i = e
    try {
        i = unescape(encodeURIComponent(i))
    } catch (t) {
    }
    if (i.length > 255) {
        this.writeTo(t, Taf.DataHelp.EN_STRING4)
        this.buf.writeUInt32(i.length)
    } else {
        this.writeTo(t, Taf.DataHelp.EN_STRING1)
        this.buf.writeUInt8(i.length)
    }
    this.buf.writeString(i)
}

Taf.JceOutputStream.prototype.writeBytes = function (t, e) {
    if (!(e instanceof Taf.BinBuffer)) {
        throw Error("value not instanceof Taf.BinBuffer")
    }
    this.writeTo(t, Taf.DataHelp.EN_SIMPLELIST)
    this.writeTo(0, Taf.DataHelp.EN_INT8)
    this.writeInt32(0, e.length)
    this.buf.writeBytes(e)
}

Taf.JceOutputStream.prototype.writeVector = function (t, e) {
    this.writeTo(t, Taf.DataHelp.EN_LIST)
    this.writeInt32(0, e.value.length)
    for (var i = 0; i < e.value.length; i++) {
        e.proto._write(this, 0, e.value[i])
    }
}

Taf.JceOutputStream.prototype.writeMap = function (t, e) {
    this.writeTo(t, Taf.DataHelp.EN_MAP)
    this.writeInt32(0, e.size())
    for (var i in e.value) {
        e.kproto._write(this, 0, i)
        e.vproto._write(this, 1, e.value[i])
    }
}

Taf.JceInputStream = function (t) {
    this.buf = new Taf.BinBuffer(t)
}

Taf.JceInputStream.prototype.readFrom = function () {
    var t = this.buf.readUInt8()
    var e = (t & 240) >> 4
    var i = t & 15
    if (e >= 15)
        e = this.buf.readUInt8()
    return {
        tag: e,
        type: i
    }
}

Taf.JceInputStream.prototype.peekFrom = function () {
    var t = this.buf.position
    var e = this.readFrom()
    this.buf.position = t
    return {
        tag: e.tag,
        type: e.type,
        size: e.tag >= 15 ? 2 : 1
    }
}

Taf.JceInputStream.prototype.skipField = function (t) {
    switch (t) {
        case Taf.DataHelp.EN_INT8:
            this.buf.position += 1
            break
        case Taf.DataHelp.EN_INT16:
            this.buf.position += 2
            break
        case Taf.DataHelp.EN_INT32:
            this.buf.position += 4
            break
        case Taf.DataHelp.EN_INT64:
            this.buf.position += 8
            break
        case Taf.DataHelp.EN_STRING1:
            var e = this.buf.readUInt8()
            this.buf.position += e
            break
        case Taf.DataHelp.EN_STRING4:
            var i = this.buf.readInt32()
            this.buf.position += i
            break
        case Taf.DataHelp.EN_STRUCTBEGIN:
            this.skipToStructEnd()
            break
        case Taf.DataHelp.EN_STRUCTEND:
        case Taf.DataHelp.EN_ZERO:
            break
        case Taf.DataHelp.EN_MAP: {
            var r = this.readInt32(0, true)
            for (var n = 0; n < r * 2; ++n) {
                var s = this.readFrom()
                this.skipField(s.type)
            }
            break
        }
        case Taf.DataHelp.EN_SIMPLELIST: {
            var s = this.readFrom()
            if (s.type != Taf.DataHelp.EN_INT8) {
                throw Error("skipField with invalid type, type value: " + t + "," + s.type)
            }
            var e = this.readInt32(0, true)
            this.buf.position += e
            break
        }
        case Taf.DataHelp.EN_LIST: {
            var r = this.readInt32(0, true)
            for (var n = 0; n < r; ++n) {
                var s = this.readFrom()
                this.skipField(s.type)
            }
            break
        }
        default:
            throw new Error("skipField with invalid type, type value: " + t)
    }
}

Taf.JceInputStream.prototype.skipToStructEnd = function () {
    for (; ;) {
        var t = this.readFrom()
        this.skipField(t.type)
        if (t.type == Taf.DataHelp.EN_STRUCTEND) {
            return
        }
    }
}

Taf.JceInputStream.prototype.skipToTag = function (t, e) {
    while (this.buf.position < this.buf.length) {
        var i = this.peekFrom()
        if (t <= i.tag || i.type == Taf.DataHelp.EN_STRUCTEND) {
            return i.type == Taf.DataHelp.EN_STRUCTEND ? false : t == i.tag
        }
        this.buf.position += i.size
        this.skipField(i.type)
    }
    if (e)
        throw Error("require field not exist, tag:" + t)
    return false
}

Taf.JceInputStream.prototype.readBoolean = function (t, e, i) {
    return this.readInt8(t, e, i) == 1 ? true : false
}

Taf.JceInputStream.prototype.readInt8 = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    switch (r.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8()
    }
    throw Error("read int8 type mismatch, tag:" + t + ", get type:" + r.type)
}

Taf.JceInputStream.prototype.readInt16 = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    switch (r.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8()
        case Taf.DataHelp.EN_INT16:
            return this.buf.readInt16()
    }
    throw Error("read int8 type mismatch, tag:" + t + ", get type:" + r.type)
}

Taf.JceInputStream.prototype.readInt32 = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    switch (r.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8()
        case Taf.DataHelp.EN_INT16:
            return this.buf.readInt16()
        case Taf.DataHelp.EN_INT32:
            return this.buf.readInt32()
    }
    throw Error("read int8 type mismatch, tag:" + t + ", get type:" + r.type)
}

Taf.JceInputStream.prototype.readInt64 = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    switch (r.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0
        case Taf.DataHelp.EN_INT8:
            return this.buf.readInt8()
        case Taf.DataHelp.EN_INT16:
            return this.buf.readInt16()
        case Taf.DataHelp.EN_INT32:
            return this.buf.readInt32()
        case Taf.DataHelp.EN_INT64:
            return this.buf.readInt64()
    }
    throw Error("read int64 type mismatch, tag:" + t + ", get type:" + h.type)
}

Taf.JceInputStream.prototype.readFloat = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    switch (r.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0
        case Taf.DataHelp.EN_FLOAT:
            return this.buf.readFloat()
    }
    throw Error("read float type mismatch, tag:" + t + ", get type:" + h.type)
}

Taf.JceInputStream.prototype.readDouble = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    switch (r.type) {
        case Taf.DataHelp.EN_ZERO:
            return 0
        case Taf.DataHelp.EN_DOUBLE:
            return this.buf.readDouble()
    }
    throw Error("read double type mismatch, tag:" + t + ", get type:" + h.type)
}

Taf.JceInputStream.prototype.readUInt8 = function (t, e, i) {
    return this.readInt16(t, e, i)
}

Taf.JceInputStream.prototype.readUInt16 = function (t, e, i) {
    return this.readInt32(t, e, i)
}

Taf.JceInputStream.prototype.readUInt32 = function (t, e, i) {
    return this.readInt64(t, e, i)
}

Taf.JceInputStream.prototype.readStruct = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    if (r.type != Taf.DataHelp.EN_STRUCTBEGIN) {
        throw Error("read struct type mismatch, tag: " + t + ", get type:" + r.type)
    }
    i.readFrom(this)
    this.skipToStructEnd()
    return i
}

Taf.JceInputStream.prototype.readString = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    if (r.type == Taf.DataHelp.EN_STRING1) {
        return this.buf.readString(this.buf.readUInt8())
    }
    if (r.type == Taf.DataHelp.EN_STRING4) {
        return this.buf.readString(this.buf.readUInt32())
    }
    throw Error("read 'string' type mismatch, tag: " + t + ", get type: " + r.type + ".")
}

Taf.JceInputStream.prototype.readString2 = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    if (r.type == Taf.DataHelp.EN_STRING1) {
        return this.buf.readBytes(this.buf.readUInt8())
    }
    if (r.type == Taf.DataHelp.EN_STRING4) {
        return this.buf.readBytes(this.buf.readUInt32())
    }
    throw Error("read 'string' type mismatch, tag: " + t + ", get type: " + r.type + ".")
}

Taf.JceInputStream.prototype.readBytes = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    if (r.type == Taf.DataHelp.EN_SIMPLELIST) {
        var n = this.readFrom()
        if (n.type != Taf.DataHelp.EN_INT8) {
            throw Error("type mismatch, tag:" + t + ",type:" + r.type + "," + n.type)
        }
        var s = this.readInt32(0, true)
        if (s < 0) {
            throw Error("invalid size, tag:" + t + ",type:" + r.type + "," + n.type)
        }
        return this.buf.readBytes(s)
    }
    if (r.type == Taf.DataHelp.EN_LIST) {
        var s = this.readInt32(0, true)
        return this.buf.readBytes(s)
    }
    throw Error("type mismatch, tag:" + t + ",type:" + r.type)
}

Taf.JceInputStream.prototype.readVector = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    if (r.type != Taf.DataHelp.EN_LIST) {
        throw Error("read 'vector' type mismatch, tag: " + t + ", get type: " + r.type)
    }
    var n = this.readInt32(0, true)
    if (n < 0) {
        throw Error("invalid size, tag: " + t + ", type: " + r.type + ", size: " + n)
    }
    for (var s = 0; s < n; ++s) {
        i.value.push(i.proto._read(this, 0, i.proto._clone()))
    }
    return i
}

Taf.JceInputStream.prototype.readMap = function (t, e, i) {
    if (this.skipToTag(t, e) == false) {
        return i
    }
    var r = this.readFrom()
    if (r.type != Taf.DataHelp.EN_MAP) {
        throw Error("read 'map' type mismatch, tag: " + t + ", get type: " + r.type)
    }
    var n = this.readInt32(0, true)
    if (n < 0) {
        throw Error("invalid map, tag: " + t + ", size: " + n)
    }
    for (var s = 0; s < n; s++) {
        var a = i.kproto._read(this, 0, i.kproto._clone())
        var o = i.vproto._read(this, 1, i.vproto._clone())
        i.put(a, o)
    }
    return i
}

Taf.Wup = function () {
    this.iVersion = 3
    this.cPacketType = 0
    this.iMessageType = 0
    this.iRequestId = 0
    this.sServantName = ""
    this.sFuncName = ""
    this.sBuffer = new Taf.BinBuffer
    this.iTimeout = 0
    this.context = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.status = new Taf.Map(new Taf.STRING, new Taf.STRING)
    this.data = new Taf.Map(new Taf.STRING, new Taf.Map(new Taf.STRING, new Taf.BinBuffer))
    this.newdata = new Taf.Map(new Taf.STRING, new Taf.BinBuffer)
}

Taf.Wup.prototype.setVersion = function (t) {
    this.iVersion = t
}

Taf.Wup.prototype.getVersion = function (t) {
    return this.iVersion
}

Taf.Wup.prototype.setServant = function (t) {
    this.sServantName = t
}

Taf.Wup.prototype.setFunc = function (t) {
    this.sFuncName = t
}

Taf.Wup.prototype.setRequestId = function (t) {
    this.iRequestId = t ? t : ++this.iRequestId
}

Taf.Wup.prototype.getRequestId = function () {
    return this.iRequestId
}

Taf.Wup.prototype.setTimeOut = function (t) {
    this.iTimeout = t
}

Taf.Wup.prototype.getTimeOut = function () {
    return this.iTimeout
}

Taf.Wup.prototype.writeTo = function () {
    var t = new Taf.JceOutputStream
    t.writeInt16(1, this.iVersion)
    t.writeInt8(2, this.cPacketType)
    t.writeInt32(3, this.iMessageType)
    t.writeInt32(4, this.iRequestId)
    t.writeString(5, this.sServantName)
    t.writeString(6, this.sFuncName)
    t.writeBytes(7, this.sBuffer)
    t.writeInt32(8, this.iTimeout)
    t.writeMap(9, this.context)
    t.writeMap(10, this.status)
    return new Taf.BinBuffer(t.getBuffer())
}

Taf.Wup.prototype.encode = function () {
    var t = new Taf.JceOutputStream
    if (this.iVersion == 3) {
        t.writeMap(0, this.newdata)
    } else {
        t.writeMap(0, this.data)
    }
    this.sBuffer = t.getBinBuffer()
    var e = new Taf.BinBuffer
    e = this.writeTo()
    var i = new Taf.BinBuffer
    i.writeInt32(4 + e.len)
    i.writeBytes(e)
    return i
}

Taf.Wup.prototype.writeBoolean = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeBoolean(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.BOOLEAN
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Taf.BinBuffer(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeInt8 = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeInt8(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.CHAR
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Taf.BinBuffer(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeInt16 = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeInt16(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.SHORT
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeInt32 = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeInt32(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.INT32
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeInt64 = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeInt64(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.INT64
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeFloat = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeFloat(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.FLOAT
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeDouble = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeDouble(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = TAF.TypeHelp.DOUBLE
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeString = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeString(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = Taf.TypeHelp.STRING
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeVector = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeVector(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBinBuffer()))
    } else {
        var r = this.data.get(t)
        var n = e._className()
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeStruct = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeStruct(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = " "
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeBytes = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeBytes(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = "vec"
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.writeMap = function (t, e) {
    var i = new Taf.JceOutputStream
    i.writeMap(0, e)
    if (this.iVersion == 3) {
        this.newdata.put(t, new Taf.BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t)
        var n = Taf.Util.getClassType(e)
        if (r == undefined) {
            var s = new Taf.Map(Taf.STRING, Taf.STRING)
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()))
        this.data.put(t, r)
    }
}

Taf.Wup.prototype.readFrom = function (t) {
    this.iVersion = t.readInt16(1, true)
    this.cPacketType = t.readInt8(2, true)
    this.iMessageType = t.readInt32(3, true)
    this.iRequestId = t.readInt32(4, true)
    this.sServantName = t.readString(5, true)
    this.sFuncName = t.readString(6, true)
    if (localStorage.__wup) {
        console.info("%c@@@ " + this.sServantName + "." + this.sFuncName, "color:whitebackground:black;", this)
    }
    this.sBuffer = t.readBytes(7, true)
    this.iTimeout = t.readInt32(8, true)
    this.context = t.readMap(9, true)
    this.status = t.readMap(10, true)
}

Taf.Wup.prototype.decode = function (t) {
    var e = new Taf.JceInputStream(t)
    var i = e.buf.vew.getInt32(e.buf.position)
    if (i < 4) {
        throw Error("packet length too short")
    }
    e.buf.position += 4
    this.readFrom(e)
    e = new Taf.JceInputStream(this.sBuffer.getBuffer())
    if (this.iVersion == 3) {
        this.newdata.clear()
        e.readMap(0, true, this.newdata)
    } else {
        this.data.clear()
        e.readMap(0, true, this.newdata)
    }
}

Taf.Wup.prototype.readBoolean = function (t) {
    var e, i
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = new Taf.JceInputStream(e.buffer)
        i = r.readBoolean(0, true, i)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = Taf.TypeHelp.BOOLEAN
        var s = e.get(n)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + n)
        }
        var r = new Taf.JceInputStream(s)
        i = r.readBoolean(0, true, i)
    }
    return i
}

Taf.Wup.prototype.readInt8 = function (t) {
    var e, i
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = new Taf.JceInputStream(e.buffer)
        i = r.readInt8(0, true, i)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = Taf.TypeHelp.CHAR
        var s = e.get(n)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + n)
        }
        var r = new Taf.JceInputStream(s)
        i = r.readInt8(0, true, i)
    }
    return i
}

Taf.Wup.prototype.readInt16 = function (t) {
    var e, i
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = new Taf.JceInputStream(e.buffer)
        i = r.readInt16(0, true, i)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = Taf.TypeHelp.SHORT
        var s = e.get(n)
        var r = new Taf.JceInputStream(s)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + n)
        }
        i = r.readInt16(0, true, i)
    }
    return i
}

Taf.Wup.prototype.readInt32 = function (t) {
    var e, i
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = new Taf.JceInputStream(e.buffer)
        i = r.readInt32(0, true, i)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = Taf.TypeHelp.INT32
        var s = e.get(n)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + n)
        }
        var r = new Taf.JceInputStream(s)
        i = r.readInt32(0, true, i)
    }
    return i
}

Taf.Wup.prototype.readInt64 = function (t) {
    var e, i
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = new Taf.JceInputStream(e.buffer)
        i = r.readInt64(0, true, i)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = Taf.TypeHelp.INT64
        var s = e.get(n)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + n)
        }
        var r = new Taf.JceInputStream(s)
        i = r.readInt64(0, true, i)
    }
    return i
}

Taf.Wup.prototype.readFloat = function (t) {
    var e, i
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = new Taf.JceInputStream(e.buffer)
        i = r.readFloat(0, true, i)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = Taf.TypeHelp.FLOAT
        var s = e.get(n)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + n)
        }
        var r = new Taf.JceInputStream(s)
        i = r.readFloat(0, true, i)
    }
    return i
}

Taf.Wup.prototype.readDouble = function (t) {
    let def;
    var e
    if (this.iVersion == 3) {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var i = new Taf.JceInputStream(e.buffer)
        def = i.readDouble(0, true, def)
    } else {
        e = this.newdata.get(t)
        if (e == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var r = Taf.TypeHelp.DOUBLE
        var n = e.get(r)
        if (n == undefined) {
            throw Error("UniAttribute not found type:" + r)
        }
        var i = new Taf.JceInputStream(n)
        def = i.readDouble(0, true, def)
    }
    return def
}

Taf.Wup.prototype.readVector = function (t, e, i) {
    var r
    if (this.iVersion == 3) {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = new Taf.JceInputStream(r.buffer)
        e = n.readVector(0, true, e)
    } else {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var s = r.get(i)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + i)
        }
        var n = new Taf.JceInputStream(s)
        e = n.readVector(0, true, e)
    }
    return e
}

Taf.Wup.prototype.readStruct = function (t, e, i) {
    var r
    if (this.iVersion == 3) {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = new Taf.JceInputStream(r.buffer)
        e = n.readStruct(0, true, e)
    } else {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var s = r.get(i)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + i)
        }
        var n = new Taf.JceInputStream(s)
        e = n.readStruct(0, true, e)
    }
    return e
}

Taf.Wup.prototype.readMap = function (t, e, i) {
    var r
    if (this.iVersion == 3) {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = new Taf.JceInputStream(r.buffer)
        e = n.readMap(0, true, e)
    } else {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var s = r.get(i)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + i)
        }
        var n = new Taf.JceInputStream(s)
        e = n.readMap(0, true, e)
    }
    return e
}

Taf.Wup.prototype.readBytes = function (t, e, i) {
    var r
    if (this.iVersion == 3) {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var n = new Taf.JceInputStream(r.buffer)
        e = n.readBytes(0, true, e)
    } else {
        r = this.newdata.get(t)
        if (r == undefined) {
            throw Error("UniAttribute not found key:" + t)
        }
        var s = r.get(i)
        if (s == undefined) {
            throw Error("UniAttribute not found type:" + i)
        }
        var n = new Taf.JceInputStream(s)
        e = n.readBytes(0, true, e)
    }
    return e
}

Taf.Util = Taf.Util || {}
Taf.Util.jcestream = function (t, e) {
    if (t == null || t == undefined) {
        console.log("Taf.Util.jcestream::value is null or undefined")
        return
    }
    if (!(t instanceof ArrayBuffer)) {
        console.log("Taf.Util.jcestream::value is not ArrayBuffer")
        return
    }
    e = e || 16
    var i = new Uint8Array(t)
    var r = ""
    for (var n = 0; n < i.length; n++) {
        if (n != 0 && n % e == 0) {
            r += "\n"
        } else if (n != 0) {
            r += " "
        }
        r += (i[n] > 15 ? "" : "0") + i[n].toString(16)
    }
    console.log(r.toUpperCase())
}

Taf.Util.str2ab = function (t) {
    var e, i = t.length, r = new Array(i)
    for (e = 0; e < i; ++e) {
        r[e] = t.charCodeAt(e)
    }
    return new Uint8Array(r).buffer
}

Taf.Util.ajax = function (t, e, i, r) {
    var n = new XMLHttpRequest
    n.overrideMimeType("text/plain charset=x-user-defined");
    var s = function () {
        if (n.readyState === 4) {
            if (n.status === 200 || n.status === 304) {
                i(Taf.Util.str2ab(n.response))
            } else {
                r(n.status)
            }
            n.removeEventListener("readystatechange", s)
            n = undefined
        }
    }
    n.addEventListener("readystatechange", s)
    n.open("post", t)
    n.send(e)
}
