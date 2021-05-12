import axios from "axios";
import host from "./host";

export let getOrders = function () {
  return axios.get(host + "/get-orders");
};

export let postNewOrder = function (obj) {
  console.log(obj.address);
  return axios.post(host + "/post-new-order", {
    orderNumber: obj.orderNumber,
    date: obj.date,
    address: obj.address,
  });
};

export let deleteOrder = function (orderId) {
  axios.delete(`${host}/delete-order?id=${orderId}`);
};
