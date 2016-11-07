- [x] html、js代码缩进设置：针对于 webStorm
    
    - ![webStorm设置截图](https://pastryteam.github.io/pastry/issues/0-images/3/3-1.jpeg)
     
- [x] JS端调用原生功能，原生功能无反应。（包含 console.log 无法在客户端输出日志）
    - 原因
        - JS端代码崩溃，导致无法继续运行
    - 确认方式
        - 真机配合浏览器进行单步调试，检查JS端是否调用非空数据，导致JS代码崩溃

- [x] Browser.history_goto(pageId, option) 
    
    - option的refresh的initVal属性会覆盖Model的默认值设置，只要设置了initVal属性，所有Model的默认设置都不生效。

- [x] 每一个业务功能包含：
    
    - 1个html页面
    
    - 1个css文件
    
    - 1个mockdata/server下的模拟数据文件

- [x] list如果用下拉刷新，上传加载onlistitem事件可能会出现多次；

    - 用 api.getComponent('组件').parent.iScroll.refresh()方法进行刷新

- [x] 如果一个组件继承自list，其后的模拟数据必须有list数组；

- [x] for循环下不能用checkbox,checkbox的默认显示用下 api.getModel(组件ID).set(组件data-name, "true");设置组件的data-name有值即可；
例如:
 
    ```
    if (infoCollectFsk.fsk_chwe === "1") {
        api.getModel('radio1').set('zfk_chwe', "true");
    } else {
        api.getModel('radio2').set('zfk_chwe', "true");
    }
    ```

- [x] 写的js文件需要转为utf8格式。

- [x] 模板里的标签属性用<%  %>,元素属性用{% %}可能还不能用；
 
- [x] 开发最好为自上向下，CSS各个模块的类命名不要重复，防止合为一个html文件时样式出现冲突；

- [x] html开头需要加data-debug="@mockdata"这句话，否则关于此文件的console日志记录不会输出；

- [x] data-name不能出现有“-”，可以出现“_”;

- [x] 验证码组件中的model请求无效，需要在html页面组件出现的地方用data-act属
性代替。
如下：（框架内部封装组件按此属性取交易码）

    ```
    <button data-component="TransferByMobGetCode"
        id="synCode"
        data-infotest="短信内容"
        data-time="60"
        data-text-before="发送验证码"
        data-text-after="重发"
        data-name="SYNCODE"
        data-act = "GS00100"
        class="command_button_sms">
    </button>
    ```

- [x] form组件必须要有data-name属性，响应onsubmit事件时event.data显示按照data-name来，如果组件没有此属性，组件数据不会在event.data里；

- [x] 触发组件的change,submit事件，可以用api.getModel('模型').trigger('change')事件代替；

- [x] 指定组件触发 onSubmit 方法；onSubmitId = customId;
    - $("customId").trigger(_.extend($.Exent("click"),{originalEvent:{}}));

- [x] select组件的api.getModel("模型").set有时候会不触发，用api.getComponent("模型").refresh(option)代替；

- [x] event中的data-name与id设置为与接口文档相同的，则event.data直接赋值给上传对象即可；

- [x] 信息采集页面下拉框点不到的问题，是因为标签头不统一的原因，统一改为

```
<meta http-equiv="Pragma" content="no-cache"/>
<meta name="format-detection" content="telephone=no"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta http-equiv="Content-Type" content="text/html; charset=Utf-8"/>
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"/>
```

- [x] 将数据校验放在一个js文件里去，相同的行为最好用相同的方法维护，防止出错不好维护；

- [ ] 信息采集页面重复聚焦导致键盘弹出两次问题，在pastry/core/all.js里搜索下面的话，然后删掉

```
var n;"Android"===e.getOs()&&(n=a(":focus"),n[0]===t.target&&a(t.target).blur().focus())
```

- [ ] 报页面找不到os，
$(function(param){...})改成function framework_ready(param){...}，并且将此函数调到bodyhtml下面；

- [ ] 针对键盘没收回时当前页面与下一页错位的问题，在跳转browser.history_goto之前加一个500的延时；



- [ ] script 顺序的调整。将 script 调整到 html 标签后面。


- [ ] datapicker有点问题，第二句的引用路径应该改为

    ```
    define(['js/core', '~/plugins/bootstrap-datapicker/bootstrap-datepicker', 'css!~/plugins/bootstrap-datapicker/bootstrap-datepicker.css', 'css!~/plugins/bootstrap-datapicker/bootstrap-datepicker-ex.css'])
    ```
改之后日历组件点击后就消失（依然是框架样式问题），且没有使用例子


- [ ] icheck/index.js 第139行报

    ```
    v = this.model.validate(obj);
    ```

报this.model.validate is not a function

- [ ] 框架的step、codemirror组件最好有个使用例子；
