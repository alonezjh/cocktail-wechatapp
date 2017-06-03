//index.js
//获取应用实例
// var app = getApp()
// Page({
//   data: {
//     motto: 'Love 小月月',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    loadingHidden: false, // loading
    userInfo: {},
    images: [],
    recommends: [],
    swiperCurrent: 0,
    selectCurrent: 0,
    categories: [],
    activeCategoryId: 0,
    goods: [],
    scrollTop: "0",
    loadingMoreHidden: true,
    works: []
  },

  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindTypeTap: function (e) {
    this.setData({
      selectCurrent: e.index
    })
  },
  scroll: function (e) {
    //  console.log(e) ;
    var that = this, scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    })
    // console.log('e.detail.scrollTop:'+e.detail.scrollTop) ;
    // console.log('scrollTop:'+scrollTop)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/592f78ff91470c0ac1ff1321/cocktail/banner',
      success: function (res) {
        var images = [];
        for (var i = 0; i < res.data.data.length; i++) {
          images.push(res.data.data[i].picUrl);
        }
        that.setData({
          images: images
        });
      }
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/592f78ff91470c0ac1ff1321/cocktail/recommend',
      success: function (res) {
        var recommends = [];
        for (var i = 0; i < res.data.data.length; i++) {
          recommends.push(res.data.data[i]);
        }
        that.setData({
          recommends: recommends
        });
      }
    })
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
  },
  redictWorks: function (e) {
    var url = '../works/works';
    wx.navigateTo({
      url: url
    });
  },
})
