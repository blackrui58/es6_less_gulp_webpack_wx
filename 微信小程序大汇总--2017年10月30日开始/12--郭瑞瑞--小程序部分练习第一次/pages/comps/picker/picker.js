// pages/comps/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //这个数据属于单列数组的
  	array: ['美国', '中国', '巴西', '日本'],
  	index: 0,
  	
    //多列选择器
    multiIndex: [0, 0, 0],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],

    //时间选择器
    time: '12:01',
    
    // 日期选择器
    date: '2017-11-01',

    region: ['山西省', '临汾市', '翼城县'],
  },
  bindRegionChange:function(evt){
    console.log(evt)
    this.setData({
      region:evt.detail.value
    })
  },
  bindDateChange:function(evt){
    
    this.setData({

      date:evt.detail.value
    })
  },
  bindTimeChange:function(evt){
    // console.log(evt.detail.value)
    //相关赋值
    this.setData({
      time:evt.detail.value
    })
  },
	bindPickerChange:function(evt){
		//这里有个事件对象
    //  console.log(evt.detail.value)
    //evt.detail.value:::表示选中的数组的选项的下标
    this.setData({
      //将该下标进行赋值给属性值:index
      index:evt.detail.value
    })
	},


  bindMultiPickerChange:function(evt){
    // console.log(evt.detail.value)
    //得到的是一个数组::每项是相关数组的选项
    this.setData({
      multiIndex:evt.detail.value
    })
  },
  //只要选中的元素一发生改变,不用点击确定就触发其所在事件并允许该函数
  bindMultiPickerColumnChange:function(evt){
    this.setData({
      multiIndex: evt.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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