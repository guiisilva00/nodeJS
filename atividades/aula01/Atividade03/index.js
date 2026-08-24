const nomeInformado = process.argv[0];
const turmaInformada = process.argv[1];

if (!nomeInformado || !turmaInformada) {
  console.error(
    "PENDENTE: valide nome e turma antes de confirmar a inscrição.",
  );
  process.exitCode = 1;
} else {
  console.log("Entrada recebida:", { nomeInformado, turmaInformada });
}
