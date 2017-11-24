
//获取缓存数据
function getStorage(key){
  return new Promise(function(resolve,reject){
    wx.getStorage({
      key: key,
      success:resolve,
      fail:reject
    })
  })
  
}

//请求网络数据
function getNetPath(url,params){
  return new Promise(function(reslove,reject){
    wx.request({
      url:url,
      data:params,
      header:{
        "content-type":"json"
      },
      success:resolve,
      fail:reject
    })
  })

}