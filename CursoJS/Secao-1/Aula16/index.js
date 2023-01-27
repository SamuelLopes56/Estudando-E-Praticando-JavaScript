const alunos = ['Luiz', 'Maria', 'João']; // Array
console.log(alunos);
//console.log(typeof(alunos));
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos.length);
alunos[alunos.length] = 'Luiza'; // Como o length mostra o tamanho do array e o primeiro indice é sempre 0, fica como se eu estivesse adicionando o novo elemento em uma pocisão vazia do array logo após o último elemento(após último índice).
alunos[alunos.length] = 'Fábio'; // Exemplo: alunos tem 3 elementos, porém os indices são Luiz = 0, Maria = 1 e João = 2. Logo eu usando alunos[alunos.lenght] = 'Fábio', eu estou adicionando o Fábio no índice 3 que está vazio (e é também o novo final do array).
alunos[alunos.length] = 'Luana';
console.log(alunos);
console.log(alunos.length);

alunos.push('Otávio'); // Adiciona um elemento no fim do array.
console.log(alunos);

alunos.unshift('Primeiro'); // Adiciona um elemento no começo do array.
console.log(alunos);

alunos.pop(); // Remove o último elemento do array. Você pode guardar o elemento removido em uma variável. const removido = alunos.pop();
console.log(alunos);

alunos.shift(); // Remove o primeiro elemento do array.
console.log(alunos);

// delete alunos[1]; Remove um elemento do array mas não reorganiza os índices. A posição do elemento deletado recebe um undefined.
// console.log(alunos);

console.log(typeof alunos); // Em JS arrays são considerados objetos.
console.log(alunos instanceof Array); // Posso usar esse comando para verificar se estou trabalhando com um array ou não.