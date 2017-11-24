// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    in_theaters111:[1,1,1,1,2,2,2,2,3],
    coming_soon111: [1, 1, 1, 1,1,3],
    f:{
      top250111: [1, 1, 1, 1],
      in_theaters: [],
      coming_soon: [],
      top250: []
    }
  },

  toDetail: function (req) {
    var tid = req.currentTarget.dataset.tid
    wx.navigateTo({
      url: "/pages/detail/detail?tid=" + tid
    })
  },
  //everyArr:::代表每个数据的名称：：也就是数组的名字
  //moviesData:::代表数据的内容
  wxRequest: function (url,everyArr,moviesData){
    var reqUrl = "https://api.douban.com/v2/movie/" + url;
    wx.request({
      url: reqUrl,
      data: { count: 10 },
      header: {
        'content-type': 'json'
      },
      success: (que) => {
        //1.将数据赋值给本页的数据变量//应该连接限制的问题::这里用假数据
        console.log('本页网络请求成功')
        //对数据进行赋值
        moviesData = que.data.subjects;
        var fff = {
          top250111: [1, 1, 1, 1],
          in_theaters: [],
          coming_soon: [],
          top250: []
        };
        fff[moviesData] = 'aaa'
        this.setData({
          f: fff
        })
        // everyArr = que.data.subjects
        // console.log(que)
        //2.将获取到的信息存储在storage中去
        wx.setStorage({
          key: everyArr ,
          data: {
            activeTime: Date.now() + 24 * 60 * 60 * 1000,
            infoData: this.data.moviesData
          }
        })//wx.setStorage:::end
      }
    })//wx.request:::end
  },
  wxGetInfo: function (url,everyArr,moviesData){
    wx.getStorage({
      key: everyArr,
      success: (res) => {
        // console.log(res)
        //1.2.1判断获取中的过期时间是否大于现在
        if (res.data.activeTime > Date.now()) {
          //1.2.1.1若大于现在,说明还未过期,将其里面的值赋值给本页变量
          console.log('未过期')
          console.log(res.data.infoData)
          this.data.moviesData = res.data.infoData
          // this.setData({
          //   moviesData: res.data.infoData
          // })
        } else {
          //1.2.1.2若小于现在,则说明已经过期,重新执行网络请求
          this.wxRequest(url, everyArr,moviesData)
        }
      },
      fail: () => {
        //1.1若没获取到,执行网络请求操作
        // console.log('shibai')
        this.wxRequest(url, everyArr,moviesData)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.in_theaters)
    console.log(this.data.coming_soon)
    console.log(this.data.top250)
    // wx.clearStorage()
    this.wxGetInfo('in_theaters', 'in_theaters', 'in_theaters')
    this.wxGetInfo('coming_soon', 'coming_soon', 'coming_soon')
    this.wxGetInfo('top250', 'top250', 'top250')
    
  },//onload结尾

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