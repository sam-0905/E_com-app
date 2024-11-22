import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"
import { CartProvider } from './Context/Cart-Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <Router>
    <App />
    </Router> 
    </CartProvider>
  </React.StrictMode>,
)
