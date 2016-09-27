# iOS使用指南

----
## 工程目录结构

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
## 配置 icon splash
* 要求
    
    *  

* icon 目录 : `HelloWorld/platforms/ios/HelloWorld/Resources/Images.xcassets/AppIcon.appiconset`

* splash 目录 : `HelloWorld/platforms/ios/HelloWorld/Resources/Images.xcassets/LaunchImage.launchimage`

----
## 配置原生端组件

* 配置data.zip解压缩组件

* 配置引导页组件

* 配置工程主样式组件

----
## 原生本地调试Html（FO-NodeJS）

* `将 项目目录/www/mockdata 的模拟数据 复制到 项目目录/pastry-fo-nodejs/wwwroot/mockdata 目录。`
	
	* 要求JS端设置 `data-debug="@mockdata"`
