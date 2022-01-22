import { Action } from "redux";
import { InterfaceListProducts } from "../../../screens/Home/ListProducts/homeListProducts.types";

export interface InterfaceItemsCart extends InterfaceListProducts {
  quantity: number;
}
export interface StateShoppingCart {
  totalCart: number;
  itemsCart: InterfaceItemsCart[];
  itemSelected: InterfaceListProducts;
}

export interface ActCalculateTotalShoppingCart extends Action {
  type: "[Cart]CalculateTotal";
}

export interface ActAddNewItemCart extends Action {
  type: "[Cart]AddNewItem";
  payload: InterfaceItemsCart;
}

export interface ActItemSelected extends Action {
  type: "[Cart]ItemSelected";
  payload: InterfaceListProducts | null;
}

export interface ActRemoveItemCart extends Action {
  type: "[Cart]RemoveItem";
  id: string;
}

export interface ActAlterQuantity extends Action {
  type: "[Cart]AlterQuantity";
  payload: {
    id: string;
    newQuantity: number;
  };
}

export type ActionShoppingCart =
  | ActCalculateTotalShoppingCart
  | ActAddNewItemCart
  | ActRemoveItemCart
  | ActAlterQuantity
  | ActItemSelected;
