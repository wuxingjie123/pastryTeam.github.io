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
