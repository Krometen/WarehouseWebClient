import React from "react";
import ReactDOM from "react-dom";
import OrderTable from "../orderComponent/OrderTable";
import PostNewProduct from "./PostNewProduct";
import DeleteProduct from "./DeleteProduct";
import { getProducts } from "../service/productService";
import { deleteOrder } from "../service/orderService";

class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  rend() {
    ReactDOM.render(<ProductTable />, document.getElementById("root"));
  }
  componentDidMount() {
    getProducts(this.props.orderId).then((resp) => {
      this.setState({ data: resp.data });
    });
  }
  render() {
    return (
      <div>
        <figure className="ProductsBox">
          <p id={"orderId"} style={{ fontSize: "large", marginLeft: "3em" }}>
            <strong>ПРОДУКТЫ ЗАКАЗА №{this.props.orderId}</strong>
          </p>
          <figure style={{ marginLeft: "9.5em", marginTop: "3em" }}>
            <button
              id="addProduct"
              style={{ backgroundColor: "darkblue", color: "whitesmoke" }}
              onClick={() => {
                ReactDOM.render(
                  <OrderTable />,
                  document.getElementById("root")
                );
              }}
            >
              НАЗАД
            </button>
            <button
              id="addProduct"
              style={{ backgroundColor: "red", color: "whitesmoke" }}
              onClick={() => {
                deleteOrder(this.props.orderId).then(() => {
                  ReactDOM.render(
                    <OrderTable />,
                    document.getElementById("root")
                  );
                });
              }}
            >
              УДАЛИТЬ ЗАКАЗ
            </button>
            <button
              id="addProduct"
              style={{ backgroundColor: "#6b957c", color: "whitesmoke" }}
              onClick={() => {
                ReactDOM.render(
                  <PostNewProduct orderId={this.props.orderId} />,
                  document.getElementById("root")
                );
              }}
            >
              ДОБАВИТЬ ТОВАР
            </button>
          </figure>
        </figure>
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  backgroundColor: "#92c492",
                  position: "relative",
                  color: "black",
                }}
              >
                PRODUCT NUMBER
              </td>
              <td
                style={{
                  backgroundColor: "#92c492",
                  position: "relative",
                  color: "black",
                }}
              >
                PRODUCT NAME
              </td>
              <td
                style={{
                  backgroundColor: "#92c492",
                  position: "relative",
                  color: "black",
                }}
              >
                PRICE
              </td>
              <td
                style={{
                  backgroundColor: "#92c492",
                  position: "relative",
                  color: "black",
                }}
              >
                WEIGHT
              </td>
            </tr>
          </tbody>
          {/* eslint-disable-next-line array-callback-return */}
          <tbody>
            {this.state.data.map(function (item, key) {
              return (
                <tr
                  key={key}
                  onClick={() => {
                    ReactDOM.render(
                      <DeleteProduct
                        prodNum={item.productNumber}
                        prodId={item.id}
                        orderNum={item.orderNumber}
                      />,
                      document.getElementById("root")
                    );
                  }}
                >
                  <td>{item.productNumber}</td>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.weight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
