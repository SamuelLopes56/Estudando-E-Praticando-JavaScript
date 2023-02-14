const texto = document.querySelector('.container h1');
const data = new Date();

function getDiaDaSemana(){
    const diaSemana = data.getDay();
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getMes(){
    const mesNumero = data.getMonth() + 1;
    let mesTexto;

    switch(mesNumero){
        case 1:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 2:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 3:
            mesTexto = 'Março';
            return mesTexto;
        case 4:
            mesTexto = 'Abril';
            return mesTexto;
        case 5:
            mesTexto = 'Maio';
            return mesTexto;
        case 6:
            mesTexto = 'Junho';
            return mesTexto;
        case 7:
            mesTexto = 'Julho';
            return mesTexto;
        case 8:
            mesTexto = 'Agosto';
            return mesTexto;
        case 9:
            mesTexto = 'Setembro';
            return mesTexto;
        case 10:
            mesTexto = 'Outubro';
            return mesTexto;
        case 11:
            mesTexto = 'Novembro';
            return mesTexto;
        case 12:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }
}

function zeroAEsquerda(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data){
    const diaTexto = getDiaDaSemana();
    const dia = zeroAEsquerda(data.getDate());
    const mes = getMes();
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    return `${diaTexto}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`;
}

texto.innerHTML = formataData(data).toString();
