
import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Cart.css';
import goods from "../goods.json"

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')),
            sum: 0,
        };
        this.total = 0;;
    }

    drawItem(articul) {
        // let total = this.total;
        for (let elem of goods) {
            if (articul === elem.articul) {
                this.total += parseFloat(elem.cost);
                console.log(this.total);
                return (
                    <tr key={articul}>
                        <td>{elem.title}</td>
                        <td><img src={elem.image} alt=''></img></td>
                        <td>{this.state.cart[articul]}</td>
                        <td>{elem.cost}</td>
                        <td>{elem.cost * this.state.cart[articul]}</td>
                        <td><button className="deleteItem" data-art={articul}>Delete item</button></td>
                    </tr>
                );
            }
        }


    }
    drawTable = (cart) => {
        console.log(cart);
        this.total = 0;
        return Object.keys(cart).map(key => {
            return (
                this.drawItem(key)
            );
        });
    }
    deleteItem = (event) => {
        if (event.target.classList.contains("deleteItem")) {
            let articul = event.target.dataset.art;
            let newCart = this.state.cart;

            if (newCart[articul] === 1) delete newCart[articul];
            else newCart[articul]--;
            localStorage.setItem('cart', JSON.stringify(newCart));
            this.setState({ cart: newCart });
        }

    }
    render() {
        let cart = this.state.cart;
        console.log(this.state.cart);

        if (cart !== null && cart !== undefined && this.state.cart !== {})
            return (
                <div>
                    <h2>Cart..</h2>
                    <table >
                        <tbody onClick={this.deleteItem}>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price x1</th>
                                <th>Total</th>
                            </tr>
                            {

                                this.drawTable(cart)
                            }
                            <tr><td>Total:</td><td>{this.total}</td></tr>
                        </tbody>
                    </table>
                </div >
            );
        else if (cart === {})
            return (<h2>Cart..</h2>
            );
        else return (<div>
            <h2>Cart..</h2>
        </div>);
    }
}

export default Cart;
