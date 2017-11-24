// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbo: {
      title: '',
      imgURL: [
        
        "../../images/1001.jpg",
        "../../images/1002.jpg",
        "../../images/1003.jpg",
        
      ],
      api: ''
    },
    all_info:[
      {
        title:'',
        imgURL:[
          "/images/1001.jpg",
          "../../images/1001.jpg",
          "../../images/1002.jpg",
          "../../images/1003.jpg",
          "../../images/1003.jpg",
          "../../images/1003.jpg",
        ],
        api:''
      },
      {
        title: '正在上映',
        imgURL: [

        ],
        api: ''
      },
      {
        title: '即将上映',
        imgURL: [

        ],
        api: ''
      },
      {
        title: 'top250',
        imgURL: [

        ],
        api: ''
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //和首页的获取信息一样
      //1.当页面加载的时候,从storage中获取信息
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