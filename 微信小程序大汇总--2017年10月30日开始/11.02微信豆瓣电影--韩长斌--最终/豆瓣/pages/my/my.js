var app = getApp()
Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        _getUserInfo()
        that.setData({
          hasLogin: true
        })
        that.update()
      }
    })

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },
  clear: function () {
    this.setData({
      hasLogin: false,
      userInfo: {}
    })
  }
})