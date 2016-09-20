# JS框架开发代码规范

为了增强代码的可读性和延续性，开发人员须遵守开发规范。

`不管有多少人共同参与同一项目，一定要确保每一行代码都像是同一个人编写的。`

## 编辑器配置

将编辑器按照下面的配置进行设置，以避免常见的代码不一致和差异：

用两个空格代替制表符（soft-tab 即用空格代表 tab 符）。

保存文件时，删除尾部的空白符。

设置文件编码为 UTF-8。

在文件结尾添加一个空白行。

## HTML规范

#### 语法

用两个空格来代替制表符（tab） – 这是唯一能保证在所有环境下获得一致展现的方法。

嵌套元素应当缩进一次（即两个空格）。

对于属性的定义，确保全部使用双引号，绝不要使用单引号。

必须在自闭合（self-closing）元素的尾部添加斜线 – HTML5 规范中明确说明这是可选的。

不要省略可选的结束标签（closing tag）（例如，</li> 或 </body>）。

    <!DOCTYPE html>
    <html>
        <head>
            <title>Page title</title>
        </head>
        <body>
            <img src="images/company-logo.png" alt="Company" />
            <h1 class="hello-world">Hello, world!</h1>
        </body>
    </html>

#### HTML5 doctype

为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。

#### 引入js和css

避免使用script和link标签引入js和css文件，需要按照框架语法，借助requirejs引入js和css文件。

#### IE 兼容模式

IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模式。

    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

#### 字符编码

通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。

    <head>
        <meta charset="UTF-8" />
    </head>

#### 注重实用

尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

#### 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

class

id, name

data-*

src, for, type, href

title, alt

aria-*, role

data-*

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

    <a class="..." id="..." data-modal="toggle" href="#">
        Example link
    </a>
    
    <input class="form-control" type="text" />
    
    <img src="..." alt="..." />

#### 布尔（boolean）型属性

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。

元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。

简单来说，就是不用赋值。

    <input type="text" disabled />
    
    <input type="checkbox" value="1" checked />
    
    <select>
        <option value="1" selected>1</option>
    </select>

#### 减少标签的数量

编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。请看下面的案例：

    <!-- 冗余的结构 -->
    <span class="avatar">
        <img src="...">
    </span>
    
    <!-- 更好的结构 -->
    <img class="avatar" src="..." />

#### style属性

避免在元素标签中使用style属性控制元素样式，尽量使用class属性。

## CSS规范

#### 语法

为选择器分组时，将单独的选择器单独放在一行。

为了代码的易读性，在每个声明块的左花括号前添加一个空格。

声明块的右花括号应当单独成行。

每条声明语句的 : 后应该插入一个空格。

为了获得更准确的错误报告，每条声明都应该独占一行。

所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。

对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，box-shadow）。

不要在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部的逗号后面插入空格。这样利于从多个属性值（既加逗号也加空格）中区分多个颜色值（只加逗号，不加空格）。

对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。

十六进制值应该全部小写，例如，#fff。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分。

尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。

为选择器中的属性添加双引号，例如，input[type=“text”]。只有在某些情况下是可选的，但是，为了代码的一致性，建议都加上双引号。

避免为0值指定单位，例如，用 margin: 0; 代替 margin: 0px;。

    /* 不规范的CSS */
    .selector, .selector-secondary, .selector[type=text] {
        padding:15px;
        margin:0px 0px 15px;
        background-color:rgba(0, 0, 0, 0.5);
        box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
    }
    
    /* 规范的CSS */
    .selector,
    .selector-secondary,
    .selector[type="text"] {
        padding: 15px;
        margin-bottom: 15px;
        background-color: rgba(0,0,0,.5);
        box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
    }

#### 声明顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：

Positioning

Box model

Typographic

Visual

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。

其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

    .declaration-order {
        /* Positioning */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        
        /* Box-model */
        display: block;
        float: right;
        width: 100px;
        height: 100px;
        
        /* Typography */
        font: normal 13px "Helvetica Neue", sans-serif;
        line-height: 1.5;
        color: #333;
        text-align: center;
        
        /* Visual */
        background-color: #f5f5f5;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        
        /* Misc */
        opacity: 1;
    }

#### 不要使用 @import

与 <link> 标签相比，@import 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题。替代办法有以下几种：

通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件

通过 Rails、Jekyll 或其他系统中提供过 CSS 文件合并功能

#### 媒体查询（Media query）的位置

将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。下面给出一个典型的实例。

    .element { ... }
    .element-avatar { ... }
    .element-selected { ... }
    
    @media (min-width: 480px) {
        .element { ...}
        .element-avatar { ... }
        .element-selected { ... }
    }

#### 带前缀的属性

当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。
在 Textmate 中，使用 Text → Edit Each Line in Selection (⌃⌘A)。在 Sublime Text 2 中，使用 Selection → Add Previous Line (⌃⇧↑) 和 Selection → Add Next Line (⌃⇧↓)。

    /* Prefixed properties */
    .selector {
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
                box-shadow: 0 1px 2px rgba(0,0,0,.15);
    }

#### 单行规则声明

对于只包含一条声明的样式，为了易读性和便于快速编辑，建议将语句放在同一行。对于带有多条声明的样式，还是应当将声明分为多行。

这样做的关键因素是为了错误检测 – 例如，CSS 校验器指出在 183 行有语法错误。如果是单行单条声明，你就不会忽略这个错误；如果是单行多条声明的话，你就要仔细分析避免漏掉错误了。

    /* Single declarations on one line */
    .span1 { width: 60px; }
    .span2 { width: 140px; }
    .span3 { width: 220px; }
    
    /* Multiple declarations, one per line */
    .sprite {
        display: inline-block;
        width: 16px;
        height: 15px;
        background-image: url(../img/sprite.png);
    }
    .icon           { background-position: 0 0; }
    .icon-home      { background-position: 0 -20px; }
    .icon-account   { background-position: 0 -40px; }
    编辑


#### 简写形式的属性声明

在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。常见的滥用简写属性声明的情况如下：

padding

margin

font

background

border

border-radius

大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的 heading 元素只需要设置上、下边距（margin）的值，

因此，在必要的时候，只需覆盖这两个值就可以。过度使用简写形式的属性声明会导致代码混乱，并且会对属性值带来不必要的覆盖从而引起意外的副作用。

    /* Bad example */
    .element {
        margin: 0 0 10px;
        background: red;
        background: url("image.jpg");
        border-radius: 3px 3px 0 0;
    }
    
    /* Good example */
    .element {
        margin-bottom: 10px;
        background-color: red;
        background-image: url("image.jpg");
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

#### Less 和 Sass 中的嵌套

避免非必要的嵌套。这是因为虽然你可以使用嵌套，但是并不意味着应该使用嵌套。

只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。

    //无嵌套
    .table > thead > tr > th { … }
    .table > thead > tr > td { … }
    
    //有嵌套
    .table > thead > tr {
    > th { … }
    > td { … }
    }

#### 注释

代码是由人编写并维护的。请确保代码能够自描述、注释良好并且易于他人理解。

好的代码注释能够传达上下文关系和代码目的。不要简单地重申组件或 class 名称。

对于较长的注释，务必书写完整的句子；对于一般性注解，可以书写简洁的短语。

    /* 不良的例子 */
    /* Modal header */
    .modal-header {
        ...
    }
    
    /* 好的例子 */
    /* Wrapping element for .modal-title and .modal-close */
    .modal-header {
        ...
    }

#### class 命名

class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。

避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思。

class 名称应当尽可能短，并且意义明确。

使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。

基于最近的父 class 或基本（base） class 作为新 class 的前缀。

使用 .js-* class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。

在为 Sass 和 Less 变量命名是也可以参考上面列出的各项规范。

    /* 不良的例子 */
    .t { ... }
    .red { ... }
    .header { ... }
    
    /* 好的例子 */
    .tweet { ... }
    .important { ... }
    .tweet-header { ... }

#### 选择器

对于通用元素使用 class ，这样利于渲染性能的优化。

对于经常出现的组件，避免使用属性选择器（例如，[class^=“…”]）。浏览器的性能会受到这些因素的影响。

选择器要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3 。

只有在必要的时候才将 class 限制在最近的父元素内（也就是后代选择器）（例如，不使用带前缀的 class 时 – 前缀类似于命名空间）。

    /* 不良的例子 */
    span { ... }
    .page-container #stream .stream-item .tweet .tweet-header .username { ... }
    .avatar { ... }
    
    /* 好的例子 */
    .avatar { ... }
    .tweet-header .username { ... }
    .tweet .avatar { ... }

#### 代码组织

以组件为单位组织代码段。

制定一致的注释规范。

使用一致的空白符将代码分隔成块，这样利于扫描较大的文档。

如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动。

    /*
    * Component section heading
    */
    
    .element { ... }
    
    
    /*
    * Component section heading
    *
    * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
    */
    
    .element { ... }
    
    /* Contextual sub-component or modifer */
    .element-heading { ... }

## Javascript规范

#### 缩进

缩进的单位为四个空格。避免使用Tab键来缩进。因为Tab长短没有统一标准。

虽然使用空格会增加文件的大小,但在局域网中几乎可以忽略,且在代码优化时也可被消除。

#### 每行长度

避免每行超过80个字符。当一条语句一行写不下时,请考虑折行。在运算符号,最好是逗号后换行。

在运算符后换行可以减少因为复制粘贴产生的错误被分号掩盖的几率。

#### 注释

不要吝啬注释。给以后需要理解你的代码的人们 (或许就是你自己) 留下信息是非常有用的。

注释应该和它们所注释的代码一样是书写良好且清晰明了。记得要避免冗长或者情绪化。

及时地更新注释也很重要。错误的注释会让程序更加难以阅读和理解。

让注释有意义。重点在解释那些不容易立即明白的逻辑上。不要把读者的时间浪费在阅读类似于:

    i = 0; //让i等于0

使用单行注释。块注释用于注释正式文档和无用代码。

#### 变量命名

变量名应由26个大小写字母( A..Z,a..z),10个数字( 0..9) ,和“_”(下划线)组成。避免使用国际化字符(如中文),因为不是在任何地方都可以被方便的阅读和理解。

不要在命名中使用“\”(反斜杠) 。

不要把 “_”(下划线)作为变量名的第一个字符。它有时用来表示私有变量,但实际上JavaScript并没提供私有变量的功能。

大多数的变量名和方法命应以小写字母开头。

必须与new共同使用的构造函数名应以大写字母开头。当new被省略时JavaScript不会有任何编译错误或运行错误抛出。忘记加new时会让不好的事情发生(比如被当成一般的函数),所以大写构造函数名是我们来尽量避免这种情况发生的唯一办法。

全局变量应该全部大写。(JavaScript没有宏或者常量,所以不会因此造成误会)

#### 变量声明

所有的变量必须在使用前进行声明。JavaScript并不强制必须这么做,但这么做可以让程序易于阅读,且也容易发现那些没声明的变量(它们会被编译成全局变量)。

将var语句放在函数的首部。最好把每个变量的声明语句单独放到一行,并加上注释说明。

    var currentEntry; //当前选择项 
    var level; //缩进程度 
    var size; //表格大小

JavaScript 没有块范围,所以在块里面定义变量很容易引起C/C++/Java程序员们的误解。在函数的首部定义所有的变量。

尽量减少 全局变量的使用。不要让局部变量覆盖全局变量。

#### 函数声明

所有的函数在使用前进行声明。内函数的声明跟在var语句的后面。这样可以帮助判断哪些变量是在函数范围内的。

函数名与“(”(左括号)之间不应该有空格。 “)”(右括号)与开始程序体的 “{”(左大括号)之间应插入一个空格。函数程序体应缩进四个空格。“}”(右大括号)与声明函数的那一行代码头部对齐。

    function outer(c,d) {
        var e = c * d;
        function inner(a, b) {
            return (e * a) + b;
        }
        return inner(0, 1); 
    }

下面这种书写方式可以在JavaScript中正常使用,因为在JavaScript中,函数和对象的声明可以放到任何表达式允许的地方。且它让内联函数和混合结构具有最好的可读性。

    function getElementsByClassName(className) { 
        var results = [];
        walkTheDOM(document.body, function (node) {
            var a; // array of class names
            var i; // loop counter
            // If the node has a class name, then split it into a list of simple names.
            // If any of them match the requested name, then append the node to the set of results.
            if (c) {
                a = c.split(' ');
                for (i = 0; i < a.length; i += 1) {
                    if (a[i] === className) { 
                        results.push(node); break;
                    } 
                }
            } 
        });
        return results; 
    }

如果函数是匿名函数,在function和“(”(左括号)之间应有一个空格。如果省略了空格,会让人感觉函数名叫作function。

    div.onclick = function (e) { 
    return false;
    };
    
    that = {
        method: function () {
            return this.datum; 
        },
        datum: 0 
    };

`尽量不使用全局函数。`

#### 简单语句

每一行最多只包含一条语句。把“;”(分号)放到每条简单语句的结尾处。

注意一个函数赋值或对象赋值语句也是赋值语句,应该以分号结尾。

JavaScript可以把任何表达式当作一条语句。这很容易隐藏一些错误,特别是误加分号的错误。只有在赋值和调用时,表达式才应被当作一条单独的语句。

虽然在很多情况下，语句末尾的分号是可以省略的，但为了避免一些潜在的错误，规范要求不能省略这些分号。在代码混淆时，这些多余的分号会被自动优化掉。

#### 复合语句

复合语句是被包含在“{}”(大括号)的语句序列。

被括起的语句必须缩进四个空格。

“{”(左大括号)应在复合语句起始行的结尾处。

“}”(右大括号)应与 “{”(左大括号)的那一行的开头对齐。

大括号应该在所有复合语句中使用, 即使只有一条语句。当它们是控制结构的一部分时，比如一个if或者for语句，这样做可以避免以后添加语句时造成的错误。

if、else、for等语句后只有一条语句时大括号是可以省略的，但为了避免一些潜在的错误，规范要求不能省略这些大括号。

在代码混淆时，这些多余的大括号会被自动优化掉。

#### 空白

用空行来将逻辑相关的代码块分割开可以提高程序的可读性。空格应在以下情况时使用 :

跟在“(”(左括号)后面的关键字应被一个空格隔开。如: while (true) {

函数参数与“(”(左括号)之间不应该有空格。这能帮助区分关键字和函数调用。

所有的二元操作符,除了“.”(点)、“(”(左括号)和“[”(左方括号)应用空格将其与操作数隔开。

一元操作符与其操作数之间不应有空格,除非操作符是个单词。比如每个在控制部分,如for语句中的“;”(分号)后须跟一个空格。每个“,”(逗号)后应跟一个空格。

#### 单引号和双引号

优先使用单引号，在多层引号嵌套时外层使用单引号，内层使用双引号，例如

    var template = '<div class="btn"></div>';

`这样做的好处是，可以直接将html语句复制到js中。`

#### {}和[]

* 使用{}代替new Object()。

* 使用[]代替new Array() 。

#### ,(逗号)操作符

避免使用逗号操作符,除非以下情况：

for语句的控制部分

对象定义,数组定义

var语句

参数列表

#### ||和&&

很多框架借助||和&&的特性简化代码，在使用时需要慎重，因为在判断非布尔类型数据的真假值时，js也会做自动转换。

|会转换为false的数据|
|-----|
|false|
|0|
|undefined|
|null|
|NaN|
|““|

|除了左面的，都会转换为true|转换后值|
|-----|-----|
|true	|真值|
|1	|非零的数字都会转换为true|
|Infinity	|无穷也归为非零数字，会转换为true|
|“true”	|非空字符串都会转换为true|
|“false”	|非空字符串都会转换为true|
|[]	|数组都会被转换为true|
|{}	|对象都会被转换为true|
|function(){}	|函数都会被转换为true|

#### 作用域

在JavaScript中块没有域。只有函数有域。

#### 赋值表达式

赋值表达式避免在if和while语句的条件部分进行赋值。

#### 相等判断

尽量使用 === 和 !== 操作符，== 和 != 操作符会进行类型强制转换。

不要将 == 用于与假值比较(false,null,undefined,“”,0,NaN)。

#### 令人迷惑的加号和减号

小心在 + 后紧跟 + 或 ++，这种形式很容易仍人迷惑。应插入括号以便于理解。

    total = subtotal + +myInput.value;

最好能写成
 	
    total = subtotal + (+myInput.value);

`这样 + + 不会被误认为是 ++。`

#### 对象和数组的使用

当成员名是一组有序的数字时使用数组来保存数据。当成员名是无规律的字符串或其他时使用对象来保存数据。

#### return语句

一条有返回值的return语句不要使用“()”(括号)来括住返回值。

如果返回表达式,则表达式应与return关键字在同一行,以避免误加分号错误。

#### continue 语句

尽量避免使用continue语句。它很容易使得程序的逻辑过程晦涩难懂。

#### with 语句

不要使用 with 语句。

#### if 语句

if语句应如以下格式:

    if (condition){
        statements; 
        if (condition) { 
            statements;
        } else { 
            statements;
        }
        if (condition) { 
            statements;
        } else if (condition) { 
            statements;
        } else { 
            statements;
        }
    }

#### for 语句

for语句应如以下格式:

    for (initialization;condition; update) {
        statements; 
    }
    
    for (variable in object) if (filter) { 
        statements;
    }

第一种形式的循环用于已经知道相关参数的数组循环。

第二种形式应用于对象中。Object原型中的成员将会被包含在迭代器中。

通过预先定义hasOwnProperty方法来区分真正的object成员是个不错方法:

    for (variablein object) if (object.hasOwnProperty(variable)){
        statements; 
    }

#### while语句

while语句应如以下格式:

    while (condition){
        statements; 
    }

#### do 语句

不像别的复合语句, do语句总是以“;”(分号)结尾。

do语句应如以下格式:

    do {
        statements;
    } while (condition);

#### switch 语句

switch 语句应如以下格式:

    switch (expression){ 
        case expression1:
            statements; 
            //fallthrou
        case expression2:
            statements; 
            break;//return;//throw;
        default:
            statements; 
    }

每一组statements(除了default应以break,return,或者 throw 结尾),需要让它顺次往下执行时，应添加//fallthrou标注。

#### try 语句

try语句应如以下格式:

    try {
        statements;
    } catch (variable){
        statements; 
    }
    
    try { 
        statements;
    } catch (variable){ 
        statements;
    } finally {
    
    }

#### 避免使用eval

eval是JavaScript中最容易被滥用的方法。应避免使用它。

不要使用function构造器。

不要给setTimeout或者setInterval传递字符串参数。