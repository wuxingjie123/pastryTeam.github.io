# 简介(平台架构)

## 概述
Pastry平台是一套跨屏幕、跨平台的前端解决方案.支持主流的操作系统和浏览器,可以实现代码一次编写多平台运行.

* 支持平台
    * 操作系统支持
      * Windows XP 及以上
      * Linux
      * MacOSX
    * 浏览器支持
      * IE 7+
      * Chrome
      * FireFox
      * Safari
    * 移动平台支持
      * Android 2.3+
      * iOS 6.0+

----
## 目标

* 目标

    ![平台目标图](/pastry/images/abstract/pastry_target.png)
    
[md_faq]: ../faq.md

----
## Pastry平台整体架构
* Pastry开发模式

  * 纯网页

    * 仅使用网页功能,开发PC Web应用或移动端Wap应用.

  * 微信

    * 开发在微信中运行的页面.

  * 混合

    * 开发原生和Html混合开发的应用,Html页面可以通过桥调用原生提供的增强功能.

  ![平台整体结构图](/pastry/images/abstract/pastry_struct.png)

----
## ---Pastry与Cordova功能对比

| Cordova | Pastry扩展功能 | Pastry平台 |
| ----- | ----- | ----- |
| CLI | `JS打包加密功能`<br/>`bower组件管理功能` | Pastry CLI |
| 项目目录结构 | 添加服务器目录<br/>`目录 pastry-fo-java`<br/>`目录 pastry-fo-nodejs` | Pastry 项目目录结构 |
| [JS基础模版 GitHub][net_cordova-js] | pastry JS框架<br/>功能：<br/>`1 UI基础组件`<br/>`2 页面管理器`<br/>`3 模版管理模块`<br/>`4 数据模型`<br/>`5 实用函数` | [Pastry JS基础模版 GitHub][net_pastry-js] |
| [iOS基础模版 GitHub][net_cordova-ios] | 添加 pastry iOS框架<br/>功能：<br/>`1 升级管理组件`<br/>`2 安全组件`<br/>`3 资源文件安全组件`<br/>`4 安全存储组件`<br/>`5 安全网络通讯组件`<br/>`6 日志组件`<br/>`7 密码键盘组件(可选组件)` | [Pastry iOS基础模版 GitHub][net_pastry-ios] |
| [android基础模版 GitHub][net_cordova-android] | 添加 pastry android框架<br/>功能：<br/>`1 升级管理组件`<br/>`2 安全组件`<br/>`3 资源文件安全组件`<br/>`4 安全存储组件`<br/>`5 安全网络通讯组件`<br/>`6 日志组件`<br/>`7 密码键盘组件(可选组件)` | [Pastry android基础模版 GitHub][net_pastry-android] |
| [调试支持 文档][net_cordova-test] | JS 本地浏览器调试<br/>`html标志 data-debug='@mockdata'` | [Pastry 调试支持 文档][net_pastry-test] | 

CLI：Command Line Interface（命令行工具）

[net_cordova-js]: https://github.com/apache/cordova-js
[net_cordova-ios]: https://github.com/apache/cordova-ios
[net_cordova-android]: https://github.com/apache/cordova-android
[net_cordova-test]: http://cordova.apache.org/docs/en/latest/guide/next/index.html#testing-cordova-apps

[net_pastry-js]: #
[net_pastry-ios]: https://github.com/pastryTeam/ios-template
[net_pastry-android]: https://github.com/pastryTeam/android-template
[net_pastry-test]: ../index.md


----
## ------JS框架架构
* **1、技术栈**

    * Pastry JS框架基于以下开源框架
    
      * [Bootstrap][net_bootstrap]
      * [jQuery][net_jQuery]
      * [Backbone][net_Backbone]
      * [RequireJS][net_RequireJS]
      * [Underscore][net_Underscore]

    ![Native框架架构图2](/pastry/images/abstract/pastry_js2.png)
    
    ![Native框架架构图](/pastry/images/abstract/pastry_js.png)

* **2、JS选型**
    
    ![JS选型图](/pastry/images/abstract/js_compare.png)

* **3、backbone**
    
    ![backbone图](/pastry/images/abstract/js_backbone.png)

* **4、JS桥**

    * [Cordova][net_Cordova]
    
    ![JS桥图](/pastry/images/abstract/js_bridge.png)

----
## ------Native框架架构

* **1、Native框架架构**

    ![Native框架架构图](/pastry/images/abstract/pastry_native.png)

----
## ------服务器框架架构

* **1、服务器框架架构**

    ![服务器框架架构图](/pastry/images/abstract/pastry_server.png)

----
## 工具链
* **1、命令行工具**

    * 依赖的开源项目
    
      * [NodeJs][net_NodeJs]
      * [Gulp][net_Gulp]
      * [bower][net_bower]
      * [Cordova CLI][net_cordova-cli]

    [详细命令见 pastry bake 命令][md_pastry-cli]

* **2、持续集成 Jenkins**

    [Jenkins 官网地址][net_jenkins]

    ![持续集成图](/pastry/images/abstract/pastry_jenkins.png)
    
[net_jenkins]:#
  
* **3、易扩展**
  
  * [组件分类][md_plugin]

* **4、易维护**

  * [详细内容见 JS 使用指南][md_quickstart-js]

----
## 安全性 
* **1、客户端安全**
    
    ![客户端安全图](/pastry/images/abstract/safe_client.png)

* **2、资源安全**

    ![资源安全图](/pastry/images/abstract/safe_resource.png)

* **3、秘钥协商**

    ![秘钥协商图](/pastry/images/abstract/safe_consult.png)

* **4、通讯安全**

    ![通讯安全图](/pastry/images/abstract/safe_communication.png)

----
## 开发效率
* **1、前后端并行开发**

    ![前后端并行开发图](/pastry/images/abstract/efficiency1.png)

* **2、业务并行开发**

    ![业务并行开发图](/pastry/images/abstract/efficiency2.png)

----
## 平台的问题

* [平台灵活性与约束力的权衡][md_faq]

* 平台组件的积累

    * 由于Pastry平台采用 多View混合型 平台，需要积累更优质的 原生框架

    * JS端更多业务组件的积累

----
## 平台的展望

* 对`知识资产`进行`积累`，`快速`开发出`高质量`的`产品`


[net_jQuery]: http://www.jquery.org
[net_bootstrap]: http://www.getbootstrap.com
[net_Backbone]: http://backbonejs.org/
[net_RequireJS]: http://requirejs.org/
[net_Underscore]: http://underscore.org/

[net_NodeJs]: https://nodejs.org/zh-cn/
[net_Gulp]: http://www.gulpjs.com.cn/
[net_Cordova]: http://cordova.apache.org/
[net_bower]: #
[net_cordova-cli]: #

[md_pastry-cli]: ../pastry-cli/bake.md
[md_plugin]: ../plugins/plugins.md
[md_quickstart-js]: ../quickstart/quickstart-js.md
