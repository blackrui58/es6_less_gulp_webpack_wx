//gulp的配置文件

//1.引入gulp模块,用node类似的方式
var gulp = require('gulp')
//引入gulp-less插件,并赋值给less变量
var less = require('gulp-less')
//引入gulp-concat插件,并赋值给concat //用来进行css文件合并
var concat = require('gulp-concat')
//引入gulp-clean-css插件,并赋值给clearCss  //用来进行css文件压缩
var clearCss = require('gulp-clean-css')
//重命名
var rename = require('gulp-rename')
//引入精灵图插件
var spriter = require('gulp-css-spriter')
//引入babel//js编译,从es6转换为es5
var babel = require('gulp-babel')
//引入 uglify //对js进行压缩
var uglify = require('gulp-uglify')
//引入imagemin //对图片进行压缩//但仅支持jpg,png两种格式
var imagemin = require('gulp-imagemin')
//浏览器同步刷新
var browerSync = require('browser-sync').create();
//
var reload = browerSync.reload;//reload方法//还有其他方法,可以在api中查看

//api ::watch
//watch有三个参数,第一个参数是路径匹配
//老师备注的::开发模式下静态服务器
//在控制器中输入:[gulp server:dev]
//就会自动打开[./src]文件夹下面的index.html文件,-->也就是会自动打开浏览器,并且是在服务器环境中,端口是在port中配置的端口
//port:服务器运行的端口

gulp.task('server:dev',function(){
	browerSync.init({
		server:{
			//baseDir//设置的默认目录,即从该目录下寻找目标文件
			//若不写,就默认从该项目的跟目录下开始寻找目标文件
			//[目标文件]:也就是index后面写的文件
			baseDir: "./src",
			//index::后面就写的目标文件
			index: "index.html"
		},
		//文件在服务器端打开的端口
		port:8080
	})
	//在这里的需求是,当启动服务器之后,就watch-->src文件夹下面的所有文件--当src中的文件内容发生改变时,就执行相关操作
	//监控src下面的所有html文件
	//第二个参数,用一个数组装一个任务列表::假设做一个任务为html:dev
	//即当第一个参数中匹配的元素发生变化的话,就执行第二个参数中的任务
	gulp.watch('./src/*.html',['html:dev'])
	//监控css,js等
	gulp.watch('./src/css/*.css',['css'])
	gulp.watch('./src/js/*.css',['js'])
	//如果觉得每次更改之后都执行相关操作觉得麻烦//可以将其设置为开发环境中的任务,//也设置一个上线环境的操作
	//写一个开发模式下的css,js操作//从而减少一些不必要的执行
	//每个里面也都需要些reload
	//即在文件输出完毕之后,也就是gulp.dest之后写
	//写
	//.pipe(reload({
	//  stream:true
	//}))
})

//为了配合上面的操作//专门创造的一个任务
//这里仅仅是对html进行监控//同理,可以对css文件,js文件进行监控
gulp.task('html:dev',function(){
	gulp.src('./src/*.html')
	.pipe(gulp.dest('./src/'))
	.pipe(reload({
		//stream::流动的意思
		//默认的::直接写
		stream:true
	}))
})

var SRC = {
	js:'./src/js'
}
//创建一个任务,命名为test1
gulp.task('task1',['task2'],function(){
	console.log('task111111')
})

gulp.task('task2',['task3'],function(){
	console.log('task22222')
})

gulp.task('task3',function(){
	console.log('task33333')
})

gulp.task('task4',function(){
	gulp.src('./src/**/**')
	.pipe(gulp.dest('./dist'))
})

//将less文件转换为css文件
//主要用的是  less() 命令,其实less是上面引入gulp-less的一个变量
//运行less() 即执行gulp-less插件
gulp.task('task5',function(){
	gulp.src('./src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('./src/css'))
})

//将多个css文件合并
gulp.task('task6',function(){
	gulp.src('./src/css/*.css')
	//
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./src/css'))
})

//将多个css文件合并//并且将目标文件all.css排除在合并之外//再数组中,意义为[匹配项],不是路径
//从而避免了多次执行合并命令的话,将要合并的文件同目标文件又再次进行了合并,从而造成了代码重复
//这里用!./src/css/all.css  将all.css排除在要处理的目标之外
gulp.task('task7',function(){
	gulp.src(['./src/css/*.css','!./src/css/all.css'])
	//
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./src/css'))
})

//将目标css文件进行代码压缩
gulp.task('task8',function(){
	gulp.src(['./src/css/*.css','!./src/css/all.css'])
	//
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./src/css'))
	//通过clearCss()将all.css文件进行一个代码压缩//并放入到'./src/css'文件夹中
	//但因为该文件夹下面已经有一个all.css文件了,所以会造成覆盖
	//若想保留未被压缩的文件,--只需要将压缩的文件进行重命名,从而不会造成命名重复造成的覆盖问题
	//在下面进行演示
	.pipe(clearCss())
	.pipe(gulp.dest('./src/css'))
})

//将目标css文件进行代码压缩//为了防止同名产生覆盖问题,这里需要添加一个重命名操作
gulp.task('task9',function(){
	gulp.src(['./src/css/*.css','!./src/css/all.css','!./src/css/all.min.css'])
	//
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./src/css'))
	.pipe(clearCss())
	//将文件进行压缩之后,--执行重命名操作
	//当执行这个任务的时候,会从上到下全都执行一遍
	//若多次执行该任务
	//在进行代码合并的时候,会多次将所有代码进行合并
	//但是我们仅仅需要合并的是我们自己写的源代码,对应命令自动生成的代码是不需要 [再次]参加合并的,所有在上面的配置中,将后来自动生成的代码排查在外
	//也就是将'!./src/css/all.min.css'写入数组中,--意义为不对该文件即!./src/css/all.min.css文件执行下面的操作
	.pipe(rename('all.min.css'))
	.pipe(gulp.dest('./src/css'))
})

//精灵图压缩

gulp.task('task10',function(){
	gulp.src(['./src/css/*.css','!./src/css/all.css','!./src/css/all.min.css'])
	//
	.pipe(concat('all.css'))
	//这步执行精灵图压缩
	.pipe(spriter({
		'spriteSheet':'./src/spriter/spriterFirst.png',
		'pathToSpriteSheetFromCss':'../spriter/spriterFirst.png'
	}))
	.pipe(gulp.dest('./src/css'))
	
	.pipe(clearCss())

	.pipe(rename('all.min.css'))
	.pipe(gulp.dest('./src/css'))
})

//babel文件配置
//将['./src/js/first.js','./src/js/second.js']
//先编译,从es6转换为es5
//然后将其合并
gulp.task('js1',function(){
	gulp.src(['./src/js/first.js','./src/js/second.js'])
	//执行编译,从es6到es5
	.pipe(babel({
		presets:['es2015']
	}))
	//将文件进行合并
	.pipe(concat('allmy_norename.js'))
	//将合并后的文件进行重命名//但是这里不需要//因为这里的文件名具有唯一性
	//若仅仅对一个文件进行编译的话,生成的文件名和原来的文件名一样,会产生覆盖,所以才需要重命名
//	.pipe(rename('allmy.js'))
	.pipe(rename('allmy_norename.min.js'))
	//对文件进行压缩
	.pipe(uglify())
	
	.pipe(gulp.dest('./src/js/'))
})

//gulp.task('js', function(){
//	gulp.src([DEV.js + '*.js'])
//	.pipe(babel({
//		 presets: ['es2015']
//	}))
//	.pipe(rename('all.js'))
//	.pipe(gulp.dest(DEV.js))
//});

//babel-runtime/core-js/get-iterator

//压缩图片//只限jpg和png
gulp.task('imagemin',function(){
	gulp.src('./src/images/*.*')
	//下面这一步骤是执行压缩
	.pipe(imagemin())
	.pipe(gulp.dest('./src/imgmin'))
})

//browser-sync //省时的浏览器同步测试工具//还可以模拟服务器环境,
//他的引入方式有点特别//在引入之后还需要创造一下
//即 var browserSync = require('browser-sync').create()
//老师,发下browser-sync的代码



