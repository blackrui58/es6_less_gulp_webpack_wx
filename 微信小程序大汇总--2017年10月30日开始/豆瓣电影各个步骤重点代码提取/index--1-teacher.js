Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },
  _getStorage(key){
      return new Promise(function(resolve, reject){
          wx.getStorage({
            key: key,
            success: resolve,
            fail: reject
          });
      });
  },

  getCache(){

      return new Promise((resolve, reject)=>{
        this._getStorage('index_data').then((storage_res) => {
          // console.log(storage_res);
          if (storage_res.data.expires < Date.now()) {
            // 因为已经过期,所以你调用的结果是null
            return resolve(null);
          } else {
            return resolve(storage_res.data.movies);
          }
        }).catch(function (err) {
          return resolve(null);
        });
      });
      
    
  },
 
  // 用来获取请求网络数据,
  getNetworkData(){
    // wx.request({
    //   // https://api.douban.com/v2/movie/coming_soon
    //   url: '',
    //   data: {
    //     count: 3
    //   },
    //   header: {
    //     'content-type': 'json' // 默认值
    //   },
    //   success: (res1) => {
       console.log('正在进行网络请求');
       wx.setStorage({
          key: 'index_data',
          data: {
            movies: [1, 3, 5],
            expires: Date.now() + 1000 * 60 * 60 * 24
          },
        });

        this.setData({
          movies: [1,3,5]
        });

    //   },
    //   fail: function (err) {
    //     console.log(err);
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getCache();
    this.getCache().then((result) => {
        if (!result) {
          //没结果
          this.getNetworkData();
        } else {
          this.setData({
            movies: result
          });
        }
      }).catch((err) => {
        this.getNetworkData();
      });
    
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