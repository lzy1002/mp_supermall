import {request} from "./request.js";

export function getCategoryTitleData() {
  return request({
    url: "/category"
  })
}
// http://106.54.54.237:8000/api/w1/subcategory?maitKey=3627
export function getCategoryList(maitKey) {
  return request({
    url: "/subcategory",
    data: {
      maitKey
    }
  })
}
