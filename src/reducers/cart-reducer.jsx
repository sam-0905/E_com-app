export function cartFunc(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          quantity: state.quantity + 1,
          totalPrice: state.totalPrice + action.payload,
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          quantity: state.quantity - 1,
          totalPrice: state.totalPrice - action.payload,
        };
      default:
        return state;
    }
  }
  