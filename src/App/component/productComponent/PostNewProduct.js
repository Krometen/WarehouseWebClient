import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../.././store/store";
import { postNewProduct } from "../service/productService";
import { BACK, NAME, NUMBER, PRICE, SAVE, WEIGHT } from "../service/constants";
import { COMPONENT_PRODUCT_TABLE_WRAP } from "../.././component/wrapComponent/ComponentProductTable_wrap";

export class PostNewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.props.setNewProductData({
      ...this.props.newProductData,
      [name]: value,
    });
  }

  renderProductTable() {
    ReactDOM.render(
      <Provider store={store}>
        <COMPONENT_PRODUCT_TABLE_WRAP orderId={this.props.orderId} />
      </Provider>,
      document.getElementById("root")
    );
  }

  saveProduct() {
    postNewProduct({
      productNumber: this.props.newProductData.productNumber,
      productName: this.props.newProductData.productName,
      price: this.props.newProductData.price,
      weight: this.props.newProductData.weight,
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
          {BACK}
        </button>

        <button className={"save-button"} onClick={this.saveProduct.bind(this)}>
          {SAVE}
        </button>

        <figure className="post-box">
          <p>
            {NUMBER}:
            <input
              name="productNumber"
              defaultValue={this.props.newProductData.productNumber}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {NAME}:
            <input
              name="productName"
              defaultValue={this.props.newProductData.productName}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {PRICE}:
            <input
              name="price"
              type="number"
              defaultValue={this.props.newProductData.price}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            {WEIGHT}:
            <input
              name="weight"
              type="number"
              defaultValue={this.props.newProductData.weight}
              onChange={this.handleInputChange}
            />
          </p>
        </figure>
      </div>
    );
  }
}
