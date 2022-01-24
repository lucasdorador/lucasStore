import api from "../../../services/api";
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
    default: {
      return state;
    }
  }
};

export default products;
