import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { deleteProduct } from "../service/productService";
import { COMPONENT_PRODUCT_TABLE_WRAP } from "../../component/wrapComponent/ComponentProductTable_wrap";
import { DELETE_PRODUCT, BACK, REMOVE } from "../service/constants";

export class DeleteProduct extends React.Component {
  renderProductTable() {
    ReactDOM.render(
      <Provider store={store}>
        <COMPONENT_PRODUCT_TABLE_WRAP orderId={this.props.orderId} />
      </Provider>,
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
