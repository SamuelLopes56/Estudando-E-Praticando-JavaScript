// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) { // Funções construtoras iniciam com letras maiúsculas. E também não precisa usar ',' para separar os atributos e métodos.
    // Atributos ou métodos privados    // Com funções construtoras é bom ter um nome direto. Exemplo: não ser algo como "CriarPessoa" e sim algo como "Pessoa".
    // const ID = 123456;
    // const metodoInterno = function() {};
  
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    this.metodo = function() {
      console.log(this.nome + ': sou um método');
    };
  }
  
  const p1 = new Pessoa('Luiz', 'Otávio');
  const p2 = new Pessoa('Maria', 'Oliveira');
  p1.metodo();
  p2.metodo();