function testeFinally(){
  try {
    // Executa quando não há erros.
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
  } catch (error) {
    // Executa quando há erros.
    console.log('Tratando o erro');
  } finally {
    // Sempre executa.
    console.log('FINALLY: Eu sempre sou executado');
  }
}

// testeFinally();

function retornaHora(data){ // Em baixo ele também checa se o valor data foi enviado ou não, se estiver vazio vai retornar false no primeiro teste e invalidar o if. Já que tem que ter algo no data e SE TIVER, ai faz o teste para saber se é uma instância de Date ou não.
  if(data && !(data instanceof Date)){ // Verifica se o valor/variável data é uma instância do objeto Date (para manipular o horário).
    throw new TypeError('Esperando instância de Date.');     // Se for o resultado vai ser !(true) -> false e sai fora do if.
  }                                                          // Se não vai ser !(false) -> true e entra no if de erro.
  if (!data) { // Verifica se a data foi enviada, se não for o resultado vai ser !(false) -> true e entra no if.
    data = new Date(); // Se foi enviado o resultado vai ser !(true) -> false e cai fora do if.
  }

  return data.toLocaleTimeString('pt-BR', {});
  /*
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  */
}

const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora(data);
console.log(hora);

try {
  const data = new Date();
  const hora = retornaHora();
  console.log(hora);
} catch (error) {
  // Tratar erro
} finally {
  console.log('Tenha um bom dia.');
}