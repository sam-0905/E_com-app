import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";

const CartContext = createContext(" ")

const CartProvider = ({children}) => {
    const [state ,dispatch] = useReducer(cartReducer , {quantity: 0,
        totalPrice: 0,
        items: [],}) 
    return (<CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>)
}

const useCart = () =>useContext(CartContext)

export {CartProvider, useCart}