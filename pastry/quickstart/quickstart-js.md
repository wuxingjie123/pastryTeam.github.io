# JS使用指南

----
## 框架概述

----
### 框架设计

----
#### 移动金融框架
    
* PT JS框架的定位为移动金融JS框架,关键词是移动、金融、和框架。
  
  所以在框架的设计中,考虑更多的是 移动设备上的用户体验、数据安全和代码的可维护性。

* 在框架的规划中,PT JS以手机端应用为起点,将慢慢扩展适用到各种移动设备、PC平台及智能电视。

----
#### 各平台代码统一

* 实现代码的高度统一,同一份JS代码可以在多个平台系统(iOS、Android、WinPhone、PC浏览器)上执行, 提高开发效率。

----
#### 支持差异化

* 提供各平台的差异化处理支持,方便开发者根据业务需求,调整代码复用和用户体验之间的平衡。

----
#### 单业务单模板

* 目前比较流行SPA(单页面应用:Single Page Application)的开发模式,一个Html页面就是一个应用。

  PT JS框架借鉴这一思想,但缩小了一个Html页面的处理范围,一个Html页面处理一个业务,即单业务单 模板的思想。

  这种思想及减少了页面模板的数据量,又减小了应用的复杂度,提高了代码的可维护性。

----
#### 前端MVC

PT JS采用的是前端MVC的思想。

和直接采用JQuery、Ajax的局部刷新机制相比,引入MVC的思想,以增加复杂度和上手难度为代价,提升 了代码的重用性和可维护性。

和后端MVC框架(Spring MVC、Struts)相比,有以下特点:

* 充分利用客户端资源
    
	* 前端MVC由客户端浏览器通过JS解析。 
    
    * 后端MVC由服务器器通过Java解析。
	
* 减少数据传输
	
    * 前端MVC仅在页面第一次加载时需要渲染整个页面,之后请求的返回都是JSON数据,页面局部渲染。 
    
    * 后端MVC每次返回的都是整个页面的Html数据,每次都需要渲染整个页面。
    
* 开发语言统一
    
    * 前端MVC的模板直接写在Html中,和前端展示都使用JS为开发语言,可以直接在浏览器中运行。
    
    * 后端MVC的模板也为独立文件,一般使用模板引擎借助Java解析,一般需要使用服务器容器才能运行,开发人员需要了解java相关知识。

----
#### 概念简化
  
引入MVC的概念增加了框架的复杂度,为了偏于开发者理解,框架简化了一些概念。

* 本应于View(视图)一一对应的Model(数据模型),被框架简化为Simple和PTJSON两种基本数据模型。

* 弱化了Controler(控制器)和View(视图)的概念,将二者合并为组件的概念,通过事件驱动的方式处理用户交互事件。

* 使用Template(模板)来代替View(视图)。

* 框架定制了大量默认行为,如无特殊需求无需开发者配置。

----
#### 高度扩展

虽然对开发者简化了概念,但框架内部机制并没有被简化,通预留的各种扩展接口,可以最大的适应业需求

----
#### 提升客户体验

通过扩展组件,实现更好的用户体验。

----
#### 服务开发者

客户是项目的服务对象,开发者是框架的服务对象。框架提供各种手段力求简化开发,提高项目实施效率。

----
#### 服务项目管理

JS和MVC的模式为代码提供高度的自由度,为了解决代码维护问题,框架定制了各种规范,提高团队开发 代码的一致性。

----
#### 人才培养

PT JS中定义了很多自有概念,也简化了很多概念,这些都是为项目实施服务的。

框架的目标也是尽量使项 目实施傻瓜化,开发者只要按照框架的规则就可以按照需求完成业务实现。

但是这些简化对开发者自身发展来说并不是一件好事,所以鼓励项目组按照实际需求定制组件,不断优化

代码,理解框架思想,发现框架中存在的问题,不断提高自己的技术。

----
### 框架组成

PT JS框架是以第三方开源库为基础实现的,核心技术为requirejs+jquery+backbone+bootstrap(可选)。

|模块           |技术      |
|-----          |-----      |
|**UI**         |bootstrap   |
|**MVC**        |backbone    |
|**API**        |jquery\underscore\iscroll\fastclick    |
|**Manager**    |requirejs    |

* requirejs

    requirejs是基于AMD规范的js加载工具库。requirejs可以通过配置一个主配置文件,自动完成页面js文件 的异步加载。加载时会根据配置描述的依赖关系,按顺序完成js文件的加载。
    
    使用requirejs的css插件,可完成css文件的加载管理。

* jquery

    jquery是流行的js工具函数库,提供一套跨浏览器的基础函数及DOM操作函数实现,可以大幅提高开发效率。

* backbone

    backbone是一个前端MVC框架,完成数据与视图的分离。

* bootstrap

    bootstrap是一个优秀的CSS UI框架。

----
### 框架实现的功能

PT JS框架力求接管一切与业务无关的通用事务处理,具体说主要包括以下几点:

|依赖管理   |数据管理   |页面管理   |异常处理   |原生支持   |调试支持   |
|-----    |-----   |-----   |-----   |-----   |-----   |
|JS依赖    |数据校验   |页面跳转  |校验错误   |双向异步通信 |模拟数据   |
|CSS依赖   |数据收集   |        |通信错误   |            |模拟桥   |
|调试代码   |数据请求   |        |模型错误   |            |模拟器   |
|         |数据适配   |        |组件错误   |            |远程调试   |
|         |数据填充   |        |          |            |        |
|         |数据保持   |        |          |            |         |

* 依赖管理

    页面中所有的js和css加载由框架管理,通过页面的头部的一个script标签元素配置。

* 数据管理

    * 数据校验(规划中)

        框架提供统一的数据校验解决方案,可以通过属性的配置的方式完成绝大部分数据校验工作。 
        
        数据校验支持复杂的依赖校验,开发者借助元素属性描述数据之间的依赖关系,框架将自动进行依赖校验。

    * 数据收集

        框架借助Form组件,自动完成表单数据的收集。在Form组件的提交回调中,开发者可以得到需要的数据。
    
    * 数据请求

        开发者通过配置请求地址和参数,借助组件的刷新完成数据的提交和获取。

    * 数据填充

        服务器返回的数据,组件会根据data-name属性的配置,自动填充到组件的数据模型中并刷新UI

    * 数据适配

        服务器返回的数据不符合组件规定的格式时,框架提供一套数据适配流程,统一完成数据的转换工作。

    * 数据保持

        框架会维护页面中每个组件的数据,保证在页面前进后退时都可以方便的使用和清除。

* 页面跳转

    框架提供一套接口,方便管理页面的跳转和返回。

* 异常处理

    框架提供一套错误处理机制,方便在流程的各个环节捕捉和处理错误。

* 原生支持

    框架提供一套统一的和移动设备原生系统交互的接口,实现了js和原生的双向异步通信。

* 调试支持

    框架提供模拟数据及模拟数据支持,并支持远程调试。

    * 模拟数据

        通过配置模拟数据文件,开发人员可以在服务器接口尚未开发完成时进行业务开发。

    * 模拟桥&模拟器

        框架提供在网页中模拟移动设备行为的模拟器,大幅提到调试效率。

    * 远程调试(`不支持`)

        框架提供远程调试功能,可以在PC机上调试移动设备中的代码,可以即时查看变量值。

----
## 工程目录结构

详见 [JS目录结构][md_pastry-js]

----
## 术语解释

|术语     |作用     |
|-----    |-----    |
|UMP        |统一移动应用开发平台 |
|PT JS      |统一移动应用开发平台的JS框架 |
|业务模板       |用于组织页面的控制逻辑的Html文件 |
|组件         |通过和标签绑定,管理和控制标签的行为 |
|数据模型       |用于配置请求的地址      |
|组件模板       |用于定义组件外观的模板    |
|JS桥            |用户和原生交互的对象     |

----
## 准备知识

* 必要知识
  
  * Html基础
  
  * Css基础
  
  * Javascript基础
  
  * jQuery基础

* 扩展知识

  * underscore

  * Backbone

  * bootstrap

  * 事件驱动

  * 面向对象

  * MVC思想

----
## 快速开始

* 在 `HelloWorld/www/` 目录下,新建一个文本文件,命名为 HelloWorld.html
    
         HelloWorld/www
          ┣ components                      **功能 : h5客户端 组件目录**
          ┣ css                             **功能 : h5客户端 css目录**
          ┣ demo                            **功能 : 示例 Demo**
          ┣ login                           **功能 : 示例 Demo**
          ┣ examples                        **功能 : 示例 Demo，集合所有h5框架封装组件的用法**
          ┣ mockdata                        **功能 : pastry测试服务器示例 Demo**
          ┣ make.xml                        **功能 : 对JS、CSS等文件签名、加解密的配置文件**
          ┣ pastry
          ┃  ┣ components                   **功能 : 框架组件** 
          ┃  ┣ core                         **功能 : 待定**
          ┃  ┣ debug                        **功能 : 待定**
          ┃  ┣ lib                          **功能 : 待定**
          ┃  ┣ main.js                      **功能 : 待定**
          ┃  ┗ plugins                      **功能 : 待定**
          ┣ HelloWorld.html                 **开发者新增文件 **

  并键入以下内容:

        <!DOCTYPE html>
        <html>
            <head>
                <title>Hello World</title>
                <meta http-equiv="Content-type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, user-scalable=0">
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta content="telephone=no" name="format-detection"/>
                <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
                <!--引入框架-->
                <script type="text/javascript" src="../pastry/main.js"
                            data-debug="@simbridge">
                </script>
            </head>

            <body>
                <!--设置加载页-->
                <div data-page-loading>
                    Loading...
                </div>
            </body>
        </html>

        <script type="text/template" id="tp_HomePage" data-title="Hello World ~">
            Hello World!
        </script>

        <script type="text/javascript">
            $(function (param) {
                var Browser = this.Browser;
                Browser.history_goto("tp_HomePage");    
            });
        </script>

* 运行页面

  在浏览器中打开HelloWorld.html,将会显示Hello World!

  
----
## 代码规范

详见 [PT JS框架开发代码规范][md_specification-js]

----
## 命名规范

* 通用规范

    项目开发过程中,代码中出现的变量、元素ID等应是具有实际意义的单词或词组,以提高代码的可读性。 

    避免使用a、b、c、aa、bb、cc这样没有实际意义的变量名。

    变量名应该由a-z、A-Z、0-9或_(下划线)组成,且不应以数字开头。

* 元素ID命名

|类型         |命名约定       |样例         |
|-----       |-----         |-----       |
|页面ID       |驼峰命名,首字母小写,名词+Page |homePage,detailPage    |
|组件ID       |驼峰命名,首字母小写,名词      |productList,userName   |
|模板ID       |驼峰命名,使用tp_前缀,首字母大写 |tp_HomePage,tp_DetailPage  |

* 组件类命名

|类型         |命名约定       |样例        |
|-----       |-----         |-----      |
|组件类       |驼峰命名,首字母大写,名词+组件基类名 |HomePage,DetailPage    |

* 元素扩展属性命名

|类型         |命名约定       |样例         |
|-----       |-----         |-----       |
|元素扩展属性   |全部小写,以data-开头,多个单次使用连字符链接    |data-component,data-title  |

----
## 基础知识

----
### 重要对象

  * 框架中主要涉及以下重要对象:

|对象           |作用         |说明         |
|-----         |-----       |-----        |
|this.Fn       |框架工具函数  |提供基础的工具函数  |
|this.Bridge    |JS桥        |负责和原生环境交互  |
|this.Template  |模板         |定制组件模板     |
|this.Browser   |浏览器        |负责页面跳转     |
|this.Component |组件命名空间   |组件负责管理UI显示和用户事件处理    |
|this.Model     |数据模型命名空间   |数据模型负责定义请求地址,数据校验  |
|this.Component.Base    |组件基类   |所有的组件的基类   |
|this.Model.Base        |数据模型基类 |所有的数据模型的基类|

  * 各个对象间的关系如下图:

  ![对象关系图](/pastry/images/codingSpecification/specifition_js.png)
  
----
### 常用属性
* 通用属性

|属性|说明|适用标签|
|-----|-----|-----|
|id|组件id,在业面中要保持唯一|所有组件|
|data-component|为标签指定组件对象|所有组件|
|data-template|组件在数据准备完好时的模板|所有组件|
|data-loading-template|组件在数据加载时的模板|所有组件|
|data-empty-template|组件在数据为空时的模板|所有组件|
|data-error-template|组件在数据出现错误时的模板|所有组件|

* 表单提交相关属性

|属性|说明|适用标签|
|-----|-----|-----|
|data-name|指定表单数据收集时使用的名称|Label,Input|
|data-submit-button|指定用于触发表单提交的元素|Form及其子类,如Page|

* 校验相关属性

|属性|说明|适用标签|
|-----|-----|-----|
|data-v-required|必输项校验|Input|
|data-v-min-len|最小长度校验|Input|
|data-v-max-len|最大长度校验|Input|
|data-v-regex|正则表达式校验|Input|
|data-v-neq|不相等校验|Input|
|data-v-eq|相等校验|Input|
|data-v-min|最小值校验|Amount|
|data-v-max|最小值校验|Amount|
|data-v-?-msg|相应校验失败的提示|同data-v-?|

----
### id

id是标识一个对象的唯一标识,在页面模板中不应出现重复的id,否则很可能会引起程序的混乱。 

框架中有几种id:

* Html元素id 

* 组件id

* 模型id

* 模板id

说明:

* 元素id的概念和标准的Html中一致,如果一个元素指定了data-component属性,那么框架将生成一个对 应的组件,组件的id和这个元素的id相同。

* 组件和模型是通过id进行绑定的:组件在需要数据对象的时候,会通过组件id寻找数据模型。

* 模板的id应该以tp_开头,一般被被组件引用。

----
### data-name

data-name指的是数据名称,和Html中Form元素的name属性类似,在框架提交表单时,

会以组件的 data-name为key值,组件的getValue()得到值为value值进行数据收集。

另外在简单组件中,setValue和getValue设置和读取的数据key值都为data-name所对应的值。 

例如:

    <input id="input" data-component="Input" data-name="INPUT">

* 当组件中的数据为100时,从表单提交得到的数据为,{INPUT:100}

* Fn.getComponent('input').getValue()和Fn.getComponent('input').model.get('INPUT')是等价的。

* Fn.getComponent('input').setValue(100)和Fn.getComponent('input').model.set('INPUT',100)是等价的。

`注:上面的Fn.getComponent('input').model用法只是为了说明data-name的作用,项目中应避免这 种使用方式。`

----
### data-component

如果一个元素指定了data-component属性,那么框架将生成一个对应的组件。

例如:

    <input id="input" data-component="Input" data-name="INPUT">

页面渲染后将生成一个Input组件,组件id为input。

框架内部将执行类似如下的代码:

    var input = new this.Component.Input();
    input.id = 'input';
    var model = models['input'];
    if(!model){
        model = new this.Model.Simple();
        models['input'] = model;
    }
    input.model = model;

----
## 页面结构

页面分为以下几部分:

*定义js及css依赖,借助require完成 

* 配置组件模板

* 配置业务入口

    * 配置数据模型

    * 扩展组件,主要配置数据收集和页面跳转 

    * 配置首页

页面代码样例:

    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello World</title>
            <!-- 移动APP优化配置 -->
            <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="viewport"
                content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,target-densitydpi=medium-dpi"/>
            <meta content="telephone=no" name="format-detection"/>
            <!-- 页面编码配置 -->
            <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
            <!-- js、css引用及调试配置 -->
            <script type="text/javascript" src="../pastry/main.js"
                    data-debug="@titlebar,@simdata,@simbridge,@weinre"
                    data-cssex="project,style"
                    data-lib="base64,md5"
                    data-libex="custom,public"
                    data-component="switch,tab"
                    data-componentex="menu"></script>
        </head>
        
        <body>
            <!-- 加载页 -->
            <div data-page-loading>page loading...</div> 
        </body>
    
        <!-- 模板定义 -->
        <script type="text/template" id="homePage" data-component="HomePage" data-title="首页">
            <div style="color:#111111">
                Hello World!
                <br/> 
                模板数据:<%=data.TEXT%>
                <br/>
                标签组件:<span data-component="Label" data-name="TEXT"></span>
                <br/>
                用户名:<input data-component="Input" id="userName" data-name="USERNAME">
                <br/>
                密码:<input data-component="Password" id="password" data-name="PASSWORD">
                <br/>
                <input type="button" data-submit-button="next" value="下一步"/> 
            </div>
        </script>

        <!-- 模板定义 -->
        <script type="text/template" id="secondPage" data-component="SecondPage" data-title="第二页">
            <div style="color:#111111">
                Second Page!
                <br/> 
                模板数据:<%=data.TEXT1%>,<%=data.TEXT2%>
                <br/>
                标签组件:<span data-component="Label" data-name="TEXT1"></span>
                <br/>
                标签组件:<span data-component="Label" data-name="TEXT2"></span>
                <br/>
                数据分发测试:<input data-component="Input" style="width:100%" id="test1"/>
                <br/>
                数据分发测试:<input data-component="Input" style="width:100%" id="test2"/>
            </div>
        </script>

        <!--入口-->
        <script type="text/javascript">
            $(function (param) {
                var Component = this.Component;
                var Model = this.Model;
                var Browser = this.Browser;
                var Fn = this.Fn;
                var $ = Fn.$;//解决$冲突问题
                //定制数据模型 
                Fn.setModels({
                    "homePage": new Model.PTJSON(null,
                    {
                        url: "helloworld.do?act=getText",
                        filter: function (data) {
                            data.TEXT = data.TEXT + "[add by filter]";
                            return data;
                        }
                    }),
                    "secondPage": new Model.PTJSON(null,
                    {
                        url: "helloworld.do?act=getSecondText",
                        dispatcher: function (data) {
                        this.dispatch({
                            test1: {value: "by dispatcher:" + data.TEXT1},
                            test2: {value: "by dispatcher:" + data.TEXT2}
                        });
                    },
                    filter: function (data) {
                        data.TEXT1 += "[add by filter]";
                        data.TEXT2 += "[add by filter]";
                        return data;
                    }
                });
            
                //定制组件
                Component.HomePage = Component.Page.extend({
                    onSubmit: function (data, submitId) {
                        alert(_.template("提交按钮ID:<%=id%>\n提交数据:<%=data%>", {id:submitId, data: JSON.stringify(data)}));

                        var option;
                        var sendData = {
                            USERNAME: data.USERNAME,
                            PASSWORD: data.PASSWORD
                        };

                        var initVal = {
                            TEXT1: "Loading A...",
                            TEXT2: "Loading B..."
                        };

                        option = {
                            refresh: {
                                initVal: initVal,
                                param: sendData
                            }
                        };

                        Browser.history_goto("secondPage", option);
                    }
                });

                //定制组件
                Component.SecondPage = Component.Page.extend({

                    onError:function(state,response){ 
                        alert('请求数据出错,state='+state+'\nresponse'+JSON.stringify(response));
                    }
                });

                //配置首页
                var option;
                var sendData = {
                    TYPE: "A" 
                };
                var initVal = {
                    TEXT: "Loading..."
                };
                option = {
                    refresh: {
                        initVal: initVal,
                        param: sendData
                    }
                };

                Browser.history_goto("homePage", option);
            });
        </script>
    </html>

## 模块依赖配置`待定`

    <!-- js、css引用及调试配置 -->
    <script type="text/javascript"
            data-main="pastry/main.js"
            data-debug="@titlebar,@simdata,@simbridge,@weinre"
            data-lib="base64,md5"
            data-component="switch,tab"
            data-libex="custom,public"
            data-componentex="menu"
            data-cssex="project,style">
    </script>

其中:

|属性|作用|说明|
|-----|-----|----|
|data-main|项目配置依赖文件require|固定为pastry/main.js|
|data-debug|项目调试选项|所有的模式是否都支持？？框架调试模块,发布时会去掉该属性 <br/>对应js文件保存路径为pastry/debug 说明:<br/>前缀 ! :仅客户端生效 <br/>前缀 @ :仅网页生效 <br/>前缀 $ :仅网页且地址以file://开头生效 <br/>前缀 # :客户端、网页均不生效 <br/>无前缀:客户端、网页均生效|
|data-lib|引用框架第三方库|框架中定义的第三方库 <br/>对应js文件保存路径为pastry/lib/|
|data-component|引用框架组件|框架中定义的公共组件 <br/>对应js文件保存路径为pastry/components/|
|data-cssex|项目引用CSS|项目中定义的CSS <br/>对应css文件保存路径为css/|
|data-libex|项目引用其它第三方库|项目中定义的第三方库 <br/>对应js文件保存路径为js/libex/ 这个目录是不是 lib目录|
|data-componentex|项目引用其它自定义组件|项目中定义的公共组件 <br/>对应js文件保存路径为js/componentex/ 这个目录是不是 componentexs 目录|

`调试选项 更多信息参考` [JS 开发模式配置][md_pastry-js]

----
## 模版配置

框架中使用underscore库中内置的模板引擎。

* 模板规范

  模板一般写在type属性为“text/template”的script标签中。

    <script type="text/template" id="tp_HomePage"> 
        <!-- 模板内容 --->
    </script>

  `注意模板的id属性必须是唯一的,且应该改具有“tp_”前缀。`

  模板中使用统一的变量名data,例如传入{a:100,b:100}时,在模板中应使用data.a和data.b引用。

  写在类似上面的标签中的模板,一般使用<%表达式%><%=表达式%><%-表达式%>作为语法分割,

  例如：

        <%if(data.test){%>
            <div>test</div>
        <%}%>
        <%=data.test%>
        <%-data.test%>

  写在元素属性中的模板,一般使用{%表达式%}{%=表达式%}{%-表达式%}作为语法分割,

  例如：

        {%if(data.test){%}
            <div>test</div>
        {%}%}
        {%=data.test%}
        {%-data.test%}

----
## 程序入口

PT JS的入口函数framework_ready简化成大家熟悉的jquery选择器形式。

    <script type="text/javascript">
        $(function (param) {
            //...your code
        });
    </script>

  `其中param参数为json对象，是从原生应用中传来的配置参数，具体数据格式根据项目需要自行定义。`

----
## 页面跳转

页面的跳转借助框架的Browser对象调用PT JS的历史堆栈完成，`支持页面 跳转、返回`

语法格式如下

----
#### `跳转`

	    Browser.history_goto(pageId,option);
    
  pageId对应定义的页面模板Id

  option中配置页面跳转的选项参数

**option参数**

|属性	|数据类型	|默认值	|功能	|说明 |
|-----|-----|-----|-----|-----|
|history	|boolean	|true	|跳转后是否保存当前页到历史栈	|  |
|clearHistory	|boolean/string/number |		|跳转后是否清空历史栈	<br/>boolean：是否清空所有页面堆栈 <br/>string：指定清除到具体页的id(例如：{clearHistory:​ '​tp1'​}清除到id为tp1的page) <br/>number：清除的页面数，支持逆向选择(例如：{clearHistory:​ 2}清除两页,{clearHistory:​ -2}清除到倒数第二页)|
|resetInput	|boolean/string	|false	|跳转后是否清空模型数据|	   |
|refresh	|object/array|	{}	|跳转后是否刷新模型数据|   |	

**refresh参数**
  
  refresh参数支持两种格式：
  
  单组件刷新

    var option={
        refresh:{
            id:'id1'
        }
    };

  多组件刷新：

    var option={
        refresh:[
            {
            id:'id1'
            },
            {
            id:'id2'
            }
        ]
    };

|属性	|数据类型	|默认值	|功能	|说明|
   |-----|-----|-----|-----|-----|
   |id	|string	|pageId	|组件id|  |
   |keepOldVal	|boolean	|false	|初始化时是否保留旧数据|	|
   |removeVal	|string	|undefined	|移除的数据key，以逗号分割|    |	
   |initVal	|object	|undefined	|初始化数据| |

----
#### `返回`

    Browser.history_back(option);

option中配置返回的选项参数

**option参数**

|属性	|数据类型	|默认值	|功能	|说明|
|-----|-----|-----|-----|-----|
|id	|string/number|无		|后退页数	|string：指定到具体页的id(同跳转clearHistory) <br/>number：后退的页面数，支持逆向选择(同跳转)|
|trans	|boolean	|true	|返回动作是否执行动画	|无  |

----
## 模型配置

框架提供两种基本的数据模型:

* this.Model.Simple 仅用于存储数据,不支持发送去请求

* this.Model.PTJSON 支持发送去请求,并可以存储数据 数据模型配置语法:

数据模型配置语法:

    var Fn = this.Fn;
    var Model = this.Model;
    Fn.setModels({
        componentId01:new Model.PTJSON(
            {
                //默认数据 
            },
            {
                //请求选项
                url : ...,
                timeout : ...,
                param : {
                    ... 
                }
            } 
        ),

        componentId02:new Model.PTJSON(
            {
                //默认数据 
            },
            {
                //请求选项
            } 
        ),
        ... 
    });

可配置的请求选项:

* 数据请求选项

|选项	|数据类型	|默认值	|说明|
|-----|-----|-----|-----|-----|
|url	|string	|undefined	|模型的请求地址|
|param	|object	|undefined	|模型的请求参数|
|type	|string	|undefined	|数据刷新类型标识|
|timeout	|number	|5000	|请求的超时配置|
|block	|boolean	|true	|是否为阻塞请求|
|cancelable	|boolean	|false	|是否为可取消的请求|

* 数据适配选项

|选项	|数据类型	|默认值	|说明|
|-----|-----|-----|-----|-----|
|mapping	|object	|{}	|数据模型的映射配置|
|filter	|function	|function(data,type){return data;}	|数据过滤器|
|dispatcher	|function	|function(){}	|数据分发器|
|forwarder	|function	|function(){}	|数据转发器|

----
## 数据适配

很多时候，服务器返回的数据并不能完全适合组件的数据模型，这时候，就需要为数据模型配置各种适配函数。

下面是最复杂的数据适配样例，实际项目中根据不同场景，只会用到部分数据适配选项。

包含 `mapping` `filter` `dispatcher` `forwarder` 四种

示例：

        componentId:new Model.PTJSON(
            {
                //默认值
            },
            {
                url : ...,
                mapping : {
                    ...
                },
                filter : function (data, type){
                    //根据需要重组数据
                    return ...;
                },
                dispatcher : function (data, type){
                    //根据需要分发数据
                    this.dispatch({
                        ...
                    })
                },
                forwarder : function (data, type){
                    //根据需要发送后续请求
                    this.forward({
                        ...
                    })
                }
            }
        );

* **mapping**

  mapping指通过属性映射的方式来解决数据适配问题的方案。

        new Model.PTJSON(null,
            {
                url:'helloWorld.do?act=getMyList',
                mapping:{
                    data:'mylist',
                    value:'selected'
                }
            }
        );

  **适配原理**

  属性映射

  比如组件需要的数据格式为{list:[…]}，但是接口得到的数据是{mylist:[…]}，就可以通过配置mapping:{list:'mylist'}来映射。这样框架在需要list属性的值时，会根据映射去获取mylist的属性的值。

  **适用场景** 

  返回的数据格式基本符合组件要求，只有个别字段名不一致。

* **filter**

  filter是指通过数据过滤的方式解决数据适配问题的方案。

        new Model.PTJSON(null,
            {
                url : 'helloWorld.do?act=getMyList',
                filter : function (data, type){
                    return {list : data.mylist};
                }
            }
        );

  **适配原理**

  重组数据

  框架得到服务器返回的数据后，以得到的原始数据为参数，调用filter函数。

  开发者处理收到的数据参数(服务器返回的原始数据)，将处理后的数据作为函数的返回值返回。

  框架使用filter的返回值进行数据填充

  其中type属性为数据请求时提供的参数，用于标识不同的数据请求场景。

  **适用场景**

  返回数据全部是本组件的

  返回数据格式和组件要求的格式相差很大

  需要对返回的数据做定制化的处理，例如排序等

* **dispatcher**

  dispatcher是指通过数据分发的方式解决数据适配问题的方案。

        new Model.PTJSON(null,
            {
                url : 'helloWorld.do?act=getAllData',
                dispatcher : function(data, type) {
                    this.dispatch({
                        componentId01:{
                            list : data.list
                        },
                        componentId02:{
                            items : data.items 
                        },
                    });
                }
            }
        );

  **适配原理**

  数据分发

  框架得到服务器返回的数据后，以得到的原始数据为参数，调用dispatcher函数。 

  开发者处理收到的数据参数(服务器返回的原始数据)，处理后将数据分为多组。

  利用this.dispatch函数分发给其他组件。

  其中type属性标识数据分发的不同情况。

  注意，利用this.dispatch函数分发数据时，数据应该至少分发给2个组件。如果数据只有一组，应该使用filter方式适配数据。

  **适用场景**

  返回的数据不只是本组件的数据，还包含其他组件的数据。


* **forwarder**

  forwarder是用来完成连续数据请求的解决方案。

        new Model.PTJSON(null,
            {
                url : 'helloWorld.do?act=getAllData',
                forwarder : function(data, type) {
                    this.forward({
                        componentId01:{
                            param : {
                                data.no
                            }
                        },
                        componentId02:{
                            param : {
                                data.flag
                            },
                            initVal : {
                                TEXT:'init'
                            }
                        },
                    });
                }
            }
        );

  **适配原理**

  数据流转

  框架得到服务器返回的数据后，以得到的原始数据为参数，调用forwarder函数。

  开发者处理收到的数据参数(服务器返回的原始数据)，处理后将重组参数。

  利用this.forward函数继续请求。

  **适用场景**

  请求数据返回后还有后续请求。

----
## 调试支持 `待定`

* **模拟数据**

  模拟报文文件存储路径为 `mockdata/server/XXX.js`

  模拟报文支持不同平台返回不同模拟报文，将模拟报文文件存入对应的路径即可,如：

  data/android/simdata/server/XXX.js

  data/iphone/simdata/server/XXX.js

  上面的helloworld.do的模拟报文文件对应的文件为 `mockdata/server/helloworld.do.js`

        define({
            "act=getText": [
                {
                    delay: 1000,
                    data: {
                        TEXT: "Hello World !"
                    }
                }
            ],
            "act=getSecondText": [
                {
                    delay: 1000,
                    data: {
                        TEXT1: "Hello Second World A!",
                        TEXT2: "Hello Second World B!"
                    }
                },
                {
                    delay: 2000,
                    result: 0,
                    param: {
                        USERNAME:"citic",
                        PASSWORD:"112233"
                    },
                    data: {
                        TEXT1: "Hello Citic A!",
                        TEXT2: "Hello Citic B!"
                    }
                },
                {
                    data: {
                        err:"模拟出错信息。"
                    }
                }
            ]
        });

* **模拟桥**

  模拟桥支持在开发阶段，使用网页模拟一些原生功能，比如模拟原生的密码键盘，模拟加载新页面等。

  开发者还可以自行扩展模拟桥来模拟更多项目中定义的原生功能。

* **模拟器**

  模拟器提供在浏览器中访问后台数据的能力，模拟器模拟了客户端的加解密行为。

  模拟器可以提高开发调试效率，通过模拟器测试的业务流程，在手机上一般都可以通过测试。

[md_specification-js]: ../codingSpecification/specification-js.md
[md_pastry-js]: ../tutorials/pastry-js.md