import axios from "axios";
import { host } from "./constants";

export let getOrders = function () {
  return axios.get(host + "/get-orders");
};

export let postNewOrder = function (obj) {
  return axios.post(host + "/post-new-order", {
    orderNumber: obj.orderNumber,
    date: obj.date,
    address: obj.address,
    productIdList: obj.productIdList,
  });
};

export let deleteOrder = function (orderId) {
  axios.delete(`${host}/delete-order?id=${orderId}`);
};
