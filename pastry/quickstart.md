# 快速开始

## 配置环境

### 基础环境

1、 NodeJS

  * Windows

  * MacOSX
  
    打开 [NodeJS官网][net_nodejs官网] ,点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件|.pkg文件）。然后像安装QQ一样安装它就可以了（安装路径随意）。
    
    安装完成在终端输入 `node -v` 正确显示 node 版本号，即安装成功
    
        node -v


2、 pastry脚手架

  * 下载 [pastry脚手架][md_download] 到任意目录并解压缩

      目录结构
    
        pastry
         ┣ bin                    **公共文件**
         ┣ lib                    **公共文件**
         ┣ node_modules           **公共文件**
         ┣ package.json           **公共文件**
         ┣ tools
         ┃  ┣ common_data         **功能 : 存放h5、iOS、android项目模版数据** 
         ┃  ┣ pastry-bake         **功能 : 项目创建、编译、打包等命令**
         ┃  ┣ pastry-emulator     `不支持`
         ┃  ┣ pastry-ide          **功能 : 支持部分功能**
         ┃  ┣ pastry-taste        `不支持`
         ┃  ┗ pastry-xtools       **功能 : 对html、js、css等文件进行签名、加密**

  * 配置环境变量

    * Windows

      * 配置环境变量

        将解压后的`pastry目录\bin` 路径添加到 系统环境变量 `PATH` 中

      * 查看运行结果

        重新启动命令行窗口，执行 pastry，配置成功将显示以下信息

            usage: pastry {bake,emulator,taste,ide} ...

    * MacOSX

      * 配置环境变量

        为解压后的`pastry`路径创建到 `usr/local/bin` 的软连接

        启动命令行窗口,cd至`pastry`目录,执行

              ln -s `pwd`/bin/pastry /usr/local/bin
      
      * 查看运行结果

        重新启动命令行窗口，执行 pastry，配置成功将显示以下信息

            usage: pastry {bake,emulator,taste,ide} ...

3、 pastry测试服务器:`备注：调试过程中，网络请求异常，检查 pastry测试服务器 是否开启`

  * 下载 [pastry测试服务器][md_download] 到任意目录并解压
    
    目录结构
    
        pastry-server
         ┣ bin                          `公共文件(暂时无用)`
         ┣ lib                          `公共文件(暂时无用)`
         ┣ node_modules                 `公共文件(暂时无用)`
         ┣ package.json                 `公共文件(暂时无用)`
         ┣ tools
         ┃  ┣ common_data               `公共文件(暂时无用)`
         ┃  ┣ pastry-emulator-server    `不支持`
         ┃  ┣ pastry-taste-server       `不支持`
         ┃  ┗ pastry-test-server        **功能 : 开发过程中的NodeJS版pastry测试服务器 == FO服务器**

  * 模拟服务器数据

      * 拷贝 pastry-test-server 目录 到 任意目录
        
        目录结构
    
            pastry-test-server
            ┣ bin                          **公共文件**
            ┣ data                         **功能 : 保存握手使用的证书**
            ┣ lib                          **公共文件**
            ┣ package.json                 **公共文件**
            ┣ wwwroot
            ┃  ┣ images                    **公共文件**
            ┃  ┣ mockdata                  **功能 : 模拟服务器接口、数据 例如:helloworld.do.js**
            ┃  ┗ ptframework               **功能 : 用于热更新**

      * 编写服务器模拟数据

          具体编写方式 详见 [pastry测试服务器模拟数据指导][md_pastry-cli-test-server]

#### Html5 开发配置

* Chrome浏览器

#### FO 开发配置

  * NodeJS pastry测试服务器

    * NodeJS


  * Java FO

    * `待定`

#### Android 开发配置

* JDK 6

* Android SDK

* Android Studio

#### iOS 开发配置

* 安装 cocoapods

      # 移除现有Ruby默认源
      gem sources --remove https://rubygems.org/

      # 使用新的源
      gem sources -a https://ruby.taobao.org/

      # 安装CocoaPods
      sudo gem install cocoapods

      # 初始化 pod 仓库，耗时时间长，需要等待
      pod setup

* 安装 XCode 7.0 以上

* 安装 XCode插件管理工具 [Alcatraz][net_Alcatraz]

* 在 Alcatraz 工具中搜索 XcodeColors 插件并安装 [XcodeColors][net_XcodeColors]

## 创建项目

  * 创建客户端项目 `HelloWorld`，包含 h5、iOS、android;

        cd 指定项目目录
      
        pastry bake create HelloWorld com.test.helloworld --add-platforms android,ios --add-plugins pastry-plugin-request,pastry-plugin-keyboard,pastry-plugin-browser

  * 配置 `pastry测试服务器` 到 客户端项目  `HelloWorld`
    
        cp -rf pastry-test-server目录 ./HelloWorld


  * 配置 `FO服务器` 到 客户端项目  `HelloWorld`
      
      `待定`

## 保存代码到代码仓库

  * 将创建完的项目代码保存到代码仓库；`编译项目后产生临时文件，临时文件不需要保存到代码仓库`

  * 根据目录与开发人员的不同创建SVN、Git权限，确保代码管理的有序

## 编译项目

    cd HelloWorld
    
    pastry bake build android -m debug
    
    pastry bake build ios -m debug -si 描述文件名称

  * 备注

    * 编译失败原因 : 证书id 是否与本机证书保持一致；

          The following build commands failed:
            Check dependencies
          (1 failure)
          ERROR building one of the platforms: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/gengyuanchao/Desktop/PastryProduct/HelloWorld/platforms/ios/cordova/build-debug.xcconfig,-project,HelloWorld.xcodeproj,ARCHS=armv7 arm64,-target,HelloWorld,-configuration,Debug,-sdk,iphoneos,build,VALID_ARCHS=armv7 arm64,CONFIGURATION_BUILD_DIR=/Users/gengyuanchao/Desktop/PastryProduct/HelloWorld/platforms/ios/build/device,SHARED_PRECOMPS_DIR=/Users/gengyuanchao/Desktop/PastryProduct/HelloWorld/platforms/ios/build/sharedpch
          You may not have the required environment or OS to build this project

## 更多命令

* [更多命令][moreCli]

## 工程结构

        ProjectName
         ┣ merges             **针对ios、android平台的html文件**
         ┣ hooks              **开发人员不需要关注**
         ┣ platforms
         ┃  ┣ android         **android开发人员工作目录**
         ┃  ┗ ios             **iOS开发人员工作目录**
         ┣ plugins            **插件源码目录，开发人员不需要关注**
         ┣ www                **H5开发人员工作目录**
         ┣ config.xml         **开发人员不需要关注**
         ┣ FO                 **Java开发人员工作目录**
         ┗ pastry-test-server **NodeJS开发人员工作目录**

## 演示示例

  * 运行 app 浏览示例效果

    ![效果图](/pastry/images/ios/iosDemo.png)

  * 查看 `HelloWorld/www/examples` 里代码进行业务开发

## 开发流程/人员职责

* ios 开发人员

  * 职责

    * 原生组件开发

    * 基于 cordova 插件原生开发

* android 开发人员

  * 职责

    * 原生组件开发

    * 基于 cordova 插件原生开发

* H5 开发人员

  * 职责

    * html组件开发

    * 基于 cordova 插件html开发

    * 学习 `HelloWorld/www/examples` 里代码进行业务开发

* NodeJS版 pastry测试服务器 开发人员 (H5开发人员)

  * 职责

    * 模拟服务器接口、数据开发


* FO 开发人员(Java)

  * 职责

    * 连接真实服务器接口开发

## 调试发布

### 开发模式配置

* iOS 开发模式配置 详见 [iOS功能 - 开发模式配置][md_pastry-ios]

* android 开发模式配置 详见 `待定`

* h5 开发模式配置 详见 `待定`

### h5调试流程

* 使用 Chrome 调试

### 发布给测试人员调试流程

  * iOS

    * 更新项目仓库里的项目代码到本地；

    * 执行 `pastry bake build ios -m debug -si 描述文件名称` 命令,

      CODE_SIGN_IDENTITY = "iPhone Developer: Min Tan (RWTVR85F43)";
    
          cd 项目根目录

          pastry bake build ios -m debug -si 'iPhone Developer: Min Tan (RWTVR85F43)'

    * 测试人员通过修改 app 的 Setting 设置来连接不同的服务器；详见 [iOS功能 - 开发模式配置][md_pastry-ios]

  * android

    * `待定`

### 发布流程

  * iOS

    * `修改 PastryFramework/PastryResources/release/System.plist 里的 list Item0 为 真实服务器地址;`

    * 更新项目仓库里的项目代码到本地；

    * 执行 `pastry bake build ios -m release -si 描述文件名称` 命令,

      CODE_SIGN_IDENTITY = "iPhone Developer: Min Tan (RWTVR85F43)";
    
          cd 项目根目录

          pastry bake build ios -m release -si 'iPhone Developer: Min Tan (RWTVR85F43)'

  * android

    * `待定`

## Wiki文档本地化

* 支持无网状态下，浏览平台Wiki

    1、进入 [pastry wiki Github][net_pastryWiki] 下载源码，并解压的到 pastryTeam.github.io-master 目录；

    2、安装 http-server ，需要NodeJS支持

        sudo npm install -g http-server

    3、启动服务，浏览Wiki

        cd 下载目录/pastryTeam.github.io-master
        
        http-server

    4、输入地址 http://127.0.0.1:8081/pastry 即可离线读取 Wiki；

[moreCli]: pastry-cli/bake.md
[net_XcodeColors]: https://github.com/robbiehanson/XcodeColors
[net_Alcatraz]: https://github.com/mneorr/Alcatraz
[net_nodejs官网]: https://nodejs.org/zh-cn/
[net_pastryWiki]: https://github.com/pastryTeam/pastryTeam.github.io
[md_download]: download.md
[md_pastry-ios]: tutorials/pastry-ios.md
[md_pastry-cli-test-server]: pastry-cli/test-server.md
