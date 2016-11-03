- [x] Pastry android 使用 platforms/android/publish/build.json 配置开发者证书问题

    - 配置 build.json 里的 keystore、storePassword、alias、password、keystoreType 字段内容

    - 配置 platforms/android/publish/android.keystore 证书
    
    - 字段详细介绍参考 [http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#signing-an-app](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#signing-an-app)     

- [x] 使用 Pastry CLI的 prepare 命令后，自定义的Cordova组件不能使用。
    
    - 原因：prepare 会将 platforms/android/android.json 里的 config_munge 里的属性将覆盖 config.xml 的 feature 属性。
    
    - `解决方法：保证 platforms/android/android.json 的 config_munge 属性与 config.xml 的 feature 属性保持一致。`
