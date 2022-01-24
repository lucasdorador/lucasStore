import { InterfaceListProducts } from "../../../screens/Home/ListProducts/homeListProducts.types";
import { ActionProducts, StateProducts } from "./products.types";

export const initialState: StateProducts = {
  items: [],
};

const products = (state = initialState, action: ActionProducts) => {
  switch (action.type) {
    case "[Products]GetAll": {
      return {
        ...state,
        items: action.payload,
      };
    }
    case "[Products]Search": {
      const _newItems = state.items.filter((el: InterfaceListProducts) => {
        console.log(el.name.toLowerCase());
        return el.name.toLowerCase().includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        items: _newItems,
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
