## 安装Gulp

- 全局安装: npm install -g  gulp  
- 创建package.json : npm init -y
- 本地安装: npm install -D gulp
- 在根目录里新建一个叫做gulpfile.js的文件. 

## gulp的原生API
- gulp.task : 执行某一项任务
	- 任务名称
	- 任务的依赖数组
	- 任务执行的操作 

- gulp.src :
	- 读入操作, 把文件读入到内存流中
	- 生产环境文件夹目录: dist,  assets, build 
	- 如果参数输入的是数组,则必须满足所有数组中的匹配项,才可以. 

- gulp.dest :  
	- 输出操作, 通过gulp的流管道, 将文件流输出到新的路径中.  
	- 路径地址, 只能到文件夹, 不能到具体的文件.
- gulp.watch

## Less文件
- gulp-less  :  编译Less文件


## CSS文件: 

- CSS多文件合并:  gulp-concat
	- 合并后的文件名
- CSS压缩:  gulp-clean-css

- CSS精灵图 : gulp-css-spriter

## JS文件
- babel : 
	- babel-core
	- presets: es2015 , react ....
	- ES6语法
	- React --- JSX
- gulp-babel 安装: 
	- npm install --save-dev gulp-babel babel-preset-es2015
- JS多文件合并:  gulp-concat
	- 合并后的文件名
- JS压缩: gulp-uglify

## 图片文件: 
- 图片压缩: gulp-imagemin
- base64 : 将一定大小的图片转换成base64的格式


## 开发服务器: 
- browser-sync
- 结合Gulp 的时候, 引入时, 需要
`var browserSync = require('browser-sync').create();` 
- 初始化: 
	- 官方文档: +Gulp操作
	- 官方文档: 选项配置


## 其他操作: 
- 重命名 : gulp-rename


祝好! 
