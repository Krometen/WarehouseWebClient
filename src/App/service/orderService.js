import axios from "axios";
import { HOST } from "./constants";

export let getOrders = function () {
  return axios.get(HOST + "/get-orders");
};

export let postNewOrder = function (obj) {
  return axios.post(HOST + "/post-new-order", {
    orderNumber: obj.orderNumber,
    date: obj.date,
    address: obj.address,
    productIdList: obj.productIdList,
  });
};

export let deleteOrder = function (orderId) {
  return axios.delete(`${HOST}/delete-order?id=${orderId}`);
};
