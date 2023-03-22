class Pessoa { // Classe.
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    falar() { // Nas classes os métodos já são automaticamente atribuidos ao _proto_(prototype).
      console.log(`${this.nome} está falando.`);
    }
  }
  
  function Pessoa2(nome, sobrenome) { // Função construtora.
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
  };
  
  const p1 = new Pessoa('Luiz', 'Miranda');
  const p2 = new Pessoa2('Luiz', 'Miranda');