import { ACTION_PRODUCT_DATA } from "../actions/actionProductData";

export function actionProductData(value) {
  return {
    type: ACTION_PRODUCT_DATA,
    productData: value,
  };
}
