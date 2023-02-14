// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número, se não for = Retorna o próprio valor recebido
// Use a função com números de 0 a 100

function fizzBuzz(num){
    do {
        if(Number.isInteger(numero)){
            if (numero % 3 == 0 && numero % 5 == 0) {
                console.log(`${numero} FizzBuzz`);
                numero++;
                continue
            } 
            if (numero % 3 == 0) {
                console.log(`${numero} Fizz`);
                numero++;
                continue
            } 
            if (numero % 5 == 0) {
                console.log(`${numero} Buzz`);
                numero++;
                continue
            } else {
                console.log(`${numero} Não é divisível por 3 ou 5`);
            }
        } else {
            console.log(`"${numero}" Não é um número`);
        }
    
        numero++;
    } while (numero <= 100);
}

let numero = 0;
fizzBuzz(numero);
