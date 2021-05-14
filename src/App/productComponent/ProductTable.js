import React from "react";
import ReactDOM from "react-dom";
import OrderTable from "../orderComponent/OrderTable";
import PostNewProduct from "./PostNewProduct";
import DeleteProduct from "./DeleteProduct";
import { getProducts } from "../service/productService";
import { deleteOrder } from "../service/orderService";
import {
  addProduct,
  back,
  id,
  nameString,
  number,
  price,
  productsOfOrder,
  removeOrder,
  weigth,
} from "../service/constants";

class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    getProducts(this.props.orderId).then((resp) => {
      this.setState({ data: resp.data });
    });
  }
  render() {
    return (
      <div>
        <figure>
          <p id={"order-id"}>
            <strong>
              {productsOfOrder}
              {this.props.orderId}
            </strong>
          </p>
          <figure id={"product-table"}>
            <button
              className={"back-button"}
              onClick={() => {
                ReactDOM.render(
                  <OrderTable />,
                  document.getElementById("root")
                );
              }}
            >
              {back}
            </button>
            <button
              className={"delete-button"}
              onClick={() => {
                deleteOrder(this.props.orderId).then(() => {
                  ReactDOM.render(
                    <OrderTable />,
                    document.getElementById("root")
                  );
                });
              }}
            >
              {removeOrder}
            </button>
            <button
              className={"add-button"}
              onClick={() => {
                ReactDOM.render(
                  <PostNewProduct orderId={this.props.orderId} />,
                  document.getElementById("root")
                );
              }}
            >
              {addProduct}
            </button>
          </figure>
        </figure>
        <table>
          <tbody>
            <tr>
              <td className={"td-headers"}>{id}</td>
              <td className={"td-headers"}>{number}</td>
              <td className={"td-headers"}>{nameString}</td>
              <td className={"td-headers"}>{price}</td>
              <td className={"td-headers"}>{weigth}</td>
            </tr>
          </tbody>
          {/* eslint-disable-next-line array-callback-return */}
          <tbody>
            {this.state.data.map(
              function (item, key) {
                return (
                  <tr
                    key={key}
                    onClick={() => {
                      ReactDOM.render(
                        <DeleteProduct
                          prodNum={item.productNumber}
                          prodId={item.id}
                          orderId={this.props.orderId}
                        />,
                        document.getElementById("root")
                      );
                    }}
                  >
                    <td>{item.id}</td>
                    <td>{item.productNumber}</td>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.weight}</td>
                  </tr>
                );
              }.bind(this)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
