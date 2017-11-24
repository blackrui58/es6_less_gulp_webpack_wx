// pages/my/my.js

var in_theater_file = require("../../utils/in_theater_file.js");
// console.log(in_theater_file)
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    csMovies: [],
    indicatorColor: '#666',
    activeColor: '#f00',
    interval: 5000,
    duration: 500,
    all_info:[
      {
        title:"口碑榜",
        requestUrl:"us_box"
      },
      {
        title:"正在上映的电影_北京",
        requestUrl:"in_theaters"
      },
      {
        title: "即将上映的电影_北京",
        requestUrl: "coming_soon"
      },
      {
        title: "Top250的电影_北京",
        requestUrl: "top250"
      }
    ]
  },
  //跳转更多电影栏目
  sikpList(res){
    console.log(res.currentTarget.dataset.requrl)
    var requrl = res.currentTarget.dataset.requrl;
    var url = "../more/more?requrl="+requrl;
    wx.navigateTo({
      url: url,
    })
  },
  //跳转详情页
  skipDetail(res){
      // console.log(res)
      var id = res.currentTarget.id;
      var url = "../details/details?id="+id;
      // console.log(id) 
      wx.navigateTo({
        url: url,
      })
  },
  //网络请求数据
  getNetworkData() {
    var promises=  this.data.all_info.map(function(info){
      var url = "https://api.douban.com/v2/movie/" + info.requestUrl;
        return app.wxapis.getNetPath(url,{count:10}).then((res)=>{
          info.movies = res.data.subjects;
          return info;
        })
        // console.log(p)
      })
      //缓存网络数据
    Promise.all(promises).then((infos)=>{
      console.log("请求数据访问",infos);
      wx.setStorage({
        key:"border_data",
        data:{
          all_info: infos,
          expires:Date.now() + 1000*60*60*24
        }
      });
      this.setData({
        all_info: infos
      })
    });
  },
//获取缓存数据
  getCache() {
    return new Promise((resolve, reject) => {
      app.wxapis.getStorage('border_data').then(function (storage_res) {
        console.log('获取的是什么',storage_res)
        if (storage_res.data.expires < Date.now()) {
          // this.getNetworkData();
          //过期时间已经过了
          // console.log('过期了')
          return resolve(null)
        } else {
          // console.log('没过期')
          return resolve(storage_res.data.all_info)
          // var movies = storage_res.data.movies;
          // this.setData({
          //   movies
          // })
          // console.log(movies)
        }
      }).catch(function (err) {
        // console.log('第一次')
        // this.getNetworkData();
        return resolve(null)
      })



    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNetworkData();
    // this.getComingSoonData();
    // this.getCache()
    // this.getNetworkData()
    // wx.removeStorage({
    //   key:'data_count'
    // })
    this.getCache().then((result) => {
      console.log('结果是',result)
      // console.log(result)
      if (!result) {
        // console.log('重新注册')
        this.getNetworkData();
      } else {
        this.setData({
          all_info: result
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
    this.getNetworkData();
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