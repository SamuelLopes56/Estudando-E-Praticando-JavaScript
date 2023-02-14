const elementos = [
  { tag: 'p', texto: 'Qualquer texto que você quiser.' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'section', texto: 'Frase 3' },
  { tag: 'footer', texto: 'Frase 4' },
];

const recebeContainer = document.querySelector('.container');
const div = document.createElement('div');

function criarElementos() {
  for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criarTag = document.createElement(tag);
    criarTag.innerHTML = texto; // Posso colocar innerText já que eu sei que a variável texto não contém tags e sim só texto.
    div.appendChild(criarTag);
  }
  recebeContainer.appendChild(div);
}

criarElementos();

/* Eu poderia ter feito assim também
  function criarElementos(){
  for (let i in elementos) {
    let {tag, texto} = elementos[i];
    let criarTag = document.createElement(tag);
    criarTag.innerHTML = texto; // Posso colocar innerText já que eu sei que a variável texto não contém tags e sim só texto.
    div.appendChild(criarTag);
  }
  recebeContainer.appendChild(div);
}
*/

/* Eu poderia ter feito assim também
function criarElementos(){
  for (let i = 0; i < elementos.length; i++) {
    let criarTag = document.createElement(tag);
    let criarTexto = document.createElement(texto);
    criarTag.innerText = texto; // Posso colocar innerText já que eu sei que a variável texto não contém tags e sim só texto.
    div.appendChild(criarTag)
  }
    recebeContainer.appendChild(div);
}
*/

/* Eu poderia ter feito assim também
function criarElementos(){
  for (let i = 0; i < elementos.length; i++) {
    let criarTag = document.createElement(tag);
    let criarTexto = document.createElement(texto);
    criarTag.appendChild(texto);
    div.appendChild(criarTag);
  }
    recebeContainer.appendChild(div);
}
*/
