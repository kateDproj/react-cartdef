
import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Main.css';
import Goods from '../Goods/Goods';
import goods from "../goods.json"
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {}
        }
    }


    addToCart = (event) => {
        if (event.target.classList.contains("add-to-cart")) {
            console.log('add');
            let articul = event.target.dataset.art
            let cart = JSON.parse(localStorage.getItem('cart'));

            if (cart === null) {
                cart = {};
                cart[articul] = 1;
            }
            else if (cart != null && cart[articul] === undefined) {
                cart[articul] = 1;
            }
            else {
                console.log('cart is');
                cart[articul]++;
            }
            cart = JSON.stringify(cart);
            localStorage.setItem('cart', cart);
            console.log(cart);
        }

    }
    render() {

        return (
            <div>
                <h2>Organic fruits and vegetables</h2>
                <div className="container">
                    <div className="row" onClick={this.addToCart}>
                        {
                            goods.map(item => {
                                return <Goods goods={item} key={item.articul}></Goods>
                            })
                        }
                    </div>


                </div>

            </div >
        );
    }
}

export default Main;
