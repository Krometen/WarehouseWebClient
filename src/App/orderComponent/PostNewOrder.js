import React from "react";
import ReactDOM from "react-dom";
import { postNewOrder } from "../service/orderService";
import { OrderTable } from "./OrderTable";

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
    this.state = { orderNumber: "", date: "", address: "", productIdList: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  renderOrderTable() {
    ReactDOM.render(<OrderTable />, document.getElementById("root"));
  }

  saveNewOrder() {
    postNewOrder({
      orderNumber: this.state.orderNumber,
      date: this.state.date,
      address: this.state.address,
      productIdList: this.state.productIdList.split(","),
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
              value={this.state.orderNumber}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {DATE}:
            <input
              name="date"
              type="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </p>
          <p style={{ fontSize: "small" }}>
            {ADDRESS}:
            <input
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </p>
          <p style={{ fontSize: "small" }}>
            {PRODUCT_ID_LIST}:
            <input
              name="productIdList"
              value={this.state.productIdList}
              onChange={this.handleInputChange}
            />
          </p>
        </figure>
      </div>
    );
  }
}
