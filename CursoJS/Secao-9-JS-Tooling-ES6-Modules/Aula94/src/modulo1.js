const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

function soma(x, y){
    return x + y;
}

export {nome, sobrenome as sobrenome2, idade, soma};

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export const outraidade = 40;