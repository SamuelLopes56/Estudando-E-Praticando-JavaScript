// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura.
// Retorne true se a imagem estiver no modo paisagem.
// Obs: Modo paisagem = imagem deitada (Largura maior que altura) e Modo retrato = imagem de pé (Altura maior que largura).

const ePaisagem = (largura, altura) => largura > altura ? 'A imagem está em modo paisagem' : 'A imagem está em modo retrato';

const ePaisagem2 = (largura, altura) => largura > altura;

const x = 10;
const y = 20;

console.log(ePaisagem(x, y));
console.log(ePaisagem2(x, y));