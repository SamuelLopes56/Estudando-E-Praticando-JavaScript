let umaString = '"Um texto"';
let umaString2 = "Um \"texto\"";
let umaString3 = "Um \texto";
let umaString4 = "Um \\texto";


console.log(umaString);
console.log(umaString2);
console.log(umaString3);
console.log(umaString4);

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.match(/[a-z]/g)); // Expressões regulares. Essa em específico localiza todas as letras minúsculas. Por conta da letra "g" ali elas são colocadas em um array.
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/)); // Aqui ele retorna o indice da primeira letra minúscula que achar.
console.log(umaString.replace('Um', 'Outra'));

let umaString5 = "O rato roeu a roupa do rei de Roma.";
console.log(umaString5.replace(/r/, '#')); // Aqui estou substituindo o primeiro "r" minúsculo encontrado por "#".
let umaString6 = "O rato roeu a roupa do rei de Roma.";
console.log(umaString6.replace(/r/g, '#')); // Aqui (utilizando a tag "g" para repetir em todos os "r") estou substituindo todos os "r" minúsculos por "#".
console.log(umaString5.length); // Vê o tamanho da string.
console.log(umaString5.slice(2, 5)); // Corta a string a partir do indice informado até o fim também informado. Porém o último indice informado é cortado.
console.log(umaString5.slice(2, 6));
console.log(umaString5.slice(-5, -1)); // Utilizando valores negativos o resultado é o mesmo, só que de trás para frente.

console.log(umaString5.split(' ')); // Divide a string no caractere informado (nesse caso foi o " " espaço).
console.log(umaString5.split('r', 3)); // Divide a string no caractere informado (nesse caso foi o "r") e o 3 ali informa quantos resultados eu quero.
console.log(umaString5.split('r', 2));
console.log(umaString5.split('r', 4));
console.log(umaString5.toLowerCase()); // Transforma todos os caracteres da string em minúsculos.
console.log(umaString5.toUpperCase()); // Transforma todos os caracteres da string em maiúsculos.