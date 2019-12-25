// pages/cart/childrenCpts/my-cart-item/my-cart-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartItemData: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemChackboxChange() {
      console.log(this.properties.index);
      this.triggerEvent("itemChackboxChange", {index: this.properties.index});
    }
  }
})
