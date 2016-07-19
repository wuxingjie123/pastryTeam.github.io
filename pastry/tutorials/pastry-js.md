# JS

----
## JS工程结构

  * 目录结构
    
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


----
## 模版管理

----
## 通讯组件

----
## 密码键盘
* 功能描述：
    
    
----
## 数据存储

----
## 开发模式配置

调试模式包含四种：`titlebar` `simbridge` `simdata` `depinfo` `weinre`

在HTML模板页面中开启调试模式，需要在头部的依赖配置中加入data-debug选项，例如:

    <script type="text/javascript" src="pastry/js/lib/require.js"
          data-main="pastry/js/main.js"
          data-debug="@titlebar,@simdata,@simbridge,@weinre"
    ……></script>
  
当需要引入多个调试模块时，用逗号隔开如上所示，目前框架提供的调试模块有：

|名称	|功能|
|-----|-----|
|titlebar	|模拟客户端导航栏|
|simdata	|模拟服务端数据交互|
|simbridge	|模拟与客户端通信bridge|
|depinfo	|调试依赖关系|
|weinre |远程调试|

引用模块时不同的前缀表示不同的调试条件，有以下几种也预定义的情况：

|前缀符号	|含义|
|-----|-----|
|前缀!	|仅客户端生效|
|前缀@	|仅网页生效|
|前缀$	|仅网页且地址以file://开头生效|
|前缀#	|客户端、网页均不生效|
|无前缀	|客户端、网页均生效|

----
#### **titlebar**
  
  在页面顶部模拟客户端的导航栏，框架提供了方法设置：
  
  1.标题：setTitle:(title)
  
  2.增加/移除菜单：

|方法	|说明|
|-----|-----|
|addMenu(menu, callback)	|menu:类型为对象，有2个属性： <br/>id：表示菜单id <br/>title：菜单显示名称 <br/>（也可直接传入字符串即为菜单id，此时title为一个“+”）|
|removeMenu(id)	|移除菜单的id |

  3.标记首页：markHome(isHome)

----
#### **simbridge**

  模拟与客户端通信的bridge，模拟与原生的各种交互行为

----
#### **simdata**

模拟服务端返回数据，调试业务逻辑的重要手段。

1.模拟数据对客户端请求无效。

2.默认读取路径为simdata/server/请求的URL对应的文件，例如：

模型请求的地址为“url: 'helloworld.do?act=getAllData'”，则模拟数据为simdata/server/helloworld.do.js的文件中act=getAllData对应的对象。

3.模拟数据内容如下：

    define({
        "act=getAllData": [
            {
                delay: 1000,
          param: {
            key:"1"
              },
                data: {
                    labelData: 'Label',
                    selectData: {
                        value: 0,
                        select: [
                            {option: '1|500'},
                            {option: '2|600'}
                        ]
                    },
                    listData: {
                        list: [
                            {id: '1', title: 500},
                            {id: '2', title: 600}
                        ]
                    }
                }
            }
        ]
    });

|字段	|含义|
|-----|-----|
|delay	|模拟的延迟，为number型|
|param	|模拟上送服务端的参数（测试时参数顺序与请求一致，否则可能不识别）|
|data	|客户端返回的业务数据(为接近真实效果，所有字段请置为字符型)|

----
#### **depinfo**

调试依赖关系时，帮助分析的拓扑图及邻接矩阵（仅WebKit内核浏览器可用）

----
#### **weinre**`不支持`

利用远程调试工具weinre，可以再PC上调试手机浏览器访问的页面。

