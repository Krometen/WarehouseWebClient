import React from "react";
import ReactDOM from "react-dom";
import { ProductTable } from "./ProductTable";
import { postNewProduct } from "../service/productService";
import {
  back,
  nameString,
  number,
  price,
  save,
  weight,
} from "../service/constants";

export class PostNewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productNumber: "", productName: "", price: "", weight: "" };

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

  renderProductTable() {
    ReactDOM.render(
      <ProductTable orderId={this.props.orderId} />,
      document.getElementById("root")
    );
  }

  saveProduct() {
    postNewProduct({
      productNumber: this.state.productNumber,
      productName: this.state.productName,
      price: this.state.price,
      weight: this.state.weight,
    }).then(() => {
      this.renderProductTable();
    });
  }

  render() {
    return (
      <div className={"post-div"}>
        <button
          className={"back-button"}
          onClick={this.renderProductTable.bind(this)}
        >
          {back}
        </button>

        <button className={"save-button"} onClick={this.saveProduct.bind(this)}>
          {save}
        </button>

        <figure className="post-box">
          <p>
            {number}:
            <input
              name="productNumber"
              value={this.state.productNumber}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {nameString}:
            <input
              name="productName"
              value={this.state.productName}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {price}:
            <input
              name="price"
              type="number"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {weight}:
            <input
              name="weight"
              type="number"
              value={this.state.weight}
              onChange={this.handleInputChange}
            />
          </p>
        </figure>
      </div>
    );
  }
}
