// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 50);
// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);

// Retorne os números maiores que 10
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

// Daqui para baixo sou eu fazendo o que é pedido nos comentários acima.
console.log('------------------------------------------------------');

const numerosMaioresQ10 = numeros.filter(x => x > 10);
console.log('Números maiores que 10');
console.log(numerosMaioresQ10);

const mairQ5 = pessoas.filter(x => x.nome.length >= 5);
console.log('Pessoas cujo nome tem 5 letras ou mais');
console.log(mairQ5);
const maisQ50 = pessoas.filter(x => x.idade > 50);
console.log('Pessoas com mais de 50 anos');
console.log(maisQ50);
const terminaComA = pessoas.filter(x => x.nome.toLowerCase().endsWith('a'));
console.log('Pessoas cujo nome termina com "a"');
console.log(terminaComA);