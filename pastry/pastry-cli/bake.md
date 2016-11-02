# Pastry Bake

## Pastry CLI简介

    Cordova应用本质上是web应用，每个移动平台使用不同的IDE和项目结构。Cordova以前的版本，开发者创建为每个移动平台创建一个项目，再把web应用内容在项目间来回复制。在3.0以后还把Cordova API都迁移到了插件中。管理Cordova项目、Web内容和安装的插件都很困难。从3.0开始(在2.7发布过预览版)，项目添加了CLI，它提供一套命令给开发者使用.
    
    Pastry延用、扩展了Cordova CLI，制作了 Pastry CLI，用于管理项目的创建、编译、打包发布等。

[Cordova CLI 简介][cordova3]

[cordova3]: https://segmentfault.com/a/1190000002915917

----
### 提供项目构建相关命令

* #### `create 可以在任意目录下 执行`
* #### `platform/plugin/build/bower 在项目工程目录下 执行`

----
## create

创建工程，根据选项自动添加支持的平台和插件

使用：

    pastry bake create 项目名 项目ID
    
    选项：
      -w --work-dir       设置工作目录
      -t --add-platforms   设置支持平台
      -p --add-plugins     设置引入插件

`--add-platforms`

* 指定 `--add-platforms ios` 参数，只添加指定的ios平台

* 不指定 `--add-platforms` 参数，添加iOS、android平台


`--add-plugin`

* 指定/不指定 `--add-plugins` 参数，都会加载默认的9个插件；
    * cordova-plugin-whitelist
    
    * cordova-plugin-console
    
    * pastry-plugin-browser
    
    * pastry-plugin-request
    
    * pastry-plugin-keyboard
    
    * pastry-plugin-unzip
    
    * pastry-plugin-guide
    
    * pastry-plugin-tabMain
    
    * pastry-plugin-storage

样例：

    pastry bake create HelloWorld com.example.test

----  
## platform

使用：

    pastry bake platform 子命令
    子命令：
      list                       列出目前支持平台平台
      add 平台参数{android,ios}   添加支持平台
      rm 平台参数{android,ios}    移除支持平台

`平台参数`

* android ios

  `平台模版代码 指向 pastry/tools/common_data/platforms `

* 本地路经

* 在线地址

样例：

    pastry bake platform list
    
    // 删除指定平台
    pastry bake platform rm android
    pastry bake platform rm ios

    // 添加指定平台
    // 字符串参数
    pastry bake platform add android
    // 本地路经
    pastry bake platform add /Users/用户名/Desktop/android
    // 在线地址 获取最新开发版本
    pastry bake platform add https://github.com/pastryTeam/android-template.git
    // 在线地址 获取指定tag版本
    pastry bake platform add https://github.com/pastryTeam/android-template.git#0.1.0

    // 字符串参数
    pastry bake platform add ios
    // 本地路经
    pastry bake platform add /Users/用户名/Desktop/ios
    // 在线地址 获取最新开发版本
    pastry bake platform add https://github.com/pastryTeam/ios-template.git
    // 在线地址 获取指定tag版本
    pastry bake platform add https://github.com/pastryTeam/ios-template.git#0.1.0

----
## plugin

使用：

    pastry bake plugin 子命令
    子命令：
      list          列出目前进入的插件
      add 插件参数   添加cordova插件
      rm 插件参数    移除cordova插件

`插件参数`

* pastry-plugin-XXX cordova-plugin-XXX

  `平台模版代码 指向 pastry/tools/common_data/plugins `
  
  `如果本地路经不存在，则在 Github 的 pastryTeam 仓库里查找。`

* 本地路经

* 在线地址

样例：
    # 显示已存在的插件列表
    pastry bake plugin list

    // 字符串参数
    # 添加 cordova 支持的插件，name：插件名称
    # pastry bake plugin add name
    # 例如 : name = cordova-plugin-camera
    pastry bake plugin add cordova-plugin-camera

    // 本地路经
    # 添加 本地文件插件，filePath：本地文件路径
    # pastry bake plugin add filePath
    # 例如 : filePath = /Users/用户名/Desktop/pastry-plugin-browser
    pastry bake plugin add /Users/用户名/Desktop/pastry-plugin-browser

    # 添加 在线git地址，gitPath：git在线地址
    # pastry bake plugin add gitPath
    # 例如 : gitPath = https://github.com/apache/cordova-plugin-camera.git
    // 在线地址 获取最新开发版本
    pastry bake plugin add https://github.com/apache/cordova-plugin-camera.git
    // 在线地址 获取指定tag版本
    pastry bake plugin add https://github.com/apache/cordova-plugin-camera.git#0.1.0

    # 删除以存在的插件，name：插件名称
    # pastry bake plugin rm name
    # 例如 : name = cordova-plugin-camera
    pastry bake plugin rm cordova-plugin-camera

更多插件:

[pastry Cordova插件库地址][net_pastry_Cordova_plugins]

[net_pastry_Cordova_plugins]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+pastry-plugin&type=Repositories&ref=searchresults

----
## bower

给JS添加业务组件

使用：

    pastry bake bower 子命令 
    
    选项：
      install 组件名称
      uninstall 组件名称         

样例：

    # 安装指定JS业务组件 component-js-register
    pastry bake bower install component-js-register

    # 卸载指定JS业务组件 component-js-register
    pastry bake bower uninstall component-js-register

更多组件:

[pastry JS组件库地址][net_pastry_js_plugins]

[net_pastry_js_plugins]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+component-js&type=Repositories&ref=searchresults

----
## build

对工程进行打包操作

使用：

    pastry bake build 
    
    选项：
      平台参数{ios、android}       平台参数
      -m{debug、release}         打包方式：debug用于测试，release用于生产
      -si{描述文件名称}            描述文件名称 （已废弃）
      -bc{签名证书配置文件}         设置ios/android的签名打包脚本路径，一般为 platforms/android/publish/build.json || platforms/ios/publish/build.json
      -ri{重置config.xml的Id}      重置 ios 的 bundle id，只针对ios平台使用

样例：

    # 进行 debug 编译
    pastry bake build android -m debug -bc 'platforms/android/publish/build.json'
    
    pastry bake build ios -m debug -bc 'platforms/ios/publish/build.json' -ri 'com.myBundleId'

    # 进行 release 编译
    pastry bake build android -m release -bc 'platforms/android/publish/build.json'

    pastry bake build ios -m release -bc 'platforms/ios/publish/build.json'  -ri 'com.myBundleId'
   
    
* `注意删除项目中的 project.pbxproj 的 PRODUCT_BUNDLE_IDENTIFIER = com.**; 保证使用 cordova build.json方式自定义bundle id` 

----
## cordova

使用 Pastry CLI内部集成的 cordova 命令行工具

使用：

    pastry bake cordova 子命令 
    
    常用选项：
      prepare 平台名称        

样例：

    # 将 根目录/www 目录的文件 合并到 android平台的 www 目录
    pastry bake cordova prepare android

    # 将 根目录/www 目录的文件 合并到 android平台的 www 目录
    pastry bake cordova prepare ios

* **`为什么不使用 pastry bake prepare 命令呢？`**

    pastry bake cordova prepare 只是简单的将 根目录/www + 平台内的platform_www 的文件合并到平台内部的www目录，`应用场景：快速测试 明文html和原生的联调。`
    pastry bake prepare 则先执行Pastry CLI内部的cordova prepare，然后再通过 xTools 将html加密打包，`应用场景：测试 加密html和原生的联调`
