# Pastry Bake

提供项目构建相关命令

----
## create

创建工程，根据选项自动添加支持的平台和插件

使用：

    pastry bake create 项目名 项目ID
    
    选项：
      -w --work-dir       设置工作目录
      -t --add-platforms   设置支持平台
      -p --add-plugins     设置引入插件

样例：

    pastry bake create HelloWorld com.example.test

----  
## platform

使用：

    pastry bake platform 
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

    pastry bake plugin 
    子命令：
      list          列出目前进入的插件
      add 插件参数   添加cordova插件
      rm 插件参数    移除cordova插件

`平台参数`

* pastry-plugin-XXX cordova-plugin-XXX

  `平台模版代码 指向 pastry/tools/common_data/plugins `

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

----
## build

构建工程

样例：

    # 进行 debug 编译
    pastry bake build android -m debug
    
    pastry bake build ios -m debug -si 描述文件名称

    # 进行 release 编译
    pastry bake build android -m release

    pastry bake build ios -m release -si 描述文件名称


# License

Copyright &copy; asp.citic.com 2016 