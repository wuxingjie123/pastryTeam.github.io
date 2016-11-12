# 投产指南

----
## 配置 投产打包环境

* Java SDK 1.8
    
    * 目的：运行Jenkins，运行XTools
     
* Jenkins
    
    * 目的：持续交付

* XCode
    
    * 目的：编译iOS

* Android Studio
    
    * 目的：编译android

* NodeJS
    
    * 运行 Pastry 命令行工具

* Pastry 命令行工具
    
    * 支持多种应用场景的编译方式

----
## 配置 原生框架包

* iOS

    * debug模式：配置debug框架包
    
    * release模式：配置release框架包

* android
    
    * debug模式：配置debug框架包

    * release模式：配置release框架包

* 前置
    
    * 不涉及

* XTools
    
    * 不涉及

----
## 配置 https协议

* iOS
    
    * 配置 PastryFramework/PastryResources/release/certificate/cacert.pem

* android
    
    * 待定：`配置 android/res/raw/cbframework_trustcerts.bks`

* 前置

    * 待定：`aa`

* XTools

    * 不涉及

----
## 配置 公钥、私钥

* 握手过程的 公钥、私钥

    * iOS 配置公钥

        * debug模式 配置 PastryFramework/PastryResources/debug/certificate/ptframework.der

        * release模式 配置 PastryFramework/PastryResources/release/certificate/ptframework.der
   
    * android 配置公钥
        
        * debug、release模式 配置 android/res/raw/cbframework_cert.crt
   
    * 前置 配置私钥
        
        * `待定`
   
    * XTools
        
        * 不涉及

* 资源安全的 公钥、私钥
   
    * iOS 配置公钥

        * debug模式 配置 PastryFramework/PastryResources/debug/certificate/ptframework_check-sign.der

        * release模式 配置 PastryFramework/PastryResources/release/certificate/ptframework_check-sign.der
   
    * android 配置公钥
        
        * `待定 debug、release模式 配置 android/res/raw/cbframework_cert.crt`
   
    * 前置
        
        * 不涉及
   
    * XTools 配置私钥
        
        * 配置 pastry/tools/pastry-xtools/WEB-INF/cbframework/keystore/cbframework.key

----
## 配置 增量更新

### `iOS 增量更新部署`

* `html 不依赖 原生代码 的 原生包更新。`
    
    * 使用 pastry bake build 生成 ipa 包。
        
    * 解压获取 ipa 包中的 data.zip 资源包。
        
    * nodejs 环境
            
        * 将 data.zip 资源包 解压到 nodejs 的 ptframework/data/iphone 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
        
    * java 环境
            
        * 将 data.zip 资源包 解压到 fo 的 ptframework/data/iphone 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
    
    * 配置 测试增量更新 环境
            
        * debug 包设置 ipa应用设置 选项
            
            * `html来源路径类型 ：data.zip`
                
            * `调试模式 ：开发模式-JS、CSS等文件不验签模式` 或者 `调试模式 ：生产模式-JS、CSS等文件不验签模式`
        * release 包不需要修改任何操作
        
    * 运行app查看 html 资源更新结果；

* `涉及 html 依赖原生代码的 原生包更新。`
        
    * 配置 allmenu.xml 的 menu 节点属性 minver 版本号。
    
    * 原生 打开html（业务入口html在allmenu.xml的属性）时，对比 minver版本号 与 原生系统版本号：
        
        * minver版本号 = 空：不需要进行原生包更新
        
        * minver版本号 > 原生版本号：提供用户进行 原生包更新，不进入html页面。
        
        * minver版本号 < 原生版本号：不需要进行 原生包更新。
        
        * minver版本号 = 原生版本号：不需要进行 原生包更新。

### `android 增量更新部署`

* `html 不依赖 原生代码 的 原生包更新。`

    * 使用 pastry bake build 生成 apk 包。
        
    * 解压获取 apk 包中的 data.zip 资源包
        
    * nodejs 环境
            
        * 将 data.zip 资源包 解压到 nodejs 的 ptframework/data/android 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
        
    * java 环境
        
        * 将 data.zip 资源包 解压到 fo 的 ptframework/data/android 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
    
    * 配置 测试增量更新 环境
    
        * `待定`
    
    * 运行app查看 html 资源更新结果。

* `涉及 html 依赖原生代码的 原生包更新。`
        
    * 配置 allmenu.xml 的 menu 节点属性 minver 版本号。
        
    * 原生 打开html（业务入口html在allmenu.xml的属性）时，对比 minver版本号 与 原生系统版本号：
        
        * minver版本号 = 空：不需要进行原生包更新
        
        * minver版本号 > 原生版本号：提供用户进行 原生包更新，不进入html页面。
        
        * minver版本号 < 原生版本号：不需要进行 原生包更新。
        
        * minver版本号 = 原生版本号：不需要进行 原生包更新。


  
