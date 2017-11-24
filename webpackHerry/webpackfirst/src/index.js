//在webpack.comfig.js文件中,配置的进入目录就是这个index文件,想要打包其他的文件,就需要将其他的文件引入到index.js中
//也就是,webpack只打包index.js文件
//将相关的文件引入进来
import css from '@/css/main'
import json from './json/file.json'

console.log('第一个index')
console.log(json.name)
