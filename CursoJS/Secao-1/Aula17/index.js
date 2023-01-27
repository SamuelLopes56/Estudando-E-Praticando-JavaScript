function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

saudacao('Luiz');
saudacao('Maria');

function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(5, 10));

const raiz = function (n) {
    return n ** 0.5;
}; // Quando uma função é armazenada em uma variável é necessário colocar um ; no fechamento das chaves.

console.log(raiz(4));
console.log(raiz(9));

const raizArrowFunction = n => n ** 0.5; // Se a arrow function tiver uma linha só não se coloca o return, já que ele vai obrigatóriamente retornar o resultado.
                        // Quando tiver só um parâmetro (No caso so temos o 'n') pode eliminar os parênteses.
const raizArrowFunction2 = (n) => {
    return n ** 0.5;
};

console.log(raizArrowFunction(16));
console.log(raizArrowFunction2(25));