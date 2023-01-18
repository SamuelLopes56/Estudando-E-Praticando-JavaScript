/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
ten 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1989
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2019 - idade; // fiz isso em 2023 mas coloquei 2019 para bater o ano de nascimento com a idade informada.

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}kg tem ${altura} de altura e seu imc é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);