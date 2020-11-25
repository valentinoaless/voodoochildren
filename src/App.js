import logo from './logo.svg';
import './App.css';
import Landing from './landing/landing.js'
import Lookbook from './lookbook/lookbook.js';
import Shop from './shop/shop.js';
import Products from './shop/products.js'
import { Switch, Route } from 'react-router-dom';
import userdata from './userData/userData.json';
import ProductPage from './shop/productpage.js';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' render={(props) => <Landing {...props}/>} />
      <Route exact path='/lookbook' render={(props) => <Lookbook {...props}/>} />
      <Route exact path='/products' render={(props) => <Products {...props} /> } />
      <Route exact path='/products/:productName' render={(props) => <ProductPage {...props} /> } />
    </Switch>
    </div>
  );
}

export default App;







