function relogio() {
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // Transformar os segundos recebidos em milésimos de segundos, já que é assim que Date trabalha os segundos.
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
  }

  document.addEventListener('click', function (evento) {
    //console.log(evento.target);
    const elemento = evento.target;

    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciarRelogio();
    }
    if (elemento.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
    if (elemento.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      segundos = 0;
      //relogio.innerHTML = '00:00:00';
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }
  })
}

relogio();

/*
iniciar.addEventListener('click', function (evento) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciarRelogio();
});

pausar.addEventListener('click', function (evento) {
  relogio.classList.add('pausado');
  clearInterval(timer);
});


zerar.addEventListener('click', function (evento) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = '00:00:00';
});
*/
