import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../../App/store/store";
import { getOrders } from "../service/orderService";
import { Table } from "../presentationalComponent/Table";
import { COMPONENT_PRODUCT_TABLE_WRAP } from "../wrapComponent/ComponentProductTable_wrap";
import { COMPONENT_NEW_ORDER_WRAP } from "../../component/wrapComponent/ComponentPostNewOrder_wrap";
import {
  ORDERS,
  ADD_ORDER,
  ID,
  NUMBER,
  DATE,
  ADDRESS,
} from "../service/constants";

export class OrderTable extends React.Component {
  componentDidMount() {
    getOrders().then((resp) => {
      this.props.setOrderData(resp.data);
    });
  }

  renderPostNewOrder() {
    ReactDOM.render(
      <Provider store={store}>
        <COMPONENT_NEW_ORDER_WRAP />
      </Provider>,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div>
        <figure className="orders-box">
          <p id={"order-header"}>
            <strong>{ORDERS}</strong>
            <button id="add-order" onClick={this.renderPostNewOrder}>
              {ADD_ORDER}
            </button>
          </p>
        </figure>
        <Table
          headers={[ID, NUMBER, DATE, ADDRESS]}
          data={this.props.orderData}
          renderOnClick={COMPONENT_PRODUCT_TABLE_WRAP}
          sentProperties={[{ orderId: "id" }]}
        />
      </div>
    );
  }
}
