// pages/category/category.js
import {getCategoryTitleData, getCategoryList, getCategoryGoodsList} from "../../api/category.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryTitleList: [],
    activeIndex: 0,
    categoryList: [],
    categoryGoodsList: [],
    scrollTop: 0
  },
  getCategoryTitleData() {
    getCategoryTitleData().then(res => {
      console.log(res);
      this.setData({
        categoryTitleList: res.data.data.category.list
      })
      this.getCategoryList(this.data.categoryTitleList[0].maitKey);
      this.getCategoryGoodsList(this.data.categoryTitleList[0].miniWallkey, "pop");
    })
  },
  titleItemTap(event) {
    const index = event.currentTarget.dataset.index;
    console.log(this.data.categoryTitleList);
    const maitKey = this.data.categoryTitleList[index].maitKey;
    const miniWallkey = this.data.categoryTitleList[index].miniWallkey;
    console.log(maitKey, miniWallkey);
    this.getCategoryList(maitKey);
    this.getCategoryGoodsList(miniWallkey, "pop");
    this.setData({
      activeIndex: index,
      scrollTop: 0
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
  getCategoryGoodsList(miniWallkey, type) {
    getCategoryGoodsList(miniWallkey, type).then(res => {
      console.log(res);
      this.setData({
        categoryGoodsList: res.data
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