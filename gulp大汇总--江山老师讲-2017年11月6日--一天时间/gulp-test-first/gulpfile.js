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
//引入babel
var babel = require('gulp-babel')

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
gulp.task('js1',function(){
	gulp.src('./src/js/first.js')
	.pipe(babel({
		presets:['es2015']
	}))
	.pipe(rename('allmy.js'))
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