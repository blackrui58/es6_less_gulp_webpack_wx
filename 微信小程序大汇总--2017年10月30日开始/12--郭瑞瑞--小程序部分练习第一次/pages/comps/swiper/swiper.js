// pages/comps/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //图片地址数据数组
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    //
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //对变量进行赋值的话
  //对于对象的键:::直接引用
  //对于对象的值:::若还引用data中的变量的话:需要用this.data //同时必须保证this指向的为page
  
  changeIndicatorDots:function(){
    this.setData({
      // 就是对该数值进行了取反
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  // 将滑块的值赋值给控制间隔值得变量
  //evt.detail.value //可以获取到滑块的对应的值

  intervalChange:function(){
    this.setData({
      interval:evt.detail.value
    })
  },
  
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
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