const ferramentas = [
  { codigo: "MED-01", nome: "Paquímetro", categoria: "Medição", estoque: 6 },
  {
    codigo: "COR-02",
    nome: "Alicate de corte",
    categoria: "Corte",
    estoque: 9,
  },
  { codigo: "MED-03", nome: "Trena", categoria: "Medição", estoque: 4 },
];

export function listarFerramentas(categoria) {
  const ferramentasFiltradas = ferramentas.filter(
    (f) => f.categoria === categoria,
  ); 
  if (ferramentasFiltradas.length === 0) {
    throw new Error(`Nenhuma ferramenta encontrada em ${categoria}.`);
  }
  return ferramentasFiltradas.map((f) => ({ ...f }));
}
