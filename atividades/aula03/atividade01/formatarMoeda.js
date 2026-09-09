export function formatarMoeda(valor) {
  if (!Number.isFinite(valor)) {
    throw new TypeError("O número precisa ser válido e finito.");
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
// TODO: valide o valor e devolva a formatação monetária em pt-BR.
