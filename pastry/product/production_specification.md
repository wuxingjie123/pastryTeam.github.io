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
* 要求
  
