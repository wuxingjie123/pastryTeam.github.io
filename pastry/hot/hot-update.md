# Pastry增量更新指南

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
## 原生端：本地存储文件
#### `原生端：本地存储文件 不涉及增量更新功能`

* 1) 采用程序第一次会话的sesstionID，分为三部分数据作为 3DES 的 key 值

* 2) 保存到系统钥匙链

* 3) 对本地文件进行 3DES 加解密

----
## 依赖工具

[XTools][md_xtools]

[md_xtools]: ../pastry-cli/XTools.md
