//获取应用实例 
var app = getApp()
Page({
  data: {
    wineLists: [],
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    moreHidden: true
  },
  onLoad: function () {
    var that = this
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
        console.log(res.windowHeight);
      }
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/592f78ff91470c0ac1ff1321/cocktail/wine/all',
      success: function (res) {
        var wineLists = [];
        for (var i = 0; i < res.data.data.length; i++) {
          wineLists.push(res.data.data[i]);
        }
        that.setData({
          wineLists: wineLists
        });
      }
    })
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  redictDetail: function (e) {
    var _type = e.currentTarget.dataset.hi,
      url = '../material/material?type=' + _type;
    wx.navigateTo({
      url: url
    });
  },
});
