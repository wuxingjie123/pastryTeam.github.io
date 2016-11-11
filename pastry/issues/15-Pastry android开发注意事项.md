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

- [x] Android Studio 修改包名
    - 在 build.gradle 的 defaultConfig{} 中添加代码  `applicationId "新包名"`
    
    - 示例代码：新包名=com.newPackage
    
        ```
        defaultConfig {
        
            applicationId "com.newPackage"
            
            versionCode cdvVersionCode ?: Integer.parseInt("" + privateHelpers.extractIntFromManifest("versionCode") + "0")
            if (cdvMinSdkVersion != null) {
                minSdkVersion cdvMinSdkVersion
            }
        }
        ```

- [x] android 修改 应用名称方法

    - 使用 pastry bake prepare android -ra '新应用名称' 或者 pastry bake build android -ra '新应用名称'

    - 查看是否使用新应用名称：检查 platforms/android/res/values/strings.xml 的 <string name="app_name"></string> 属性内容
    
    - 注意：不要修改项目目录的 config.xml 的 <name></name> 属性内容，否则会影响 ios 打包失败。
 
- [x] Pastry android 使用 platforms/android/publish/build.json 配置开发者证书问题

    - 配置 build.json 里的 keystore、storePassword、alias、password、keystoreType 字段内容

    - 配置 platforms/android/publish/android.keystore 证书
    
    - 字段详细介绍参考 [http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#signing-an-app](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#signing-an-app)     

- [x] 使用 Pastry CLI的 prepare 命令后，自定义的Cordova组件不能使用。
    
    - 原因：prepare 会将 platforms/android/android.json 里的 config_munge 里的属性将覆盖 config.xml 的 feature 属性。
    
    - `解决方法：保证 platforms/android/android.json 的 config_munge 属性与 config.xml 的 feature 属性保持一致。`

#18 打包应用场景介绍
