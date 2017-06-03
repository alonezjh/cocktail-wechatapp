// material.js
var app = getApp();
var mtabW;
Page({
  data: {
    tabs: ["综合与绘画", "艺术喷漆", "泥塑", "纸面绘画", "布面绘画", "中国油画", "水墨画"],
    typeLists: [],
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0
  },
  //事件处理函数
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        mtabW = res.windowWidth / 4;  //设置tab的宽度
        that.setData({
          tabW: mtabW
        })
      }
    })
    var _type = options.type;
    wx.request({
      url: 'https://www.easy-mock.com/mock/592f78ff91470c0ac1ff1321/cocktail/material/'+_type,
      success: function (res) {
        var typeLists = [];
        for (var i = 0; i < res.data.data.length; i++) {
          typeLists.push(res.data.data[i]);
        }
        that.setData({
          typeLists: typeLists
        });
      }
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tabClick: function (e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    var offsetW = e.currentTarget.offsetLeft;  //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: idIndex,
      slideOffset: offsetW
    });
  },
  bindChange: function (e) {
    var current = e.detail.current;
    if ((current + 1) % 4 == 0) {

    }
    var offsetW = current * mtabW;    //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW
    });

  }

})