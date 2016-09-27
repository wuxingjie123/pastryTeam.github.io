# Pastry组件分类

----
## Pastry组件分类

**Pastry组件分类包括三个大类：框架组件、业务组件、cordova组件**

  * 框架组件
    
    * `iOS平台 框架组件`：包含 网络通讯、安全模块、本地存储、日志模块等
    
    * `android平台 框架组件`：包含 网络通讯、安全模块、本地存储、日志模块等
    
    * `JS平台 框架组件`：包含 JS基础控件、网络通讯等
    
    * `前置 框架组件`：包括 协商密钥、通讯安全等
    
  * 业务组件
    
    * `iOS平台 业务组件`：包含 解压缩组件、登录组件、二维码组件等
    
    * `android平台 业务组件`：包含 登陆组件、二维码组件等
    
    * `JS平台 业务组件`：包含 注册组件、信用卡申请组件等
    
    * `前置 业务组件`：无
    
  * cordova组件
    
    * `cordova组件`：包含 请求组件、密码键盘组件、摄像头组件等

----
## 组件管理工具

----
**1. 管理工具选型说明**

| `管理工具` \ `平台` | ios | android | JS | cordova组件 | 前置 |
|-----|-----|-----|-----|-----|-----|
| CocoaPods      | `√` |  ×  |  ×  |  ×  |  ×  |
| Maven/Gradle |  ×  | `√` |  ×  |  ×  |  ×  |
| Pastry(bower) |  ×  |  ×  | `√` |  ×  |  ×  |
| Pastry(Cordova) | `√` | `√` | `√` | `√` |  ×  |

----
**2. 选型说明**

  * 假设 CocoaPods管理iOS、Maven管理android、bower管理js、cordova管理cordova组件
    
    * 现象：同一个项目里需要四种管理工具，且每种管理工具都需要专门的人掌握。
    
    * 结论：弃用 --> 这种方式增加项目管理的复杂程度。
    
  * 假设 CocoaPods管理iOS、Cordova管理android、js、cordova组件
    
    * 现象：iOS单独管理，其它平台使用cordova管理。
    
    * 结论：弃用 --> iOS在混合开发中与android平级，特殊处理没有必要。
    
  * 假设 Maven管理android、Cordova管理iOS、js、cordova组件
    
    * 现象：android单独管理，其它平台使用cordova管理。
    
    * 结论：弃用 --> android在混合开发中与iOS平级，特殊处理没有必要。
    
  * 假设 bower管理js、Cordova管理android、iOS、cordova组件
    
    * 现象：js单独管理，其它平台使用cordova管理。
    
    * **`结论：选用（当前使用） --> pastry js本身对js端的目录指定规则，可以使用bower满足目录规则。`**
    
  * 假设 Cordova管理android、iOS、js、cordova组件
    
    * 现象：所有平台使用cordova管理。
    
    * 结论：弃用 --> pastry js本身对js端的目录指定规则，使用cordova安装，JS文件会以cordova 插件的形式安装到 各个平台的plugin目录，而非 根目录/www 目录下，无法满足pastry js制定的要求。

----
**3. Pastry组件管理工具**

| Pastry组件分类 | Pastry组件管理工具 |
|----|----|
| **框架组件** | - |
| `JS平台 框架组件` | 集成到 Pastry JS基础模版 |
| `iOS平台 框架组件` | 集成到 Pastry iOS基础模版 |
| `android平台 框架组件` | 集成到 Pastry android基础模版 |
| `前置 框架组件` | 集成到 Pastry 前置基础模版 |
| **业务组件** | - |
| `JS平台 业务组件` | Pastry(bower) : [pastry bake bower][md_moreCli] |
| `iOS平台 业务组件` | Pastry(Cordova) : [pastry bake plugin][md_moreCli] |
| `android平台 业务组件` | Pastry(Cordova) : [pastry bake plugin][md_moreCli] |
| `前置 业务组件` | - |
| **cordova组件** | - |
| `cordova组件` | Pastry(Cordova) : [pastry bake plugin][md_moreCli] |

[md_moreCli]: ../pastry-cli/bake.md

----
## 框架组件

| 框架组件分类 | 组件名称 | 功能 | 源码地址(GitHub) |
|-----|-----|-----|-----|
| `iOS平台` |   |   |   |
| `android平台` |   |   |   |
| `JS平台` |   |   |   |
| `前置平台` |   |   |   |

----
## 业务组件

| 业务组件分类 | 组件名称 | 功能 | 源码地址(GitHub) |
|-----|-----|-----|-----|
| `iOS平台` | `模版组件` | - | - |
|   | 空白模版组件 | 提供空白模版功能 | [pastry-plugin-blankMain][net_blankMain] |
|   | 侧边框模版组件 | 提供侧边框功能 | [pastry-plugin-sideMain][net_sideMain] |
|   | 选项卡模版组件 | 提供选项卡模版功能 | [pastry-plugin-tabMain][net_tabMain] |
|   | `解压缩页面组件` | 提供data.zip解压缩的页面功能 | [pastry-plugin-unzip][net_unzip] |
|   | `引导页面组件` | 提供引导页面功能 | [pastry-plugin-guide][net_guide] |
|   | `登录页面组件` | 提供登陆功能 | [pastry-plugin-login][net_login] |
| `android平台` | `模版组件` | - | - |
|   | 空白模版组件 |  |  |
|   | 选项卡模版组件 |  |  |
| `JS平台` | - | - | - |
|   | `注册组件` |   | [component-js-register][net_register] |
|   | `忘记密码组件` |   | [component-js-forgetpwd][net_forgetpwd] |
|   | `侧边框组件` |   |   |
| `前置平台` | - | - | - |

[net_register]: https://github.com/pastryTeam/component-js-register

[net_forgetpwd]: https://github.com/pastryTeam/component-js-forgetpwd

----
## Cordova组件

| Cordova分类 | 组件名称 | 功能 | 源码地址(GitHub) |
|-----|-----|-----|-----|-----|-----|-----|
|   | `浏览器组件` | 提供多窗口功能，避免页面间的环境变量互相污染 | [pastry-plugin-browser][net_browser] |
|   | `网络通讯组件` | H5的网络请求通过原生加密后发送给服务器 | [pastry-plugin-request][net_request] |
|   | `会话状态组件` | 提供H5获取pastry平台原生端网络状态、会话状态等信息 | [pastry-plugin-pastryState][net_pastryState] |
|   | `密码键盘组件` | 提供H5使用原生的密码键盘功能 | [pastry-plugin-keyboard][net_keyboard] |
|   | `本地加解密存储组件` | 提供H5使用原生的本地加密存储功能 | [pastry-plugin-storage][net_storage] |
|   | `日志组件` | 提供H5使用 console.log() 将日志输出到 原生端的开发IDE输出框 | [cordova-plugin-console][net_console] |
|   | `白名单组件` | 提供 android 白名单功能 | [cordova-plugin-whitelist][net_whitelist] |
|   | `OCR身份证验证组件` | 提供身份证验证功能 | [pastry-plugin-OCR][net_OCR] |
|   | `二维码组件` | 提供二维码功能 | [pastry-plugin-QRcode][net_QRcode] |



[net_console]: https://github.com/pastryTeam/cordova-plugin-console

[net_whitelist]: https://github.com/pastryTeam/cordova-plugin-whitelist

[net_browser]: https://github.com/pastryTeam/pastry-plugin-browser

[net_request]: https://github.com/pastryTeam/pastry-plugin-request

[net_storage]: https://github.com/pastryTeam/pastry-plugin-storage

[net_keyboard]: https://github.com/pastryTeam/pastry-plugin-keyboard

[net_pastryState]: https://github.com/pastryTeam/pastry-plugin-pastryState

[net_tabMain]: https://github.com/pastryTeam/pastry-plugin-tabMain

[net_sideMain]: https://github.com/pastryTeam/pastry-plugin-sideMain

[net_blankMain]: https://github.com/pastryTeam/pastry-plugin-blankMain

[net_unzip]: https://github.com/pastryTeam/pastry-plugin-unzip

[net_guide]: https://github.com/pastryTeam/pastry-plugin-guide

[net_login]: https://github.com/pastryTeam/pastry-plugin-login

[net_OCR]: https://github.com/pastryTeam/pastry-plugin-OCR

[net_QRcode]: https://github.com/pastryTeam/pastry-plugin-QRcode

----
## 更多组件

* [brower组件地址][net_pastryjs]

[net_pastryjs]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+component-js-&type=Repositories&ref=searchresults

* [cordova 官方插件地址][net_cordovaplugins]

* [pastry 业务插件地址][net_pastryplugins]


[net_cordovaplugins]: https://github.com/apache?utf8=%E2%9C%93&query=cordova-
[net_pastryplugins]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+pastry-plugin&type=Repositories&ref=searchresults
