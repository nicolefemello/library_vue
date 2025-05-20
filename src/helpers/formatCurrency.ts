export const formatCurrency = (value?: number): string => {
  if (value == null) return "Preço não disponível";
  if (value === 0) return "Grátis";
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
