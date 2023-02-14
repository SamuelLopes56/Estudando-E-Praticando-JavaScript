function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
  
    switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto; // Utilizando a palavra return eu perco a necessidade de utilizar um break após cada case.
    case 1:                 // Isso acontece pq tanto o return quanto o break fazem a mesma coisa, que é parar o escopo de código.
      diaSemanaTexto = 'Segunda';                             // No caso do return ele retorna algo além de parar o código naquele escopo.
      return diaSemanaTexto;                                  // O break só para o código naquele escopo.  
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
    }
  }
  
  const data = new Date('1987-04-21 00:00:00');
  const diaSemana = data.getDay();
  const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
  
  console.log(diaSemana, diaSemanaTexto);