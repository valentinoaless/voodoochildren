import logo from './logo.svg';
import './App.css';
import Landing from './landing/landing.js'
import Lookbook from './lookbook/lookbook.js';
import Shop from './shop/shop.js';
import Products from './shop/products.js'
import { Switch, Route } from 'react-router-dom';
import userdata from './userData/userData.json';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' render={(props) => <Landing {...props}/>} />
      <Route exact path='/shop' render={(props) => <Shop {...props}/>} />
      <Route exact path='/about' render={(props) => <Lookbook {...props}/>} />
      <Route exact path='/products' render={(props) => <Products {...props} /> } />
    </Switch>
    </div>
  );
}

export default App;







