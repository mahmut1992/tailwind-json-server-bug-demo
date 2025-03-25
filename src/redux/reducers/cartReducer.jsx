import actionTypes from "../actionType";
const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };
    case actionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };
    case actionTypes.CREATE_ITEM_:
      return { ...state, cart: state.cart.concat(action.payload) };
    case actionTypes.UPDATE_ITEM:
      const updated = state.cart.map((i) =>
        i.id == action.payload.id ? action.payload : i
      );
      return { ...state, cart: updated };
    case actionTypes.DELETE_ITEM:
      const fitred = state.cart.filter((i) => i.id !== payload);
      return { ...state, cart: fitred };
    default:
      return state;
  }
};
export default cartReducer;
