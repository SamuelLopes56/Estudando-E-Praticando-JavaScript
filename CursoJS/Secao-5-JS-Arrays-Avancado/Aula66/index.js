// Dobre os números
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade })); /* Ou:         // Lembrando que { idade: obj.idade } precisa estar entre () para as {} do objeto não serem reconhecidas como as chaves da arrow function.
const idades = pessoas.map(obj => {
  delete obj.nome; // Aqui ele deleta a 'chave' nome.
  return obj; // Aqui ele retorna um objeto só com a chave 'idade'.
});
*/

const comIds = pessoas.map(function(obj, indice) {
  const newObj = { ...obj }; // Aqui é criado um novo objeto que recebe o conteúdo do array pessoas para que as alterações feitas nesse map não afetem o array original(no caso o array pessoas).
  newObj.id = indice;
  return newObj;
});

// console.log(pessoas);
console.log(comIds);