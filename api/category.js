import {request} from "./request.js";

export function getCategoryTitleData() {
  return request({
    url: "/category"
  })
}

export function getCategoryList(maitKey) {
  return request({
    url: "/subcategory",
    data: {
      maitKey
    }
  })
}

export function getCategoryGoodsList(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    data: {
      miniWallkey,
      type
    }
  })
}
