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