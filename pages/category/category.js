// pages/category/category.js
import {getCategoryTitleData, getCategoryList} from "../../api/category.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryTitleList: [],
    activeIndex: 0,
    categoryList: []
  },
  getCategoryTitleData() {
    getCategoryTitleData().then(res => {
      console.log(res);
      this.setData({
        categoryTitleList: res.data.data.category.list
      })
      this.getCategoryList(this.data.categoryTitleList[0].maitKey);
    })
  },
  titleItemTap(event) {
    const index = event.currentTarget.dataset.index;
    const maitKey = event.currentTarget.dataset.maitKey;
    const miniWallkey = event.currentTarget.dataset.miniWallkey;
    console.log(event);
    this.getCategoryList(maitKey);
    this.setData({
      activeIndex: index
    })
  },
  getCategoryList(maitKey) {
    getCategoryList(maitKey).then(res => {
      console.log(res);
      this.setData({
        categoryList: res.data.data.list
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryTitleData();

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})