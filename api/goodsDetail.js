import {request} from "./request.js";

export function getGoodsDetail(iid) {
  return request({
    url: "/detail",
    data: {
      iid
    }
  })
}

export function getRecommendData() {
  return request({
    url: "/recommend"
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.topImages = itemInfo.topImages,
    this.title = itemInfo.title,
    this.price = itemInfo.price,
    this.lowNowPrice = itemInfo.lowNowPrice,
    this.oldPrice = itemInfo.oldPrice,
    this.discountDesc = itemInfo.discountDesc,
    this.columns = columns,
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name,
    this.shopLogo = shopInfo.shopLogo,
    this.cSells = shopInfo.cSells,
    this.cGoods = shopInfo.cGoods,
    this.score = shopInfo.score
  }
}

export class GoodsInfo {
  constructor(itemInfo, itemParams, detailImage) {
    this.desc = itemInfo.desc,
    this.info = itemParams.info.set,
    this.rule = itemParams.rule.tables[0],
    this.detailImage = detailImage[0].list
  }
}
