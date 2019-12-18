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
      console.log(e);
      // 获取图片宽高比
      const ratio = e.detail.width / e.detail.height
      // 按照宽高比计算图片宽度 100% 时的高度
      const imageHeight = this.data.windowWidth / ratio
      // 把每一张图片对应的高度记录到 imgsHeight 数组里
      this.data.imageHeightArr.push(imageHeight);

      // 判断当前是不是最后一张图片 如果不是则不执行下面代码
      if (this.data.imageHeightArr.length !== this.properties.banner.length) return;
      // 拿到包含每一张图片在宽度100%时高度的数组 进行遍历获取其中最大值
      this.data.imageHeightArr.forEach((item) => {
        // 如果data中的最大值大于或等于当前遍历项 那么不执行下面操作
        if (this.data.maxHeight >= item) return;
        // 否则 将data中的最大值设置为当前遍历项
        this.setData({
          maxHeight: item
        })
        this.triggerEvent("imageLoad");
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
          console.log(res);
        }
      })
    }
  }
})
