import React from "react";
import ReactDOM from "react-dom";
import { OrderTable } from "../orderComponent/OrderTable";
import { PostNewProduct } from "./PostNewProduct";
import { DeleteProduct } from "./DeleteProduct";
import { getProducts } from "../service/productService";
import { deleteOrder } from "../service/orderService";
import {
  ADD_PRODUCT,
  BACK,
  NAME,
  NUMBER,
  PRICE,
  PRODUCTS_OF_ORDER,
  REMOVE_ORDER,
  WEIGHT,
  ID,
} from "../service/constants";
import { Table } from "../presentationalComponent/Table";

export class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getProducts(this.props.orderId).then((resp) => {
      this.setState({ data: resp.data });
    });
  }

  renderOrderTable() {
    ReactDOM.render(<OrderTable />, document.getElementById("root"));
  }

  removeOpenOrder() {
    deleteOrder(this.props.orderId).then(() => {
      this.renderOrderTable();
    });
  }

  addNewProduct() {
    ReactDOM.render(
      <PostNewProduct orderId={this.props.orderId} />,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div>
        <figure>
          <p id={"order-id"}>
            <strong>
              {PRODUCTS_OF_ORDER}
              {this.props.orderId}
            </strong>
          </p>
          <figure id={"product-table"}>
            <button className={"back-button"} onClick={this.renderOrderTable}>
              {BACK}
            </button>
            <button
              className={"delete-button"}
              onClick={this.removeOpenOrder.bind(this)}
            >
              {REMOVE_ORDER}
            </button>
            <button
              className={"add-button"}
              onClick={this.addNewProduct.bind(this)}
            >
              {ADD_PRODUCT}
            </button>
          </figure>
        </figure>
        <Table
          headers={[ID, NUMBER, NAME, PRICE, WEIGHT]}
          data={this.state.data}
          renderOnClick={DeleteProduct}
          sentProperties={[
            { prodNum: "productNumber" },
            { prodId: "id" },
            { orderId: this.props.orderId },
          ]}
        />
      </div>
    );
  }
}
