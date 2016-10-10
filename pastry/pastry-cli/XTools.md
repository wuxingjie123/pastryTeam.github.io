# XTools

## XTools简介

> 因Html5业务模板及其使用的CSS、JS、 图片等资源，会保存在用户终端设备中，为了保证这些文件的安全，需要对这些文件进行加密、签名等操作，以保证文件不被非法篡改。<br/>
资源包编译工具(XTools)就是采用加密、签名等安全手段，对资源文件进行安全防护。<br/>
支持以下功能：
1、热更新功能。
2、资源安全功能。

----
## 热更新

`web端文件自动更新功能`

----
## 资源安全

| 资源名称 | `压缩` | `混淆文件名` | `混淆内容` | `加密` | `签名` |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 图片文件<br/>*.jpg,*.gif,*.png |   |   |   |   | √ |
| JS文件<br/>*.js               | √ |   | √ |   | √ |
| 模版文件<br/>*.html            | √ | √ |   | √ | √ |
| 菜单文件<br/>allmenu.xml         | √ |   |   | √ | √ |
| 资源清单文件<br/>resource.json    | √ |   |   | √ |   |

* 扩展库:压缩、混淆内容、签名  
  * 包含服务器地址等敏感信息。 通过混淆压缩可使安全性增加  
  * 通过验签机制防止加载被篡改的JS库* 页面模板:压缩、混淆文件名、加密、签名  * *.html对文件名进行Hash,降低猜测可能性,防止明文攻击  * 页面模板加密、防篡改使用存放在客户端的公钥对,模板的签名进校验模板文件  * 使用对称算法加密、模板文件使用服务器私钥签名,可防止客户端加载篡改的模板* 配置文件:压缩、加密、签名  * allmenu.xml resource.json
----
## 使用方法

### `pastry bake prepare 平台名称`<br/>

> `XTools 集成到 pastry bake prepare 命令`<br/>
`pastry cordova prepare 平台名称 + XTools = pastry bake prepare 平台名称`

使用：

    pastry bake prepare 平台名称
    
    选项：
      平台名称{ios/android}      可选平台

样例：

    // 对ios平台的html进行加密打包
    pastry bake prepare ios
    
    // 对android平台的html进行加密打包
    pastry bake prepare android
    
    

