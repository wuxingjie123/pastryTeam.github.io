# 简介(平台架构)

## 概述
Pastry平台是一套跨屏幕、跨平台的前端解决方案.支持主流的操作系统和浏览器,可以实现代码一次编写多平台运行.

----
## 特性
  * 跨平台
  * 易维护
  * 易安全
  * 高效率
  * 一站式集成开发
  * 易扩展

----
## 支持平台
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
  * iOS 5.0+

----
## Pastry平台整体架构
### 开发模式

Pastry平台支持纯网页、微信及混合开发.

#### 纯网页

仅使用网页功能,开发PC Web应用或移动端Wap应用.

#### 微信

开发在微信中运行的页面.

#### 混合

开发原生和Html混合开发的应用,Html页面可以通过桥调用原生提供的增强功能.
![平台整体结构图](/pastry/images/abstract/pastry_struct.png)

----
## ------JS框架架构
### 技术栈

Pastry平台基于以下开源框架

  * [Bootstrap][net_bootstrap]
  * [jQuery][net_jQuery]
  * [Backbone][net_Backbone]
  * [RequireJS][net_RequireJS]
  * [NodeJs][net_NodeJs]
  * [Gulp][net_Gulp]
  * [Cordova][net_Cordova]
    
![Native框架架构图](/pastry/images/abstract/pastry_js.png)
![Native框架架构图2](/pastry/images/abstract/pastry_js2.png)

### JS选型
![JS选型图](/pastry/images/abstract/js_compare.png)

### backbone
![backbone图](/pastry/images/abstract/js_backbone.png)

### JS桥
![JS桥图](/pastry/images/abstract/js_bridge.png)

----
## ------Native框架架构
![Native框架架构图](/pastry/images/abstract/pastry_native.png)

----
## ------服务器框架架构
![服务器框架架构图](/pastry/images/abstract/pastry_server.png)

----
## 工具链
### 命令行工具
    详细命令见 ？？？

----
## 安全性 
### 客户端安全
![客户端安全图](/pastry/images/abstract/safe_client.png)

### 资源安全
![资源安全图](/pastry/images/abstract/safe_resource.png)

### 秘钥协商
![秘钥协商图](/pastry/images/abstract/safe_consult.png)

### 通讯安全
![通讯安全图](/pastry/images/abstract/safe_communication.png)

----
## 开发效率
### 前后端并行开发
![前后端并行开发图](/pastry/images/abstract/efficiency1.png)

### 业务并行开发
![业务并行开发图](/pastry/images/abstract/efficiency2.png)

----
## 其它
### 代码编译
![代码编译图](/pastry/images/abstract/pastry_code.png)

### 持续集成
![持续集成图](/pastry/images/abstract/pastry_jenkins.png)

### 易扩展
    待定

### 易维护
    待定

### 易积累
    待定

### 组件库管理
    待定


[license]: https://github.com/Dynalon/mdwiki/blob/master/LICENSE.txt
[net_jQuery]: http://www.jquery.org
[net_bootstrap]: http://www.getbootstrap.com
[net_Backbone]: http://backbonejs.org/
[net_RequireJS]: http://requirejs.org/
[net_NodeJs]: https://nodejs.org/zh-cn/
[net_Gulp]: http://www.gulpjs.com.cn/
[net_Cordova]: http://cordova.apache.org/
