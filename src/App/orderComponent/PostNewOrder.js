import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { postNewOrder } from "../service/orderService";
import OrderTable from "./OrderTable";

class PostNewOrder extends React.Component {
  render() {
    return (
      <div className={"post-div"}>
        <button
          className={"back-button"}
          onClick={() => {
            ReactDOM.render(<OrderTable />, document.getElementById("root"));
          }}
        >
          НАЗАД
        </button>
        <button
          id={"save-button"}
          onClick={() => {
            let newNumber = $("#new-number").val();
            let newDate = $("#new-date").val();
            let newAddress = $("#new-address").val();
            postNewOrder({
              orderNumber: newNumber,
              date: newDate,
              address: newAddress,
            }).then(() => {
              ReactDOM.render(<OrderTable />, document.getElementById("root"));
            });
          }}
        >
          СОХРАНИТЬ
        </button>

        <figure className="post-box">
          <p>
            Номер:
            <input id="new-number" />
          </p>
          <p>
            Дата:
            <input type="date" id="new-date" />
          </p>
          <p style={{ fontSize: "small" }}>
            Адрес:
            <input id="new-address" />
          </p>
        </figure>
      </div>
    );
  }
}

export default PostNewOrder;
