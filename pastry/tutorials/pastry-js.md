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

调试模式包含一种：`mockdata`

在HTML模板页面中开启调试模式，需要在头部的依赖配置中加入data-debug选项，例如:

    <script type="text/javascript"
          data-main="pastry/main.js"
          data-debug="@mockdata"
    ……></script>
  
当需要引入多个调试模块时，用逗号隔开如上所示，目前框架提供的调试模块有：

|名称	|功能|
|-----|-----|
|mockdata	|模拟服务端数据交互|

引用模块时不同的前缀表示不同的调试条件，有以下几种也预定义的情况：

|前缀符号	|含义|
|-----|-----|
|前缀!	|仅客户端生效|
|前缀@	|仅网页生效|
|前缀$	|仅网页且地址以file://开头生效|
|前缀#	|客户端、网页均不生效|
|无前缀	|客户端、网页均生效|

----
#### **mockdata**

模拟服务端返回数据，调试业务逻辑的重要手段。

1.模拟数据对客户端请求无效。

2.默认读取路径为 `mockdata/server/` 请求的URL对应的文件，例如：

模型请求的地址为“url: 'helloworld.do?act=getAllData'”，则模拟数据为 `mockdata/server/helloworld.do.js` 的文件中 `act=getAllData` 对应的对象。

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


