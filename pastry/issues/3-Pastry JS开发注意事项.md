- Browser.history_goto(pageId, option) 
    
    - option的refresh的initVal属性会覆盖Model的默认值设置，只要设置了initVal属性，所有Model的默认设置都不生效。

- 每一个业务功能包含：
    
    - 1个html页面
    
    - 1个css文件
    
    - 1个mockdata/server下的模拟数据文件

- list如果用下拉刷新，上传加载onlistitem事件可能会出现多次；

    - 用 api.getComponent('组件').parent.iScroll.refresh()方法进行刷新

- 如果一个组件继承自list，其后的模拟数据必须有list数组；

- for循环下不能用checkbox,checkbox的默认显示用下 api.getModel(组件ID).set(组件data-name, "true");设置组件的data-name有值即可；
例如:
 
    ```
    if (infoCollectFsk.fsk_chwe === "1") {
        api.getModel('radio1').set('zfk_chwe', "true");
    } else {
        api.getModel('radio2').set('zfk_chwe', "true");
    }
    ```
- 写的js文件需要转为utf8格式。

- 模板里的标签属性用<%  %>,元素属性用{% %}可能还不能用；
 
- 开发最好为自上向下，CSS各个模块的类命名不要重复，防止合为一个html文件时样式出现冲突；

- html开头需要加data-debug="@mockdata"这句话，否则关于此文件的console日志记录不会输出；

- data-name不能出现有“-”，可以出现“_”;

- 验证码组件中的model请求无效，需要在html页面组件出现的地方用data-act属
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

- form组件必须要有data-name属性，响应onsubmit事件时event.data显示按照data-name来，如果组件没有此属性，组件数据不会在event.data里；



- datapicker有点问题，第二句的引用路径应该改为

    ```
    define(['js/core', '~/plugins/bootstrap-datapicker/bootstrap-datepicker', 'css!~/plugins/bootstrap-datapicker/bootstrap-datepicker.css', 'css!~/plugins/bootstrap-datapicker/bootstrap-datepicker-ex.css'])
    ```
改之后日历组件点击后就消失（依然是框架样式问题），且没有使用例子


- icheck/index.js 第139行报

    ```
    v = this.model.validate(obj);
    ```

报this.model.validate is not a function

- 框架的step、codemirror组件最好有个使用例子；
