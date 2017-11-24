// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieSbuject: { "rating": { "max": 10, "average": 5.1, "stars": "25", "min": 0 }, "genres": ["剧情", "动作", "战争"], "title": "密战", "casts": [
      { "alt": "https://movie.douban.com/celebrity/1041390/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg" }, "name": "郭富城", "id": "1041390" }, 
      { "alt": "https://movie.douban.com/celebrity/1275620/", "avatars": { "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg", "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg", "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg" }, "name": "赵丽颖", "id": "1275620" },
       { "alt": "https://movie.douban.com/celebrity/1031500/", "avatars": { "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408604480.79.jpg", "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408604480.79.jpg", "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408604480.79.jpg" }, "name": "张翰", "id": "1031500" }], "collect_count": 4530, "original_title": "密战", "subtype": "movie",
        "directors": [{ "alt": "https://movie.douban.com/celebrity/1280632/", "avatars": { "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.jpg", "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.jpg", "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.jpg" }, "name": "钟少雄", "id": "1280632" }], "year": "2017", 
    
    "images": { "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502474177.jpg",
     "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502474177.jpg", 
     "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502474177.jpg" }, "alt": "https://movie.douban.com/subject/26316956/", 
     "id": "26316956" }


  },//data::end

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tid = options.tid;
    //请求相关的数据
    //但是这里用了死数据先
    
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