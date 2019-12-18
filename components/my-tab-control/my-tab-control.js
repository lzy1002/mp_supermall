// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    },
    activeIndex: {
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
    itemClick(event) {
      console.log(event);
      this.setData({
        activeIndex: event.currentTarget.dataset.index
      })
      this.triggerEvent("changeTab", {index: event.currentTarget.dataset.index});
    }
  }
})
