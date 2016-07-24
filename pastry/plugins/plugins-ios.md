# iOS 客户端组件

----
## cocoapods私有仓库使用指南

* 前提条件 : cocoapods 已经正确安装完成。

* 在 GitHub 创建私有仓库 pastrySpecs

    * 将 pastrySpecs 仓库 添加到本地

            # pod repo add [Private Repo Name] [GitHub HTTPS clone URL]
            pod repo add pastrySpecs https://github.com/pastryTeam/pastrySpecs.git
            
            # 成功后进入到 ~/.cocoapods/repos 目录；
            # 看到 pastrySpecs 这个目录，说明私有仓库 pastrySpecs 创建成功；

* 创建iOS组件 引导页面组件(component-iOS-guide)
    
    * 本地任意目录 /Users/用户名/Desktop/PodProject 执行 `pod lib create component-iOS-guide` 命令

            pod lib create component-iOS-guide

            # 输入 该组件使用的邮箱
            # 输入 该组件使用的语言 [ Swift / ObjC ]
            # 选择 该组件是否包含示例Demo；YES：包含；NO：不包含；
            # 选择 该组件使用哪种单元测试方式； [ Specta / Kiwi / None ]
            # 选择 该组件是否支持基于view的测试；YES：支持；NO：不支持；
            # 输入 该组件的使用的类前缀；

    * 将 component-iOS-guide 上传到远程服务器；
        
        * 通过 GitHub客户端将 component-iOS-guide 上传到远程服务器；

        * 登录 GitHub 网站，对 component-iOS-guide 工程，打tag 0.1.0 (`否则会在后续的验证中失败`)；
    
    * 验证 .podspec 正确性

            cd component-iOS-guide

            # pod ipc spec Name.podspec >> Name.podspec.json
            # pod ipc spec component-iOS-guide.podspec >> component-iOS-guide.podspec.json
            # rm component-iOS-guide.podspec

            # 打开 component-iOS-guide.podspec 
            #   将 <GITHUB_USERNAME> 改为 GitHub 的账号名称；
            #   修改 summary 内容
            #   修改 description 内容

            pod lib lint
            # 根据错误提示，修改 .podspec 文件内容

    * 将 component-iOS-guide.podspec 提交到 pastrySpec 私有仓库

            pod repo push /Users/gengyuanchao/Documents/Github/pastrySpecs /Users/gengyuanchao/Desktop/PodProject/component-iOS-guide/component-iOS-guide.podspec
            


* cocoapods 更新指定私有仓库 pastrySpecs

        pod repo update pastrySpecs

* pastrySpecs 的使用

    * 创建 Podfile 文件，在文件头添加 `source 'https://github.com/pastryTeam/pastrySpecs.git'  #我们自己的私有spec仓库的地址` 保证搜索的时候使用我们自己的仓库

      Podfile 文件内容示例

            source 'https://github.com/pastryTeam/pastrySpecs.git'  #我们自己的私有spec仓库的地址
            #source 'https://github.com/CocoaPods/Specs.git'  #官方仓库的地址
            #不再使用 cocoapods 官方仓库，便于以后的统一管理

            platform :ios, '6.0'
            #inhibit_all_warnings!
            use_frameworks!

            target '工程名称' do
                pod 'component-iOS-guide', '0.1.0'
            end

            target '工程名称Tests' do
            end


  [** `更多的pastry制作的android组件地址` **][net_pastryiOS]

----
## guide page（引导页面组件）

* 功能

    * 提供引导页面功能

* 使用方法

----
## tip control (提示对话框组件)

* 功能

    * 提示对话框组件

* 使用方法

----
## side (侧边框组件)

* 功能

    * 提供侧边框功能

* 使用方法

----
## QRCodeGenerator (二维码组件)
* 功能
    * 提供H5使用 console.log() 将日志输出到 原生端的开发IDE输出框；
* 使用方法


[net_pastryiOS]: https://github.com/search?utf8=%E2%9C%93&q=user%3ApastryTeam+component-iOS-&type=Repositories&ref=searchresults