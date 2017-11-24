Page({
  setNaivgationBarTitle: function (e) {
    var title = e.detail.value.title
    console.log(title)
    wx.setNavigationBarTitle({
      title: title,
      success: function() {
        console.log('setNavigationBarTitle success')
      },
      fail: function(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })
    wx.setNavigationBarColor({
      frontColor:"#000000",
      backgroundColor:"#cccccc",
      success:function(evt){
        console.log(evt)
      }
    })

    // return false
  }
})
