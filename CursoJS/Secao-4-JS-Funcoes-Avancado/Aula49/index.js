// Declaração de função (Function hoisting)
falaOi(); // Posso fazer hoisting quando eu declaro uma função dessa forma tradicional.
function falaOi() { // Posso fazer hoisting quando eu declaro uma função dessa forma tradicional.
  console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() { // Aqui o hoisting não ira funcioar, já que não posso usar uma variável antês dela ser declarada.
  console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => { // Aqui o hoisting não ira funcioar, já que não posso usar uma variável antês dela ser declarada.
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = { // Aqui o hoisting não ira funcioar, já que não posso usar uma variável antês dela ser declarada.
  falar() {
    console.log('Estou falando...');
  },
  falar2(){
    console.log('hehe');
  }
};
obj.falar();
obj.falar2();