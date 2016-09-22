# FO

## 目录结构

  * 目录结构
    
       HelloWorld/pastry-fo-nodejs
                ┣ bin                       **功能 : 服务器启动脚本**
                ┣ data                      **功能 : 秘钥存储目录**
                ┣ lib                       **功能 : 入口**
                ┣ node_modules              **功能 : 依赖库**
                ┣ package.json              **功能 : 包描述文件**
                ┣ wwwroot
                ┃  ┣ images                 
                ┃  ┣ mockdata               **功能 : 模拟服务器数据编码目录**
                ┃  ┗ ptframework            
                ┃      ┗ data               
                ┃          ┣ android        **功能 : android html 存放路经：用于热更新使用**
                ┃          ┗ iphone         **功能 : iOS html 存放路经：用于热更新使用**

## Java FO目录结构 `待定`

  * 目录结构
    
         ios
          ┣ cordova                      **功能 : cordova辅助命令**
          ┣ CordovaLib                   **功能 : cordova 原生端 JS 桥**
          ┣ HelloWorld.xcodeproj         **功能 : 项目工程文件**
          ┣ ios.json                     **功能 : iOS工程配置文件**
          ┣ platform_www                 **功能 : iOS平台专属JS文件**
          ┣ www                          **功能 : iOS平台专属JS文件 + 通用JS文件**
          ┣ HelloWorld
          ┃  ┣ Classes                   **功能 : 存放h5、iOS、android项目模版数据** 
          ┃  ┣ config.xml                **功能 : iOS工程配置文件，配置插件等信息**
          ┃  ┣ Plugins                   **功能 : corodva插件 iOS端源码**
          ┃  ┣ Resources                 **功能 : iOS图片资源目录**
          ┃  ┗ PastryFramework           **功能 : iOS端重要的资源文件**


