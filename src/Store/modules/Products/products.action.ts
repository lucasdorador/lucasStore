import api from "../../../services/api";
import { ActSearchProducts } from "./products.types";

export const getAllProducts = () => async (dispatch: any) => {
  const { data } = await api.get("api/v1/product");

  dispatch({
    type: "[Products]GetAll",
    payload: data,
  });
};

export const searchProducts = (searchedText: string): ActSearchProducts => {
  return {
    type: "[Products]Search",
    payload: searchedText,
  };
};
