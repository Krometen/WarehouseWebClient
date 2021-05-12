import React from "react";
import ReactDOM from "react-dom";
import PostNewOrder from "./PostNewOrder";
import ProductTable from "../productComponent/ProductTable";
import { getOrders } from "../service/orderService";

class OrderTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    getOrders().then((resp) => {
      this.setState({ data: resp.data });
    });
  }
  render() {
    return (
      <div>
        <figure className="OrdersBox">
          <p style={{ fontSize: "large", marginLeft: "1ex" }}>
            <strong>ЗАКАЗЫ</strong>
            <button
              id="addOrder"
              style={{
                backgroundColor: "#6b957c",
                color: "whitesmoke",
                marginTop: "1em",
                marginLeft: "4.5em",
                marginBottom: "0.5em",
              }}
              onClick={() => {
                ReactDOM.render(
                  <PostNewOrder />,
                  document.getElementById("root")
                );
              }}
            >
              ДОБАВИТЬ ЗАКАЗ
            </button>
          </p>
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
                NUMBER
              </td>
              <td
                style={{
                  backgroundColor: "#92c492",
                  position: "relative",
                  color: "black",
                }}
              >
                DATE
              </td>
              <td
                style={{
                  backgroundColor: "#92c492",
                  position: "relative",
                  color: "black",
                }}
              >
                ADDRESS
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
                      <ProductTable orderId={item.id} />,
                      document.getElementById("root")
                    );
                  }}
                >
                  <td>{item.orderNumber}</td>
                  <td>{item.date}</td>
                  <td>{item.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderTable;
