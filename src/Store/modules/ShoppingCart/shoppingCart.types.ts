import { Action } from "redux";

export interface StateShoppingCart {
  totalCart: number;
}

export interface CalculateTotalShoppingCart extends Action {
  type: "[Cart]CalculateTotal";
}

export type ActionShoppingCart = CalculateTotalShoppingCart;
