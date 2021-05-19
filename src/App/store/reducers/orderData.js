import { initialState } from "../initialState";
import { ACTION_ORDER_DATA } from "../action/actions/actionOrderData";

export function orderData(state = initialState.orderData, action) {
  switch (action.type) {
    case ACTION_ORDER_DATA:
      return action.orderData;

    default:
      return state;
  }
}
