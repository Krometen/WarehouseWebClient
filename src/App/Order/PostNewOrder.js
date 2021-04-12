import $ from "jquery";
import React from 'react';
import ReactDOM from "react-dom";
import OrderTable from "./OrderTable";


//localhost:8081/postNewOrder?date=01-02-21&address=novaya+STREET
class PostNewOrder extends React.Component {
    render() {
        return (
            <div style={{margin:'2em', marginLeft:'4em'}}>

                <button style={{backgroundColor:'#9ad4e4'}} onClick={()=>{
                    ReactDOM.render(<OrderTable/>, document.getElementById('root'))
                }}>НАЗАД</button>

                <button style={{backgroundColor:'#87e49a'}} onClick={()=>{
                    let newDate = $('#newDate').val()
                    let newAddress = $('#newAddress').val()
                    fetch(`http://localhost:8081/postNewOrder?date=${newDate}&address=${newAddress}`)
                        .then(()=>{ReactDOM.render(<OrderTable/>, document.getElementById('root'))})
                }}>СОХРАНИТЬ</button>

                <figure className="postNewOrderBox" style={{margin:'1em', marginLeft:'4em', marginTop:'30px'}}>

                    <p style={{fontSize: 'small',marginBottom:'25px'}}>Дата:
                        <input type="date" id="newDate"/>
                    </p>

                    <p style={{fontSize: 'small'}}>Адрес:
                        <input id="newAddress"/>
                    </p>

                </figure>
            </div>
        )
    }
}

export default PostNewOrder