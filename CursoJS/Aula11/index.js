/*
+ Adição / concatenação.
- Subtração.
/ Divisão.
* Multiplicação.
** Potenciação.
% Resto da divisão.
++ Incremento.
console.log(++contador); // Incrementa primeiro e depois mostra o valor.
 ----------- 
console.log(contador++); // Mostra o valor e depois incrementa.
-- Decremento.
*/

const num1 = 2;
const num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
let contador = 11;
contador++;
console.log(contador);
console.log(++contador); // Incrementa primeiro e depois mostra o valor.
console.log(contador++); // Mostra o valor e depois incrementa.
console.log(contador);
let contador2 = 0;
contador2 += 2; // contador2 = contador2 + 2.
console.log(contador2);
contador2 *= 10; // contador2 = contador2 * 10.
console.log(contador2);
let contador3 = 2;
contador3 **= 10; // contador3 = contador3^10.
console.log(contador3);

//NaN = Not a number.
const num3 = 10;
const num4 = 'Luiz';
console.log(num3 * num4);
const num5 = 10;
const num6 = '5';
console.log(num5 * num6);

const num7 = '5';
const num8 = parseInt(num7);
console.log(num1 + num8);
console.log(typeof num7);
console.log(typeof num8);

//parseInt = conversão para inteiro.
//parseFloat = conversão para decimais.