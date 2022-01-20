import { CalculateTotalShoppingCart } from "./shoppingCart.types";

export const calculateTotalCart = (): CalculateTotalShoppingCart => ({
  type: "[Cart]CalculateTotal",
});
