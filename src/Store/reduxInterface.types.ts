import { StateProducts } from "./modules/Products/products.types";
import { StateShoppingCart } from "./modules/ShoppingCart/shoppingCart.types";

export interface InterfaceSelectorRedux {
  shoppingCart: StateShoppingCart;
  products: StateProducts;
}
