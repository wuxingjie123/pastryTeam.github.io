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
    
    * 获取 https 证书
        
        * 导出 base64 的 cer证书
        
        * 通过 [cer转pem在线工具](https://www.myssl.cn/tools/merge-pem-cert.html)
    
    * 替换证书文件 PastryFramework/PastryResources/release/certificate/cacert.pem

* android
    
    * 获取 https 证书
        
        * 导出 crt证书

    * 配置 bcprov-ext-jdk15on-155.jar jar包

        * 配置 Java SDK 1.6
        
        * [bcprov-ext-jdk15on-155.jar下载地址](http://download.csdn.net/detail/lkx779687789/9654809)
        
        * 配置jar到Java_Home路径 jre/lib/ext 路经下

    * 将证书配置到 android/res/raw/cbframework_trustcerts.bks
    
    ``` 
    // 证书导入bks文件
    cd 证书存放目录
    keytool -keystore 证书名称 -storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider -storepass 证书密码 -importcert -trustcacerts -alias 证书别名 -file crt证书路径
    
    举例：
    证书名称：cbframework_trustcerts.bks
    证书密码：""
    证书别名：alias_name
    crt证书路径：tagert.crt
    keytool -keystore cbframework_trustcerts.bks -storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider -storepass "" -importcert -trustcacerts -alias alias_name -file tagert.crt

    // 查看所有证书列表
    cd 证书存放目录
    keytool -keystore 证书名称 -storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider -storepass 证书密码 -list -v
    
    举例：
    证书名称：cbframework_trustcerts.bks
    证书密码：""

    cd 证书存放目录
    keytool -keystore cbframework_trustcerts.bks -storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider -storepass "" -list -v
    
    // 删除证书
    cd 证书存放目录
    keytool -keystore 证书名称 -storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider -storepass 证书密码 -delete -alias 导入的证书别名
    
    举例：
    证书名称：cbframework_trustcerts.bks
    证书密码：""
    导入的证书别名：alias_name
    
    cd 证书存放目录
    keytool -keystore cbframework_trustcerts.bks -storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider -storepass "" -delete -alias alias_name
    
    ```

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

打包流程描述：

    需要进行二次打包才能生成一个最终的产品包。（主要是针对 html 的版本管理）

    1、第一次打包针对 html 文件进行签入 版本号；

    2、手动修改 platforms/ios/platform_www/allmenu.xml 的版本号 与 html刚签入的版本号对应（最新版本号参见 business.xml 文件）

    3、第二次打包针对 将allmenu.xml 加到 data.zip 中。
    
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

----
## 配置 原生代码混淆、加固App

* iOS
    
    * 不涉及

* android
    
    * 配置 release 混淆原生代码

    ```
    待定
    ```
    
    * apk加固
    
    ```
    待定
    ```

----
## 配置 开发者证书

* iOS开发者证书
    
    * 配置生产环境的 开发者证书

* android开发者证书
    
    * 配置生产环境的 开发者证书
  
