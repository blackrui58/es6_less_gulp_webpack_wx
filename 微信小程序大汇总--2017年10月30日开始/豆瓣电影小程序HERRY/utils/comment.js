//获取storage基本版
function getStorage(key){
  return new Promise(function (resolve, reject) {
    wx.setStorage({
      key: key,
      success: resolve,
      reject: reject
    })
  })
};




module.exports = {
  getStorage
 
};