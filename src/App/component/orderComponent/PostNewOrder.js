import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../.././store/store";
import { postNewOrder } from "../service/orderService";
import { COMPONENT_ORDER_TABLE_WRAP } from "../.././component/wrapComponent/ComponentOrderTable_wrap";
import {
  BACK,
  SAVE,
  NUMBER,
  DATE,
  ADDRESS,
  PRODUCT_ID_LIST,
} from "../service/constants";

export class PostNewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.props.setNewOrderData({ ...this.props.newOrderData, [name]: value });
  }

  renderOrderTable() {
    ReactDOM.render(
      <Provider store={store}>
        <COMPONENT_ORDER_TABLE_WRAP />
      </Provider>,
      document.getElementById("root")
    );
  }

  saveNewOrder() {
    postNewOrder({
      orderNumber: this.props.newOrderData.orderNumber,
      date: this.props.newOrderData.date,
      address: this.props.newOrderData.address,
      productIdList: this.props.newOrderData.productIdList.split(","),
    }).then(() => {
      this.renderOrderTable();
    });
  }

  render() {
    return (
      <div className={"post-div"}>
        <button className={"back-button"} onClick={this.renderOrderTable}>
          {BACK}
        </button>

        <button id={"save-button"} onClick={this.saveNewOrder.bind(this)}>
          {SAVE}
        </button>

        <figure className="post-box">
          <p>
            {NUMBER}:
            <input
              name="orderNumber"
              defaultValue={this.props.newOrderData.orderNumber}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {DATE}:
            <input
              name="date"
              type="date"
              defaultValue={this.props.newOrderData.date}
              onChange={this.handleInputChange}
            />
          </p>
          <p style={{ fontSize: "small" }}>
            {ADDRESS}:
            <input
              name="address"
              defaultValue={this.props.newOrderData.address}
              onChange={this.handleInputChange}
            />
          </p>
          <p style={{ fontSize: "small" }}>
            {PRODUCT_ID_LIST}:
            <input
              name="productIdList"
              defaultValue={this.props.newOrderData.productIdList}
              onChange={this.handleInputChange}
            />
          </p>
        </figure>
      </div>
    );
  }
}
