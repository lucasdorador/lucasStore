import { StateShoppingCart, ActionShoppingCart } from "./shoppingCart.types";

export const initialState: StateShoppingCart = {
  totalCart: 0,
};

const shoppingCart = (state = initialState, action: ActionShoppingCart) => {
  switch (action.type) {
    case "[Cart]CalculateTotal": {
      return {
        totalCart: 12,
      };
    }
    default:
      return state;
  }
};

export default shoppingCart;
