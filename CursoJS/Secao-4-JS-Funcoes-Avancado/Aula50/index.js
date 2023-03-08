// Funções declaradas usando a palavra function podem usar a palavra arguments, ela sustenta todos os argumentos enviados por parâmetro.
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
    console.log(arguments);
    console.log(arguments[0], arguments[6]);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function soma(a, b = 2, c = 4) { // Estou definindo valores padrões para b e c. Se um ou ambos os valores não forem enviados por parâmetro, eles irão usar o valor padrão estabelecido.
    console.log(a + b + c);
}
soma(2, 3);

const conta = (...args) => { // A reticência (...) é chamado de rest operator, ou seja, operador que trabalha o resto, nesse caso ele ta pegando todos os arumengos.
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);

const conta2 = (operador, acumulador, ...numeros) => { // Já nesse caso o rest operator está pegando todos os argumentos que vejam após o primeiro e o segundo (1° operador e 2° acumulador) e os colocando em um array para ser o 3° argumento (3° numeros).
    console.log(operador, acumulador, numeros);
};
conta2('+', 1, 20, 30, 40, 50);

const conta3 = (operador, acumulador, ...numeros) => {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta3('+', 0, 20, 30, 40, 50);
