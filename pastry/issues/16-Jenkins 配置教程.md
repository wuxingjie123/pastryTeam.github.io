# 基于Hybrid开发模式的Jenkins部署教程

- [x] 1. 必备条件：以下配置均针对Mac系统
    
    - Mac系统（为了方便编译iOS。替代方案：如果使用windows系统，可以部署Jenkins的节点为Mac系统）
    
    - [java sdk 1.8 安装包](http://download.oracle.com/otn-pub/java/jdk/8u112-b16/jdk-8u112-macosx-x64.dmg)
    
    - [Jenkins 2.19.2 pkg 安装包](http://ftp.tsukuba.wide.ad.jp/software/jenkins/osx-stable/jenkins-2.19.2.pkg)
    
    - XCode
    
    - Android Studio
    
    - 其他软件：根据实际情况配置 nodejs、docker 等环境

- [x] 2. 安装必备的所有安装包

- [x] 3. 环境变量设置
    
    - 配置 mac用户账号 jenkins 的密码
        
        - 原因：Jenkins软件安装成功后，默认会给mac用户中添加一个用户，账号 jenkins；密码 为空。
        
        - 解决方法：配置账号 jenkins 的密码
    
    - 配置 iOS 开发者证书
        - 前提条件：使用账号jenkins账号登陆mac系统
        
        - 安装 开发者证书 *.p12
        
        - 安装 描述文件 *.mobileprovision
        
        - `打开 钥匙串访问 app，将 系统->证书 里的 开发者证书 拷贝到 登陆->证书里`
            - 目的：保证jenkins账号能够读取到该证书信息  

- [x] 4. 配置 Jenkins 基础插件
    
    - [ ] 4.1. 使用配置好的 Jenkins 基础环境
    
    - [x] 4.2. 手动配置 Jenkins 基础插件
    
        - disk-usage
    
        - nodejs

- [x] 5. 新建项目、配置项目、查看构建
    
    - [ ] 新建项目
    
    - [ ] 配置项目
       
        - 配置 源码管理
        
            - 配置 SVN仓库
            
            - ![pastry wiki 里 pastry/issues/16-Jenkins 配置教程](https://pastryteam.github.io/pastry/issues/0-images/16/16-1.png)
        
        - 配置 构建触发器
            
            - 配置 定时构建（Build periodically）
                
                - 格式： H(15-20)17 * * 1-5   -> 每天下午5点15开始构建项目

            - 配置 轮询构建（Poll SCM）
                
                - 格式： H/10 * * * *   -> 每个 10 分钟进行一次轮询，有SVN提交，进行一次构建
            
            - ![pastry wiki 里 pastry/issues/16-Jenkins 配置教程](https://pastryteam.github.io/pastry/issues/0-images/16/16-2.png)
    
        - 配置 构建环境

            - 配置 NodeJS 环境
        
        - 配置 构建步骤
    
            - 配置 自定义的 Shell 脚本
        
        - 配置 构建后步骤
            
            - 配置 Archive 插件
            
            - 配置 Publish Html 插件
    
            - 配置 邮箱通知 插件
            
    - [ ] 查看构建
        
        - 定时在Jenkins上查看项目构建结果
        
        - 查看邮箱内收到的项目构建结果


# Jenkins环境深入理解

- [x] 1. Jenkins相关配置文件路径

    - Jenkins工作目录：/Users/Shared/Jenkins/Home
    
        - 项目目录：/jobs
            
            - 单个项目目录：/jobs/项目名称
                
                - 项目配置文件：/jobs/项目名称/config.xml
                
                - 项目编译目录：/jobs/项目名称/builds
                
                - 项目空间目录：/jobs/项目名称/workspace
        
        - 插件目录：/plugins
    
    - Jenkins环境配置文件：/Library/LaunchDaemons/org.jenkins-ci.plist
        
        - 配置 日志文件路径
       
        - 配置 Jenkins工作目录
       
        - 配置 Jenkins启动脚本
       
        - 配置 Jenkins的用户归属
    
    - Jenkins参数配置文件：/Library/Preferences/org.jenkins-ci.plist
        
        - 配置 http 端口号
        
        - 配置 https 端口号
        
        - 配置 https 证书信息

        - 等等。。。。。。
    
    - 日志：/private/var/log/jenkins/jenkins.log 
    
    - 启动目录：/Library/Application Support/Jenkins
        
        - 启动脚本：jenkins-runner.sh
        
        - 卸载脚本：Uninstall.command
    
    - 重新启动Jenkins
    
        - 网页重启方式：http://*****/restart
        
        - 重启电脑方式
        
        - 手动重启方式：
        
            - sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist
 
            - sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist


- [ ] 2. Jenkins 配置 https 地址
        
    - 生成 https 证书
    
        - 1 
        
        - 2
        
        - 3
        
    - 配置 https 证书位置
        
        - 将证书key保存到 /Users/Shared/Jenkins/zhengshu/server-key.pem
        
        - 将证书cert保存到 /Users/Shared/Jenkins/zhengshu/server-cert.pem
        
    - 配置 /Library/Preferences/org.jenkins-ci.plist 文件
            
        - 添加 httpsPort : 8443
            
        - 添加 httpsPrivateKey : /Users/Shared/Jenkins/zhengshu/server-key.pem
            
        - 添加 httpsCertificate : /Users/Shared/Jenkins/zhengshu/server-cert.pem
        
    - 配置 /Library/Application Support/Jenkins/jenkins-runner.sh 文件
        
        - 添加代码 add_to_args httpsPrivateKey
            
        - 添加代码 add_to_args httpsCertificate
    
- 重启启动Jenkins
            
    - 重启电脑方式
            
    - 手动重启方式：
 
        - sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist
        
        - sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist
