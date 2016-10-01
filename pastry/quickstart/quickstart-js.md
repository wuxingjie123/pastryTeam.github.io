# Pastry JS使用指南

----
## 工程目录结构

  * 目录结构

         HelloWorld/www
          ┣ .bowerrc **功能 : bower配置文件**            
          ┣ bowerScript **功能 : bower的Hook脚本文件**            
          ┣ app                      
          ┃  ┗ index.html                   **功能 : Web端 入口**
          ┣ components                      **功能 : h5客户端 组件目录**
          ┣ css                             **功能 : h5客户端 css目录**
          ┣ lib                             **功能 : h5客户端 第三库引用目录**
          ┣ examples                        **功能 : 示例 Demo，集合所有h5框架封装组件的用法**
          ┣ mockdata                        **功能 : html开发人员 模拟数据请求 目录**
          ┣ make.xml                        **功能 : 对JS、CSS等文件签名、加解密的配置文件**
          ┣ pastry
          ┃  ┣ components                   **功能 : 框架自定义的组件**
          ┃  ┣ core                         **功能 : 框架核心代码**
          ┃  ┣ debug                        **功能 : 框架为项目配置的debug选项集合**
          ┃  ┣ lib                          **功能 : 框架使用的第三方库**
          ┃  ┣ main.js                      **功能 : 框架入口**
          ┗  ┗ plugins                      **功能 : 框架组件依赖的第三方UI组件库**
  
----
## JS标准概念

----
##### 1、概念解释

|术语     |框架对象           |作用     |说明         |
|-----    |-----    |-----    |-----    |
|Pastry浏览器  |this.Browser   |浏览器        |负责页面跳转     |
|业务         |-       |用于组织页面的控制逻辑的Html文件|        |
|页面类      | this.Component.Page         |用于实现业务的基本步骤单元 |        |
|组件类         |this.Component   |组件命名空间 |组件负责管理UI显示和用户事件处理<br/>通过和标签绑定,管理和控制标签的行为    |
|组件模板      |this.Template     |模板    |定制组件模板<br/>用于定义组件外观的模板     |
|数据模型     |this.Model      |数据模型命名空间      |数据模型负责定义请求地址,数据校验  |
|工具类        |this.api   |框架工具函数       |提供基础的工具函数  |
|JS桥         |this.Bridge   |JS桥           |负责和原生环境交互    |
|window.cordova |Cordova对象  |JS桥        |负责和原生环境交互  |

* 各个对象间的关系如下图:

  ![对象关系图](/pastry/images/codingSpecification/specifition_js.png)

----
##### 2、涉及知识

|`必要知识`|
|-----|
|Html基础 |
|Css基础  |
|Javascript基础   |
|jQuery基础   |
|`扩展知识`   |
|underscore |
|Backbone   |
|bootstrap  |
|事件驱动   |
|面向对象   |
|MVC思想  |

----
##### 3、代码规范

  详见 [PT JS框架开发代码规范][md_specification-js]

----
## 页面结构

* [完整JS页面结构及开发流程在线图][net_page_js]

    * 代码示例地址：[www/examples/base_mvc.html][net_base_mvc]
    
    * 模拟数据地址：[www/mockdata/server/base_mvc.do.js][net_base_mvc_js]

[net_base_mvc]: ../www/examples/base_mvc.html
[net_base_mvc_js]: ../www/mockdata/server/base_mvc.do.js
[net_page_js]: https://www.processon.com/view/link/57ef3cf0e4b009c4af24ad7d

![对象关系图](/pastry/images/quickstart/struct_js.png)

----
## 命名规范

* 通用规范

    项目开发过程中,代码中出现的变量、元素ID等应是具有实际意义的单词或词组,以提高代码的可读性。

    避免使用a、b、c、aa、bb、cc这样没有实际意义的变量名。

    变量名应该由a-z、A-Z、0-9或_(下划线)组成,且不应以数字开头。

* 元素ID命名

|类型         |命名约定       |样例         |
|-----       |-----         |-----       |
|页面ID(id)       |驼峰命名,使用tp_前缀,首字母大写<br/>或<br/>驼峰命名,首字母小写,名词+Page |tp_HomePage,tp_DetailPage<br/>或<br/>homePage,detailPage  |
|组件ID(id)       |驼峰命名,首字母小写,名词      |productList,userName   |

* 组件类命名

|类型         |命名约定       |样例        |
|-----       |-----         |-----      |
|组件类(data-component)       |驼峰命名,首字母大写,名词+组件基类名 |HomePage,CustomInput    |

* 元素扩展属性命名

|类型         |命名约定       |样例         |
|-----       |-----         |-----       |
|元素扩展属性(data-...)   |全部小写,以data-开头,多个单次使用连字符链接    |data-component,data-title  |

----
## 模块依赖配置

    <!-- js、css引用及调试配置 -->
    <script type="text/javascript" 
            src="../pastry/main.js"
            data-debug="@mockdata"
            data-css="E:style"
            data-lib="C:base64,C:md5"
            data-components="C:switch,C:tab">
    </script>

其中:

|属性|作用|说明|
|-----|-----|----|
|data-main|项目配置依赖文件require|固定为pastry/main.js|
|data-debug|项目调试选项|`强烈推荐使用 data-debug="@mockdata" `<br/>框架调试模块,发布时会去掉该属性 <br/>对应js文件保存路径为 根/pastry/debug 说明:<br/>前缀 ! :仅客户端生效 <br/>前缀 @ :仅网页生效 <br/>前缀 $ :仅网页且地址以file://开头生效 <br/>前缀 # :客户端、网页均不生效 <br/>无前缀:客户端、网页均生效|
|data-lib|项目引用 库|引入框架/项目中定义的第三方库 <br/>说明：<br/>C:框架级  对应js文件保存路径为 根/pastry/lib/ <br/>E:项目级  对应js文件保存路径为 根/lib/ <br/>B:业务级  对应js文件保存路径为 当前路经/lib/ <br/>查找规则：components/组件名称/index.js |
|data-components|项目引用 组件|引入框架/项目中定义的公共组件 <br/>说明：<br/>C:框架级  对应js文件保存路径为 根/pastry/components/ <br/>E:项目级  对应js文件保存路径为 根/components <br/>B:业务级 对应js文件保存路径为 当前路经/components/|
|data-css|项目引用 CSS|引入框架/项目中定义的CSS <br/>说明：<br/>C:框架级  对应css文件保存路径为 根/pastry/css <br/>E:项目级  对应css文件保存路径为 根/css <br/>B:业务级 对应css文件保存路径为 当前路径/css/|

----
## 元素扩展属性
* 浏览器Title

|属性|说明|适用标签|
|-----|-----|-----|
|data-title|原生端显示的Title|`<script type="text/template" data-title="Scrollview">`<br/>区别于<br/>`<head><title>Scrollview</title></head>` |
|data-page-loading|`待定 功能是什么`|待定|
|data-browser-?|`待定 功能是什么`|待定|
|data-dependency|依赖的组件或模型的id，可依赖多个使用“,”分隔||
|data-model|组件对应模型(当对应的ID没有模型时有效)|??|

* 通用属性

|属性|说明|适用标签|
|-----|-----|-----|
|id|组件id,在业面中要保持唯一|所有组件|
|data-component|为标签指定组件对象|所有组件| 
|`template 相关`|-----|-----|
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

data-name指的是数据名称,和Html中Form元素的name属性类似,`用于框架提交表单时(onSubmit方法),`

`会以组件的 data-name 为 key 值,组件的 getValue() 得到值为 value 值进行数据收集。`

* 简单组件中,setValue和getValue设置和读取的数据key值都为data-name所对应的值。

    例如:

        <input id="inputId" data-component="Input" data-name="inputText">
        
        // 表单提交方法
        onSubmit: function (event) {
            var data = event.data;
            var submitId = event.id;
            // data.inputText 就是搜集的 inputId 值;
            alert(JSON.stringify(data, null, '  '));
        }


  * 当组件中的数据为100时,从表单提交得到的数据为,{inputText:100}
    
  * 获取 Model 的 inputText 值(以下方法等价，推荐第一种方法)
        
    * **`var value = api.getModel('inputId').getValue();`**
        
    * var value = api.getModel('inputId').get('inputText');
        
    * var value = api.getComponent('inputId').getValue();
        
    * var value = api.getComponent('inputId').model.getValue();
        
    * var value = api.getComponent('inputId').model.get('inputText');
    
  * 设置 Model 的 inputText 值(以下方法等价，推荐第一种方法)
        
    * **`api.getModel('inputId').setValue(200);`**
        
    * api.getModel('inputId').set('inputText', 200);
        
    * api.getComponent('inputId').setValue(200);
        
    * api.getComponent('inputId').model.setValue(200);
        
    * api.getComponent('inputId').model.set('inputText',200);

* 复杂组件中？？？



----
### data-component

如果一个元素指定了data-component属性,那么框架将生成一个对应的组件。

例如:

    <input id="inputId" data-component="Input" data-name="inputText">

页面渲染后将生成一个Input组件,组件id为inputId。

框架内部将执行类似如下的代码:

    var input = new this.Component.Input();
    input.id = 'inputId';
    var model = models['inputId'];
    if(!model){
        model = new this.Model.Simple();
        models['inputId'] = model;
    }
    input.model = model;

----
### 更多扩展属性介绍....

----
## 页面组件配置

----
## 模版(Template)配置

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
## 模型(Model)配置

框架提供两种基本的数据模型:

* this.Model.Simple 仅用于存储数据,不支持发送去请求

* this.Model.PTJSON 支持发送去请求,并可以存储数据 数据模型配置语法:

数据模型配置语法:

    var api = this.api;
    var Model = this.Model;
    
    var windowModel = {
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
    };
    
    api.setModels(windowModel);

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
## 组件更新

----
## 表单提交

----
## window参数传递

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

* **调试方法对比表**

   更多调试方法详见 [Hybrid调试方法][md_hybrid]

[md_specification-js]: ../codingSpecification/specification-js.md
[md_hybrid]:../ready/hybrid.md
