# Pastry Bake

提供项目构建相关命令

## create

创建工程，根据选项自动添加支持的平台和插件

使用：

    bake create 项目名 项目ID
    
    选项：
      -w --work-dir       设置工作目录
      -t --add-platforms   设置支持平台
      -p --add-plugins     设置引入插件

样例：

    bake create HelloWorld com.example.test
    
## platfrom

添加或移除支持的平台

使用：

    bake platfrom 
    子命令：
      list                       列出目前支持平台平台
      add 平台名称{android,ios}   添加支持平台
      rm 平台名称{android,ios}    移除支持平台
    选项：
      -w --work-dir              设置工作目录
     
样例：

    bake platfrom add android
    bake platfrom rm ios

## plugin

添加或移除引入的插件

使用：

    bake plugin 
    子命令：
      list          列出目前进入的插件
      add 插件名称   添加支持平台
      rm 插件名称    移除支持平台
    选项：
      -w --work-dir 设置工作目录
     
样例：

    bake plugin add cordova-plugin-xxx
    bake plugin rm cordova-plugin-xxx

## build

构建工程

## run

运行工程

## dir

目录相关命令

## file

文件相关命令

# License

Copyright &copy; asp.citic.com 2016 