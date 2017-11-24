http://cnodejs.org/topic/58c5eb5279f557ff16f0f26a

## 什么是模块化?
老师的说法:::
原来的js之间,是不能互相引入的,只能在html中互相去链接,比如要链接jq,则先链接一个jq库,然后链接自己写的jq代码--这种写法不是模块化,
那什么是模块化呢,就是js中可以引入js

在css中可以引入css,那么css就是可以模块化的
但是在普通js中,就不能引入js

那为什么在vue,react工程化中可以用import来在js中引入js,也就是模块化呢,是因为后端通过webpack或者其他打包工具将js模块化了

所以的后端语言,如php,java的,天生就有模块化
而js基因不太好,本来就是用来弹广告的

## 常见的模块化的规范?
- CommonJS: 同步 nodejs module.export , require
- AMD : 异步: 经典框架: RequireJS:  define()
- CMD : 异步: 经典框架: SeaJS.
- es6 模块化规范:  import export 


## 2015年以来最流行模块化工具: webpack 
- webpack 四个核心概念:入口(entry)、输出(output)、loader、插件(plugins)。

## Gulp: 自动化构建工具:任务流工具

## 安装过程: 

- 全局安装: npm install -g webpack
- 新建一个项目目录
- npm init -y
- 本地安装webpack : npm install -D webpack
- 在项目目录根目录下,新建一个文件: webpack.config.js


## webpack 的配置选项
- entry : 字符串, 
- output: 对象
	- path: 字符串: 你要输出的目标文件的路径文件夹
	- filename: 字符串: 你要输出的目标文件名
- module : 处理各种各样的loader
	- rules: [{},{}]
		- test : 匹配模式
		- use:  获取匹配后的文件,运用哪个loader进行处理, 从右往左执行
		- exclude : 排除某一些文件夹
- resolve: 选项能设置模块如何被解析。webpack 提供合理的默认值，但是还是可能会修改一些解析的细节
	- extensions: 允许默认可以省略的扩展名
	- alias: 设置别名
- plugins : 处理各种插件: 数组
- devServer: {}
	- port 端口
	- open : 自动打开
	- index: 首页名称

## webpack loader
- webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源
- 处理css文件的loader: 
	- css-loader: 转换CSS文件成为JS代码
	- style-loader: 把转换好的CSS资源插入到文件中
	- json-loader
	- babel-loader
	- file-loader: 会把文件打包成新的名字,并且把这个文件输出到出口目录下. 如果CSS文件引入了一个该路径,会自动替换路径. 
	- url-loader: 与file-loader功能类似. 可以限制大小,打包base64.
## webpack插件
- html-webpack-plugin 
	- title: 生成的html文件的title标签里的文字 Webpack App
	- filename: 最终的文件名, 默认index.html
	- template: 根据模板生成目标html
	- inject: 'body' : 是否向相应标签下注入一定的内容
	- info: 注入的内容

- extract-text-webpack-plugin 
- uglifyjs-webpack-plugin