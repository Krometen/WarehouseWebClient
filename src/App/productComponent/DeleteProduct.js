import React from "react";
import ReactDOM from "react-dom";
import ProductTable from "./ProductTable";
import { deleteProduct } from "../service/productService";
import { deleteProductNumber, back, remove } from "../service/constants";

class DeleteProduct extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {deleteProductNumber} {this.props.prodNum}?
                    <button
                        className={"back-button"}
                        onClick={() => {
                            console.log(this.props.orderId);
                            ReactDOM.render(
                                <ProductTable orderId={this.props.orderId} />,
                                document.getElementById("root")
                            );
                        }}
                    >
                        {back}
                    </button>
                    <button
                        className={"delete-button"}
                        onClick={() => {
                            deleteProduct(this.props.prodId).then(function () {
                                ReactDOM.render(
                                    <ProductTable orderId={this.props.orderId} />,
                                    document.getElementById("root")
                                );
                            }.bind(this));
                        }}
                    >
                        {remove}
                    </button>
                </p>
            </div>
        );
    }
}

export default DeleteProduct;
