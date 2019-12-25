// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData: [],
    totalPrice: 0,
    totalCount: 0,
    isAllChecked: false
  },
  mathTotal() {
    const cart = wx.getStorageSync("cart") || [];
    let totalPrice = 0;
    let totalCount = 0;
    cart.forEach(item => {
      if(item.checked) {
        totalPrice += parseFloat(item.lowNowPrice) * item.num;
        totalCount += item.num;
      }
    })
    console.log(totalPrice);
    this.setData({
      totalPrice,
      totalCount
    })
  },
  isAllChecked() {
    const cart = wx.getStorageSync("cart") || [];
    if(cart.length <= 0){
      this.setData({
        isAllChecked: false
      })
      return;
    }
    const isAllChecked = cart.every(item => item.checked);
    this.setData({
      isAllChecked
    })
  },
  itemChackboxChange(event) {
    console.log(event.detail);
    const index = event.detail.index;
    const cartData = this.data.cartData;
    cartData[index].checked = !cartData[index].checked;
    this.setData({
      cartData
    })
    wx.setStorageSync("cart", this.data.cartData);
    this.isAllChecked();
    this.mathTotal();
  },
  allCheckboxChange() {
    const cartData = this.data.cartData;
    if(cartData.length <= 0) return;
    cartData.forEach(item => {
      item.checked = !this.data.isAllChecked;
    })
    this.setData({
      cartData
    })
    wx.setStorageSync("cart", this.data.cartData);
    this.isAllChecked();
    this.mathTotal();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    const cartData = wx.getStorageSync("cart");
    console.log(cartData);
    this.setData({
      cartData
    })
    this.mathTotal();
    this.isAllChecked();
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