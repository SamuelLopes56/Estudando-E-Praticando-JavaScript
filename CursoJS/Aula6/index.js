// Não podemos criar variáveis com palavras reservadas.
// Variáveis precisam ter nomes significativos.
// Não pode começar o nome de uma variável com números.
// Não podem conter espaços ou traços no nome das variáveis.
// Utilizamos camelCase ex.: let nomeCOmpletoDoCliente = "Luiz Otávio";
// Case-sensitive, ou seja letras maiúsculas e minúsculas fazem diferença.
// Não podemos redeclarar variáveis com let.
// NÃO UTILIZE var, UTILIZE let sempre que achar que algo vai ser alterado no valor da variável.
// Variáveis do tipo let podem ser declaradas sem ser inicializadas.
let nome; // variável declarada.
nome = "João"; // variável inicializada.
console.log(nome, "nasceu em 1984.");
console.log(`${nome} casou-se com Maria em 2012.`);
nome = "João Alberto";
console.log(nome, "nasceu em 1984.");
console.log(`${nome} casou-se com Maria em 2012.`);