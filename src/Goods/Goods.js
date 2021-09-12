
import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Goods.css';

class Goods extends React.Component {


    render() {
        let item = this.props.goods
        return (
            <div className="card">
                <div className="img-block">
                    <img src={item.image} alt=""></img>
                </div>
                <div className="card-body">
                    <p className="price">${item.cost}</p>
                    <button className="add-to-cart" data-art={item.articul}><span className="cart-img"></span>To cart</button>
                </div>
            </div>
        );
    }
}

export default Goods;
