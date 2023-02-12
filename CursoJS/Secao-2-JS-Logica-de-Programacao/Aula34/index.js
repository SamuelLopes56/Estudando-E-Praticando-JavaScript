/*
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 400; i <= 500; i += 10) {
    console.log(`Linha ${i}`);
}

for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
}
*/

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}


const frutas = ['Maçã', 'Pêra', 'Uva'];
//const novasFrutas = frutas.map(el => el.toLowerCase());
//console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]

for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}, ${frutas[i]}`);
}