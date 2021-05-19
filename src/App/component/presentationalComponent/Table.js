import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../../App/store/store";

/*
 * props:
 * headers: массив заголовков столбцов таблицы;
 * data: JSON данные;
 * renderOnClick: компонент, который будет рендериться при нажатии на запись таблицы;
 * sentProperties: массив с объектами для props, которые пойдут в компонент renderOnClick, где ключ - название свойства,
 * а значение - либо строка-название объекта из data, либо значение, если не строка.
 * */
export let Table = function (props) {
  let trFunction = function (props, item) {
    let send = {};
    props.sentProperties.forEach((property) => {
      let propName = Object.getOwnPropertyNames(property);
      let propReq = Object.values(property);
      if (typeof property[propName] !== "string") {
        send[propName] = property[propName];
      } else {
        send[propName] = item[propReq];
      }
    });
    ReactDOM.render(
      <Provider store={store}>
        {React.createElement(props.renderOnClick, send)}
      </Provider>,
      document.getElementById("root")
    );
  };

  return (
    <table>
      <tbody>
        {
          <tr>
            {props.headers.map((name, key) => {
              return <th key={key}>{name}</th>;
            })}
          </tr>
        }
      </tbody>
      <tbody>
        {props.data.map((item, key) => {
          return (
            <tr
              key={key}
              onClick={() => {
                trFunction(props, item);
              }}
            >
              {Object.values(item).map((name, key) => {
                return <td key={key}>{name}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
