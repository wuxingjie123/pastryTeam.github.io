# 业务插件/组件

----
## 插件目录通用结构



----
## --------------------------

----
## 插件总览

|插件名称|pastry|ionic|进度|JS /进度|iOS /进度|android /进度|
|-----|-----|-----|-----|-----|-----|-----|
|框架级别插件|||||||
|[pastry-plugin-blankMain][net_blankMain]|Y|-|Loading|N|Y /Complete|Y /   Await|
|[pastry-plugin-sideMain][net_sideMain] |Y| - | Loading |N|Y /Complete|Y /   Await|
|[pastry-plugin-tabMain][net_tabMain] |Y|-|Loading|N|Y /Complete|Y /   Await|
|基础库级别插件|||||||
|pastry-plugin-base-ionic |-|Y|Loading|-|Y /Complete|Y /   Await|
|交互级别插件|||||||
|[pastry-plugin-keyboard][net_keyboard] |Y|Y|Complete|Y|Y /Complete|Y /   Await|
|[pastry-plugin-request][net_request] |Y|Y|Complete|Y|Y /Complete|Y /   Await|
|[pastry-plugin-browser][net_browser] |Y|-|Complete|N|Y /Complete|Y /Complete|
|[pastry-plugin-storage][net_storage] |Y|Y|Loading|Y|Y /Complete|Y /   Await|
|[pastry-plugin-pastryState][net_pastryState]|Y|Y|   Await|Y|Y /Complete|Y /   Await|
|UI级别插件|||||||
|[pastry-plugin-unzip][net_unzip] |Y|Y| Loading |-|Y /Complete|Y /   Await|
|[pastry-plugin-guide][net_guide] |Y|-| Loading |-|Y /Complete|Y /   Await|
|[pastry-plugin-login][net_login] |Y|-| Loading |-|Y /Complete|Y /   Await|
|[pastry-plugin-QRcode][net_QRcode] |Y|-| Loading |Y|Y /Complete|Y /   Await|
|[pastry-plugin-OCR][net_OCR] |Y|-| Loading |Y|Y /Complete|Y /   Await|
|[pastry-plugin-share][net_share] |Y|-|   Await|N|Y /Complete|Y /   Await|
|[pastry-plugin-DB][net_DB] |Y|-|   Await|N|Y /Complete|Y /   Await|

## CLI进展

|平台|build|plugin|platform|JS /进度|iOS /进度|android /进度|
|-----|-----|-----|-----|-----|-----|-----|
|pastry CLI|Y|Y|Y|Y|Y|Y|
|ionic CLI||Y|||||

----
## --------------------------

----
## 日志插件

* 功能

    * 提供H5使用 console.log() 将日志输出到 原生端的开发IDE输出框；

* 使用方法

    * [cordova-plugin-console 地址][net_console]

[net_console]: https://github.com/pastryTeam/cordova-plugin-console

----
## 白名单插件

* 功能

    * 提供 android 白名单功能。

* 使用方法

    * [cordova-plugin-whitelist 地址][net_whitelist]

[net_whitelist]: https://github.com/pastryTeam/cordova-plugin-whitelist

----
## 浏览器插件

* 功能

    * 提供多窗口功能，避免页面间的环境变量互相污染。

* 使用方法

    * [pastry-plugin-browser 地址][net_browser]

[net_browser]: https://github.com/pastryTeam/pastry-plugin-browser

----
## 网络请求插件

* 功能

    * H5的网络请求通过原生加密后发送给服务器。

* 使用方法

    * [pastry-plugin-request 地址][net_request]

[net_request]: https://github.com/pastryTeam/pastry-plugin-request

----
## 本地加密存储插件

* 功能

    * 提供H5使用原生的本地加密存储功能。

* 使用方法

    * [pastry-plugin-storage 地址][net_storage]

[net_storage]: https://github.com/pastryTeam/pastry-plugin-storage

----
## 密码键盘插件

* 功能

    * 提供H5使用原生的密码键盘功能。

* 使用方法

    * [pastry-plugin-keyboard 地址][net_keyboard]

[net_keyboard]: https://github.com/pastryTeam/pastry-plugin-keyboard

----
## 原生端状态信息插件

* 功能

    * 提供H5获取pastry平台原生端网络状态、会话状态等信息。

* 使用方法

    * [pastry-plugin-pastryState 地址][net_pastryState]

[net_pastryState]: https://github.com/pastryTeam/pastry-plugin-pastryState

## --------模版插件--------

----
## 选项库模版插件

* 功能

    * 提供选项卡模版功能

* 使用方法

    * [pastry-plugin-tabMain 地址][net_tabMain]

[net_tabMain]: https://github.com/pastryTeam/pastry-plugin-tabMain

----
## 侧边框模版插件

* 功能

    * 提供侧边框功能

* 使用方法

    * [pastry-plugin-sideMain 地址][net_sideMain]

[net_sideMain]: https://github.com/pastryTeam/pastry-plugin-sideMain

----
## 空白模版插件

* 功能

    * 提供空白模版功能

* 使用方法

    * [pastry-plugin-blackMain 地址][net_blankMain]

[net_blankMain]: https://github.com/pastryTeam/pastry-plugin-blankMain

----
## ------------UI------------

----
## 解压缩页面组件

* 功能

    * 提供data.zip解压缩的页面功能

* 使用方法

    * [pastry-plugin-unzip 地址][net_unzip]

[net_unzip]: https://github.com/pastryTeam/pastry-plugin-unzip

----
## 引导页面组件

* 功能

    * 提供引导页面功能

* 使用方法

    * [pastry-plugin-guide 地址][net_guide]

[net_guide]: https://github.com/pastryTeam/pastry-plugin-guide

----
## 登录组件

* 功能

    * 提供登陆功能

* 使用方法

    * [pastry-plugin-login 地址][net_login]

[net_login]: https://github.com/pastryTeam/pastry-plugin-login

----
## OCR身份证验证组件

* 功能

    * 提供身份证验证功能

* 使用方法

    * [pastry-plugin-OCR 地址][net_OCR]

[net_OCR]: https://github.com/pastryTeam/pastry-plugin-OCR

----
## 二维码组件

* 功能

    * 提供二维码功能

* 使用方法

    * [pastry-plugin-QRcode 地址][net_QRcode]

[net_QRcode]: https://github.com/pastryTeam/pastry-plugin-QRcode


----
## --------------------------

----
## 更多插件

* [cordova 官方插件地址][net_cordovaplugins]

* [pastry 业务插件地址][net_pastryplugins]


[net_cordovaplugins]: https://github.com/apache?utf8=%E2%9C%93&query=cordova-
[net_pastryplugins]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+pastry-plugin&type=Repositories&ref=searchresults
