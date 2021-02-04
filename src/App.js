import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import { useEffect, useReducer } from 'react';
import {cartReducer} from "./context/reducer.js";
import CartContext from './context/cartContext';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  const [cart_count, dispatch] = useReducer(cartReducer, 0);

  useEffect(() => {
      localStorage.setItem("cartData" , "[]");
  },[])

  const addToCart = (item) => {
    const data = JSON.parse(localStorage.getItem('cartData'));
    localStorage.setItem('cartData' , JSON.stringify([...data, item]));
  }

  const removeFromCart = (id) => {
    const data = JSON.parse(localStorage.getItem('cartData'))
    localStorage.setItem('cartData' , JSON.stringify(data.filter(item => item.id != id)));
  }

  return (
      <div className="App">
        <Router>
          <Switch>
            <CartContext.Provider value = {{cart_count, dispatch, addToCart, removeFromCart}}>
              <Route exact path = "/" component = {Products} />
              <Route path = "/cart" component = {Cart} />
            </CartContext.Provider>
          </Switch> 
        </Router>
      </div>
    
  );
}

export default App;
