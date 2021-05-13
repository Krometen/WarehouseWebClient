import React from "react";
import ReactDOM from "react-dom";
import { postNewOrder } from "../service/orderService";
import OrderTable from "./OrderTable";

class PostNewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: " ", date: " ", address: " " };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      number: event.target.number,
      date: event.target.date,
      address: event.target.address,
    });
  }

  handleSubmit(event) {
    console.log(
      "new number: " +
        this.state.number +
        "\n" +
        "new date: " +
        this.state.date +
        "\n" +
        "new address: " +
        this.state.address
    );
    event.preventDefault();
  }

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
            postNewOrder({
              orderNumber: this.state.number,
              date: this.state.date,
              address: this.state.address,
            }).then(() => {
              ReactDOM.render(<OrderTable />, document.getElementById("root"));
            });
          }}
        >
          СОХРАНИТЬ
        </button>

        <figure className="post-box">
          <form onSubmit={this.handleSubmit}>
            <p>
              Номер:
              <input
                id="new-number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Дата:
              <input
                type="date"
                id="new-date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </p>
            <p style={{ fontSize: "small" }}>
              Адрес:
              <input
                id="new-address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </p>
          </form>
        </figure>
      </div>
    );
  }
}

export default PostNewOrder;
