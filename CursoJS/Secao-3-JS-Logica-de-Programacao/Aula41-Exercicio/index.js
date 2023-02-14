// Escreva uma função que recebe 2 números e retorne o maior deles.

function maior(num1, num2){
  // const resultado = num1 > num2 ? num1 : num2;
  console.log(`Número 1: ${num1} Número 2: ${num2}`);
  // return resultado;
  return num1 > num2 ? num1 : num2;
}

const num1 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
const num2 = Math.floor(Math.random() * (20 - 1 + 1) + 1);

console.log(`Resultado: ${maior(num1, num2)}`);

const maior2 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(`Resultado: ${maior2(num1, num2)}`);
