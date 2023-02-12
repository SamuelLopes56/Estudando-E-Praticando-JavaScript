const paragrafos = document.querySelector('.paragrafos'); // querySelector só retorna o primeiro elemento encontrado.
const ps = paragrafos.querySelectorAll('p'); // querySelectorAll retorna todos os elementos encontrados.

const estilosBody = getComputedStyle(document.body); // Pega o css do body.
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}