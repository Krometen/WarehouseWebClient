import React from "react";
import ReactDOM from "react-dom";
import OrderTable from "../Order/OrderTable";
import PostNewProduct from "./PostNewProduct";
import DeleteProduct from "./DeleteProduct";
import axios from "axios";

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
    axios
      .get(
        `http://localhost:8080/getProducts?orderNumber=${this.props.orderId}`
      )
      .then((resp) => {
        this.setState({ data: resp.data });
      });
  }
  render() {
    return (
      <div>
        <figure className="ProductsBox">
          <p id={"orderNum"} style={{ fontSize: "large", marginLeft: "3em" }}>
            <strong>ПРОДУКТЫ ЗАКАЗА №{this.props.orderNum}</strong>
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
                axios
                  .delete(
                    `http://localhost:8080/deleteOrder?number=${this.props.orderId}`
                  )
                  .then(() => {
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
                  <PostNewProduct orderNum={this.props.orderNum} />,
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
              if (item.deleted !== true) {
                return (
                  <tr
                    key={key}
                    onClick={() => {
                      ReactDOM.render(
                        <DeleteProduct
                          prodNum={item.productNumber}
                          orderNum={item.orderNumber}
                        />,
                        document.getElementById("root")
                      );
                      console.log("pn " + item.productNumber);
                      console.log("on " + item.orderNumber);
                    }}
                  >
                    <td>{item.productNumber}</td>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.weight}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
