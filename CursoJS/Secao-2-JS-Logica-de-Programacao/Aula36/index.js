// DOM = Document Object Model
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model
// https://developer.mozilla.org/pt-BR/docs/Glossary/DOM

// For in -> lê os índices ou chaves do objeto
//                 0       1      2
const frutas = ['Pera', 'Maça', 'Uva'];

for(let indice in frutas){
  console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
  };
  
  for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
  }
  
  // for (let i = 0; i < frutas.length; i++) {
  //   console.log(frutas[i]);
  // }