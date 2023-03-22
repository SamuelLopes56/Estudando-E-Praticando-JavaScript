class ControleRemoto {
    constructor(tv) {
      this.tv = tv;
      this.volume = 0;
    }
  
    // Método de instância, ou seja, ele é referente as instâncias (controle1 é um exemplo de instância).
    aumentarVolume() {
      this.volume += 2;
    }
    diminuirVolume() {
      this.volume -= 2;
    }
  
    // Método estático, ou seja, ele é referente a classe e não as instâncias (controle1 é uma instância).
    static soma(x, y) { // Cuidado, os métodos estáticos não possuem informações das instâncias, ou seja, se eu chamar o método aumentarVolume() dentro de soma() ele vai dar erro, pois não vai receber o this.volume (No caso não vai receber o this, já que o método estático acessa a classe e não a instância. Logo ele não utiliza/trabalha com o this).
        return x + y;
        // console.log(this);
    }
  }
  
  const controle1 = new ControleRemoto('LG');
  // ControleRemoto.soma(); // Está acessando o método soma() através da classe ControleRemoto e não da instância controle1. Isso ocorre por que soma() é um método estático.
  console.log(ControleRemoto.soma(1,2));