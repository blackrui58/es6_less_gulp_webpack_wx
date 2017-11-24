// pages/tabs/tab1/tab1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  btnclick(){
    //有返回页面的跳转
    wx.navigateTo({
      url:'/pages/first/first',
      success:function(){
        console.log('跳转成功了');
        
      }
    })
    
    //无返回页面的跳转
    // wx.redirectTo({
    //   url: '/pages/first/first'
    // })

    //导航页面的跳转
    // wx.switchTab({
    //   url: '/pages/tabs/tab3/tab3'
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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