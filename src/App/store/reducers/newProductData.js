import { initialState } from "../initialState";
import { ACTION_NEW_PRODUCT_DATA } from "../action/actions/actionNewProductData";

export function newProductData(state = initialState.newProductData, action) {
  switch (action.type) {
    case ACTION_NEW_PRODUCT_DATA:
      return action.newProductData;

    default:
      return state;
  }
}
