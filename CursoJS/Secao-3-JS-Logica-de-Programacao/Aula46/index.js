function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

function funcaoDoIntervalo(){
  console.log(mostraHora());
}

//setInterval(funcaoDoIntervalo, 1000); // Como eu não coloquei funcaoDoIntervalo(), com os parênteses, eu só estou passando a função por referência.
                                        // Se eu coloca-se os parênteses eu estaria ativando a função.

const timer = setInterval(function(){
  console.log(mostraHora()); // Essa função não para, vai ficar em loop infinito.
}, 1000); // Isso é uma função anônima.

setTimeout(function () {
  clearInterval(timer); // Essa função serve p/ parar a função de cima.
}, 10000);

setTimeout(function () {
  console.log('Olá mundo!');
}, 5000)
