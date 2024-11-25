import React from "react";
import { useCart } from "../Context/Cart-Context";
import "../Cart/cart.css"
import EmptyCart from "../assets/icons/EmptyCart.png";
import 'animate.css';


const Cart = () => {
  const {state,dispatch} = useCart();
  const { cartItems,totalPrice,quantity } = state;

  return (    
    <>
    <div className="cart">
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, name, price, quantity ,image}) => (
          <div key={id} className="cart-card">
              <img src={image}></img>
              <h2>{name}</h2>
               <p className="price">Price: ${price}</p>
               <p className="quantity">Quantity: {quantity}</p>
               <hr />
               <button className="button-32" onClick={()=> dispatch({type:"ADD_TO_CART", payload:{id,price}})}>+</button>
              <button className="button-32" onClick={() =>dispatch({ type:'REMOVE_FROM_CART',payload:{id,price}})}>-</button>
              <button className="button-32" onClick={() =>dispatch({ type:"DELETE_FROM_CART",payload:{id,price}})}><i class="fa fa-trash-o" style={{fontSize:"16px"}}></i>
              </button>
              
          </div>
          ))
        ) :( <h1> <img src={EmptyCart} alt="cart-icon" className="empty-cart animate__animated animate__fadeInLeft"  /><span className="text">Your cart is empty!</span></h1> )}
        
      </div>
    </div>
  </>       
  )
}

  

export default Cart;




  
   