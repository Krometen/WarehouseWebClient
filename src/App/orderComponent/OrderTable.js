import React from "react";
import ReactDOM from "react-dom";
import PostNewOrder from "./PostNewOrder";
import { getOrders } from "../service/orderService";
import ProductTable from "../productComponent/ProductTable";
import {
  orders,
  addOrder,
  id,
  number,
  date,
  address,
} from "../service/constants";

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
            <strong>{orders}</strong>
            <button
              id="add-order"
              onClick={() => {
                ReactDOM.render(
                  <PostNewOrder />,
                  document.getElementById("root")
                );
              }}
            >
              {addOrder}
            </button>
          </p>
        </figure>
        <table>
          <tbody>
            <tr>
              <td className={"td-headers"}>{id}</td>
              <td className={"td-headers"}>{number}</td>
              <td className={"td-headers"}>{date}</td>
              <td className={"td-headers"}>{address}</td>
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
                  <td>{item.id}</td>
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
