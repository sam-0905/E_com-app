import data from "../utils/Constant";
import CartItem from "../Cart/CartItem";
import { useState } from "react";

const Cart = () => {

    

   return (
    <>
    <h1>cart</h1>
    {data.length < 0 ? <h2>Your cart is empty</h2> : data.map((item)=>{
        <div>{item.name}</div>
    })}
  
    </>
   )
}

export default Cart;