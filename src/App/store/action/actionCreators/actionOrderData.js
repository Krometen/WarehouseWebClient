import { ACTION_ORDER_DATA } from "../actions/actionOrderData";

export function actionOrderData(value) {
  return {
    type: ACTION_ORDER_DATA,
    orderData: value,
  };
}
