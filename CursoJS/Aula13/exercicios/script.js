const nome = prompt("Informe o seu nome!");

document.body.innerHTML += `Seu nome é  <strong>${nome}</strong> <br />`;//
document.body.innerHTML += `Seu nome tem <strong>${nome.length} letras <br />`;//
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`;//
document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? <strong>${nome.search("a")}</strong> <br />`; // poderia ser tbm ${nome.indexOf("a")}
document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? <strong>${nome.lastIndexOf("a")}</strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(" ")} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br />`;
