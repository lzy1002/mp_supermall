// pages/goodsDetail/goodsDetail.js
import { getGoodsDetail, getRecommendData, Goods, Shop, GoodsInfo} from "../../api/goodsDetail.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: "",
    goodsData: {},
    shopData: {},
    goodsDetailData: {},
    rateData: {},
    recommendData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      iid: options.iid
    })
    this.getGoodsDetail(this.data.iid);
    this.getRecommendData();
  },
  getGoodsDetail(iid) {
    getGoodsDetail(iid).then(res => {
      console.log(res);
      const goodsData = new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services);
      const shopData = new Shop(res.data.result.shopInfo);
      const goodsDetailData = new GoodsInfo(res.data.result.itemInfo, res.data.result.itemParams, res.data.result.detailInfo.detailImage);
      const rateData = res.data.result.rate.list[0];
      console.log(goodsData);
      console.log(shopData);
      console.log(goodsDetailData);
      this.setData({
        goodsData,
        shopData,
        goodsDetailData,
        rateData
      })
    })
  },
  getRecommendData() {
    getRecommendData().then(res => {
      console.log(res);
      this.setData({
        recommendData: res.data.data.list
      })
    })
  },
  goCart() {
    const cart = wx.getStorageSync("cart") || [];
    const index = cart.findIndex(item => item.iid === this.data.iid);
    if(index === -1){
      cart.push({
        iid: this.data.iid,
        title: this.data.goodsData.title,
        price: this.data.goodsData.price,
        lowNowPrice: this.data.goodsData.lowNowPrice,
        desc: this.data.goodsDetailData.desc,
        image: this.data.goodsData.topImages[0],
        num: 1,
        checked: true
      })
      wx.showToast({
        title: '添加到购物车',
        icon: "success",
        duration: 1500
      })
    }else {
      cart[index].num += 1;
      wx.showToast({
        title: "商品数量+1",
        icon: "success",
        duration: 1500
      })
    }
    wx.setStorageSync("cart", cart);

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