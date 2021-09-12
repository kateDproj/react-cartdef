// is the main app, will be a place to list the goods
// goods will be listed with calling Goods class
//will navigate to the cart page
// Cart is rendered by Cart class
//Cart.js, Goods.js, App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './Main/Main';
import Cart from './Cart/Cart';


class App extends React.Component {


  render() {
    return (

      <div className="container">
        <header>
          <h1>React Veggies</h1>
          {/* <h4>Eat vegetables</h4> */}
          <nav>
            <ul>
              <li><a href="/">Main</a></li>
              <li><a href="/to-cart">Cart</a></li>
            </ul>
          </nav>
        </header>

        {/*  */}
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/to-cart" component={Cart} />
          </Switch>
        </Router>

      </div >
    );
  }
}

export default App;
