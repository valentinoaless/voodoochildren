import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing.js';
import Lookbook from './lookbook/lookbook.js';
import Products from './shop/products.js';
import ProductPage from './shop/productpage.js';
import Cart from './shop/cart/cart.js';

function App() {

  let [cart, setCart] = useState([]);

  return (
    <div>
      <Switch>
        <Route exact path='/' render={(props) => <Landing {...props}/>} />
        <Route exact path='/lookbook' render={(props) => <Lookbook {...props}/>} />
        <Route exact path='/products' render={(props) => <Products {...props} cart={cart} setCart={setCart} /> }  />
        <Route exact path='/products/:productName' render={(props) => <ProductPage {...props} cart={cart} setCart={setCart}   /> } />
        <Route exact path='/cart' render={(props) => <Cart {...props} cart={cart} setCart={setCart} />}   />
      </Switch>
    </div>
  );
}

export default App;







