console.log(`TaskLab iniciado.`);

let tarefas = carregarTarefas();
let idEmEdicao = null;

const formulario = document.querySelector(`#form-tarefa`);
const campoTitulo = document.querySelector("#titulo");
const campoDescricao = document.querySelector("#descricao");
const campoPrioridade = document.querySelector("#prioridade");
const campoData = document.querySelector("#data");
const mensagemFormulario = document.querySelector("#mensagem-formulario");
const resumoTarefas = document.querySelector("#resumo-tarefas");
const listaTarefas = document.querySelector("#lista-tarefas");
const tituloFormulario = document.querySelector("#titulo-formulario");
const botaoSalvar = document.querySelector("#botao-salvar");
const botaoCancelar = document.querySelector("#botao-cancelar");


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

function restaurarFormulario(){
    idEmEdicao = null;
    formulario.reset();
    tituloFormulario.textContent = "Nova tarefa";
    botaoSalvar.textContent = "Salvar tarefa";
    botaoCancelar.hidden = true;

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

    if(idEmEdicao === null){
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
        mensagemFormulario.textContent = "Tarefa cadastrada com sucesso!";
    }else{
        const indice = tarefas.findIndex(
            tarefa => tarefa.id === idEmEdicao
        );
        const tarefaEditada= {
            ...tarefas[indice],
            titulo : titulo,
            descricao : descricao,
            prioridade: prioridade,
            data : data,
        } 

        tarefas[indice]=tarefaEditada;
        renderizarTarefas(tarefas, "#lista-tarefas");
        mensagemFormulario.textContent = "Tarefa editada com sucesso!";    
    }
    restaurarFormulario();
});

listaTarefas.addEventListener("click", event =>{
    const botao = event.target.closest("[data-acao]")

    if (!botao) {
        return;
    }

    const id = Number(botao.dataset.id);
    const tarefa = tarefas.find(
        tarefa => tarefa.id === id
    );

    if (botao.dataset.acao === "concluir"){
        tarefa.concluida = !tarefa.concluida;
        renderizarTarefas(tarefas, "#lista-tarefas");
    } else if (botao.dataset.acao === "editar"){
        idEmEdicao = id;
        campoTitulo.value = tarefa.titulo;
        campoDescricao.value = tarefa.descricao;
        campoPrioridade.value = tarefa.prioridade;
        campoData.value = tarefa.data;

        const tituloFormulario = document.querySelector("#titulo-formulario");
        const botaoSalvar = document.querySelector("#botao-salvar");
        const botaoCancelar = document.querySelector("#botao-cancelar");

        tituloFormulario.textContent = `Editar Tarefa ${idEmEdicao}`;
        botaoSalvar.textContent = "Salvar edições";
        botaoCancelar.hidden = false;
        mensagemFormulario.textContent = "";
        
    } else if(botao.dataset.acao === "excluir"){
        const indice = tarefas.findIndex(
            tarefa => tarefa.id === id);
        
        const confirmou = window.confirm(
            "Deseja excluir esta tarefa?"
        );
        if(!confirmou){
            return;
        }   
        tarefas.splice(indice, 1); 
        renderizarTarefas(tarefas, "#lista-tarefas");
        if(idEmEdicao === id){
            restaurarFormulario();
        }
        mensagemFormulario.textContent= "Tarefa excluída com sucesso!";
    }
});

botaoCancelar.addEventListener("click", () =>{
    restaurarFormulario();
    mensagemFormulario.textContent = "";
});


// PERSISTENCIA DE DADOS LAB 14 
// JSON.stringify() transforma dados JavaScript em uma representação textual.
// const tarefa = {
//     id: 1,
//     titulo: "Estudar JavaScript",
//     concluida: false
// };

// const texto1 =
//     JSON.stringify(tarefa);

// console.log(texto1);

// console.log(
//     typeof texto1
// );

// Arrays também podem ser convertidos
// const tarefasTeste = [
//     {
//         id: 1,
//         titulo: "Estudar JavaScript"
//     },
//     {
//         id: 2,
//         titulo: "Revisar exercício"
//     }
// ];

// const texto2 =
//     JSON.stringify(
//         tarefasTeste
//     );

// console.log(texto2);

// const dados =
//     JSON.parse(texto2);

// console.log(dados);

// console.log(
//     Array.isArray(dados)
// );


function salvarTarefas() {
    // transforma os dados guardados na array em JSON para serem guardados nno local storage
    const dados = JSON.stringify(tarefas);

    // guarda no local storage 
    localStorage.setItem("tasklab:tarefas",dados);
}

function carregarTarefas(){
    const dados = localStorage.getItem("tasklab:tarefas");

    if(!dados){
        return[];
    }
    // transforma os dados guardados no localstorage em uma array novamente 
    return JSON.parse(dados);
    }

renderizarTarefas(tarefas, "#lista-tarefas");

