import { initialState } from "../initialState";
import { ACTION_PRODUCT_DATA } from "../action/actions/actionProductData";

export function productData(state = initialState.productData, action) {
  switch (action.type) {
    case ACTION_PRODUCT_DATA:
      return action.productData;

    default:
      return state;
  }
}
