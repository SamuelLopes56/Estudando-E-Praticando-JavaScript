const inputTarefa = document.querySelector('.input-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    // btnApagar.classList.add('apagar');
    btnApagar.setAttribute('class', 'apagar');
    // btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
}

function criaTarefa(textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}

btnAddTarefa.addEventListener('click', function(evento){ // Cria a tarefa com o value do input ao apertar o botão "Adicionar Tarefa".
    if (!inputTarefa.value) return; // Verifica se o campo inputTarefa está vazio, se estiver não faz nada. Se não, continua a lógica.
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(evento){ // Cria a tarefa com o value do input ao apertar "Enter".
    if(evento.keyCode === 13){ // Verifica se o botão apertado é o "Enter" (Que tem o keyCode de valor 13).
        if (!inputTarefa.value) return; // Verifica se o campo inputTarefa está vazio, se estiver não faz nada. Se não, continua a lógica.
        criaTarefa(inputTarefa.value)
    }
})

document.addEventListener('click', function(evento){
    const elemento = evento.target;
    if (elemento.classList.contains('apagar')){
        //console.log(elemento.parentElement);
        elemento.parentElement.remove();
        salvarTarefas(); // Salvando as tarefas atuais no localStorage, assim ele remove as deletadas e salva as que se manteram (Substitui o ultimo save por esse, já que ambos usam a mesma key/nome).
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // O método trim() serve para tirar o espaço que fica ao final de cada valor do array.
        listaDeTarefas.push(tarefaTexto);
        //console.log(listaDeTarefas);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // stringify converte um objeto javaScript para string. Converteu o array para string.
    //console.log(tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON); // Salva algo no armazenamento do navegador. O primeiro atributo é um nome/key para o valor e o segundo é o valor a ser salvo.
}

function adicionaTarefasSalvas(){ // Recria as tarefas armazenadas no localStorage.
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // parse converte uma string para um objeto javaScript. Converteu a string para array.
    //console.log(tarefas);
    //console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa); // Recria as tarefas armazenadas no localStorage.
    }
}

adicionaTarefasSalvas(); // Recria as tarefas armazenadas no localStorage.
