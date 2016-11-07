# 前置使用指南

----
## 工程目录结构

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

----
## Java 前置目录结构 `待定`

  * 目录结构
    
           fo
            ┣ cordova                      **功能 : cordova辅助命令**
            ┣ CordovaLib                   **功能 : cordova 原生端 JS 桥**
            ┣ HelloWorld.xcodeproj         **功能 : 项目工程文件**
            ┣ ios.json                     **功能 : iOS工程配置文件**
            ┣ platform_www                 **功能 : iOS平台专属JS文件**
            ┣ www                          **功能 : iOS平台专属JS文件 + 通用JS文件**
            ┣ ptframework          
            ┃      ┗ data                 
            ┃          ┣ android        **功能 : android html 存放路经：用于热更新使用**
            ┃          ┗ iphone         **功能 : iOS html 存放路经：用于热更新使用**

----
## 会话超时设置？？


----
## 防重发、防重放

----
## 增量更新流程

### `iOS 增量更新部署`

* `配置 allmenu.xml 文件`
    
    * 配置 allmenu.xml 文件属性
    
    * 将 allmenu.xml 拷贝到 ptframework/data/iphone 目录

* `html 不依赖 原生代码 的 原生包更新。`
    
    * 使用 pastry bake build 生成 ipa 包。
        
    * 解压获取 ipa 包中的 data.zip 资源包。
        
    * nodejs 环境
            
        * 将 data.zip 资源包 解压到 nodejs 的 ptframework/data/iphone 目录。｀注意不包含 data 目录｀
        
    * java 环境
            
        * 将 data.zip 资源包 解压到 fo 的 ptframework/data/iphone 目录。｀注意不包含 data 目录｀
    
    * 配置 测试增量更新 环境
            
        * debug 包设置 ipa应用设置 选项
            
            * `html来源路径类型 ：data.zip`
                
            * `调试模式 ：开发模式-JS、CSS等文件不验签模式` 或者 `调试模式 ：生产模式-JS、CSS等文件不验签模式`
        * release 包不需要修改任何操作
        
    * 运行app查看 html 资源更新结果；

* `涉及 html 依赖原生代码的 原生包更新。`
        
    * 配置 allmenu.xml 的 menu 节点属性 minver 版本号。
    
    * 原生 打开html时，对比 minver版本号 与 原生系统版本号：
        
        * minver版本号 > 原生版本号：提供用户进行 原生包更新，不进入html页面。
        
        * minver版本号 < 原生版本号：不需要进行 原生包更新。
        
        * minver版本号 = 原生版本号：不需要进行 原生包更新。

### `android 增量更新部署`

* `配置 allmenu.xml 文件`
    
    * 配置 allmenu.xml 文件属性
    
    * 将 allmenu.xml 拷贝到 ptframework/data/android 目录

* `html 不依赖 原生代码 的 原生包更新。`

    * 使用 pastry bake build 生成 apk 包。
        
    * 解压获取 apk 包中的 data.zip 资源包
        
    * nodejs 环境
            
        * 将 data.zip 资源包 解压到 nodejs 的 ptframework/data/android 目录。｀注意不包含 data 目录｀
        
    * java 环境
        
        * 将 data.zip 资源包 解压到 fo 的 ptframework/data/android 目录。｀注意不包含 data 目录｀
    
    * 配置 测试增量更新 环境
    
        * `待定`
    
    * 运行app查看 html 资源更新结果。

* `涉及 html 依赖原生代码的 原生包更新。`
        
    * 配置 allmenu.xml 的 menu 节点属性 minver 版本号。
        
    * 原生 打开html时，对比 minver版本号 与 原生系统版本号：
        
        * minver版本号 > 原生版本号：提供用户进行 原生包更新，不进入html页面。
        
        * minver版本号 < 原生版本号：不需要进行 原生包更新。
        
        * minver版本号 = 原生版本号：不需要进行 原生包更新。
