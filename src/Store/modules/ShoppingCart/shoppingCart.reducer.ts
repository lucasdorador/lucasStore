import {
  StateShoppingCart,
  ActionShoppingCart,
  InterfaceItemsCart,
} from "./shoppingCart.types";

export const initialState: StateShoppingCart = {
  totalCart: 0,
  itemsCart: [],
  itemSelected: {
    createdAt: "",
    id: "",
    image: "",
    name: "",
    price: "",
    stock: 0,
  },
};

const calculateTotalCart = (itemCart: InterfaceItemsCart[]) => {
  let _totalCart = 0;

  if (itemCart && itemCart.length > 0) {
    for (let item of itemCart) {
      _totalCart += parseFloat(item.price) * item.quantity;
    }
  }

  return _totalCart;
};

const shoppingCart = (state = initialState, action: ActionShoppingCart) => {
  switch (action.type) {
    case "[Cart]CalculateTotal": {
      let _totalCart = 0;

      if (state.itemsCart.length > 0) {
        for (let item of state.itemsCart) {
          _totalCart += parseFloat(item.price);
        }
      }

      return {
        totalCart: _totalCart,
      };
    }
    case "[Cart]AddNewItem": {
      let _itemsCart = state.itemsCart.length > 0 ? state.itemsCart : [];

      _itemsCart.push({
        ...action.payload,
      });

      return {
        ...state,
        totalCart: calculateTotalCart(_itemsCart),
        itemsCart: _itemsCart,
      };
    }
    case "[Cart]RemoveItem": {
      const _removeItem =
        state.itemsCart.length > 0
          ? state.itemsCart.filter((item: InterfaceItemsCart) => {
              return item.id !== action.id;
            })
          : [];

      return {
        ...state,
        totalCart: calculateTotalCart(_removeItem),
        itemsCart: _removeItem ? _removeItem : [],
      };
    }
    case "[Cart]AlterQuantity": {
      const _itemsCart = state.itemsCart;
      const _IndexItem = state.itemsCart.findIndex(
        (item: InterfaceItemsCart) => {
          return item.id === action.payload.id;
        }
      );

      if (_IndexItem !== -1) {
        _itemsCart[_IndexItem].quantity = action.payload.newQuantity;
      }

      return {
        ...state,
        totalCart: calculateTotalCart(_itemsCart),
        itemsCart: _itemsCart,
      };
    }
    case "[Cart]ItemSelected": {
      return {
        ...state,
        itemSelected: action.payload
          ? action.payload
          : initialState.itemSelected,
      };
    }
    default:
      return state;
  }
};

export default shoppingCart;
