import { combineReducers } from "redux";
import shoppingCart from "./ShoppingCart/shoppingCart.reducer";
import products from "./Products/products.reducer";

export default combineReducers({
  shoppingCart,
  products,
});
