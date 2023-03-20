// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); // Object,freeze impede um arra, object, etc de ser alterado. Nesse caso após o objeto ser criado ele não pode ter nenhum valor alterado/deletado.
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');

delete p1.nome;
delete p2.sobrenome;

console.log(p1);
console.log(p2);

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p3 = new Pessoa2('Roberto', 'Ricardo');
const p4 = new Pessoa2('Clotilde', 'Lima');

delete p3.nome;
delete p4.sobrenome;

console.log(p3);
console.log(p4);