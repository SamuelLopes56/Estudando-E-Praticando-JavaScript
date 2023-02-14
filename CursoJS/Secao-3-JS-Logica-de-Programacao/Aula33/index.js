const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
      rua: 'Av Brasil',
      numero: 320
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto} = pessoa;
  console.log(nome, sobrenome, resto);
  const {nome: n, endereco: {rua, numero}, endereco} = pessoa;
  console.log(n, rua, numero, endereco);