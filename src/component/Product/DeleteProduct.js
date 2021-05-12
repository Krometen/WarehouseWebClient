import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import ProductTable from "./ProductTable";

class DeleteProduct extends React.Component {
  render() {
    return (
      <div>
        <p>
          Удалить товар номер {this.props.prodNum}?
          <button
            style={{ backgroundColor: "#9ad4e4" }}
            onClick={() => {
              ReactDOM.render(
                <ProductTable orderNum={this.props.orderNum} />,
                document.getElementById("root")
              );
            }}
          >
            НАЗАД
          </button>
          <button
            style={{ backgroundColor: "#f2805c" }}
            onClick={() => {
              axios
                .delete(
                  `http://localhost:8080/delete-product?id=${this.props.prodNum}`
                )
                .then(() => {
                  ReactDOM.render(
                    <ProductTable orderNum={this.props.orderNum} />,
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
