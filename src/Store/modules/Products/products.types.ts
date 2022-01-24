import { Action } from "redux";
import { InterfaceListProducts } from "../../../screens/Home/ListProducts/homeListProducts.types";

export interface StateProducts {
  items: InterfaceListProducts[];
}

export interface ActGetAllProducts extends Action {
  type: "[Products]GetAll";
  payload: any;
}

export interface ActSearchProducts extends Action {
  type: "[Products]Search";
  payload: string;
}

export type ActionProducts = ActGetAllProducts | ActSearchProducts;
