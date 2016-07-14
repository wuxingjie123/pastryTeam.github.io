# FAQ

  * ### Q: 标准的工程目录结构是什么样的,我在哪里编写代码,如何调试?
  * A: 标准的工程目录结构如下:

        ProjectName
         ┣ merges
         ┣ platforms
         ┃  ┣ android
         ┃  ┗ ios
         ┣ plugins
         ┣ www
         ┗ config.xml

    * JS开发人员

      主要在`www`目录中编写代码,可以使用`pastry ide`或者其他开发工具进行开发工作.代码调试推荐使用Chrome的开发者工具.

      业务调试可以使用模拟报文或模拟器.

    * Android开发人员

      主要在`platforms/android`目录中编写代码,推荐使用Android Studio工具进行开发调试工作,该目录是标准的Android Studio工程.

    * iOS开发人员

      主要在`platforms/ios`目录中编写代码,推荐使用XCode工具进行开发调试工作,该目录是标准的XCode工程.

- - - - - - - - -

  * ### Q: ?
  * A:

- - - - - - - - -

  * ### Q: ?
  * A:

[issues]: #