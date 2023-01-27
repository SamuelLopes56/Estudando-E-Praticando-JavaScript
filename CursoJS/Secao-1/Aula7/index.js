// Não podemos criar variáveis com palavras reservadas.
// Constantes precisam ter nomes significativos.
// Não pode começar o nome de uma variável com números.
// Não podem conter espaços ou traços no nome das variáveis.
// Utilizamos camelCase ex.: let nomeCOmpletoDoCliente = "Luiz Otávio";
// Case-sensitive, ou seja letras maiúsculas e minúsculas fazem diferença.
// Não pode modificar o valor de uma constante.
// NÃO UTILIZE var, UTILIZE const sempre que precisa de uma variável na qual o seu valor não pode ser alterado.
/* 
Variáveis do tipo const devem ser inicializadas no momento em que são declaradas. Até pq você não pode modificar o valor dela,
então o valor dela deve ser indicado no momento de sua declaração
*/
const primeiroNumero = 5; // variável declarada e inicializada.
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
const nome = "Jorginho";
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(typeof nome);

const terceiroNumero = "5";
console.log(terceiroNumero + segundoNumero); // concatenou a string 5 com o número 10. Resultadondo no 510.