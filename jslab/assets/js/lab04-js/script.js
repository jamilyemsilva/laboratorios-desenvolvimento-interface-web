const resumo =
    document.querySelector("#resumo");
    // retorna o primeiro elemento que corresponde ao seletor CSS informado.
console.log(resumo);

resumo.textContent =
` ${pedidos.length} pedidos encontrados`;
// para alterar o conteúdo textual de um elemento - nesse caso, do id resumo.

// outro exemplo 
// let titulo =
//     document.querySelector("h1");

// titulo.textContent =
//     "JSLab — Gestão de Pedidos";


    // Selecionando vários elementos
const elementos =
    document.querySelectorAll(".teste");
    // seleciona todos os seletores com a classe teste

console.log(elementos);


    // Percorrendo elementos
elementos.forEach(elemento => {
    console.log(elemento.textContent);
})


    // Classes com JavaScript
    // permitem alterar estados visuais sem modificar diretamente
    //  propriedades CSS pelo JavaScript.
// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()


    // Alterando atributos
const link =
    document.querySelector("#link-ajuda");

link.setAttribute(
    "href", "https://example.com"
)
console.log(
    link.getAttribute("href")
);


    // Criando elementos
const paragrafo =
    document.createElement("p");

paragrafo.textContent =
    "Elemento criado com JavaScript";

console.log(paragrafo);
    // O elemento existe em memória.
    // Ainda não foi inserido na página.


    // Inserindo no documento
    // Agora o elemento aparece na página.
// const lista =
//     document.querySelector("#lista-pedidos");
// lista.append(paragrafo);


//     // Removendo elementos
//     // Criação e remoção dinâmica 
//     // serão importantes para renderizar dados.
// paragrafo.remove();

//     // Criando um card
//     // ideia básica
// const artigo = 
//     document.createElement("article");

// const titulo = 
//     document.createElement("h3");

// titulo.textContent =
//     "Pedido PS-1042";

// artigo.append(titulo); 
// // o titulo vai ser adicionado ao artigo
// lista.append(artigo);
// o artigo com o titulo dentro vai ser adicionado a lista


    // funcao formatar valor em moeda
function formatarMoeda(valor){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor); 
}

    // funcao criar card pedido
function criarCardPedido(pedido){
    const artigo = document.createElement("article");

    const titulo = document.createElement("h2");
    const codigo = document.createElement("p");
    const cliente = document.createElement("p");
    const categoria = document.createElement("p");
    const prioridade = document.createElement("p");
    const status = document.createElement("p");
    const valor = document.createElement("p");
    const botao = document.createElement("button");

    titulo.textContent = `PS-${pedido.id}`;
    codigo.textContent = `código: ${pedido.id}`;
    cliente.textContent = `cliente: ${pedido.cliente}`;
    categoria.textContent = `categoria: ${pedido.categoria}`;
    prioridade.textContent = `prioridade: ${pedido.prioridade}`;
    status.textContent = `status: ${pedido.status}`;
    valor.textContent = `valor: ${formatarMoeda(pedido.valor)}`;
    botao.textContent = `Ver detalhes`;
    // botao.setAttribute("data-id", pedido.id);
    botao.dataset.id = pedido.id;
    botao.dataset.acao = `Detalhes`;

    artigo.append(
        titulo, 
        codigo, 
        cliente, 
        categoria, 
        prioridade, 
        status, 
        valor,
        botao
    );

    return artigo;
}

    // funcao de renderização
function renderizarPedidos(listaPedidos, localRenderizacao) {

    const lista =
        document.querySelector(
            localRenderizacao
        );

    lista.textContent = "";

    if (listaPedidos.length == 0){
        lista.textContent = `Nenhum pedido encontrado.`;
        return;
    } else{
        listaPedidos.forEach(pedido => {
            const card = criarCardPedido(pedido);
            lista.append(card);
        });
        return lista;
    }
}   

renderizarPedidos(pedidos, "#lista-pedidos");




// --- Eventos e Interações ---

    // Eventos
// a resposta do js a ações como: cliques, digitação, 
// alteração de campos, envio de formulário e movimento do ponteiro

    // addEventListener()
const botao = document.querySelector(`#botao-teste`);

botao.addEventListener(
    "click",
    () => {
        console.log(`Botão Clicado`);
    }
    // ao clicarmos, o nosso ouvidor de evntos vai disparar o que pedimos,
    // nesse caso, vaia presentar no console a texto "Botão clicado"
);

    // Relacionando interface e dados
//  precisaremos saber ao o que o botao clicado corresponde, por exemplo, 
// a qual pedido. Portanto, vamos usar atributos personalizados do HTML
    // data-* 
    // atribue algo a determinado conteudo para que indentifiquemos ele e assim possamos
    // por exemplo, diferenciar a que esse botao está vinculado

    // Em vez de depender de um listener criado manualmente para cada botão, 
    // podemos ouvir os cliques no container: Observe o elemento que originou o evento.
const lista =
    document.querySelector(
        "#lista-pedidos"
    );

lista.addEventListener(
    "click",
    event => {
        console.log(event.target);
    }
);

    // closest()
    // Queremos identificar se o clique ocorreu em um elemento relacionado a uma ação.
lista.addEventListener(
    "click",
    event => {

        const botao =
            event.target.closest(
                "[data-acao]"
            );

        if (!botao) {
            return;
        }

        console.log(botao.dataset);
    }
);
// atingue somente elementos com "data-acao" como atributo


    //Busca na Interface
    
// function buscarPedido(listaPedidos, termo){ 
//     const termoFormatado = termo.toLowerCase().trim();

//     return listaPedidos.filter(pedido => {
//         return pedido.categoria.toLowerCase().includes(termoFormatado);
//     }); 
// }


const campoBusca = document.querySelector(`#campo-busca`);
// com base em um input feito no html, capturamos ele e colocamos um ouvidor de eventos 
// especificando o input e, de acordo com isso, manipulamos ele
campoBusca.addEventListener(
    `input`,
    () => {
        const termo = campoBusca.value;
        const pedidosFiltrados = buscarPedido(pedidos, termo);
        renderizarPedidos(pedidosFiltrados);
    }
) 


