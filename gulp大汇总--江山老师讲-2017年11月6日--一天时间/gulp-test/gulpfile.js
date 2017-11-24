var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var spriter = require('gulp-css-spriter');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var base64 = require('gulp-base64');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload; //reload方法

gulp.task('server:dev', function(){
	browserSync.init({
		server: {
		    baseDir: DEV.basePath,
		    index: 'index.html'
		},
		port: 8080
	});
	
	gulp.watch(DEV.basePath + '*.html',['html:dev']);
	gulp.watch(DEV.css + '*.css',['css:dev']);
	//gulp.watch(DEV.js + '*.js',['js']);
});

gulp.task('html:dev',function(){
	gulp.src(DEV.basePath+'*.html')
	.pipe(gulp.dest(DEV.basePath))
	.pipe(reload({
		stream: true
	}))
});

const PRODUCT = {
	basePath:'./build/',
	css:'./build/css/',
	images: './build/images/',
	js:'./build/js/'
};

const DEV = {
	basePath:'./src/',
	css:'./src/css/',
	images: './src/images/',
	js:'./src/js/',
	less:'./src/less/'
};

gulp.task('less', function(){
	gulp.src(DEV.less + '*.less')
		.pipe(less())
		.pipe(gulp.dest('./src/css'));
});


gulp.task('css:build', function(){
	gulp.src(['./src/css/*.css', '!./src/css/all.css','!./src/css/all.min.css'])
		.pipe(concat('all.css'))
		.pipe(spriter({
            'spriteSheet': './src/images/spritesheet.png', // 最终合并后的精灵图路径和文件名
            'pathToSpriteSheetFromCSS': '../images/spritesheet.png' // 需要回写在CSS文件中的路径
        }))
		.pipe(gulp.dest('./src/css'))
		.pipe(cleanCss())
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('./src/css'))	
});

gulp.task('css:dev', function(){
	gulp.src(['./src/css/*.css'])
	.pipe(gulp.dest('./src/css'))
	.pipe(reload({
		stream: true
	}))	
});

gulp.task('js', function(){
	gulp.src([DEV.js + '*.js'])
	.pipe(babel({
		 presets: ['es2015']
	}))
	.pipe(concat('all.js'))
	.pipe(gulp.dest(DEV.js))
	
	.pipe(uglify())  
    .pipe(rename('./all.min.js'))
    .pipe(gulp.dest(DEV.js))//输出一个压缩版本
});

gulp.task('base64', function(){
	gulp.src(DEV.css + '*.css')
	.pipe(base64({
		 maxImageSize: 8*1024, // bytes 
	}))
	.pipe(concat('all.css'))
	
	.pipe(gulp.dest(PRODUCT.basePath))
});

gulp.task('default',function(){
	gulp.src('./src/**/**')
	.pipe(gulp.dest('./dist'));
});


//压缩图片，只限jpg和png
gulp.task('imagesmin', function(){
	gulp.src(DEV.images+'*.*')
		.pipe(imagemin())
		.pipe(gulp.dest(PRODUCT.images))
});
