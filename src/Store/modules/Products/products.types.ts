import { Action } from "redux";
import { InterfaceListProducts } from "../../../screens/Home/ListProducts/homeListProducts.types";

export interface StateProducts {
  items: InterfaceListProducts[];
}

export interface ActGetAllProducts extends Action {
  type: "[Products]GetAll";
  payload: any;
}

export type ActionProducts = ActGetAllProducts;
