import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import PostNewOrder from "./PostNewOrder";
import ProductTable from "../Product/ProductTable";

//localhost:8081/getOrders
class OrderTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    $.ajax({
      url: "http://localhost:8081/getOrders",
      type: "GET",
      dataType: "json",
      ContentType: "application/json",
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (jqXHR) {
        console.log(jqXHR);
      }.bind(this),
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
              if (item.deleted !== true) {
                return (
                  <tr
                    key={key}
                    onClick={() => {
                      ReactDOM.render(
                        <ProductTable orderNum={item.orderNumber} />,
                        document.getElementById("root")
                      );
                    }}
                  >
                    <td>{item.orderNumber}</td>
                    <td>{item.date}</td>
                    <td>{item.address}</td>
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

export default OrderTable;
