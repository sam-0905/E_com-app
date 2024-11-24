import { createContext, useContext, useReducer } from "react";
import { wishReducer } from "../reducers/wishlist-reducer";


const wishContext = createContext();

const initialState = {
   wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
 };

const wishlistProvider = ({ children }) => {

const [state,dispatch] = useReducer(wishReducer ,initialState)

   return (<wishContext.Provider value={{state,dispatch}}>{children}</wishContext.Provider>) 
}

const useWish = () => useContext(wishContext)

export{ useWish,wishlistProvider}