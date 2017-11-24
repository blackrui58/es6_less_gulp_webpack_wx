//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies:[],
    currentIndex:0,

    imgUrls:[
      "http://img.zcool.cn/community/0157d95859f0eda8012060c8926f32.png@1280w_1l_2o_100sh.png",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509597832255&di=12d7dea7455b247755cb17f10cb814c1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014f3a57b81e800000018c1b8beaeb.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509597832257&di=b266b1f916f7856d3585e3d8665bbe11&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016fe6584f7be3a801219c77607d39.jpg"
    ]
  },
  //当轮播图滑动时运行的函数
  bindchange:function(evt){
    this.setData({
      currentIndex: evt.detail.current
    })
    console.log(this.data.currentIndex)
  },
  //当点击进入APP时运行的函数
  clickGo:function(){
    wx.switchTab({
      url: '/pages/shouye/shouye'
    })
  },

  //执行网络请求函数封装
  wxRequest:function(){
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: { count: 3 },
      header: {
        'content-type': 'json'
      },
      success: (que) => {
        //1.将数据赋值给本页的数据变量//应该连接限制的问题::这里用家数据
        this.setData({
          movies: this.data.imgUrls
        })
        //2.将获取到的信息存储在storage中去
        wx.setStorage({
          key: 'movies',
          data: {
            activeTime: Date.now() + 24 * 60 * 60 * 1000,
            movies: this.data.imgUrls,

          }
        })
      }
    })
  },
  onLoad: function () {
    //当页面首次加载时,
    //1.先从storage中获取相关信息
      //1.1若没获取到,执行网络请求操作
        //1.1.1当网络请求操作成功,
          //1.将数据赋值给本页的数据变量
          //2.将获取到的信息存储在storage中去
          
      //1.2若获取到了,
        //1.2.1判断获取中的过期时间是否大于现在
          //1.2.1.1若大于现在,说明还未过期,将其里面的值赋值给本页变量
          //1.2.1.2若小于现在,则说明已经过期,重新执行网络请求
        
    
    wx.getStorage({
      key:'movies',
      success: (res) =>{
        
        //1.2.1判断获取中的过期时间是否大于现在
        if(res.data.activeTime > Date.now()){
          //1.2.1.1若大于现在,说明还未过期,将其里面的值赋值给本页变量
          this.setData({
            movies: this.data.imgUrls
          })
        }else{
          //1.2.1.2若小于现在,则说明已经过期,重新执行网络请求
          this.wxRequest()
        }
       

      },
      fail:(err) =>{
        //1.1若没获取到,执行网络请求操作
        this.wxRequest()
      }
    })
  },
  // console.log(this.data.movies)
})


