import React from "react";
import ReactDOM from "react-dom";
import PostNewOrder from "./PostNewOrder";
import { getOrders } from "../service/orderService";
import ProductTable from "../productComponent/ProductTable";
import { Table } from "../presentationalComponent/Table";
import {
    orders,
    addOrder,
    id,
    number,
    date,
    address,
} from "../service/constants";

class OrderTable extends React.Component {
    constructor(props) {
        super(props);
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
                <Table
                    headers={[id, number, date, address]}
                    data={this.state.data}
                    renderOnClick={ProductTable}
                    sentProperties={[{orderId:'id'}]}
                />
            </div>
        );
    }
}

export default OrderTable;