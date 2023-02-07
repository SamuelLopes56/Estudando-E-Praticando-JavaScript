var nome = "Luiz"; // você pode declarar e re-declarar com var, já com let você não pode fazer isso(da erro).
var nome = "Roberto";

console.log(nome)

let nome2 = "hehe"; // você pode declarar e re-declarar com var, já com let você não pode fazer isso (da erro).
let nome2 = "hehe2";

console.log(nome2);

// ###########################################################  ###########################################################

// Tipos primitivos String, Number, Undefined, null, boolean e symbol.

const nome3 = 'Luiz'; // String.
const num = 10; // Number.
const num2 = 10.52; // Number.
let nomeAluno; // Undefined = não aponta pra local nenhum na memória.
let sobrenomeAluno = null; // NuloNão aponta pra local nenhum na memória.
const aprovado = true; // Boolean = true ou false (Lógico).

console.log(typeof nome3, num, num2, nomeAluno, sobrenomeAluno, aprovado);

const a = [1, 2];
const b = a;

console.log(a, b);
console.log(typeof a, b);

b.push(3);
console.log(a);
console.log(b);