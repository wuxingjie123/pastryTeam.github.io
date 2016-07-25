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
         ┃  ┣ common_data         **功能 : 存放h5、iOS、android项目模版数据 及 FO服务器** 
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

  `如果是在 mac 环境下，会自动进入 HelloWorld/platforms/ios 目录下执行 pod install 安装iOS原生组件依赖`

  `等待 pod install 命令执行完毕，打开 HelloWorld.xcworkspace，XCode 会完成工程依赖的创建，`
  
  `否则，导致 pastry bake build ios 命令失败` 

## 保存代码到代码仓库

  * 将创建完的项目代码保存到代码仓库；`编译项目后产生临时文件，临时文件不需要保存到代码仓库`

  * 根据目录与开发人员的不同创建SVN、Git权限，确保代码管理的有序

## 编译项目

    cd HelloWorld
    
    pastry bake build android -m debug
    
    pastry bake build ios -m debug -si 描述文件名称

  * 备注

    * `编译失败原因 : 证书id 是否与本机证书保持一致；`

          The following build commands failed:
            Check dependencies
          (1 failure)
          ERROR building one of the platforms: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/gengyuanchao/Desktop/PastryProduct/HelloWorld/platforms/ios/cordova/build-debug.xcconfig,-project,HelloWorld.xcodeproj,ARCHS=armv7 arm64,-target,HelloWorld,-configuration,Debug,-sdk,iphoneos,build,VALID_ARCHS=armv7 arm64,CONFIGURATION_BUILD_DIR=/Users/gengyuanchao/Desktop/PastryProduct/HelloWorld/platforms/ios/build/device,SHARED_PRECOMPS_DIR=/Users/gengyuanchao/Desktop/PastryProduct/HelloWorld/platforms/ios/build/sharedpch
          You may not have the required environment or OS to build this project

    * `编译失败原因 : pod install 命令执行完毕，未打开 HelloWorld.xcworkspace，XCode 会完成工程依赖的创建。`

          xcodebuild: error: The workspace named "HelloWorld" does not contain a scheme named "HelloWorld". The "-list" option can be used to find the names of the schemes in the workspace.
          ERROR building one of the platforms: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/gengyuanchao/Desktop/TestPastry/HelloWorld/platforms/ios/cordova/build-debug.xcconfig,-scheme,HelloWorld,ARCHS=armv7 arm64,-workspace,HelloWorld.xcworkspace,-configuration,Debug,-sdk,iphoneos,build,VALID_ARCHS=armv7 arm64,CONFIGURATION_BUILD_DIR=/Users/gengyuanchao/Desktop/TestPastry/HelloWorld/platforms/ios/build/device,SHARED_PRECOMPS_DIR=/Users/gengyuanchao/Desktop/TestPastry/HelloWorld/platforms/ios/build/sharedpch
          You may not have the required environment or OS to build this project
          Error: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/gengyuanchao/Desktop/TestPastry/HelloWorld/platforms/ios/cordova/build-debug.xcconfig,-scheme,HelloWorld,ARCHS=armv7 arm64,-workspace,HelloWorld.xcworkspace,-configuration,Debug,-sdk,iphoneos,build,VALID_ARCHS=armv7 arm64,CONFIGURATION_BUILD_DIR=/Users/gengyuanchao/Desktop/TestPastry/HelloWorld/platforms/ios/build/device,SHARED_PRECOMPS_DIR=/Users/gengyuanchao/Desktop/TestPastry/HelloWorld/platforms/ios/build/sharedpch

## 更多命令

* [更多命令][md_moreCli]

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
         ┣ pastry-fo-java     **FO Java开发人员工作目录**
         ┗ pastry-fo-nodejs   **FO NodeJS开发人员工作目录**

## 演示示例

  * 运行 app 浏览示例效果

    ![效果图](/pastry/images/ios/iosDemo.png)

  * 查看 `HelloWorld/www/app` 里代码进行业务开发

## 开发流程/人员职责

* ios 开发人员 (开发流程见 [iOS指南-快速开始][md_quickstart-ios])

  * 职责

    * 原生组件开发

    * 基于 cordova 插件原生开发

* android 开发人员 (开发流程见 [android指南-快速开始][md_quickstart-android])

  * 职责

    * 原生组件开发

    * 基于 cordova 插件原生开发

* H5 开发人员 (开发流程见 [JS指南-快速开始][md_quickstart-js])

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

[net_XcodeColors]: https://github.com/robbiehanson/XcodeColors
[net_Alcatraz]: https://github.com/mneorr/Alcatraz
[net_nodejs官网]: https://nodejs.org/zh-cn/
[net_pastryWiki]: https://github.com/pastryTeam/pastryTeam.github.io
[md_download]: ../download.md
[md_pastry-ios]: ../tutorials/pastry-ios.md
[md_moreCli]: ../pastry-cli/bake.md

[md_quickstart-android]: quickstart-android.md
[md_quickstart-ios]: quickstart-ios.md
[md_quickstart-js]: quickstart-js.md
