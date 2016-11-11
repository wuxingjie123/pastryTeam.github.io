## 注意 创建项目时使用的 包名、项目名称 一旦确认，不可修改。
 
```
<widget id="包名：com.ChinaLife" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>项目名称：ChinaLife</name>
</widget>
```

在使用 pastry 命令打包时：

- 包名：
    
    - 包名不可随意修改原因：
        
        - 影响 iOS 的 bundle Id
        
        - 影响 android 的文件目录系统，影响范围大。

    - 对应 ios 的 bundle Id； 制作生产包需要使用 指定Bundle Id方法见： `ios 修改 Bundle Id 方法`

    - 对应 android 的 包名； 需要修改 android 的包名方法见： `Android Studio 修改包名 `

- 项目名称：

    - 项目名称不可随意修改原因：
        
        - 影响 android 的应用名称
        
        - 影响 iOS 的文件目录系统，影响范围大。
    
    - 对应 ios 的 项目名称；直接修改Xcode中的配置即可。
    
    - 对应 android 的 项目名称； 需要修改 android 的项目名称方法见： `android 修改 应用名称方法`

- [x] ios 修改 Bundle Id 方法

    - 使用 pastry bake prepare ios -ri '新Bundle_ID' 或者 pastry bake build ios -ri '新Bundle_ID'

    - 查看是否使用新Bundle ID：检查 platforms/ios/项目名称/项目名称-Info.plist 的 Bundle identifier 属性内容
    
    - 注意：不要修改项目目录的 config.xml 的 <widget id="com.BunldeId"> 属性内容，否则会影响 android 打包失败。

- [x] 关于 project.pbxproj 的 PRODUCT_BUNDLE_IDENTIFIER
    
    - 确保 project.pbxproj 不应该存在 PRODUCT_BUNDLE_IDENTIFIER 字段，否则，影响 Pastry CLI 使用 build.json方式自定义bundle id

- [x] Pastry iOS 使用 platforms/ios/publish/build.json 配置开发者证书问题

    - `删除 iOS 的 project.pbxproj 的 PRODUCT_BUNDLE_IDENTIFIER = com.xxxx; 保证使用 build.json方式自定义bundle id`

    - 配置 build.json 里的 codeSignIdentity、provisioningProfile、developmentTeam、packageType 字段内容
    
    - 字段详细介绍参考 [http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#signing-an-app](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#signing-an-app)     

- [x] 使用 Pastry CLI的 prepare 命令后，自定义的Cordova组件不能使用。
    
    - 原因：prepare 会将 platforms/ios/ios.json 里的 config_munge 里的属性将覆盖 config.xml 的 feature 属性。
    
    - `解决方法：保证 platforms/ios/ios.json 的 config_munge 属性与 config.xml 的 feature 属性保持一致。`

#18 打包应用场景介绍
