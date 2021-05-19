import { combineReducers } from "redux";
import { orderData } from "./orderData";
import { productData } from "./productData";
import { newOrderData } from "./newOrderData";
import { newProductData } from "./newProductData";

export const reducers = combineReducers({
  orderData,
  newOrderData,
  newProductData,
  productData,
});
