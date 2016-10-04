# 组件开发指南

----
## 基于框架源码方式 组件开发指南
#### `适用范围`

* `iOS平台框架组件`

* `android平台框架组件`

* `JS平台框架组件`

* `前置框架组件`

#### `框架功能如需修改，请联系PastryTeam团队人员，禁止项目组人员进行修改。`

----
## 基于Bower方式 组件开发指南
#### `适用范围`

* `JS平台业务组件`

#### 组件命名规范
   以 `component-js-功能名称` 命名
      # 例如注册组件 register
      component-js-register

#### 预备工作

* pastry cli 工具

* Bower 官网地址
  
  * [中文版](http://bowercn.com)

  * [英文版](https://bower.io/)

* 使用 pastry 命令 `pastry bake create HelloWorld ` 创建一个工程

        pastry bake create HelloWorld com.test.helloworld --add-platforms android,ios --add-plugins pastry-plugin-request,pastry-plugin-keyboard,pastry-plugin-browser

#### 1.准备工作

* pastryTeam 在 GitHub 创建 `component-js-功能名称` 代码仓库

* `执行 pastry bake bower init 生成 bower.json 文件，作为组件的描述文件`

* 生成最终的组件工程代码，然后上传到 pastryTeam 的 GitHub

* 组件开发者 fork 该仓库 `component-js-功能名称`


#### 2. 组件开发

* 新建组件项目模板结构

        组件名称
          ┣ components  // 依赖的其它组件; 组件内部引用 B:文件名.js
          ┣ css  // css 文件；组件内部引用 B:文件名.js
          ┣ lib  // js库文件；组件内部引用 B:文件名.js
          ┣ image  //存放组件图片
          ┣ mockdata  //存放组件的模拟数据
          ┣ serverdata  //存放组件的真实服务器接口
          ┣ bower.json  //存放组件的基本信息，由bower  init命令自动生成
          ┣ README.md  //存放组件的功能描述详细信息
          ┗ 组件名称.html  //组件的html

* 组件开发注意事项

  * mockdata 目录规则

    * `mockdata 里支持文件夹目录、支持文件。`例如：注册=register/register.do.js  或者 注册=register.do.js
  
 * serverdata 目录规则 
  
    * `serverdata 里支持文件夹目录、支持文件。`例如：注册=register/register.java 或者 注册=register.java

  * pastry引用路经

        <script type="text/javascript" src="../../pastry/main.js" data-debug></script>

  * 组件目录结构

  * 组件mockdata模拟数据开发

  * 组件serverdata数据开发

#### 3. 组件调试(本地安装)

`前提条件：使用 pastry 命令行 创建 HelloWorld 项目。HelloWorld/www 目录下配置以下文件，若文件存在，则不需要配置`
       
* `配置文件 .bowerrc,   postinstall.js,  preuninstall.js 放在客户端项目 HelloWorld/www 路径下。`

    HelloWorld/www
          ┣ .bowerrc  //存放组件图片
          ┗ bowerScript
                  ┣ postinstall.js  //组件代码preuninstall.js 
                  ┣ preuninstall.js  //组件代码preuninstall.js 
                  ┗ 其它文件目录：例如 app、components等

* .bowerrc文件内容

        {
            "directory": "components", //directory 为安装的组件位置，设置为 HelloWorld\www\components 下
            "scripts": {
                "preinstall": "node  preinstall.js  %",  // 功能：定义安装组件之前要执行的脚本文件
                "postinstall": "node  postinstall.js  %", // 功能：定义安装组件之后要执行的脚本文件
                "preuninstall": "node  preuninstall.js  %" // 功能：定义卸载组件之前要执行的脚本文件
             }
        }

    `其中%为必填，可以将 pastry bake bower install/uninstall 后的参数传入脚本文件`

    `postinstall.js 脚本内容：pastry bake bower install 之后将安装组件里的”mockdata-组件名称“ 文件夹移动到项目根目录/www/mockdata中；`

    `preuninstall.js 脚本内容： pastry bake bower uninstall之后将/www/mockdata里 ”mockdata-组件名称“ 文件夹删除；`

* 执行本地安装 `pastry bake bower install 本地路经` 

      // 本地路经：
      pastry bake bower install 本地路经

* `安装完成，点击组件内html页面，验证是否安装成功`


#### 4.发布组件

* 发布组件源码到 pastryTeam 的 GitHub 

      组件开发者同步代码，并 `pull request` 到 pastryTeam 的 GitHub

* 发布组件到 bower中央仓库

      由 pastryTeam 管理者 执行命令发布组件到 bower 中央仓库 `pastry bake bower register 组件名称 Github地址`

* 更新组件

      // 执行命令
      pastry bake bower update 组件名称

#### 5. 调研过程遇到问题总结

* 调查过程中出现 pastry bake bower install/uninstall 后的参数无法传入 postinstall.js/preuninstall.js 脚本文件。

> 
调查过程：找到本地 bower 的安装目录 C:\Users\Administrator\AppData\Roaming\npm\node_modules\bower , 编辑 bower 代码，将 lib/core 的 scripts.js 和 manager.js 里的相应对象内容打印到控制台，分析scripts里的hook函数及查看 bower 官方文档，发现 .bowerrc 中的 "postinstall":    "node  postinstall.js  % "中js文件后应该加%。

hook函数里的如下代码也有说明：

      var placeholder = new RegExp('%', 'g');

      var cmdString  = mout.string.replace(config.scripts[action], placeholder, orderedPackages.join(' '));

----
## 基于cordova方式 组件开发指南
#### `适用范围`

* `iOS平台业务组件`

* `android平台业务组件`

* `前置业务组件`

* `cordova组件`

#### 插件命名规范
   以 `pastry-plugin-功能名称` 命名
      # 例如浏览器插件 browser
      pastry-plugin-browser

#### 预备工作
* pastry cli 工具
* [Cordova 官网地址](http://cordova.apache.org/)
* 使用 pastry 命令 `pastry bake create HelloWorld ` 创建一个工程
        pastry bake create HelloWorld com.test.helloworld

#### 1.准备环境(由pastryTeam账号创建)

* pastryTeam 在 GitHub 创建 `pastry-plugin-功能名称` 代码仓库。

* 从 pastryTeam clone 插件模版工程 `https://github.com/pastryTeam/pastry-plugin-template` ，修改 `template` 关键词。
  
  * 修改所有的关键词 `template` 为 `功能名称`。

  * ios平台修改 src/ios/`template.bundle` 为 `功能名称.bundle`

  * android平台 `待定`

* 生成最终的插件工程代码，然后上传到 pastryTeam 的 GitHub。

* 插件开发者 fork 该仓库 `pastry-plugin-功能名称`。

#### 2.插件开发

* 新建插件项目模版结构
       插件名称 
            ┣ hooks /功能 : 插件安装、卸载自定义的脚本/ 
            ┣ mockdata /功能 : 插件依赖的模拟数据/ 
            ┣ serverdata /功能 : 插件依赖的真实服务器接口/ 
            ┣ README.md /功能 : 插件使用说明/ 
            ┣ package.json /功能 : 包描述文件，关键字段：id/ 
            ┣ plugin.xml /功能 : 描述如何将插件内文件添加到新工程/ 
            ┣ www /功能 : JS 源码存放目录/ 
            ┗ src /功能 : 插件的其它平台源码存放目录/ 
                ┣ android /功能 :  android 源码存放目录/ 
                ┗ ios /功能 :  iOS 源码存放目录/ 

* 插件开发注意事项

  * 插件mockdata模拟数据开发

  * 插件serverdata数据开发

* 插件安装到项目中的目录结构
  * ios
    * 代码目录
    
            项目名称/platforms/ios/项目名称/Plugins/pastry-plugin-功能名称
            
    * 资源目录
    
            项目名称/platforms/ios/项目名称/Resources/功能名称.bundle
            
  * android
    * 代码目录
    
            待定
            
    * 资源目录

            待定
            
  * JS 
    * 代码目录
    
            待定
            
    * 资源目录

            待定
            
#### 3.插件调试(本地安装)

`前提条件：使用 pastry 命令行 创建 HelloWorld 项目。cd 到 HelloWorld 目录`

* 执行本地安装 pastry bake plugin add 插件目录/pastry-plugin-功能名称

* 安装完成，进行验证

#### 4.发布插件

* 提交插件源码到 pastryTeam 的 GitHub

    插件开发者同步代码，并 pull request 到 pastryTeam 的 GitHub

#### 5.调研过程遇到问题总结
