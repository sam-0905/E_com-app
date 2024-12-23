import { createContext, useContext, useReducer } from "react";
import { cartRedFunc } from './../reducers/cart-reducer';

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [state ,dispatch] = useReducer( cartRedFunc, { cartItems: [],quantity: 0,
        totalPrice: 0,}) 

    return <CartContext.Provider value={{state,dispatch}}>{ children }</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export {CartProvider, useCart}