export function formatarMoeda(valor) {
  if (!Number.isFinite(valor)) {
    throw new TypeError("O valor precisa ser válido. (finito)");
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
