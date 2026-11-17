console.log(`TaskLab iniciado.`);

let tarefas = [];

const formulario = document.querySelector(`#form-tarefa`);
const campoTitulo = document.querySelector("#titulo");
const campoDescricao = document.querySelector("#descricao");
const campoPrioridade = document.querySelector("#prioridade");
const campoData = document.querySelector("#data");
const mensagemFormulario = document.querySelector("#mensagem-formulario");
const resumoTarefas = document.querySelector("#resumo-tarefas");
const listaTarefas = document.querySelector("#lista-tarefas");

function gerarProximoId() {
    if (tarefas.length === 0) {
        return 1;
    }
    
    const ids = tarefas.map(
        tarefa => tarefa.id
    );
    return Math.max(...ids) + 1;
}


function validarTarefa(titulo, prioridade, data){
    let valido = true;
    
    if (titulo.length <7){
        valido = false;
        mensagemFormulario.textContent =`É necessário que o título possua mais do que 7 caracters`;
    }
    if (prioridade=== ""){
        valido = false;
        mensagemFormulario.textContent =`É necessárico selecionar uma prioridade`;
    }
    if (data === ""){
        valido = false;
        mensagemFormulario.textContent =`Escolha uma data válida`;
    }
    return valido;
}

function criarCardTarefa(tarefa){
    const card = document.createElement("article");
    const titulo = document.createElement("h3"); 
    const descricao = document.createElement("p"); 
    const prioridade = document.createElement("p"); 
    const data = document.createElement("p"); 
    const situacao = document.createElement("p");
    const btnConcluir = document.createElement("button");
    const btnEditar = document.createElement("button");
    const btnExcluir = document.createElement("button");
    
    titulo.textContent =tarefa.titulo;
    descricao.textContent =tarefa.descricao;
    prioridade.textContent =tarefa.prioridade;
    data.textContent =tarefa.data;
    btnConcluir.textContent = "Concluir";
    btnConcluir.dataset.acao = "concluir";
    btnConcluir.dataset.id = tarefa.id;
    
    btnEditar.textContent = "Editar";
    btnEditar.dataset.acao = "editar";
    btnEditar.dataset.id = tarefa.id;
    
    btnExcluir.textContent = "Excluir";
    btnExcluir.dataset.acao = "excluir";
    btnExcluir.dataset.id = tarefa.id;

    if (tarefa.concluida){
        situacao.textContent = "Concluída";
        card.classList.add("tarefa-concluida");
        btnConcluir.textContent = "Reabrir"
    } else{
        situacao.textContent = "Pendente";
    }

    const acoes = document.createElement("div");
    acoes.classList.add("tarefa-acoes");
    acoes.append(
        btnConcluir,
        btnEditar,
        btnExcluir);

    // Adicionando uma classe CSS
    card.classList.add("tarefa");

    card.append(
        titulo,
        descricao,
        prioridade,
        data,
        situacao,
        acoes
    );
    
    return card;
}

function renderizarTarefas(listaTarefas, localRenderizacao){
    const lista = document.querySelector(localRenderizacao);
    lista.innerHTML = "";
    if(listaTarefas.length === 0){
        lista.textContent = "Nenhuma tarefa cadastrada.";
        resumoTarefas.textContent = "0 tarefas";
        return;
    } else{
        if(listaTarefas.length ===1){
            resumoTarefas.textContent = "1 tarefa";
        } else{
            resumoTarefas.textContent = `${listaTarefas.length} tarefas`;
        }
    }

    listaTarefas.forEach(tarefa => {
        const cardTarefa = criarCardTarefa(tarefa);
        lista.append(cardTarefa);
    });


}

formulario.addEventListener("submit", event => {
    event.preventDefault();
    
    const titulo = campoTitulo.value.trim();
    const descricao = campoDescricao.value.trim();
    const prioridade = campoPrioridade.value;
    const data = campoData.value;
    const validacao = validarTarefa(titulo, prioridade, data);

    if (!validacao){
        return;
    } 

    const novaTarefa = {
        id: gerarProximoId(),
        titulo,
        descricao,
        prioridade,
        data,
        concluida: false
    };

    tarefas.push(novaTarefa);
    renderizarTarefas(tarefas, "#lista-tarefas");
    formulario.reset();
    mensagemFormulario.textContent = "Tarefa cadastrada com sucesso!";
    }
);

listaTarefas.addEventListener("click", event =>{
    const botao = event.target.closest("[data-acao]")

    if (!botao) {
        return;
    }

    const id = Number(botao.dataset.id);
    const tarefa = tarefas.find(
        tarefa => tarefa.id === id
    );

    if (botao.dataset.acao == "concluir"){
        tarefa.concluida = !tarefa.concluida;
        renderizarTarefas(tarefas, "#lista-tarefas");
    }
});