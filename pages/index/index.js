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
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad1.jpg',
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad2.jpg',
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad3.jpg',
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad4.jpg',
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad5.jpg',
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad6.jpg',
      'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad7.jpg',
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
        {coverMiddle:'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad1.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad2.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad3.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad4.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad5.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'},
        {coverMiddle:'https://public-image-1300433308.cos.ap-guangzhou.myqcloud.com/ad6.jpg',intro:'承接各种翡翠钻石珠宝定制，做你的首饰私人管家'}
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