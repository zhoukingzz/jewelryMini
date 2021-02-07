const app = getApp();
let myRequest = require('../../../api/index.js')
// 定义一个全局变量保存从接口获取到的数据，以免重复请求接口
let resut; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCover:false,
    currentTab:0,
    navTitle:[
      {title:'精品翡翠'},
      {title:'璞玉原石'},
      {title:'有声小说'},
      {title:'儿童教育'},
      {title:'人文历史'},
      {title:'最潮外语'},
      {title:'商业财经'},
      {title:'热门新闻'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    myRequest.getData().then(res => {
      resut = res;
      that.setData({
        list: res.data.hotRecommends.list[0].list
      })
    }).catch(err => {
      console.log(err);
    })
  },
  handleClick(e) {
    let currentTab = e.currentTarget.dataset.index;
    // 实现每一个tabbar切换对应内容的原理，根据每一个tabbar的index对应数组中的数据
    this.setData({
      currentTab,
      list: resut.data.hotRecommends.list[currentTab].list
    })
  },
  pullDown:function(){
    let that = this;
    that.setData({
      showCover:true
    })
  },
  closeCover:function(){
    let that = this;
    that.setData({
      showCover:false
    })
  },
  coverCheck:function(e){
    let currentTab = e.currentTarget.dataset.index;
    // 实现每一个tabbar切换对应内容的原理，根据每一个tabbar的index对应数组中的数据
    this.setData({
      currentTab,
      list: resut.data.hotRecommends.list[currentTab].list
    })
    this.closeCover()
  }
})