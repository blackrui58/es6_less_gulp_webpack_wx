Page({
  onPullDownRefresh: function () {
    
    wx.startPullDownRefresh({
      success:function(evt){
        console.log('下拉刷新了')
        console.log(evt)
      }
    })
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function () {
    console.log('下拉停止了')
    //
    
    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
  }
})
