// pages/home/home.js

import {getMultiData, getGoodsData} from "../../api/home.js";

const Top = 1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommend: [],
    tabList: ["流行", "新款", "热销"],
    pathList: ["pop", "new", "sell"],
    activePath: "pop",
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    backTopIsShow: false,
    isFixed: false,
    tabControlTop: 0
  },
  changeTab(event) {
    console.log(event.detail.index)
    this.setData({
      activePath: this.data.pathList[event.detail.index]
    })
  },
  getMultiData() {
    getMultiData().then((res) => {
      console.log(res);
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;

      this.setData({
        banner,
        recommend
      })
    });
  },
  getGoodsData(type) {
    const page = this.data.goods[type].page + 1;
    console.log(type);
    getGoodsData(type, page).then((res) => {
      console.log(res);
      this.data.goods[type].list.push(...res.data.data.list);
      console.log(this.data.goods[type].list)
      const listKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [listKey]: this.data.goods[type].list,
        [pageKey]: page
      })
      wx.hideLoading();
    })
  },
  scrollTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  imageLoad() {
    wx.createSelectorQuery().select("#tabControl").boundingClientRect((rect) => {
      console.log(rect);
      this.setData({
        tabControlTop: rect.top
      })
    }).exec();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMultiData();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载ing',
    });
    this.getGoodsData(this.data.activePath);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 官方不希望在页面滚动时频繁的调用setData方法 
  onPageScroll(option) {
    const flag1 = option.scrollTop >= Top;
    if(flag1 !== this.data.backTopIsShow) {
      this.setData({
        backTopIsShow: flag1
      })
    }
    const flag2 = option.scrollTop >= this.data.tabControlTop;
    if(flag2 !== this.data.isFixed){
      this.setData({
        isFixed: flag2
      })
    }

  }
})