# Jenkins持续集成

----
## Pastry平台资源文件分类

* web
    
    * 本地清单文件：resource.json、allmenu.xml
    
    * 本地资源文件：JS、CSS、XML、Json、图片资源
    
    * 业务模版文件：html文件

* 原生端：本地存储文件

----
## 框架层增量更新
#### `本地清单文件、本地资源文件 更新流程（框架内部实现，业务端无需关注）`

  ![验签关系图](/pastry/images/hot/check-resources.png)

* 本地清单文件验签流程
    
    * 1) 对清单列表文件内容及文件末尾保存的hash对比
        
    * 2) 本地清单列表与服务器清单列表对比（验签失败，服务器上下载）
    
* 本地资源文件 JS、CSS、XML、Json、图片资源
    
    * 1) 获取资源文件清单列表：清单内容，文件路径:hash值 的键值对。
    
    * 2) 根据清单列表中的键值对，对 JS、CSS、XML、Json、图片等资源进行验签操作。（验签失败，服务器上下载）(备注：未对html文件验签)
    
    * 3) 对 JS、CSS、XML、Json 进行 Hash 处理，（服务器使用私钥对 JS、CSS、XML、Json 的 Hash 进行签名），客户端使用公钥进行解密获取 JS、CSS、XML、Json 的 Hash，比较两个 Hash 值。

----
## 业务层增量更新

#### `业务模版文件：html文件 验签流程(业务端如需控制延迟html延迟更新，可自行编写代码实现)`

* 1) 当用户使用应用，打开某个html页面，此时，对 html文件名 进行hash值计算，获取到文件混淆后的 html 页面。

* 2) 根据allmenu.xml列表中的键值对，对 html 文件进行验签。

* 3) 对 html 进行 Hash 处理，（服务器使用私钥对 html 的 Hash 进行签名），客户端使用公钥进行解密获取 html 的 Hash，比较两个 Hash 值。

* 4) 客户端license密钥生成器 生成 3DES 的 key。

* 5) 使用 事先约定好的key值（非通信使用的3DES的key）进行 3DES 解密 html页面内容，显示解码后的 html 内容。

----
## 增量更新部署流程

### `iOS 增量更新部署`

* `html 不依赖 原生代码 的 原生包更新。`
    
    * 使用 pastry bake build 生成 ipa 包。
        
    * 解压获取 ipa 包中的 data.zip 资源包。
        
    * nodejs 环境
            
        * 将 data.zip 资源包 解压到 nodejs 的 ptframework/data/iphone 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
        
    * java 环境
            
        * 将 data.zip 资源包 解压到 fo 的 ptframework/data/iphone 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
    
    * 配置 测试增量更新 环境
            
        * debug 包设置 ipa应用设置 选项
            
            * `html来源路径类型 ：data.zip`
                
            * `调试模式 ：开发模式-JS、CSS等文件不验签模式` 或者 `调试模式 ：生产模式-JS、CSS等文件不验签模式`
        * release 包不需要修改任何操作
        
    * 运行app查看 html 资源更新结果；

* `涉及 html 依赖原生代码的 原生包更新。`
        
    * 配置 allmenu.xml 的 menu 节点属性 minver 版本号。
    
    * 原生 打开html（业务入口html在allmenu.xml的属性）时，对比 minver版本号 与 原生系统版本号：
        
        * minver版本号 = 空：不需要进行原生包更新
        
        * minver版本号 > 原生版本号：提供用户进行 原生包更新，不进入html页面。
        
        * minver版本号 < 原生版本号：不需要进行 原生包更新。
        
        * minver版本号 = 原生版本号：不需要进行 原生包更新。

### `android 增量更新部署`

* `html 不依赖 原生代码 的 原生包更新。`

    * 使用 pastry bake build 生成 apk 包。
        
    * 解压获取 apk 包中的 data.zip 资源包
        
    * nodejs 环境
            
        * 将 data.zip 资源包 解压到 nodejs 的 ptframework/data/android 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
        
    * java 环境
        
        * 将 data.zip 资源包 解压到 fo 的 ptframework/data/android 目录。｀注意不包含 data 目录｀
        
        * `手动配置 allmenu.xml 文件保证 html 文件的更新`
        
            * 从 business.xml 文件中中拷贝对应的html 的版本号属性 version 到 allmenu.xml 文件的版本号属性 version。
            
            * 重新对 allmenu.xml 进行签名。
            
            * 将签名后的 allmenu.xml 拷贝到 ptframework/data/iphone 目录，覆盖掉 data.zip 解压得到的 allmenu.xml 文件。
    
    * 配置 测试增量更新 环境
    
        * `待定`
    
    * 运行app查看 html 资源更新结果。

* `涉及 html 依赖原生代码的 原生包更新。`
        
    * 配置 allmenu.xml 的 menu 节点属性 minver 版本号。
        
    * 原生 打开html（业务入口html在allmenu.xml的属性）时，对比 minver版本号 与 原生系统版本号：
        
        * minver版本号 = 空：不需要进行原生包更新
        
        * minver版本号 > 原生版本号：提供用户进行 原生包更新，不进入html页面。
        
        * minver版本号 < 原生版本号：不需要进行 原生包更新。
        
        * minver版本号 = 原生版本号：不需要进行 原生包更新。


----
## 原生端：本地存储文件
#### `原生端：本地存储文件 不涉及增量更新功能`

* 1) 采用程序第一次会话的sesstionID，分为三部分数据作为 3DES 的 key 值

* 2) 保存到系统钥匙链

* 3) 对本地文件进行 3DES 加解密

----
## 依赖工具

[XTools][md_xtools]

[md_xtools]: ../pastry-cli/XTools.md
