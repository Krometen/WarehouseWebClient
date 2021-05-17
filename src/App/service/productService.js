import axios from "axios";
import { HOST } from "./constants";

export let deleteProduct = function (prodId) {
  return axios.delete(`${HOST}/delete-product?id=${prodId}`);
};

export let postNewProduct = function (obj) {
  return axios.post(HOST + "/post-new-product", {
    productNumber: obj.productNumber,
    productName: obj.productName,
    price: obj.price,
    weight: obj.weight,
    orderNumber: obj.orderNumber,
  });
};

export let getProducts = function (orderId) {
  return axios.get(`${HOST}/get-products?orderId=${orderId}`);
};
