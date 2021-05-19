import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./App/store/store";
import { COMPONENT_ORDER_TABLE_WRAP } from "./App/component/wrapComponent/ComponentOrderTable_wrap";

ReactDOM.render(
  <Provider store={store}>
    <COMPONENT_ORDER_TABLE_WRAP />
  </Provider>,
  document.getElementById("root")
);
