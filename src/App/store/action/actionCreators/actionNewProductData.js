import { ACTION_NEW_PRODUCT_DATA } from "../actions/actionNewProductData";

export function actionNewProductData(value) {
  return {
    type: ACTION_NEW_PRODUCT_DATA,
    newProductData: value,
  };
}
