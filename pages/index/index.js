//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../api/index.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      '/image/ad1.jpg',
      '/image/ad2.jpg',
      '/image/ad3.jpg',
      '/image/ad4.jpg',
      '/image/ad5.jpg',
      '/image/ad6.jpg',
      '/image/ad7.jpg'
    ],
    navList: [{
        icon: '/image/nav-icon/bangdan.png',
        events: 'goToJade',
        text: '玉器'
      },
      {
        icon: '/image/nav-icon/bangdan.png',
        events: 'goToJade',
        text: '黄金'
      },
      {
        icon: '/image/nav-icon/bangdan.png',
        events: 'goToJade',
        text: '砖石'
      },
      {
        icon: '/image/nav-icon/bangdan.png',
        events: 'goToJade',
        text: '竞拍'
      },

    ],
    swiperCurrent: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    myRequest.getData().then(res => {
      console.log('res',res);
      res.data.guess.list = [
        {coverMiddle:'/image/ad1.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'/image/ad2.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'/image/ad3.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'/image/ad3.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'/image/ad3.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'/image/ad3.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'}
      ]
      that.setData({
        showitem: true,
        guess: res.data.guess.list.slice(0,6),
        xiaoshuocontent: res.data.hotRecommends.list[0].list,
        xiangshengcontent: res.data.hotRecommends.list[2].list,
        tuokocontent: res.data.hotRecommends.list[4].list
      })
    }).catch(err => {
      console.log(err);
      that.setData({
        showitem: false
      })
    })
  },
  //轮播图改变事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  goToJade: function () {
    wx.navigateTo({
      url: '/pages/index/jade/jade',
    })
  },
  gotoDetails(e) {
    var url = e.currentTarget.dataset.coverimg;
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      // 页面传参
      url: '/pages/details/details?url=' + url + '&title=' + title,
    })
  }
})