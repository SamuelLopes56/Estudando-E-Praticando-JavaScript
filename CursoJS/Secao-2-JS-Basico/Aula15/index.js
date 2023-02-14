let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda o valor informado para baixo.
console.log(num2);
let num3 = Math.ceil(num1); // Arredonda o valor informado para cima.
console.log(num3);
let num4 = Math.round(num1); // Arredonda o valor informado para o numero mais próximo (para cima ou para baixo).
console.log(num4);

console.log(Math.max(1,2,3,4,5,6,7,-10,-50,1500,8,9,10)); // Retorna o valor mais alto.
console.log(Math.min(1,2,3,4,5,6,7,-10,-50,1500,8,9,10)); // Retorna o valor mais baixo.

console.log(Math.random()); // Gera um número aleatório entre 0 e 1, porém o 1 não é incluido.

const aleatorio =  Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(100 / 0); // Não só não vai dar erro como também me retorna um valor infinity. Se eu for fazer um teste ele me retorna true, pois realizou a conta.

console.log(!!(100 / 0));