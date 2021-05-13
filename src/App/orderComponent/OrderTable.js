import React from "react";
import ReactDOM from "react-dom";
import PostNewOrder from "./PostNewOrder";
import { getOrders } from "../service/orderService";
import ProductTable from "../productComponent/ProductTable";

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
        <figure className="orders-box">
          <p id={"order-header"}>
            <strong>ЗАКАЗЫ</strong>
            <button
              id="add-order"
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
              <td className={"td-headers"}>NUMBER</td>
              <td className={"td-headers"}>DATE</td>
              <td className={"td-headers"}>ADDRESS</td>
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
