# XTools

## XTools简介

> 因Html5业务模板及其使用的CSS、JS、 图片等资源，会保存在用户终端设备中，为了保证这些文件的安全，需要对这些文件进行加密、签名等操作，以保证文件不被非法篡改。<br/>
资源包编译工具(XTools)就是采用加密、签名等安全手段，对资源文件进行安全防护。

----
##功能介绍

| 资源名称 | `压缩` | `混淆文件名` | `混淆内容` | `加密` | `签名` |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 图片文件<br/>*.jpg,*.gif,*.png |   |   |   |   | √ |
| JS文件<br/>*.js               | √ |   | √ |   | √ |
| 模版文件<br/>*.html            | √ | √ |   | √ | √ |
| 菜单文件<br/>allmenu.xml         | √ |   |   | √ | √ |
| 资源清单文件<br/>resource.json    | √ |   |   | √ |   |

* 扩展库:压缩、混淆内容、签名
  * 包含服务器地址等敏感信息。 通过混淆压缩可使安全性增加
  * 通过验签机制防止加载被篡改的JS库
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
    
    
