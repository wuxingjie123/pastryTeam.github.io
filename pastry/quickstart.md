# 快速开始

## 配置环境

### 基础环境

* NodeJS

  * Windows

  * MacOSX

    执行以下命令安装NodeJS

        brew install nvm
        . $(/usr/local/bin/brew --prefix nvm)/nvm.sh
        nvm install 4.2.6
        nvm use --delete-prefix v4.2.6

* pastry脚手架

  * 下载[pastry.zip][pastry]到任意目录并解压缩

  * 配置环境变量

    * Windows

      将解压后的`pastry`目录路径添加到PATH环境变量中

      或启动命令行窗口,cd至`pastry`目录,执行

          set PATH=%PATH%;pastry目录\bin

    * MacOSX

      将解压后的`pastry`目录路径添加到PATH环境变量中

      或启动命令行窗口,cd至`pastry`目录,执行

          export PATH=$PATH:`pwd`/bin

### Html5 开发配置

* Chrome浏览器

### Android 开发配置

* JDK 6
* Android SDK
* Android Studio

### iOS 开发配置

* 安装 XCode 7.0 以上
* 安装 XCode插件管理工具 [Alcatraz][Alcatraz]
* 在 Alcatraz 工具中搜索 XcodeColors 插件并安装 [XcodeColors][XcodeColors]

## 创建项目

    cd 指定项目目录
    pastry bake create HelloWorld com.test.helloworld --add-platforms android,ios --add-plugins pastry-plugin-request,pastry-plugin-keyboard,pastry-plugin-browser

## 编译项目

    cd HelloWorld
    pastry bake build android -m debug
    pastry bake build ios -m debug 

## 更多命令

    [更多命令][moreCli]

## 工程结构

        ProjectName
         ┣ merges
         ┣ hooks
         ┣ platforms
         ┃  ┣ android
         ┃  ┗ ios
         ┣ plugins
         ┣ www
         ┗ config.xml
* merges 目录     ： 针对ios、android平台的html文件
* hooks 目录    ：   开发人员不需要关注
* platforms 目录
    * android 目录  ：   android开发人员工作目录
    * ios 目录  ：   iOS开发人员工作目录
* plugins目录   ：   插件源码目录，开发人员不需要关注
* www目录   ：   H5开发人员工作目录
* config.xml  ：   开发人员不需要关注

## 开发流程/人员职责
* ios 开发人员
* android 开发人员
* H5 开发人员
* NodeJS版 FO 开发人员
* FO 开发人员

## 联调流程

[pastry]: #

[moreCli]: (cli/bake.md)
[XcodeColors]: https://github.com/robbiehanson/XcodeColors
[Alcatraz]:https://github.com/mneorr/Alcatraz