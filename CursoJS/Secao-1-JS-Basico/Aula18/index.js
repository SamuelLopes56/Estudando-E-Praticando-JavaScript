const objetoPessoa = {
    nome: 'Luiz', // Sempre colocar uma vírgula no final de cada método do objeto.
    sobrenome: 'Miranda', // A vírgula fala que tem mais um método após ela.
    idade: 25 // Só o último método que não se usa a vírgula.
};

console.log(objetoPessoa.nome);
console.log(objetoPessoa.sobrenome);
console.log(objetoPessoa.idade);
/*
function criePessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
*/

function criePessoa (nome, sobrenome, idade){
    return{
        nome, // Quando o nome do método é o mesmo que o do parâmetro eu não preciso fazer algo como (nome: nome) e sim posso deixar só o nome do método (nome) que ele já vai fazer a atribuição.
        sobrenome,
        idade
    };
}

const pessoa1 = criePessoa('Luiz', 'Otávio', 25);
const pessoa2 = criePessoa('Samuel', 'Henrique', 23);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

const pessoa3 = {
    nome: 'Fulano',
    sobrenome: 'Detal',
    idade: 30,

    fala() { // Não preciso colocar a palavra 'function' antês do nome da função se ela estiver dentro de um objeto. Nem colocar o ; no fechamento das chaves.
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); // A palavra 'this' seguinifica algo como (neste contexto). Ou seja, neste objeto neste contexto.
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();