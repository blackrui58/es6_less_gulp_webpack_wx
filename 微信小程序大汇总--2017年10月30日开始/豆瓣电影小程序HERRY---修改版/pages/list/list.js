// pages/list/list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBottom:false,
    moviesData:[],
    movies: [{ "rating": { "max": 10, "average": 7.6, "stars": "40", "min": 0 },
     "genres": ["动作", "奇幻", "冒险"], 
     "title": "雷神3：诸神黄昏", 
     "casts": [{
        "alt": "https://movie.douban.com/celebrity/1021959/",
         "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg" },
          "name": "克里斯·海姆斯沃斯", "id": "1021959" }, 
        { "alt": "https://movie.douban.com/celebrity/1004596/",
         "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35625.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35625.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35625.jpg" },
          "name": "汤姆·希德勒斯顿", "id": "1004596" },
           { "alt": "https://movie.douban.com/celebrity/1040505/", "avatars": { "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p909.jpg", "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p909.jpg", "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p909.jpg" }, "name": "马克·鲁弗洛", "id": "1040505" }], "collect_count": 48285, "original_title": "Thor: Ragnarok", "subtype": "movie", "directors": [{ 
             "alt": "https://movie.douban.com/celebrity/1076354/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423172662.31.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423172662.31.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423172662.31.jpg" }, "name": "塔伊加·维迪提", "id": "1076354" }],
              "year": "2017",
               "images": { "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.jpg", "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.jpg", "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.jpg" }, "alt": "https://movie.douban.com/subject/25821634/", "id": "25821634" }, { "rating": { "max": 10, "average": 6.3, "stars": "35", "min": 0 }, "genres": ["动作", "科幻", "灾难"], "title": "全球风暴", "casts": [{ "alt": "https://movie.douban.com/celebrity/1040500/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4940.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4940.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4940.jpg" }, "name": "杰拉德·巴特勒", "id": "1040500" }, { "alt": "https://movie.douban.com/celebrity/1053559/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28071.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28071.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28071.jpg" }, "name": "吉姆·斯特吉斯", "id": "1053559" }, { "alt": "https://movie.douban.com/celebrity/1040985/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20016.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20016.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20016.jpg" }, "name": "艾比·考尼什", "id": "1040985" }], "collect_count": 22667, "original_title": "Geostorm", "subtype": "movie", "directors": [{ "alt": "https://movie.douban.com/celebrity/1050031/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1390371397.56.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1390371397.56.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1390371397.56.jpg" }, "name": "迪安·德夫林", "id": "1050031" }], "year": "2017", "images": { "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501769525.jpg", "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501769525.jpg", "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501769525.jpg" }, "alt": "https://movie.douban.com/subject/22266012/", "id": "22266012" }, { "rating": { "max": 10, "average": 5.1, "stars": "25", "min": 0 }, "genres": ["剧情", "动作", "战争"], "title": "密战", "casts": [{ "alt": "https://movie.douban.com/celebrity/1041390/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg" }, "name": "郭富城", "id": "1041390" }, { "alt": "https://movie.douban.com/celebrity/1275620/", "avatars": { "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg", "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg", "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg" }, "name": "赵丽颖", "id": "1275620" }, { "alt": "https://movie.douban.com/celebrity/1031500/", "avatars": { "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408604480.79.jpg", "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408604480.79.jpg", "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408604480.79.jpg" }, "name": "张翰", "id": "1031500" }], "collect_count": 4530, "original_title": "密战", "subtype": "movie", "directors": [{ "alt": "https://movie.douban.com/celebrity/1280632/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.jpg" }, "name": "钟少雄", "id": "1280632" }], "year": "2017", "images": { "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502474177.jpg", "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502474177.jpg", "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502474177.jpg" }, "alt": "https://movie.douban.com/subject/26316956/", "id": "26316956" }] 
  },
  toDetail:function(req){
    var tid = req.currentTarget.dataset.tid
    wx.navigateTo({
      url:"/pages/detail/detail?tid=" + tid
    })
  },
  wxRequest: function (url, everyArr, moviesData) {
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
        this.setData({
          moviesData: moviesData
        })
        // everyArr = que.data.subjects
        // console.log(que)
        //2.将获取到的信息存储在storage中去
        wx.setStorage({
          key: everyArr,
          data: {
            activeTime: Date.now() + 24 * 60 * 60 * 1000,
            infoData: this.data.moviesData
          }
        })//wx.setStorage:::end
      }
    })//wx.request:::end
  },
  wxGetInfo: function (url, everyArr, moviesData) {
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
          this.wxRequest(url, everyArr, moviesData)
        }
      },
      fail: () => {
        //1.1若没获取到,执行网络请求操作
        // console.log('shibai')
        this.wxRequest(url, everyArr, moviesData)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var data = options.list;
    // this.wxGetInfo(data, data, data)
    this.setData({
      moviesData:this.data.movies
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
    wx.showToast({
      title:"数据正在加载中",
      icon:"loading"
    })
    var addMovies = this.data.movies
    if (this.data.moviesData.length < 11){
      wx.showToast({
        title: "数据正在加载中",
        icon: "loading"
      })
      this.setData({
        moviesData: this.data.moviesData.concat(addMovies),
        isBottom:false
      })
    }else{
      wx.showToast({
        title: "数据加载完毕"
      })
      this.setData({
        isBottom: true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})