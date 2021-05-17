import React from "react";
import ReactDOM from "react-dom";
import { ProductTable } from "./ProductTable";
import { deleteProduct } from "../service/productService";
import { DELETE_PRODUCT, BACK, REMOVE } from "../service/constants";

export class DeleteProduct extends React.Component {
  renderProductTable() {
    ReactDOM.render(
      <ProductTable orderId={this.props.orderId} />,
      document.getElementById("root")
    );
  }

  removeProduct() {
    deleteProduct(this.props.prodId).then(() => {
      this.renderProductTable();
    });
  }

  render() {
    return (
      <div>
        <p>
          {DELETE_PRODUCT} {this.props.prodNum}?
          <button
            className={"back-button"}
            onClick={this.renderProductTable.bind(this)}
          >
            {BACK}
          </button>
          <button
            className={"delete-button"}
            onClick={this.removeProduct.bind(this)}
          >
            {REMOVE}
          </button>
        </p>
      </div>
    );
  }
}
