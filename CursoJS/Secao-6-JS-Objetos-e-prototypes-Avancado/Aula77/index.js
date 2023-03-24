// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

/*
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // Esse "/\D+/g" faz com que eu selecione qualquer coisa que não seja um número, e subistituo pelo parâmetro escolhido, nesse casso foi ''.
let cpfArray = Array.from(cpfLimpo); // Transformando a string em cpf para poder usar o map(), reduce(), filter() etc.
*/

function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('705.484.450-52');
const cpf2 = new ValidaCpf('111.111.111-11');
console.log(cpf.valida());
console.log(cpf2.valida());

if (cpf.valida()){
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}

if (cpf2.valida()){
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}