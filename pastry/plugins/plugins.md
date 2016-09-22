# 组件分类

----
## 组件分类

**1. 组件分类包括三个大类：框架功能组件、业务UI组件、cordova插件**

* 框架功能组件
    
    * `框架功能组件 iOS`：包含 网络通讯、安全模块、本地存储、日志模块等
    
    * `框架功能组件 android`：包含 网络通讯、安全模块、本地存储、日志模块等
    
    * `框架功能组件 js`：包含 js基础控件、网络通讯等

* 业务UI组件

    * `业务UI组件 iOS`：包含 解压缩组件、登录组件、二维码组件等

    * `业务UI组件 android`：包含 登陆组件、二维码组件等
    
    * `业务UI组件 js`：包含 注册组件、信用卡申请组件等

* cordova组件

    * `cordova组件`：包含 请求组件、密码键盘组件、摄像头组件等

----
## 组件管理工具

**1. 管理工具选型说明**

| `管理工具` \ `平台` | ios | android | js | cordova组件 |
|----|----|----|----|----|
| CocoaPods      | `√` |  ×  |  ×  |  ×  |
| Maven(Gradle) |  ×  | `√` |  ×  |  ×  |
| bower         |  ×  |  ×  | `√` |  ×  |
| Cordova       | `√` | `√` | `√` | `√` |

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
    
    * **`结论：备用 --> pastry js本身对js端的目录指定规则，可以使用cordova满足目录规则，待确认。`**

**3. 组件管理工具**

* 自动集成

    * 适用于 `框架功能组件 iOS`、`框架功能组件 android`、`框架功能组件 js`

* bower ([pastry bake bower][md_moreCli])
    
    * 适用于 `业务UI组件 js`
    
* cordova ([pastry bake plugin][md_moreCli])

    * 适用于 `业务UI组件 iOS`、`业务UI组件 android`、`cordova组件`


[md_moreCli]: ../pastry-cli/bake.md
