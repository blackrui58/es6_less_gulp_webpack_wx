// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    height:0,
    markers:[
      {
        id:'guofirstid',
        latitude:'40.003050',
        longitude:'116.277310',
        title:'AAA教育',
        // iconPath:'/images/map.png',
        rotate:20,
        rotate:0.3,
        width:50,
        height:50,
        callout:[
          {
            content:'aaa大厦',
            color:'#0000ff',
            fontSize:30,
            bgColor:'#ff0000',
            display:'ALWAYS'
          }
        ]
      }
    ]
  },
  
  //相关的一些函数
  toTeacher(){
  	//调到相关的页面
  	wx.navigateTo({
  		url:'/pages/teacher/teacher'
  	})
  },
  toYuyue(){
    wx.navigateTo({
      url:'/pages/yuyue/yuyue'
    })
  },
  toxueshu:function(){
    wx.navigateTo({
      url: '/pages/xueshu/xueshu',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //当页面加载的时候::即onload 时:::开始获取--界面信息
    //当获取界面信息成功的时候-->即success后-->运行相关
    wx.getSystemInfo({
      success: (res) => {
        var h = res.windowHeight;

        this.setData({
          // height: h - 48
          height:res.windowHeight - 58,
          // console.log(h)
        })
      }
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