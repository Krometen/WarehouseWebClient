import React from "react";

//пропсы: айди хэдеров, массив со столбцами, онклик
//arr clickAction
export let Table = function (props) {
  return (
    <table>
      <tbody>
        <tr>
          {() => {
            for (let index = 0; index < props.arr.length; index++) {
              return <td className={"headerClass"}>{props.arr[index]}</td>;
            }
          }}
        </tr>
      </tbody>
      {/* eslint-disable-next-line array-callback-return */}
      <tbody>
        {props.data.map(function (item, key) {
          return (
            <tr key={key} onClick={props.clickAction}>
              {() => {
                for (let index = 0; index < props.arr.length; index++) {
                  return <td>{item.props.arr[index]}</td>;
                }
              }}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
