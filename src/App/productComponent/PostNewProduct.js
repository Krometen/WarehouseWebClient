import React from "react";
import ReactDOM from "react-dom";
import ProductTable from "./ProductTable";
import { postNewProduct } from "../service/productService";

class PostNewProduct extends React.Component {
  constructor() {
    this.state = { name: " ", price: " ", weight: " " };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name,
      price: event.target.price,
      weight: event.target.weight,
    });
  }

  handleSubmit(event) {
    console.log(
      "new name: " +
        this.state.name +
        "\n" +
        "new price: " +
        this.state.price +
        "\n" +
        "new weight: " +
        this.state.weight
    );
    event.preventDefault();
  }

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
            postNewProduct({
              productName: this.state.name,
              price: this.state.price,
              weight: this.state.weight,
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
          <form onSubmit={this.handleSubmit}>
            <p>
              Имя:
              <input
                id="new-name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Цена:
              <input
                id="new-price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Вес:
              <input
                id="new-weight"
                value={this.state.weight}
                onChange={this.handleChange}
              />
            </p>
          </form>
        </figure>
      </div>
    );
  }
}

export default PostNewProduct;
