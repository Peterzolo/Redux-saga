import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers/cartReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
});
