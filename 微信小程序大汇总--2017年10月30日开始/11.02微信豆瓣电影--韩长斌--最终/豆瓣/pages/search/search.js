// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      value:'',
      height:100,
      nowloading:false,
      finishload:false,
      isShow:true,
      searchArr:[],//搜索后返回的数组数据
      inputContent:"",//输入框输入的值
      count:20,//数据条数
      nowPage:1,//开始页
      total:0

  },
  //跳转详情页
  skipdetail(e){
      console.log(e.currentTarget.id)
      var id = e.currentTarget.id;
      wx.navigateTo({
        url:"../details/details?id="+id
      })
  },
  //输入框每输入一个字，输入框的值发生变化
  changInput(e){
      // console.log(e)
      this.setData({
        inputContent:e.detail.value
      })
  },
  // 点击搜索相关视频
  searchMoviesEvent(){
    this.setData({
      searchArr:[]
    })
    this.searchMovies();
  },
  searchMovies(){
    // 常量转换成变量
    var q = this.data.inputContent;
   
    var count = this.data.count;
    var nowPage = this.data.nowPage;
    if (q) {
      var url = "https://api.douban.com/v2/movie/search?q=" + q;
      var start = (this.data.nowPage-1)*20;
      app.wxapis.getNetPath(url, { count: count, start: start }).then((res) => {
        console.log(res)
        
        if(res.statusCode == 200) {
          this.setData({
            searchArr: this.data.searchArr.concat(res.data.subjects),
            total: res.data.total,
            isShow: false
          });
        }else {
          this.setData({
            isShow:true
          })
        }
           
      
      })
    }else {
      this.setData({
        isShow: true,
        searchArr:[]
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取本机系统信息
      wx.getSystemInfo({
        success:(res)=>{
          console.log('本机系统信息',res)
          this.setData({
            height:res.windowHeight
          })
        }
      })
      if (this.data.searchArr.length){
        this.setData({
          isShow:false
        })
      }else{
        this.setData({
          isShow: true
        })
      }
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
    //减少页数
    this.setData({
      value: "",
      // inputContent:'',
      searchArr:[]
    })
    this.searchMoviesEvent();
    wx.stopPullDownRefresh()
    // this.searchMoviesEvent();
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //增加页数
      this.setData({
        nowPage: ++this.data.nowPage,
      })
      var end = (this.data.nowPage-1)*20;
      var total = this.data.total;
      if(end - total > 20){
        this.setData({
          finishload:true
        })
        setTimeout(() => {
          this.setData({
            finishload: false
          })
        }, 3000)
      }else{
        this.setData({
          nowloading: true
        })
        setTimeout(()=>{
          this.searchMovies();
          this.setData({
            nowloading: false
          })
        },3000)
      }
      //开始下一页
      

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})