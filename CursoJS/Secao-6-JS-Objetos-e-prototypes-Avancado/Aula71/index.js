// defineProperty -> Getter e Setters // defineProperties.
// defineProperty -> Só serve para uma chave(key).
// defineProperties -> Serve para mais de uma chave(key).
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: true // configurável (Define se o objeto/propriedade pode ser redefinida, reconfigurada, redeclarada). Estando false não permite apagar a variável/chave e nem alterar.
  });

  /*
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true // configurável
    }
  })
  */
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}