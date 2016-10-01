# Pastry培训

## 前言
----

> 培训的目的不仅仅是指导大家使用平台进行工作，更多的是旨在与大家铺设一条技术成长的道路，以便我们在技术上走的更快更远。
> 授之以鱼，授之以渔。

## 培训课程目录
----
* 1。预备知识 `课程要求 : 业务开发工程师/了解 核心开发工程师/熟悉掌握`

    * [1.1。Hybrid发展史及Cordova平台][md_hybrid]

    * [1.2。密码学][md_cryptology]

* [2。Pastry平台目标、架构、功能、问题、展望][md_abstract] `课程要求 : 业务开发工程师/了解 核心开发工程师/熟悉掌握`

* [3。Pastry平台快速开始][md_quickstart] `课程要求 : 业务开发工程师/熟悉掌握 核心开发工程师/熟悉掌握`

* [4。Pastry CLI][md_pastry-cli] `课程要求 : 业务开发工程师/熟悉掌握 核心开发工程师/熟悉掌握`

    * [4.1。bake create 创建项目][md_pastry-cli]

    * [4.2。bake platform 管理平台][md_pastry-cli]

    * [4.3。bake plugin 管理组件][md_pastry-cli]

    * [4.4。bake bower 管理组件][md_pastry-cli]

    * [4.5。bake build 编译项目][md_pastry-cli]

    * [4.6。html打包工具 XTools][md_xtools]

* [4。Pastry组件][md_plugin] `课程要求 : 业务开发工程师/了解 核心开发工程师/熟悉掌握`

    * [4.1。Pastry组件分类介绍][md_plugin]

    * [4.2。Pastry组件管理工具][md_plugin]

    * [4.3。Pastry组件整体概览][md_plugin]

* 5。Pastry JS 业务层 开发 `课程要求 : 业务开发工程师/熟悉掌握 核心开发工程师/熟悉掌握`

    * [完整JS页面结构及开发流程预览][md_quickstart-js]
        * 定义html基本结构
            * 定义meta属性
            * JS框架添加引用main.js、lib、css、data-debug等属性
            * 定义 body
        * 定义业务模版
            * 定制业务模版A、B、C等
        * 定义页面入口函数 
            * 接收 其它window的传参  
            * 定制 windowModel 数据模型
                * 在windowModel中填充 pageModel、componentModel
                    * 设置 pageModel、componentModel默认值
                    * 设置 pageModel、componentModel数据请求 
            * 设置 window（html文件）的 Model 为 windowModel:(api.setModels(windowModel))
            * 自定义组件
                * 使用 CSS 定义组件样式（按钮点击效果用 bootstrap 实现）
                * 使用 template 定义组件内部模版 
            * 浏览器显示window
            * 组件更新
                * 依赖 Browser.histroy_goto 方法更新组件
                * 使用 api.refreshComponentById 方法更新指定组件
                * 待定：组件更新也可以用代理(data-name)或数据分发(dispatcher)的方式，获取父组件的数据
            * 获取指定组件的Model
            * 更新指定组件的Model，UI上显示更新后的数据
            * 用户进行业务操作，修改对应的数据
                * Button Click实现（推荐）
                    * 开发者手动获取指定Component的Model里的值
            * 提交表单数据进行验证  
                * onSubmit 方法（推荐）
                    * 框架以data-name的方式搜集页面中所有的 数据:(搜集页面中所有数据时必须保证组件既有id，又有data-name属性)
                    * 开发者手动获取指定Component的Model里的值
            * 对其他window进行传参
    
    * [框架导入-模块依赖 章节][md_quickstart-js]
    * Label示例
    * Button示例 `三态按钮制作中`
    * Switch示例
    * 
    * 普通组件的业务场景

    * 复杂组件的业务场景

        * list组件的使用方法

        * select组件使用的方法

        * list + select组件的使用方法

        * list + list组件的使用方法

        * list item 左滑、右滑的使用方法  

    * 页面跳转

        * 一级业务

            * 返回按钮

            * 不返回按钮

        * 二级业务

            * 返回按钮

            * 不返回按钮

        * 三级业务

            * 返回按钮

            * 不返回按钮

        * 多级业务

            * 返回按钮

            * 不返回按钮

    * 语言国际化

* 7。pastry 原生 业务层 开发

    * iOS/android 业务组件
        
        * 必选组件
            
            * 项目模版组件
                
                * [空白模版组件][net_blank]
                
                * [侧边框模版组件][net_side]
                
                * [选项卡模版组件][net_tab]
            
            * [解压缩页面组件][net_unzip]
            
            * [引导页面组件][net_guide]
            
            * [登录页面组件][net_login]
        
        * 可选组件
            
            * 无
    
    * Cordova组件
        * 必选组件
        
            * [浏览器组件][net_browser] 
    
            * [网络通讯][net_request]
    
            * [密码键盘][net_keyboard]
         
            * [本地加解密存储][net_storage]
            
            * [获取原生会话状态][net_pastryState]
    
        * 可选组件
        
            * [OCR身份验证组件][net_OCR]
            
            * [二维码组件][net_QRcode]

* 8。pastry 前置 业务层 开发

    * 8.1。与第三方服务器交互方式（http｜socket）

    * 8.2。前置部署

        * 8.2.1。（负载均衡，解决问题并发、was）

    * 8.3。简单的逻辑转发


* 9。pastry JS 框架层

    * 6.1。pastry JS 的示例讲解

* 10。pastry 原生 框架层

    * 7.1。pastry iOS  

        * 7.1.1。pastry iOS功能介绍

        * 7.1.2。pastry iOS功能示例

    * 7.2。pastry android

        * 7.2.1。pastry android功能介绍

        * 7.2.2。pastry android 功能示例

* 11。pastry 前置 框架层

    * 11.1。会话管理

    * 11.2。通讯安全

* 12。调试发布

    * 13.1。[Cordova调试方法简介][net_cordova-test]

    * 13.2。[调试方法简介][net_pastry-test]

    
* 14。制作Pastry组件

----
## Pastry标准概念

| **通用概念** |**Pastry扩展工具**|**Pastry扩展功能**| **通用概念+Pastry扩展工具+Pastry扩展功能<br/>=<br/>Pastry专属概念** |
|-----|-----|-----|-----|
| Hybrid(混合开发) | - | - | √ |
| CLI(Command Line Interface:命令行工具) | - | - | √ |
| Codova(JS桥) | - | - | √ |
| Cordova CLI(Cordova 命令行工具) | `xTools`<br/>`bower` | <br/>`xTools : 对html、js等Web前端进行加密打包`<br/>`bower : JS平台业务组件 管理功能` | [Pastry CLI(Pastry 命令行工具)][md_pastry-cli] |
| Cordova Plugin(Cordova 插件) | - | **框架组件**<br/>`JS平台框架组件`<br/>`iOS平台框架组件`<br/>`android平台框架组件`<br/>`前置框架组件`<br/>**业务组件**<br/>`JS平台业务组件`<br/>`iOS平台业务组件`<br/>`android平台业务组件`<br/>`前置业务组件` | [Pastry 组件][md_plugin] |
| [Cordova JS基础模版 GitHub][net_cordova-js] | `JS平台框架组件` | `1 UI基础组件`<br/>`2 页面管理器`<br/>`3 模版管理模块`<br/>`4 数据模型`<br/>`5 实用函数` | [Pastry JS基础模版 GitHub][net_pastry-js] |
| [Cordova iOS基础模版 GitHub][net_cordova-ios] | `iOS平台框架组件` | `1 升级管理组件`<br/>`2 安全组件`<br/>`3 资源文件安全组件`<br/>`4 安全存储组件`<br/>`5 安全网络通讯组件`<br/>`6 日志组件`<br/>`7 密码键盘组件(可选组件)` | [Pastry iOS基础模版 GitHub][net_pastry-ios] |
| [Cordova android基础模版 GitHub][net_cordova-android] | `android平台框架组件` | `1 升级管理组件`<br/>`2 安全组件`<br/>`3 资源文件安全组件`<br/>`4 安全存储组件`<br/>`5 安全网络通讯组件`<br/>`6 日志组件`<br/>`7 密码键盘组件(可选组件)` | [Pastry android基础模版 GitHub][net_pastry-android] |
| Cordova标准目录结构 | 添加服务器目录、bower配置文件 | `目录 pastry-fo-java`<br/>`目录 pastry-fo-nodejs`<br/>`隐藏文件 .browercc` | [Pastry 标准目录结构][md_fqa] |
| [调试方法 文档][net_cordova-test] | 浏览器模式数据调试 | JS 本地浏览器调试<br/>`html标志 data-debug='@mockdata'` | [Pastry 调试方法 文档][net_pastry-test] | 
| - | **框架层** | - | - |
| - | Pastry JS 框架层 | 提供 JS平台框架组件 功能 | Pastry JS 框架层 |
| - | Pastry 原生 框架层 | - | Pastry 原生 框架层 |
| - | Pastry iOS 框架层 | 提供 iOS平台框架组件 功能 | Pastry iOS 框架层 |
| - | Pastry android 框架层 | 提供 android平台框架组件 功能 | Pastry android 框架层 |
| - | Pastry 前置 框架层 | 提供 前置组件功能 | Pastry 前置 框架层 |
| - | **业务层** | - | - |
| - | Pastry JS 业务层 | 提供 JS平台业务组件 功能 | Pastry JS 业务层 |
| - | Pastry 原生 业务层 | - | Pastry 原生 业务层 |
| - | Pastry iOS 业务层 | 提供 iOS平台业务组件 功能 | Pastry iOS 业务层 |
| - | Pastry android 业务层 | 提供 android平台业务组件 功能 | Pastry android 业务层 |
| - | Pastry 前置 业务层 | - | Pastry 前置 业务层 |


----
## 答疑解惑

  * ### [更多问题进入PastryTeam GitHub issues][net_issues]

[net_issues]: https://github.com/pastryTeam/pastryTeam.github.io/issues

[net_cordova-js]: https://github.com/apache/cordova-js
[net_cordova-ios]: https://github.com/apache/cordova-ios
[net_cordova-android]: https://github.com/apache/cordova-android
[net_cordova-test]: http://cordova.apache.org/docs/en/latest/guide/next/index.html#testing-cordova-apps

[net_pastry-js]: #
[net_pastry-ios]: https://github.com/pastryTeam/ios-template
[net_pastry-android]: https://github.com/pastryTeam/android-template
[net_pastry-test]: ./index.md



[md_hybrid]: ./ready/hybrid.md

[md_cryptology]: ./ready/cryptology.md

[md_abstract]: ./abstract/abstract.md

[md_quickstart]: ./index.md

[md_quickstart-js]: ./quickstart/quickstart-js.md

[md_fqa]: ./faq.md

[md_pastry-cli]:./pastry-cli/bake.md

[md_plugin]: ./plugins/plugins.md

[md_pastry-js]: ./quickstart/pastry-js.md

[md_xtools]: ./pastry-cli/XTools.md

[net_storage]: https://github.com/pastryTeam/pastry-plugin-storage
[net_keyboard]: https://github.com/pastryTeam/pastry-plugin-keyboard
[net_request]: https://github.com/pastryTeam/pastry-plugin-request
[net_QRcode]: https://github.com/pastryTeam/pastry-plugin-QRcode
[net_OCR]: https://github.com/pastryTeam/pastry-plugin-OCR
[net_pastryState]: https://github.com/pastryTeam/pastry-plugin-pastryState
[net_browser]: https://github.com/pastryTeam/pastry-plugin-browser

