import React from "react";
import ReactDOM from "react-dom";
import { postNewOrder } from "../service/orderService";
import OrderTable from "./OrderTable";

import {
    back,
    save,
    number,
    date,
    address,
    productIdList,
} from "../service/constants";

class PostNewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { orderNumber: "", date: "", address: "", productIdList: "" };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
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
                    {back}
                </button>

                <button
                    id={"save-button"}
                    onClick={() => {
                        postNewOrder({
                            orderNumber: this.state.orderNumber,
                            date: this.state.date,
                            address: this.state.address,
                            productIdList: this.state.productIdList.split(","),
                        }).then(() => {
                            ReactDOM.render(<OrderTable />, document.getElementById("root"));
                        });
                    }}
                >
                    {save}
                </button>

                <figure className="post-box">
                    <p>
                        {number}:
                        <input
                            name="orderNumber"
                            value={this.state.orderNumber}
                            onChange={this.handleInputChange}
                        />
                    </p>
                    <p>
                        {date}:
                        <input
                            name="date"
                            type="date"
                            value={this.state.date}
                            onChange={this.handleInputChange}
                        />
                    </p>
                    <p style={{ fontSize: "small" }}>
                        {address}:
                        <input
                            name="address"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                        />
                    </p>
                    <p style={{ fontSize: "small" }}>
                        {productIdList}:
                        <input
                            name="productIdList"
                            value={this.state.productIdList}
                            onChange={this.handleInputChange}
                        />
                    </p>
                </figure>
            </div>
        );
    }
}

export default PostNewOrder;