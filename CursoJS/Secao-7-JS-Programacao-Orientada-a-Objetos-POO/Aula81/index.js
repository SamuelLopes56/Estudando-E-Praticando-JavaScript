class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    }
  
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    }
  }
  
  const p1 = new Pessoa('Luiz', 'Miranda');
  p1.nomeCompleto = 'Luiz Miranda Olibeira';
  console.log(p1.nome);
  console.log(p1.sobrenome);

  const _velocidade = Symbol('Velocidade'); // O Symbol retorna um valor novo e único de Symbol. Toda vez que Symbol é chamado volta um valor diferente, não teram dois iguais.
  // Symbol() está sendo usado aqui para que ninguém possa alterar o valor de velocidade (alterar acima de 100 ou abaixo de 0) sem mecher na classe diretamente.
  class Carro {
    constructor(nome){
      this.nome = nome;
      this[_velocidade] = 0;
    }

    set velocidade(valor){
      if(typeof valor !== 'number') return;
      if(valor >= 100 || valor <= 0) return;
      this[_velocidade] = valor;
    }

    get velocidade(){
      return this[_velocidade];
    }

    acelerar(){
      if(this[_velocidade] >= 100) return;
      this[_velocidade]++;
    }

    frear(){
      if(this[_velocidade] <= 0) return;
      this[_velocidade]--;
    }
  }

  const c1 = new Carro('Fusca');
  console.log(c1.velocidade);
  c1.velocidade = 55;
  c1.acelerar();
  console.log(c1.velocidade);
  c1.frear();
  console.log(c1.velocidade);