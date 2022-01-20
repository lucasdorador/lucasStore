import {
  ActCalculateTotalShoppingCart,
  ActAddNewItemCart,
  ActRemoveItemCart,
  InterfaceItemsCart,
  ActAlterQuantity,
} from "./shoppingCart.types";

export const calculateTotalCart = (): ActCalculateTotalShoppingCart => ({
  type: "[Cart]CalculateTotal",
});

export const AddNewItemCart = (
  ItemAdd: InterfaceItemsCart
): ActAddNewItemCart => {
  return {
    type: "[Cart]AddNewItem",
    payload: { ...ItemAdd },
  };
};

export const RemoveItemCart = (idItemCart: string): ActRemoveItemCart => {
  return {
    type: "[Cart]RemoveItem",
    id: idItemCart,
  };
};

export const AlterQuantityItemCart = (
  idItemCart: string,
  newQuantity: number
): ActAlterQuantity => {
  return {
    type: "[Cart]AlterQuantity",
    payload: {
      id: idItemCart,
      newQuantity: newQuantity,
    },
  };
};
