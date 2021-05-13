import React from "react";
import ReactDOM from "react-dom";
import ProductTable from "./ProductTable";
import { deleteProduct } from "../service/productService";

class DeleteProduct extends React.Component {
  render() {
    return (
      <div>
        <p>
          Удалить товар номер {this.props.prodNum}?
          <button
            className={"back-button"}
            onClick={() => {
              console.log(this.props.orderId);
              ReactDOM.render(
                <ProductTable orderId={this.props.orderId} />,
                document.getElementById("root")
              );
            }}
          >
            НАЗАД
          </button>
          <button
            className={"delete-button"}
            onClick={() => {
              deleteProduct(this.props.prodId).then(() => {
                ReactDOM.render(
                  <ProductTable orderId={this.props.orderId} />,
                  document.getElementById("root")
                );
              });
            }}
          >
            УДАЛИТЬ
          </button>
        </p>
      </div>
    );
  }
}

export default DeleteProduct;
