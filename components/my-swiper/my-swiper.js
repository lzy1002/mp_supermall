// components/my-swiper/my-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowWidth: "",
    imageHeightArr: [],
    maxHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(e) {
      // 获取图片宽高比
      const ratio = e.detail.width / e.detail.height
      // 按照宽高比计算图片宽度 100% 时的高度
      const imageHeight = this.data.windowWidth / ratio
      // 把每一张图片对应的高度记录到 imgsHeight 数组里
      this.data.imageHeightArr.push(imageHeight);

      if (this.data.imageHeightArr.length !== this.properties.banner.length) return;
      this.data.imageHeightArr.forEach((item) => {
        if (this.data.maxHeight >= item) return;
        this.setData({
          maxHeight: item
        })

      })
      
    }
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            windowWidth: res.windowWidth
          })
          console.log(res.windowWidth);
        }
      })
    }
  }
})
