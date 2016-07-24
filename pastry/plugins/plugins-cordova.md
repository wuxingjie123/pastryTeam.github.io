# 平台插件

----
## pastry制作的cordova插件使用指南

* 前提条件 : `pastry` 已经正确安装完成。

* 使用 `pastry bake plugin add gitPath` 命令添加pastry制作的cordova插件。
    
  [更多cordova插件添加方法见 bake 的 plugin 命令][md_moreCli]

  [更多的pastry制作的cordova地址][net_pastryplugins]

        pastry bake plugin add gitPath

----
## pastry-plugin-browser 插件

* 功能

    * 提供多窗口功能，避免页面间的环境变量互相污染。

* 使用方法

----
## pastry-plugin-request 插件

* 功能

    * H5的网络请求通过原生加密后发送给服务器。

* 使用方法

----
## pastry-plugin-keyboard 插件

* 功能

    * 提供H5使用原生的密码键盘功能。

* 使用方法

----
## cordova-plugin-console 插件

* 功能

    * 提供H5使用 console.log() 将日志输出到 原生端的开发IDE输出框；

* 使用方法

----
## 更多插件

[cordova 插件地址][net_cordovaplugins]


[net_cordovaplugins]: https://github.com/apache?utf8=%E2%9C%93&query=cordova-
[md_moreCli]: ../pastry-cli/bake.md
[net_pastryplugins]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+pastry-plugin&type=Repositories&ref=searchresults