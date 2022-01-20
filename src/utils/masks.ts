export const maskValue = (value: number) => {
  return value
    ? value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: "BRL",
      })
    : "0,00";
};
