// pages/account/account.js
//获取app实例
var appInstance = getApp();
Page({
  data:{
    isLogin: false,
    userImg: null,
    userName: null,
    userInfo: {}
  },
  goLogin: function () {

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    appInstance.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        userName: userInfo.nickName,
        userImg: userInfo.avatarUrl
      })
      console.log(userInfo);
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})