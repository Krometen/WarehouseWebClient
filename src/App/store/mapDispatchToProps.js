import { bindActionCreators } from "redux";
import { actionOrderData } from "./action/actionCreators/actionOrderData";
import { actionProductData } from "./action/actionCreators/actionProductData";
import { actionNewOrderData } from "./action/actionCreators/actionNewOrderData";
import { actionNewProductData } from "./action/actionCreators/actionNewProductData";

export function mapDispatchToProps(component) {
  switch (component) {
    case "OrderTable":
      return function (dispatch) {
        return {
          setOrderData: bindActionCreators(actionOrderData, dispatch),
        };
      };
    case "PostNewOrder":
      return function (dispatch) {
        return {
          setNewOrderData: bindActionCreators(actionNewOrderData, dispatch),
        };
      };
    case "ProductTable":
      return function (dispatch) {
        return {
          setProductData: bindActionCreators(actionProductData, dispatch),
        };
      };
    case "PostNewProduct":
      return function (dispatch) {
        return {
          setNewProductData: bindActionCreators(actionNewProductData, dispatch),
        };
      };
    default:
      return undefined;
  }
}
