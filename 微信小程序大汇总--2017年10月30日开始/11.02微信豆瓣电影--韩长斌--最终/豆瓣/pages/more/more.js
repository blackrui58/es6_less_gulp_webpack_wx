// pages/search/search.js
// var comming_soon_file = require('../../utils/comming_soon_file.js');
// console.log(comming_soon_file)
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 100,
    nowloading: false,
    finishload: false,
    searchArr: [],//搜索后返回的数组数据
    // inputContent: "",//输入框输入的值
    count: 20,//数据条数
    nowPage: 1,//从第0页
    total: 0,
    requrl:''

  },
  //跳转详情页
  skipdetail(e) {
    console.log(e.currentTarget.id)
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "../details/details?id=" + id
    })
  },
  //请求网络数据
  reqUrlMovies() {
     // 常量转换成变量
    var url = "https://api.douban.com/v2/movie/" + this.data.requrl;
    var start = (this.data.nowPage - 1) * 20;
    var count = this.data.count;
    app.wxapis.getNetPath(url, { count: count, start: start }).then((res) => {
      console.log('更多电影网络请求', res)

      if (res.statusCode == 200) {
        wx.setStorage({
          key: 'data_' + this.data.requrl,
          data: {
            searchArr: this.data.searchArr.concat(res.data.subjects),
            total: res.data.total,
            expires: Date.now() + 1000 * 60 * 60 * 24
          }
        })
        this.setData({
          searchArr: this.data.searchArr.concat(res.data.subjects),
          total: res.data.total,
        });
      }


    })


   
      
    

  },
  _getStorage(){
    return new Promise((resolve,reject)=>{
      var key = 'data_' + this.data.requrl;
      app.wxapis.getStorage(key).then((res) => {
        console.log('获取缓存的电影', res)
        if (res.data.expires < Date.now()) {
            return resolve(null)
        }else{
          return resolve(res.data)
        }
      }).catch((err)=>{
        return resolve(null)
      })
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //请求网络数据
      console.log(options);
      this.setData({
        requrl:options.requrl
      })
      // this.reqUrlMovies();
      this._getStorage().then((res)=>{
          if(res){
            this.setData({
              searchArr: res.searchArr,
              total:res.total
            })
          }else{
            this.reqUrlMovies();  
          }
      })


    //获取本机系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log('本机系统信息', res)
        this.setData({
          height: res.windowHeight
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
    //清除缓存
    wx.removeStorage({
      key: 'data_'+this.data.requrl,
      success: (res)=> {
        this.setData({
          searchArr:[]
        })
      },
    })
    //从新加载
    this.reqUrlMovies();
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //增加页数
    this.setData({
      nowPage: ++this.data.nowPage,
    })
    var end = (this.data.nowPage -1) * 20;
    var total = this.data.total;
    if (total-end > 0) {
      this.setData({
        nowloading: true
      })
      setTimeout(() => {
        this.reqUrlMovies();
        this.setData({
          nowloading: false
        })
      }, 3000)
    } else {
      
      this.setData({
        finishload: true
      })
      setTimeout(() => {
        this.setData({
          finishload: false
        })
      }, 3000)
    }
    // //开始下一页


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})