const arquivoDeConfiguracao = process.argv[2];
let configuracaoCarregada = true;

if (arquivoDeConfiguracao) {
  try {
    process.loadEnvFile(arquivoDeConfiguracao);
  } catch {
    console.error(
      `Arquivo de configuração não encontrado: ${arquivoDeConfiguracao}`,
    );
    process.exitCode = 1;
    configuracaoCarregada = false;
  }
}

const obrigatorias = ['PORT', 'NOME_ALUNO', 'TURMA'];
const ausentes = [];

for(const nome of obrigatorias){
    const valor = process.env[nome];

    if(typeof valor !== 'string' || valor.trim()===''){
        ausentes.push
    }
}