var app = getApp()
//var app = getApp()
//getApp() 获取全局app实例
// Page({
//   onload:function(){
//     this.setData({
//       //app是上面实例化App的一个变量,全局APP的方法在app.js文件中,其中其有一个方法为globalData -->有一个变量为hasLogin:::默认的为false
//       //这里的意思就是将全局的数据hasLogin值赋值给局部变量hasLogin
//       hasLogin:app.globalData.hasLogin
//     })
//   },
//   data:{},
//   这里的login::是点击登录按钮之后运行的方法,//在该方法内,调用wx.login接口,从而获取相关信息
//   login:function(){
//     var that = this
//     //这里的含义为,当登录的时候,调用接口wx.login//接口方法里面写参数
//     wx.login({
//       //当调用登录接口成功之后
//       success:function(){
//          console.log('成功了')
//          设置全局变量为true
//          app.globalData.hasLogin = true
//设置局部变量为true,
//设置局部变量需要通过this.setData({})函数
//          that.setData({
//            hasLogin: true
//             })
//强制刷新一次
//that.update()
//       }
//     })
//   }

// })






Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        that.update()
      }
    })
  }
})
