# 快速开始

## 配置环境

### 基础环境

1、 NodeJS

  * Windows

  * MacOSX
  
    打开 [NodeJS][net_nodejs官网] ,点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件|.pkg文件）。然后像安装QQ一样安装它就可以了（安装路径随意）。
    
    安装完成在终端输入 node -v 正确显示 node 版本号，即安装成功
    
        node -v


2、 pastry脚手架

  * 下载 [pastry脚手架][md_download] 到任意目录并解压缩

      目录结构
    
        pastry
         ┣ bin                    **公共文件**
         ┣ lib                    **公共文件**
         ┣ node_modules           **公共文件**
         ┣ package.json           **公共文件**
         ┗ tools
         ┃  ┣ common_data         **公共文件** 
         ┃  ┣ pastry-bake         **公共文件**
         ┃  ┣ pastry-emulator     `不支持`
         ┃  ┣ pastry-ide          **支持部分功能**
         ┃  ┣ pastry-taste        `不支持`
         ┃  ┗ pastry-xtools       **公共文件**

  * 配置环境变量

    * Windows

      将解压后的`pastry`目录路径添加到PATH环境变量中

      或启动命令行窗口,cd至`pastry`目录,执行

            set PATH=%PATH%;pastry目录\bin

    * MacOSX

      为解压后的`pastry`路径创建到 `usr/local/bin` 的软连接

      启动命令行窗口,cd至`pastry`目录,执行

            ln -s `pwd`/bin/pastry /usr/local/bin

3、 pastry测试服务器

  * 下载 [pastry测试服务器][md_download] 到任意目录并解压
    
    目录结构
    
        pastry-server
         ┣ bin                          `公共文件(暂时无用)`
         ┣ lib                          `公共文件(暂时无用)`
         ┣ node_modules                 `公共文件(暂时无用)`
         ┣ package.json                 `公共文件(暂时无用)`
         ┗ tools
         ┃  ┣ common_data               `公共文件(暂时无用)`
         ┃  ┣ pastry-emulator-server    `不支持`
         ┃  ┣ pastry-taste-server       `不支持`
         ┃  ┗ pastry-test-server        **支持**

  * 模拟服务器数据

      * 拷贝 pastry-test-server 目录 到 任意目录
        
        目录结构
    
            pastry-test-server
            ┣ bin                          **公共文件**
            ┣ data                         **公共文件 : 保存握手使用的证书**
            ┣ lib                          **公共文件**
            ┣ package.json                 **公共文件**
            ┗ wwwroot
            ┃  ┣ images                    **公共文件**
            ┃  ┣ mockdata                  **模拟数据 例如:helloworld.do.js**
            ┃  ┗ ptframework               **用于热更新**

      * 编写服务器模拟数据

          具体编写方式 详见 [服务器模拟数据指导][md_pastry-cli-test-server]

### Html5 开发配置

* Chrome浏览器

### NodeJS 测试服务器配置

* NodeJS

### Android 开发配置

* JDK 6

* Android SDK

* Android Studio

### iOS 开发配置

* 安装 XCode 7.0 以上

* 安装 XCode插件管理工具 [Alcatraz][net_Alcatraz]

* 在 Alcatraz 工具中搜索 XcodeColors 插件并安装 [XcodeColors][net_XcodeColors]

## 创建项目

    cd 指定项目目录
    
    pastry bake create HelloWorld com.test.helloworld --add-platforms android,ios --add-plugins pastry-plugin-request,pastry-plugin-keyboard,pastry-plugin-browser

## 编译项目

    cd HelloWorld
    
    pastry bake build android -m debug
    
    pastry bake build ios -m debug 

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
         ┗ config.xml         **开发人员不需要关注**


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

* NodeJS版 FO 开发人员 (H5开发人员)

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

### 真机调试流程

  * iOS

    * 修改 PastryFramework/PastryResources/release/System.plist 里的 list Item0 为 真实服务器地址;

    * 更新项目仓库里的项目代码到本地；

    * 执行 `pastry bake build` 命令
    
          cd 项目根目录

          pastry bake build ios -m debug -si 描述文件名称

  * android
    * `待定`

### 发布流程

  * iOS

    * 修改 PastryFramework/PastryResources/release/System.plist 里的 list Item0 为 真实服务器地址;

    * 更新项目仓库里的项目代码到本地；

    * 执行 `pastry bake build` 命令
    
          cd 项目根目录

          pastry bake build ios -m release -si 描述文件名称

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
