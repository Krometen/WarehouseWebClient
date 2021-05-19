import { initialState } from "../initialState";
import { ACTION_NEW_ORDER_DATA } from "../action/actions/actionNewOrderData";

export function newOrderData(state = initialState.newOrderData, action) {
  switch (action.type) {
    case ACTION_NEW_ORDER_DATA:
      return action.newOrderData;

    default:
      return state;
  }
}
