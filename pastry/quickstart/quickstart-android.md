# android使用指南

----
## 工程目录结构

  * 目录结构
    
         android
          ┣ cordova                      **功能 : cordova辅助命令**
          ┣ CordovaLib                   **功能 : cordova 原生端 JS 桥**
          ┣ HelloWorld.xcodeproj         **功能 : 项目工程文件**
          ┣ android.json                 **功能 : android工程配置文件**
          ┣ platform_www                 **功能 : android平台专属JS文件**
          ┣ AndroidManifest.xml          **功能 : android平台专属JS文件**
          ┣ build.gradle                 **功能 : android平台专属JS文件**
          ┣ project.properties           **功能 : android平台专属JS文件**
          ┣ settings.gradle              **功能 : android平台专属JS文件**
          ┣ res                          **功能 : android平台专属JS文件**
          ┣ libs                         **功能 : iOS平台专属JS文件 + 通用JS文件**
          ┣ src
          ┃  ┣ asp                       **功能 : 存放h5、iOS、android项目模版数据** 
          ┃  ┣ com                       **功能 : iOS工程配置文件，配置插件等信息**
          ┃  ┗ org                       **功能 : iOS端重要的资源文件**
          ┣ assets
          ┃  ┣ debug                     **功能 : 存放h5、iOS、android项目模版数据** 
          ┃  ┣ release                   **功能 : 存放h5、iOS、android项目模版数据** 
          ┃  ┗ www                       **功能 : 存放h5、iOS、android项目模版数据** 

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
            ┃    ┃    ┗ System.plist          **功能 : 最终产品使用的配置信息，服务器URL设置。
            ┃    ┃                            测试时，使用Setting.bundle/Root.plist的服务器URL设置**


