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

    * [5.1。完整JS页面结构及开发流程预览][md_quickstart-js] 
    
    * [5.2。框架导入-模块依赖 章节][md_quickstart-js] [(在线示例)][net_import]
    
    * [5.3。代理模式-模块依赖 章节][md_quickstart-js] [(在线示例)][base_proxy]
    
    * [5.4。组件依赖校验-元素扩展属性-校验相关属性 章节 待定][md_quickstart-js] [(在线示例)][base_dependency]
    
    * 5.5。普通组件示例
    
        * 5.5.1。Label : 基于 type =  text 的 span [(在线示例)][base_label]
    
        * 5.5.2。Button `三态按钮制作中` 待定 : 基于 div [(在线示例)][base_button]
    
        * 5.5.3。CountdownBtn : 基于 type = button 的 input [(在线示例)][base_CountdownBtn]
    
        * 5.5.4。Input : 基于 type = number/tel/text 的 input [(在线示例)][base_input]
    
        * 5.5.5。Switch : 基于 type = checkbox 的 input [(在线示例)][base_switch]
    
        * 5.5.6。Checkbox : 基于 type = checkbox 的 input [(在线示例)][base_checkbox]
    
        * 5.5.7。Radio : 基于 type = radio 的 input [(在线示例)][base_radio]
    
        * 5.5.8。密码键盘 Input : 基于 div [(在线示例)][base_keyboard]
    
        * 5.5.9。Popup系列组件
    
            * 5.5.9.1。PopupMenu : 基于 PopupMenu组件 [(在线示例)][base_popupMenu]
    
            * 5.5.9.2。PopupSelect : 基于 div [(在线示例)][base_popupSelect]
    
            * 5.5.9.3。PopupWindow : 基于 PopupWindow组件 [(在线示例)][base_popupWindow]

    * 5.6。复杂组件示例
        
        * 5.6.1。Select : 基于 select [(在线示例)][base_popupWindow]

        * 5.6.2。List : 基于 div [(在线示例)][base_popupWindow]
        
        * 5.6.3。SelectList : 基于 div [(在线示例)][base_popupWindow]

        * 5.6.4。Scrollview : 基于 div [(在线示例)][base_popupWindow]
        
        * 5.6.5。Tree : 基于 div [(在线示例)][base_popupWindow]

        * 5.6.6。Tab : 基于 div  [(在线示例)][base_popupWindow]

    * [5.7。数据模型-模型配置 章节][md_quickstart-js]
        
        * 5.7.1。filter [(在线示例)][base_filter]
        
        * 5.7.2。dispatcher [(在线示例)][base_dispatcher]
        
        * 5.7.3。forwarder [(在线示例)][base_forwarder]
        
        * 5.7.4。mapping [(在线示例)][base_mapping]

    * [5.8。页面跳转-页面跳转 章节][md_quickstart-js]
        
        * 5.8.1。Page跳转 : 基于 Browser 的 history_goto 方法 [(在线示例)][base_page]
        
        * 5.8.2。Window跳转 : 基于 Browser 的 openUrl 方法 [(在线示例)][base_window]
        
    * [5.9。表单提交-表单提交 章节][md_quickstart-js]
    
        * 5.9.1。表单提交 : 基于 继承 Form 的组件（type = button 的 input）[(在线示例)][base_form]
        
        * 5.9.2。Page : 基于 From 的组件 [(在线示例)][base_page]
      
    * [5.10。window参数传递-window参数传递 章节][md_quickstart-js]
        
        * [5.10.1。页面初始化参数-程序入口 章节][md_quickstart-js]
        
        * [5.10.2。Window跳转参数传递-window参数传递 章节 : 基于 Browser 的 openUrl/onResult 方法][md_quickstart-js] [(在线示例)][base_window]
    
    * 5.11。组合组件示例
        
        * 5.11.1。list + select : [(在线示例)][rel_list+select_list+list]

        * 5.11.2。list + list : [(在线示例)][rel_list+select_list+list]

        * 5.11.3。list item 左滑、右滑示例 待定 : 
        
    * 5.12。其他方面

        * 5.12.1。语言国际化
        
        * 5.12.2。图片适配
        
    * [5.13。注意事项][net_JS_tip]

* 6。pastry 原生 业务层 开发 [iOS教程][md_quickstart-ios] [android教程][md_quickstart-android]

    * 6.1。iOS/android 业务组件
        
        * 6.1.1。必选组件
            
            * 6.1.1.1。项目模版组件
                
                * [6.1.1.1.1。空白模版组件][net_blank]
                
                * [6.1.1.1.2。侧边框模版组件][net_side]
                
                * [6.1.1.1.3。选项卡模版组件][net_tab]
            
            * [6.1.1.2。解压缩页面组件][net_unzip]
            
            * [6.1.1.3。引导页面组件][net_guide]
            
            * [6.1.1.4。登录页面组件][net_login]
        
        * 6.1.2。可选组件
            
            * 无
    
    * 6.2。Cordova组件
        * 6.2.1。必选组件
        
            * [6.2.1.1。浏览器组件][net_browser] 
    
            * [6.2.1.2。网络通讯][net_request]
    
            * [6.2.1.3。密码键盘][net_keyboard]
         
            * [6.2.1.4。本地加解密存储][net_storage]
            
            * [6.2.1.5。获取原生会话状态][net_pastryState]
    
        * 6.2.2。可选组件
        
            * [6.2.2.1。OCR身份验证组件][net_OCR]
            
            * [6.2.2.2。二维码组件][net_QRcode]

* [7。pastry 前置 业务层 开发][md_quickstart-fo]

    * 7.1。与第三方服务器交互方式（http｜socket）

    * 7.2。前置部署

        * 7.2.1。（负载均衡，解决问题并发、was）

    * 7.3。简单的逻辑转发

* 8。调试发布

    * [8.1。Cordova调试方法简介][net_cordova-test]

    * [8.2。调试方法简介][net_pastry-test]

    
* 9。Pastry组件制作方式
    
    * 9.1。框架组件 : `框架人员修改，禁止项目组人员修改`
        
        * [9.1.1。JS平台框架组件 : 基于框架源码方式 组件开发指南][md_plugin-develop]
        
        * [9.1.2。iOS平台框架组件 : 基于框架源码方式 组件开发指南][md_plugin-develop]
        
        * [9.1.3。android平台框架组件 : 基于框架源码方式 组件开发指南][md_plugin-develop]
        
        * [9.1.4。前置框架组件 : 基于框架源码方式 组件开发指南][md_plugin-develop]
    
    * 9.2。业务组件
       
        * [9.2.1。JS平台业务组件 : 基于Bower方式 组件开发指南][md_plugin-develop]
       
        * [9.2.2。iOS平台业务组件 : 基于Cordova方式 组件开发指南][md_plugin-develop]
       
        * [9.2.3。android平台业务组件 : 基于Cordova方式 组件开发指南][md_plugin-develop]
       
        * [9.2.4。前置业务组件 : 基于Cordova方式 组件开发指南][md_plugin-develop]
    
    * 9.3。cordova组件
        
        * [9.3.1。cordova组件 : 基于Cordova方式 组件开发指南][md_plugin-develop]

* 10。pastry JS 框架层

    * [10.1。api深度解析 思维导图][processon_api]

    * [10.2。Model深度解析 思维导图][processon_model]

    * [10.3。Component深度解析 思维导图][processon_component]

    * [10.4。Template深度解析 思维导图][processon_template]

    * [10.5。Browser深度解析 思维导图][processon_browser]

    * [10.6。bridge深度解析 思维导图][processon_bridge]

    * [10.7。request深度解析 思维导图][processon_request]

* 11。pastry 原生 框架层

    * 11.1。pastry iOS  

        * 11.1.1。pastry iOS功能介绍

        * 11.1.2。pastry iOS功能示例

    * 11.2。pastry android

        * 11.2.1。pastry android功能介绍

        * 11.2.2。pastry android 功能示例

* 12。pastry 前置 框架层

    * 12.1。会话管理

    * 12.2。通讯安全



[net_import]: www/examples/base_import.html
[base_dependency]: www/examples/ex_dependency.html
[base_proxy]: www/examples/adv_proxy_model.html

[base_label]: www/examples/base_label.html
[base_button]: www/examples/base_button.html
[base_CountdownBtn]: www/examples/ex_countdownbtn.html
[base_input]: www/examples/base_input.html
[base_switch]: www/examples/ex_switch.html
[base_checkbox]: www/examples/ex_checkbox.html
[base_radio]: www/examples/ex_radio.html
[base_keyboard]: www/examples/base_password.html
[base_popupMenu]: www/examples/ex_popupmenu.html
[base_popupSelect]: www/examples/ex_popupselect.html
[base_popupWindow]: www/examples/ex_popupwindow.html
[base_select]: www/examples/base_select.html
[base_list]: www/examples/base_list.html
[base_selectList]: www/examples/ex_selectlist.html
[base_scrollview]: www/examples/ex_scrollview.html
[base_tree]: www/examples/ex_tree.html
[base_tab]: www/examples/ex_tab.html

[rel_list+select_list+list]: www/examples/rel_list+select_list+list.html

[base_filter]: www/examples/data_filter.html
[base_dispatcher]: www/examples/data_dispatcher.html
[base_forwarder]: www/examples/data_forwarder.html
[base_mapping]: www/examples/data_mapping.html

[base_form]: www/examples/base_form.html
[base_page]: www/examples/base_page.html

[base_window]:www/examples/windows/base_window.html

[net_JS_tip]: https://github.com/pastryTeam/pastryTeam.github.io/issues/3

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
[md_quickstart-ios]: ./quickstart/quickstart-ios.md
[md_quickstart-android]: ./quickstart/quickstart-android.md
[md_quickstart-fo]: ./quickstart/quickstart-fo.md

[md_fqa]: ./faq.md

[md_pastry-cli]:./pastry-cli/bake.md

[md_plugin]: ./plugins/plugins.md

[md_plugin-develop]: ./plugins/plugins-develop.md

[md_pastry-js]: ./quickstart/pastry-js.md

[md_xtools]: ./pastry-cli/XTools.md

[net_storage]: https://github.com/pastryTeam/pastry-plugin-storage
[net_keyboard]: https://github.com/pastryTeam/pastry-plugin-keyboard
[net_request]: https://github.com/pastryTeam/pastry-plugin-request
[net_QRcode]: https://github.com/pastryTeam/pastry-plugin-QRcode
[net_OCR]: https://github.com/pastryTeam/pastry-plugin-OCR
[net_pastryState]: https://github.com/pastryTeam/pastry-plugin-pastryState
[net_browser]: https://github.com/pastryTeam/pastry-plugin-browser


[processon_api]:http://www.processon.com/view/link/57f39b9de4b009c4af304d79
[processon_model]:http://www.processon.com/view/link/57f39bbce4b0300f4fde39f6
[processon_component]:http://www.processon.com/view/link/57f39bb3e4b009c4af304de8
[processon_template]: #
[processon_browser]:http://www.processon.com/view/link/57f36656e4b0300f4fdd4c58
[processon_bridge]: #
[processon_request]: #
