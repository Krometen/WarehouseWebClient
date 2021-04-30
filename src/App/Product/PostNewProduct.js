import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ProductTable from "./ProductTable";

//localhost:8081/postNewProduct?productName=phone&price=20000&weight=200&orderNumber=1
class PostNewProduct extends React.Component {
    render() {
        return (
            <div style={{margin:'2em', marginLeft:'4em'}}>

                <button style={{backgroundColor:'#9ad4e4'}} onClick={()=>{
                    ReactDOM.render(<ProductTable orderNum={this.props.orderNum}/>
                        , document.getElementById('root'))
                }}>НАЗАД</button>

                <button style={{backgroundColor:'#87e49a'}} onClick={()=>{
                    let newName = $('#newName').val()
                    let newPrice = $('#newPrice').val()
                    let newWeight = $('#newWeight').val()
            fetch('http://localhost:8081/postNewProduct',{
                method:'POST',
                        headers:{
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            productName:newName,
                            price:newPrice,
                            weight:newWeight, 
                            orderNumber:this.props.orderNum
                        })
            })
                        .then(()=>{ReactDOM.render(<ProductTable orderNum={this.props.orderNum}/>
                            , document.getElementById('root'))})
                }}>СОХРАНИТЬ</button>

                <figure className="postNewProductBox" style={{margin:'1em', marginLeft:'4em', marginTop:'30px'}}>

                    <p style={{fontSize: 'small', marginBottom:'25px'}}>Имя:
                        <input id="newName"/>
                    </p>

                    <p style={{fontSize: 'small', marginBottom:'25px'}}>Цена:
                        <input id="newPrice"/>
                    </p>

                    <p style={{fontSize: 'small', marginBottom:'25px'}}>Вес:
                        <input id="newWeight"/>
                    </p>

                </figure>
            </div>
        )
    }
}

export default PostNewProduct