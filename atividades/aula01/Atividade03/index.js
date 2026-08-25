const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if(!nomeInformado || !turmaInformada){
  console.error('PENDENTE: Informe o nome do aluno e a turma correspondente.');
  process.exitCode = 1;
}else {
  console.log(`ACESSO PERMITIDO! Usuário: ${nomeInformado} | Turma: ${turmaInformada}`);
}