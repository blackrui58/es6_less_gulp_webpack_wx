// pages/yuyue/yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerView:[
      '北京北宫门校区',
      '郑州校区',
      '沈阳校区',
      '成都校区'
    ],
    index:0
  },
  send(){
    console.log('发送成功')
    wx.showToast({
      title:'发送成功'
    })
  },

  bindPickerChange:function(evt){
    // console.log(evt.detail.value)//获取了选取了数组的哪个的下标
    //赋值
    this.setData({
      index:evt.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//	wx.showToast({
//		title:'加载中',
//		icon:'loading',
//			image:'/images/friends.png'
//			duration:2000,
//			mask:true
//	})
//		wx.showLoading({
//			
//		})
			// wx.showActionSheet({
			// 	 itemList: ['A', 'B', 'C']
			// })
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