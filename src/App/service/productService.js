import axios from "axios";
import { host } from "./constants";

export let deleteProduct = function (prodId) {
  return axios.delete(`${host}/delete-product?id=${prodId}`);
};

export let postNewProduct = function (obj) {
  return axios.post(host + "/post-new-product", {
    productNumber: obj.productNumber,
    productName: obj.productName,
    price: obj.price,
    weight: obj.weight,
    orderNumber: obj.orderNumber,
  });
};

export let getProducts = function (orderId) {
  return axios.get(`${host}/get-products?orderId=${orderId}`);
};