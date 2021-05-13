import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ProductTable from "./ProductTable";
import { postNewProduct } from "../service/productService";

class PostNewProduct extends React.Component {
  render() {
    return (
      <div className={"post-div"}>
        <button
          className={"back-button"}
          onClick={() => {
            ReactDOM.render(
              <ProductTable orderId={this.props.orderId} />,
              document.getElementById("root")
            );
          }}
        >
          НАЗАД
        </button>

        <button
          className={"save-button"}
          onClick={() => {
            let newName = $("#new-name").val();
            let newPrice = $("#new-price").val();
            let newWeight = $("#new-weight").val();
            postNewProduct({
              productName: newName,
              price: newPrice,
              weight: newWeight,
              orderNumber: this.props.orderId,
            }).then(() => {
              ReactDOM.render(
                <ProductTable orderId={this.props.orderId} />,
                document.getElementById("root")
              );
            });
          }}
        >
          СОХРАНИТЬ
        </button>

        <figure className="post-box">
          <p>
            Имя:
            <input id="new-name" />
          </p>
          <p>
            Цена:
            <input id="new-price" />
          </p>
          <p>
            Вес:
            <input id="new-weight" />
          </p>
        </figure>
      </div>
    );
  }
}

export default PostNewProduct;
