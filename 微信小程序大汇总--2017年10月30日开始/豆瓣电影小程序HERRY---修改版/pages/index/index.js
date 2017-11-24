//index.js
//获取应用实例

const app = getApp();

Page({
  data: {
    indexs:[],
    currentIndex:0,
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
    console.log(' 执行网络请求函数封装')
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: { count: 3 },
      header: {
        'content-type': 'json'
      },
      success: (que) => {
        //1.将数据赋值给本页的数据变量//应该连接限制的问题::这里用假数据
        // console.log(que.data.subjects)
        this.setData({
          indexs: que.data.subjects
        })
        //2.将获取到的信息存储在storage中去
        wx.setStorage({
          key: 'indexs',
          data: {
            activeTime: Date.now() + 24 * 60 * 60 * 1000,
            ind: que.data.subjects

          }
        })
      }
    })
  },

  //自己刚开始写的代码
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
      key:'indexs',
      success: (res) =>{
        console.log(res)
        console.log('进入到获取成功部分')
        //1.2.1判断获取中的过期时间是否大于现在
        if(res.data.activeTime > Date.now()){
          //1.2.1.1若大于现在,说明还未过期,将其里面的值赋值给本页变量
          this.setData({
            indexs: res.indexs.ind
          })
        }else{
          //1.2.1.2若小于现在,则说明已经过期,重新执行网络请求
          this.wxRequest()
        }
      },
      fail:() =>{
        //1.1若没获取到,执行网络请求操作
        console.log('shibai'),
        this.wxRequest()
      }
    })
  }//end:onload
 

})//end:page
