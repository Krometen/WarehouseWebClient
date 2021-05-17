import React from "react";
import ReactDOM from "react-dom";
import { ProductTable } from "./ProductTable";
import { deleteProduct } from "../service/productService";
import { deleteProductNumber, back, remove } from "../service/constants";

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
          {deleteProductNumber} {this.props.prodNum}?
          <button
            className={"back-button"}
            onClick={this.renderProductTable.bind(this)}
          >
            {back}
          </button>
          <button
            className={"delete-button"}
            onClick={this.removeProduct.bind(this)}
          >
            {remove}
          </button>
        </p>
      </div>
    );
  }
}
