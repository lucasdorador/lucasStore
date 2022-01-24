import api from "../../../services/api";

export const getAllProducts = () => async (dispatch: any) => {
  const { data } = await api.get("api/v1/product");

  dispatch({
    type: "[Products]GetAll",
    payload: data,
  });
};
