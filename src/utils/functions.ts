import { InterfaceListProducts } from "../screens/Home/ListProducts/homeListProducts.types";
import { InterfaceItemsCart } from "../Store/modules/ShoppingCart/shoppingCart.types";

export const functionValidProductInCart = (
  prod: InterfaceListProducts,
  itemsInCart: InterfaceItemsCart[]
) => {
  let result = {
    isProductInCart: false,
    quantityProduct: 0,
  };

  if (itemsInCart.length > 0) {
    const _filter = itemsInCart.filter(
      (item: InterfaceItemsCart) => item.id === prod.id
    );

    if (_filter.length > 0) {
      result = {
        isProductInCart: true,
        quantityProduct: _filter[0].quantity,
      };
    }
  } else {
    result = {
      isProductInCart: false,
      quantityProduct: 0,
    };
  }

  return result;
};
