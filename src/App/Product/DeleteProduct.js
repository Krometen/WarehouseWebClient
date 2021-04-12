import React from "react";
import ReactDOM from "react-dom";
import ProductTable from "./ProductTable";


//localhost:8081/deleteProduct?number=3
class DeleteProduct extends React.Component {
    render() {
        return(
            <div>
            <p>Удалить товар номер {this.props.prodNum}? <button style={{backgroundColor:"#9ad4e4"}} onClick={()=>{
                ReactDOM.render(<ProductTable orderNum={this.props.orderNum}/>
                , document.getElementById('root'))
            }}>НАЗАД
            </button><button style={{backgroundColor:"#f2805c"}} onClick={()=>{
                fetch(`http://localhost:8081/deleteProduct?number=${this.props.prodNum}`).then(()=>{
                    ReactDOM.render(<ProductTable orderNum={this.props.orderNum}/>, document.getElementById('root'))
                })
            }
            }>УДАЛИТЬ</button></p>
            </div>
        )
    }
}

export default DeleteProduct