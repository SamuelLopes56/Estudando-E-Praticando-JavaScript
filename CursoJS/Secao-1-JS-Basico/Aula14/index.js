/*
let num1 = 1500; // number
let num2 = 1.156648; // number

console.log(num1.toString(2)); // Vai mostrar o valor binário da variável.
console.log(num2.toFixed(2)); // Escolhe quantas casas decimais vão aparecer.
console.log(Number.isInteger(num1)); // Verifica se a variável é um número inteiro.

console.log('####################################');

let temp = num1 * 'ola';
console.log(temp); // NaN = not a number.
console.log(Number.isNaN(temp)); // Verifica se a variável é um NaN.

console.log('####################################');

let temp2 = num1 * '5';
console.log(temp2);
console.log(Number.isNaN(temp2));
*/ // Tem uma certa imprecisão com contas de números decimais.
let num1 = 0.7; // number
let num2 = 0.1; // number
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5

num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));
num1 = parseInt(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));