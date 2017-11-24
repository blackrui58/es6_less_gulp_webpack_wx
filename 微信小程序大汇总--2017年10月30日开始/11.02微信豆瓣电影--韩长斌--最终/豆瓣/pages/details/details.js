// pages/details/details.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      height:100,
      movieSbuject:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      wx.getSystemInfo({
        success: (res)=> {
          // console.log('获取系统信息',res);
            this.setData({
              height: res.windowHeight
            })
        },
      })
      console.log(options)
      var id = options.id;
      var url = "https://api.douban.com/v2/movie/subject/"+id;
      app.wxapis.getNetPath(url).then((res)=>{
        console.log('请求电影条目信息',res)
        this.setData({
          movieSbuject:res.data
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