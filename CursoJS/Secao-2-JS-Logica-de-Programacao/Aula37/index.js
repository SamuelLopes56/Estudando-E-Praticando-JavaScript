const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const nomes = ['Luiz', 'Otávio', 'Henrique']

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('####');

for (let i in nomes) {
    console.log(nomes[i]);
    console.log(nomes);
    console.log(i);
}

console.log('####');

for (let valor of nomes) {
    console.log(valor);
    console.log(nomes);
    console.log(nomes[valor]); // Vai resultar em undefined pois a variável valor é o conteúdo do array e não um índice para ser usado desta forma.
}

console.log('####--------------------------------');

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

console.log('####--------------------------------');

nomes.forEach(function (valor, indice) {
    console.log(valor, indice);
});

console.log('####--------------------------------');

nomes.forEach(function (valor) {
    console.log(valor);
});

/*
(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/