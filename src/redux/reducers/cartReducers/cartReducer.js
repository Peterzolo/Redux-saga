import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS,
} from "../../constants/cart-constant";

const initialState = {
  cart: "",
  loading: false,
  error: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: false,
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
