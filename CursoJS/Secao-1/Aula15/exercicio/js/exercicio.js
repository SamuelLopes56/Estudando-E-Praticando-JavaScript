const numero = Number(prompt("Digite um número:")); // tenho que converter já que o retorno do prompt é sempre uma string.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; // Também posso fazer a raiz quadrada da seguinte forma: ${numero ** 0.5} o valor elevado em 0.5 resulta na raiz quadrada.
texto.innerHTML = `
        <p>
            Raiz quadrada: <strong>${Math.sqrt(numero)}</strong><br>
            <strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong><br>
            É NaN: <strong>${Number.isNaN(numero)}</strong><br>
            Arredondando para baixo: <strong>${Math.floor(numero)}</strong><br>
            Arredondando para cima: <strong>${Math.ceil(numero)}</strong><br>
            Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>
        </p>
    `;