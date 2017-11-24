// pages/poster/poster.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      height:100,
      imgUrl:[
        "http://sh.sinaimg.cn/2012/0106/U3484P18DT20120106100329.jpg",
        'http://iphoto.ipeen.com.tw/photo/comment/3/4/9/cm20120723_55922_94273_32cb177661b160079ccb109ce5c4283e967.jpg',
        'http://www.wzsky.net/img2013/uploadimg/20131008/0918430.jpg'
      ],
      isshow:false
  },
  cutimgEvent(res){
      var index = res.detail.current;
      console.log(index)
      if (index == this.data.imgUrl.length-1){
        this.setData({
          isshow:true
        })
      }else{
        this.setData({
          isshow: false
        })
      }
  },
  skipIndex(){
    wx.switchTab({
      url:'../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getSystemInfo({
        success:(res)=>{
          console.log('获取系统信息',res);
          this.setData({
            height:res.windowHeight
          })
        }
      })
      var url = "https://api.douban.com/v2/movie/coming_soon";
      app.wxapis.getNetPath(url,{count:3}).then((res)=>{
        console.log(res)
        this.setData({
          imgUrl:res.data.subjects
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})