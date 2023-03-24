// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(elemento);
    }
});
  
  async function carregaPagina(elemento) {
    try {
      const href = elemento.getAttribute('href');
      const response = await fetch(href);
  
      if(response.status !== 200) throw new Error('NOSSO ERRO 404!');
  
      const html = await response.text();
      carregaResultado(html);
    } catch(error) {
      console.warn(error); // Tem console.warn e console.error além do tradicional console.log.
    }
  }
  
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }

/*
  fetch('pagina1.html') // Vai dar certo.
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(error => console.log(error));

    fetch('pagina4.html') // Vai dar erro.
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(error => console.error(error)); // Tem console.warn e console.error além do tradicional console.log.
*/