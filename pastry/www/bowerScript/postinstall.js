/*
 *bower install 之后将安装组件里的模拟数据移动到项目根目录/www/mockdata/server中
 * bower install 支持本地文件夹，github网址，组件名称三种
 * 模拟数据存放在components/组件名称/mockdata/组件功能名称文件夹下，例如components/component-js-register/mockdata/register
移动时只需移动register文件夹
 */
var tools = require("./tools.js");
var fs = require('fs');
var path = require('path');
//备注 文件夹存放结构
//├──components
   //├──component-js-register
     // ├── mockdata
      //   ├── login
      //   │   └── login.do.js
      //   │   └── login2.do.js
      //   ├── register
      //   │   └── register.do.js
      //   ├── test.do.js
      //   └── test2.do.js
var sourceBasePath = 'components/'; //源文件夹根目录
process.argv.splice(0, 2); //去除bower和install 两个参数
var argumentsArr = process.argv;
var sourceChildFill = '/mockdata';
var targetPath      = 'mockdata/server/'; //目标文件夹根目录
//解析命令行的参数，获得需要复制的原始文件夹路径数组
var getSourcePathArr = function (sourceBasePath, argumentsArr,sourceChildFill) {
	var sourcePathArr = [];
	var componentName;
	argumentsArr.forEach(function (argument) {
		var i1 = argument.lastIndexOf('\\');
		console.log('i1 :' + i1);
		var i2 = argument.lastIndexOf('\/');
		console.log('i2 :' + i2);
		var i3 = i1 < 0 ? i2 : i1;
		if (i3 < 0) {
			i3 = i3 + 1;
			componentName = argument.substring(i3);
		} else {
			componentName = argument.substring(i3 + 1);
		}
		var sourcePath = path.normalize(sourceBasePath + componentName + sourceChildFill);
		sourcePathArr.push(sourcePath);
	});
	return sourcePathArr;
};
var sourcePathArr = getSourcePathArr(sourceBasePath, argumentsArr,sourceChildFill);
sourcePathArr.forEach(function (sourcePath) {
	tools.copy(sourcePath, targetPath);
});