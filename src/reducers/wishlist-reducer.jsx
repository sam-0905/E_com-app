
export const wishReducer = (state,action) => {

 switch (action.type) {
    case "ADD_TO_WISHLIST":
        return [...state, action.payload.id];

    case "REMOVE_FROM_WISHLIST":
      return state.filter(id=> id !== action.payload);

    default:
      return state;
  }

}
