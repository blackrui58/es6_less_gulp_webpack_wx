//loader是只需要下载,不需要引入
//而plugin是本身之外的,需要引入,并且需要下载
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: __dirname + '/src/index.js',
	output:{
		//目标文件要打包的目录名
		path: __dirname + '/dist/',
		//目标文件要打包的文件名
    	filename: 'indexpack.js'
	},
	//用来进行loader处理的
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
		        test: /\.json$/,
		        loader: 'json-loader'
		   	},
			{
			    test: /\.(png|jpg|gif|bmp)$/,
			    use: [
			      {
			        loader: 'file-loader',
			        options: {
			        	//[hash].[ext]//默认的图片转换配置为这,[hash]代表将图片名转换为hash值,[ext]代表转换之后的图片后缀为原来的后缀
			        	//也可以配置成图片名不hash值转换,用原来的名称,这配置为[name].[ext]
//			        	name:'[name].[ext]'
			        }
			      }
			    ]
			}
		]
	},
	//用来进行插件处理的
	plugins: [new HtmlWebpackPlugin({
		//当有template之后,将会用该template来完全填充filename中配置的html文件的内容
		title: "aaa",
		filename: "./bbb.html",
		template:__dirname + "/src/tpl/template1.html",
		inject: 'body',
		info:'Hello world'
	})],
	resolve:{
		//extensions扩展名的意思::就是当引入文件资源的时候;;如import css from './css/main.css'时,若extensions中有css选项,则import css from './css/main.css'后面的扩展名可以不用写,直接写为import css from './css/main',webpack会自动寻找'./css/'文件夹下面的满足extensions配置的文件..若不写extensions,默认的extensions为['.js','.json'],,此时若还写为import css from './css/main'的话,就会报错
		//默认的扩展名设置,被写入这里的扩展名,有该扩展名的文件当引入时,可以只写名称,不用写扩展名
		extensions:['.js','.css','.json'],
		alias:{
			//alias::别名的意思:::下面的写法就是在以后的路径写作中,@直接就代表了__dirname + '/src/'
			//如__dirname + '/src/index.js'就可以简写为'@index.js'
			//对于引入文件中的一些常用的路径问题,可以给其设置一些别名,用这些别名来代替路径--从而方便程序员的操作
			"@" : __dirname + '/src/',
		}
	},
	devServer:{
		//因为在plugins中对首页起了一个别名为bbb.html,不是默认的index.html
		//而在devServer中打开的端口中找的默认的文件名就是index.html,,所以如果上面对首页起别名的话,这边也应该对默认端口号打开的文件名进行一个配置
		//这里的index选项:::就是对端口号下默认要打开的文件名进行配置//若不写该index选项,会自动加载该端口号下的index.html文件
		index: 'bbb.html',
		port:1010,
		open:true
	}

}
