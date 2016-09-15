# iOS

----
## iOS工程结构

  * 目录结构        

         ios
          ├── CordovaLib                  **功能 : cordova 原生端 JS 桥**
          ├── HelloWorld
          │   ├── Classes                 **功能 : iOS 开发目录**
          │   │   ├── lib                 **功能 : 存放 第三方库 位置(根据模块功能划分可能一个工程里出现多个lib目录)**
          │   │   └── components          **功能 : 存放 自定义的 控件库位置(根据模块功能划分可能一个工程里出现多个lib目录)**
          │   ├── HelloWorld-Info.plist
          │   ├── HelloWorld-Prefix.pch
          │   ├── PastryFramework         **功能 : iOS端重要的资源文件**
          │   ├── Plugins                 **功能 : corodva插件 iOS端源码**
          │   ├── Resources               **功能 : iOS图片资源目录**
          │   ├── config.xml              **功能 : iOS工程配置文件，配置插件等信息**
          │   └── main.m
          ├── HelloWorld.xcodeproj        **功能 : 项目工程文件**
          ├── cordova                     **iOS开发者不关注  功能 : cordova辅助命令**
          ├── ios.json                    **iOS开发者不关注  功能 : iOS工程配置文件**
          ├── platform_www                **iOS开发者不关注  功能 : iOS平台专属JS文件**
          └── www                         **iOS开发者不关注  功能 : iOS平台专属JS文件 + 通用JS文件**

  * PastryFramework 目录结构

        PastryFramework           
            ┣ data.zip                        **功能 : 加解密后的data.zip**
            ┣ Reference
            ┃    ┣ PT.framework               **功能 : PT动态库**
            ┃    ┣ PTResources.bundle         **功能 : 密码键盘使用的资源文件，通过修改图片资源可以修改密码键盘的样式**
            ┃    ┗ Settings.bundle            **功能 : Root.plist 保存开发模式配置信息。
            ┃                                 最终产品使用PastryResources/release/System.plist的服务器URL设置**
            ┣ PastryResources
            ┃    ┣ debug                      **功能 : debug模式使用的证书、框架等资源**
            ┃    ┃    ┣ certificate           **功能 : 相关证书**
            ┃    ┃    ┗ PT.framework          **功能 : debug PT动态库**
            ┃    ┣ release                    **功能 : release产品模式使用的证书、框架等资源**
            ┃    ┃    ┣ certificate           **功能 : 相关证书**
            ┃    ┃    ┣ PT.framework          **功能 : release PT动态库**
            ┗    ┗    ┗ System.plist          **功能 : 最终产品使用的配置信息，服务器URL设置。
                                              测试时，使用Setting.bundle/Root.plist的服务器URL设置**

----
## 模版管理
  * 文件验签

----
## 通讯组件

----
## 安全组件
  * 算法
    * 3DES
    * RSA


  * 通讯

----
## 密码键盘
* 功能描述：
    自定义键盘，当用户在密码输入框获得焦点时，弹出自定义的加密键盘，每键入的一个值就进行一次3DES加密，再次键入时，
    需先对之前的值进行解密，再累加值加密，最终将加密的data数据反馈给键盘调用者。

----
## 数据存储
* 私有存储器
    该存储器用于将应用指定的数据存储至应用程序sandbox中，为PTSecurityStorage的子类。

* 系统存储器
    该存储器将应用指定的数据存储至系统keychain中，为PTSecurityStorage的子类。

----
## 日志组件

* 客户端开发使用 宏定义 PTLogDebug 代替 NSLog;

  * **debug 模式会输出日志信息到控制台;**

  * **真机日志文件目录：对应App应用/Library/Caches/Logs;**

  * 日志颜色

    * iOS PT框架日志颜色

      * 普通日志 灰底 白字

      * 警告日志 灰底 黄字

      * 错误日志 灰底 红字

    * iOS 客户端日志颜色

      * 普通日志 白底黑字

    * html 日志颜色

      * 普通日志 浅绿 白字

----
## 开发模式配置

![开发模式配置图](/pastry/images/ios/iosSetting.png)

* 前置服务器URL

  * 客户端连接前置服务器的地址


* html来源路径类型
  * data.zip        
    **支持**

  * www目录          
    **支持**

  * 远程主机www目录    
    `不支持`

* 调试模式(在 html来源路经类型是 data.zip 时)
  * 开发者模式 文件不验签模式
    **支持 常用开发模式**

  * 开发者模式 文件验签模式
    **支持**

  * 生产模式 文件不验签模式
    **支持**

  * 生产模式 文件验签模式
    **支持**
