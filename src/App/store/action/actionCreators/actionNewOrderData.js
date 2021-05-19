import { ACTION_NEW_ORDER_DATA } from "../actions/actionNewOrderData";

export function actionNewOrderData(value) {
  return {
    type: ACTION_NEW_ORDER_DATA,
    newOrderData: value,
  };
}
