import React from 'react';
import { useWish } from '../Context/wishlist-context';
import data from "../utils/Constant.jsx"

const WishlistItem = () => {

    const {andFunctionSetWishlist} = useWish();

    return (
        <>
        <div>
            {data.map(({name,id,price}) => (
                   <div key={id} className="cart-card">
                   <img src={image}></img>
                   <h2>{name}</h2>
                   <p className="price">Price: ${price}</p>

                   <button className="button-32" onClick={()=> andFunctionSetWishlist({type:"ADD_TO_WISHLIST", payload:{id}})}>+</button>
                   <button className="button-32" onClick={() =>andFunctionSetWishlist({ type:"REMOVE_FROM_WISHLIST",payload:{id}})}>-</button>
                 </div>
            ))}
        </div>
        </>
    );
};

export default WishlistItem;