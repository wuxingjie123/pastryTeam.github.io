# Pastry组件分类

----
## Pastry组件分类

**Pastry组件分类包括三个大类：框架组件、业务组件、cordova组件**

  * 框架组件:`PT.framework ptframework.jar pastry JS 的组件`
    
    * `iOS平台 框架组件`：包含 网络通讯、安全模块、本地存储、日志模块等
    
    * `android平台 框架组件`：包含 网络通讯、安全模块、本地存储、日志模块等
    
    * `JS平台 框架组件`：包含 JS基础控件、网络通讯等
    
    * `前置 框架组件`：包括 协商密钥、通讯安全等
    
  * 业务组件:`原生平台不依赖JS实现的组件 或 JS平台不依赖原生实现的组件`
    
    * `iOS平台 业务组件`：包含 解压缩组件、登录组件、二维码组件等
    
    * `android平台 业务组件`：包含 登陆组件、二维码组件等
    
    * `JS平台 业务组件`：包含 注册组件、信用卡申请组件等
    
    * `前置 业务组件`：无
    
  * cordova组件:`原生平台、JS平台相互依赖实现的组件`
    
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

## ------------

----
## 框架组件

----
### JS平台框架组件
* JS类图
    
    ![JS Component 类图](../../pastry/images/quickstart/jsComponent.png)
    
* JS平台框架组件

| 组件名称 | 父类 | 功能 | 示例代码 | |
|-----|-----|-----|-----|-----|
| `基础组件` |-----|-----|-----|-----|
| Backbone.View || 组件基类 ||
| `框架基础组件 Component` |-----|-----|-----|
| Base | Backbone.View |||
| Container | Base | 容器组件基类 ||
| Input | Base | 输入框组件 | [www/examples/base_input.html][base_input] |
| ICheck | Base | 单多选按钮组件基类 | [www/examples/ex_checkbox.html][ex_checkbox] |
| `框架扩展组件` |-----|-----|-----|
| `框架扩展基础组件` |-----|-----|-----|
| Label | Base | 标签组件 | [www/examples/base_label.html][base_label] |
| Select | Base | `列表组件` | [www/examples/base_amount.html][base_amount] ||
| CheckImage | Base | 验证码组件 | `待定` ||
| CodeMirror | Base | ？？？？？ | `待定` |
| Datepicker | Base | 日历组件 | `待定` ||
| StepGroup | Base | 步骤组组件 | `待定` ||
| Switch | Base | 开关按钮组件 | [www/examples/ex_switch.html][ex_switch] ||
| Tree | Base | 树形组件 | [www/examples/ex_tree.html][ex_tree] ||
| Amount | Input | 金额框组件 | [www/examples/base_amount.html][base_amount] ||
| Password | Input | 密码框组件 | [www/examples/base_password.html][base_password] ||
| Textarea | Input | 文本域组件 | `待定` ||
| Button | Container | 按钮组件 | [www/examples/base_button.html][base_button] |
| List | Container | 列表组件 | [www/examples/base_list.html][base_list] ||
| ScrollView | Container | 滚动区域组件 | [www/examples/ex_scrollview.html][ex_scrollview] ||
| SelectList | Container | 选择列表组件 | [www/examples/ex_selectlist.html][ex_selectlist] ||
| Tab | Container | 选项卡组件 | [www/examples/ex_tab.html][ex_tab] ||
| BrowserHeader | Form | 浏览器顶部栏组件(弃用) | [www/examples/base_header_footer.html][base_header_footer] ||
| BrowserFooter | Form | 浏览器底部栏组件(弃用) | [www/examples/base_header_footer.html][base_header_footer] ||
| CheckBox | ICheck | 多选按钮组件 | [www/examples/ex_checkbox.html][ex_checkbox] ||
| Radio | ICheck | 单选按钮组件 | [www/examples/ex_radio.html][ex_radio] ||
| CountdownBtn | Button | 倒计时按钮组件 | [www/examples/ex_countdownbtn.html][ex_countdownbtn] |
| `悬浮层组件` |-----|-----|-----|
| PopupWindow | Form | `弹出框组件` | [www/examples/ex_popupwindow.html][ex_popupwindow] ||
| PopupMenu | PopupWindow | 弹出菜单组件 | [www/examples/ex_popupmenu.html][ex_popupmenu] ||
| PopupSelect | Base | `弹出框组件` | [www/examples/ex_popupselect.html][ex_popupselect] ||
| `表单组件` |-----|-----|-----|
| Form | Container | 表单组件 | [www/examples/base_form.html][base_form] |
| `页面组件` |-----|-----|-----|
| Page | Form | 页签组件 | [www/examples/base_page.html][base_page] ||
| `Browser` |-----|-----|-----|
| Browser |    | 浏览器组件 | [www/examples/windows/base_window.html][base_window] ||
| `其他` |-----|-----|-----|
| import |    | 设置框架导入 | [www/examples/base_import.html][base_import] ||
| dependency |    | 组件依赖校验 | [www/examples/ex_dependency.html][base_dependency] ||
| proxy |    | 代理模式 | [www/examples/adv_proxy_model.html][base_proxy] ||

[base_input]: ../www/examples/base_input.html
[base_label]: ../www/examples/base_label.html
[base_amount]: ../www/examples/base_amount.html
[ex_popupselect]: ../www/examples/ex_popupselect.html
[ex_switch]: ../www/examples/ex_switch.html
[ex_tree]: ../www/examples/ex_tree.html
[base_amount]: ../www/examples/base_amount.html
[base_password]: ../www/examples/base_password.html
[base_button]: ../www/examples/base_button.html
[base_list]: ../www/examples/base_list.html
[base_window]: ../www/examples/windows/base_window.html
[ex_scrollview]: ../www/examples/ex_scrollview.html
[ex_selectlist]: ../www/examples/ex_selectlist.html
[ex_tab]: ../www/examples/ex_tab.html
[base_form]: ../www/examples/base_form.html
[base_page]: ../www/examples/base_page.html
[base_header_footer]: ../www/examples/base_header_footer.html
[ex_popupwindow]: ../www/examples/ex_popupwindow.html
[ex_checkbox]: ../www/examples/ex_checkbox.html
[ex_radio]: ../www/examples/ex_radio.html
[ex_popupmenu]: ../www/examples/ex_popupmenu.html
[ex_countdownbtn]: ../www/examples/ex_countdownbtn.html
[base_import]: ../www/examples/base_import.html
[base_dependency]: ../www/examples/ex_dependency.html
[base_proxy]: ../www/examples/adv_proxy_model.html

* 数据模型类图

    ![JS Model 类图](../../pastry/images/quickstart/jsModel.png)

* 框架数据模型总览

| 模型名称 | 父类 | 功能 | 示例代码 | |
|-----|-----|-----|-----|-----|
| `基础模型` |-----|-----|-----|-----|
| Backbone.Model | - | - | - | - |
| `框架基础组件 Model` |-----|-----|-----|
| Base | Backbone.Model | 组件数据模型基类 | - | - |
| Simple | Base | 简单数据模型,不发请求 | - | - |
| Request | Base | 框架业务数据模型 | - | - |
| Input | Simple  | 输入域数据模型 | - | - |
| Amount | Input | 金融组件数据模型 | - | - |

----
### iOS平台框架组件

----
### android平台框架组件

----
### 前置平台框架组件


----
## 业务组件

| 业务组件分类 | 组件名称 | 功能 | 源码地址(GitHub) |
|-----|-----|-----|-----|
| `iOS平台` | `项目模版组件` | - | - |
|   | 空白模版组件 | 提供空白模版功能 | [pastry-plugin-blankMain][net_blankMain] |
|   | 侧边框模版组件 | 提供侧边框功能 | [pastry-plugin-sideMain][net_sideMain] |
|   | 选项卡模版组件 | 提供选项卡模版功能 | [pastry-plugin-tabMain][net_tabMain] |
|   | `解压缩页面组件` | 提供data.zip解压缩的页面功能 | [pastry-plugin-unzip][net_unzip] |
|   | `引导页面组件` | 提供引导页面功能 | [pastry-plugin-guide][net_guide] |
|   | `登录页面组件` | 提供登陆功能 | [pastry-plugin-login][net_login] |
| `android平台` | `项目模版组件` | - | - |
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
