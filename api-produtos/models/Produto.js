export default class Produto {
  constructor({ id, nome, preco, estoque = 0, categoria }) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new TypeError("O id não pode ser 0 ou não inteiro");
    }
    if (typeof nome !== "string" || nome.trim() === "") {
      throw new TypeError("Nome é obrigatório");
    }
    if (!Number.isFinite(preco) || preco < 0) {
      throw new TypeError("Preço inválido");
    }
    if (!Number.isInteger(estoque) || estoque < 0) {
      throw new TypeError("Estoque inválido");
    }
    if (typeof categoria !== "string" || categoria.trim() === "") {
      throw new TypeError("Categoria é obrigatória.");
    }
    Object.assign(this, {
      id,
      nome: nome.trim(),
      preco,
      estoque,
      categoria: categoria.trim(),
    });
  }
  calcularValorEmEstoque() {
    return this.preco * this.estoque;
  }
  calcularPrecoComDesconto(percentual) {
    if (!Number.isFinite(percentual) || percentual < 0 || percentual > 100) {
      throw new RangeError("Desconot deve estar entre 0 e 100");
    }
    return this.preco * (1 - percentual / 100);
  }
}
