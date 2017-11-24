// Page({
//   data: {
//     // result: ''
//   },
//   scanCode: function () {
//     var that = this
//     wx.scanCode({
//       success: function (res) {
//         that.setData({
//           result: res.result
//         })
//       },
//       fail: function (res) {
//       }
//     })
//   }
// })

Page({
  data:{

  },
  scanCode:function(){
    //当点击按钮之后,执行scanCode方法,在该方法内
    //调用wx.scanCode接口
    //当接口调用成功之后
    wx.scanCode({
      onlyFromCamera:true,
      success:(res) =>{
        console.log('调用成功')
        this.setData({
          result: res.result
        })
      }
    })
  }
})
