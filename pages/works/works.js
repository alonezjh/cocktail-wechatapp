//获取应用实例 
var app = getApp()
Page({
  data: {
    works: [],
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/592f78ff91470c0ac1ff1321/cocktail/works',
      success: function (res) {
        var works = [];
        for (var i = 0; i < res.data.data.length; i++) {
          works.push(res.data.data[i]);
        }
        that.setData({
          works: works
        });
      }
    })
  }
});
