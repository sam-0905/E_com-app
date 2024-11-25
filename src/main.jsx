import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"
import { CartProvider } from './Context/Cart-Context';
import { WishListProvider } from './Context/wishlist-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishListProvider>
    <CartProvider>
    <Router>
    <App/>
    </Router> 
    </CartProvider>
    </WishListProvider>
  </React.StrictMode>,
)
