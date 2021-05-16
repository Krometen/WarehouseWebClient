import React from "react";
import ReactDOM from "react-dom";
import OrderTable from "../orderComponent/OrderTable";
import PostNewProduct from "./PostNewProduct";
import DeleteProduct from "./DeleteProduct";
import { getProducts } from "../service/productService";
import { deleteOrder } from "../service/orderService";
import {
  addProduct,
  back,
  id,
  nameString,
  number,
  price,
  productsOfOrder,
  removeOrder,
  weight,
} from "../service/constants";
import {Table} from "../presentationalComponent/Table";

class ProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    getProducts(this.props.orderId).then((resp) => {
      this.setState({ data: resp.data });
    });
  }
  render() {
    return (
        <div>
          <figure>
            <p id={"order-id"}>
              <strong>
                {productsOfOrder}
                {this.props.orderId}
              </strong>
            </p>
            <figure id={"product-table"}>
              <button
                  className={"back-button"}
                  onClick={() => {
                    ReactDOM.render(
                        <OrderTable />,
                        document.getElementById("root")
                    );
                  }}
              >
                {back}
              </button>
              <button
                  className={"delete-button"}
                  onClick={() => {
                    deleteOrder(this.props.orderId).then(() => {
                      ReactDOM.render(
                          <OrderTable />,
                          document.getElementById("root")
                      );
                    });
                  }}
              >
                {removeOrder}
              </button>
              <button
                  className={"add-button"}
                  onClick={() => {
                    ReactDOM.render(
                        <PostNewProduct orderId={this.props.orderId} />,
                        document.getElementById("root")
                    );
                  }}
              >
                {addProduct}
              </button>
            </figure>
          </figure>
          <Table
              headers={[id, number, nameString, price, weight]}
              data={this.state.data}
              renderOnClick={DeleteProduct}
              sentProperties={[{prodNum:'productNumber'}, {prodId:'id'}, {orderId:this.props.orderId}]}
          />
        </div>
    );
  }
}

export default ProductTable;
