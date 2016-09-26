/*
 *bower uninstall 之前将项目根目录/www/mockdata/server中的组件模拟数据删除
 * bower uninstall 支持本地文件夹github网址，组件名称三种
 */
var tools = require("./tools.js");
var fs = require('fs');
var path = require('path');
//备注 文件夹存放结构
//├──components
//├──component-js-register
// ├── mockdata
//   ├── login
//   │?? └── login.do.js
//   │?? └── login2.do.js
//   ├── register
//   │?? └── register.do.js
//   ├── test.do.js
//   └── test2.do.js
var sourceBasePath = 'components/'; //源文件夹根目录
process.argv.splice(0, 2); //去除bower和install 两个参数
var argumentsArr = process.argv;
var sourceChildFill = '/mockdata';
var targetPath = 'mockdata/server/'; //目标文件夹根目录
//解析命令行的参数，获得需要删除的原始文件夹路径数组
var getSourcePathArr = function (sourceBasePath, argumentsArr, sourceChildFill) {
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
var sourcePathArr = getSourcePathArr(sourceBasePath, argumentsArr, sourceChildFill);
sourcePathArr.forEach(function (sourcePath) {
	tools.delete (sourcePath, targetPath);
});
