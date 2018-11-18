# 虎牙弹幕流抓取

## 使用方法

`index.js`暴露了主函数的入口

目前引入方法：
其中callback为消息处理函数
````javaScript
const DanMuFetch = require("./index")
const danMuFetch = new DanMuFetch(url, handleMsg) // handleMsg 在handler包中有dbHandler可以使用，也可以自己实现

danMuFetch.start()
//danMuFetch.stop()
````