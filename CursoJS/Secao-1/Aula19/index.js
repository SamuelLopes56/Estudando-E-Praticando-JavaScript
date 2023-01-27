/*
Primitivos (imutável) - string, number, boolean, undefined, null (bigint, symbol)
Referência (mutável) - array, object, function ( exemplo: let a = 3;
                                                          let b = a;)
*/
let nome = 'seila';
nome[0] = 'n';

console.log(nome[0]);

let a = 'A'; // Tipos primitivos (imutável)
let b = a; // Cópia
console.log(a, b); // o valor de b não vai mudar pois a é uma valor imutável então ele vai salvar aquele valor independente da modificação em a.

a = 'outra coisa';
console.log(a, b);


let c = [1, 2, 3]; // Dados mutáveis, o valor de b vai mudar pq ele aponta para o valor de c e c é um valor mutável logo ele salva as modificações no valor de c.
let d = c;
console.log(c, d);

c.push(4);
console.log(c,d);

d.pop();
console.log(c, d);

// Resumindo, valores primitivos são copiados (se muda um não muda o outro) e valores mutáveis são passados por referência (onde se há mudança em um muda o outro)

let e = [...c]; // Nesse caso eu copiei o valor de c para a variável e, mesmo sendo um valor mutável ele não vai alterar o valor se houver mudanças na variável c.
// O nome do método acima é spread. Funciona também para functions.

const um = {
    nome: 'seila',
    sobrenome: 'tbmnaosei'
};

const dois = {...um}; // Spread sendo feito para copiar o valor de 'um' em 'dois'.

const tres = um;

um.nome = 'joão';
console.log(um, dois, tres);