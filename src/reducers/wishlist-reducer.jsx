
export const wishReducer = (state,action) => {

 switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (!state.wishlist.some((item) => item.id === action.payload.id)) {
        const updatedWishlist = [...state.wishlist, action.payload];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return { wishlist: updatedWishlist };
      }
      return state;

    case "REMOVE_FROM_WISHLIST":
      const filteredWishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      return { wishlist: filteredWishlist };

    default:
      return state;
  }

}
