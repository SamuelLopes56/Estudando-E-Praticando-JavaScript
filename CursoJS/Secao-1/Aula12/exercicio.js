let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let auxiliar;

/*
auxiliar = varA;
varA = varB;
varB = varC;
varC = auxiliar;
*/

[varA, varB, varC] = [varB, varC, varA]; // Mesmo resultado que o código comentado acima, porém sem o uso de uma variável auxiliar.

console.log(varA + varB + varC);