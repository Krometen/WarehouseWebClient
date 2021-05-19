import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { DeleteProduct } from "./DeleteProduct";
import { deleteOrder } from "../service/orderService";
import { getProducts } from "../service/productService";
import { Table } from "../presentationalComponent/Table";
import { COMPONENT_ORDER_TABLE_WRAP } from "../../component/wrapComponent/ComponentOrderTable_wrap";
import { COMPONENT_NEW_PRODUCT_WRAP } from "../../component/wrapComponent/ComponentPostNewProduct_wrap";
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

export class ProductTable extends React.Component {
  componentDidMount() {
    getProducts(this.props.orderId).then((resp) => {
      this.props.setProductData(resp.data);
    });
  }

  renderOrderTable() {
    ReactDOM.render(
      <Provider store={store}>
        <COMPONENT_ORDER_TABLE_WRAP />
      </Provider>,
      document.getElementById("root")
    );
  }

  removeOpenOrder() {
    deleteOrder(this.props.orderId).then(() => {
      this.renderOrderTable();
    });
  }

  addNewProduct() {
    ReactDOM.render(
      <Provider store={store}>
        <COMPONENT_NEW_PRODUCT_WRAP orderId={this.props.orderId} />
      </Provider>,
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
          data={this.props.productData}
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
