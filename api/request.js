import {baseUrl} from "./config.js";

export function request(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + option.url,
      method: option.method || "get",
      data: option.data || {},
      success: resolve,
      fail: reject
    })
  })
}
