import { createContext, useContext, useReducer,useEffect } from "react";
import { wishReducer } from "../reducers/wishlist-reducer";


const WishContext = createContext();

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];
 

const WishListProvider = ({ children }) => {

const [wishlist,andFunctionSetWishlist] = useReducer(wishReducer,initialState);

useEffect(() => {
   localStorage.setItem("wishlist", JSON.stringify(wishlist));
 }, [wishlist]);

   return (<WishContext.Provider value={{wishlist,andFunctionSetWishlist}}>{children}</WishContext.Provider>) 
}


const useWish = () => useContext(WishContext);

export{ useWish,WishListProvider}