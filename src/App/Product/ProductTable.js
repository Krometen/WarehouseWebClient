import $ from "jquery"
import React from 'react'
import ReactDOM from "react-dom"
import OrderTable from "../Order/OrderTable"
import PostNewProduct from "./PostNewProduct"
import DeleteProduct from "./DeleteProduct"


//localhost:8081/getProducts?order=4
class ProductTable extends React.Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    rend(){
        ReactDOM.render(<ProductTable />, document.getElementById('root'))
    }
    componentDidMount() {
        $.ajax({
            url: `http://localhost:8081/getProducts?order=${this.props.orderNum}`,
            type: "GET",
            dataType: 'json',
            ContentType: 'application/json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(jqXHR) {
                console.log(jqXHR);
            }.bind(this)
        })
    }
    render() {
        return (
            <div>
                <figure className="ProductsBox">
                    <p id={'orderNum'} style={{fontSize: 'large', marginLeft: '3em'}}>
                        <strong>ПРОДУКТЫ ЗАКАЗА №{this.props.orderNum}</strong></p>
                    <figure style={{marginLeft:'9.5em', marginTop:'3em'}}>
                        <button id="addProduct" style={{backgroundColor:'darkblue', color: 'whitesmoke'}} onClick={()=>{
                            ReactDOM.render(<OrderTable/>, document.getElementById('root'))
                        }}>НАЗАД
                        </button>
                        <button id="addProduct" style={{backgroundColor:'red', color: 'whitesmoke'}} onClick={()=>{
                            fetch(`http://localhost:8081/deleteOrder?number=${this.props.orderNum}`).then(()=>{
                                ReactDOM.render(<OrderTable/>, document.getElementById('root'))
                            })
                        }}>УДАЛИТЬ ЗАКАЗ
                        </button>
                        <button id="addProduct" style={{backgroundColor:'#6b957c', color: 'whitesmoke'}} onClick={()=>{
                            ReactDOM.render(<PostNewProduct orderNum={this.props.orderNum} />, document.getElementById('root'))
                        }}>ДОБАВИТЬ ТОВАР
                        </button>
                    </figure>
                </figure>
                <table>
                    <tbody>
                    <tr>
                        <td style={{backgroundColor:'#92c492',position: 'relative',color:"black"}}>НАИМЕНОВАНИЕ ТОВАРА</td>
                        <td style={{backgroundColor:'#92c492',position: 'relative',color:"black"}}>ЦЕНА</td>
                        <td style={{backgroundColor:'#92c492',position: 'relative',color:"black"}}>ВЕС</td>
                    </tr>
                    </tbody>
                    {/* eslint-disable-next-line array-callback-return */}
                    <tbody>{this.state.data.map(function(item, key) {
                        if(item.deleted!==true){
                            return (
                                <tr key = {key} onClick={()=>{
                                   ReactDOM.render(<DeleteProduct prodNum={item.productNumber} orderNum={item.orderNumber}/>,
                                        document.getElementById('root'))
                                    console.log("pn "+item.productNumber)
                                    console.log('on '+item.orderNumber)
                                }}>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight}</td>
                                </tr>
                            )
                        }
                    })}</tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable