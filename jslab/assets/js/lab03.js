// Arrays, objetos e processamenot de dados

// ARRAYS
const categorias = [
    'infraestrutura',
    'software',
    'hardware',
    'redes'
];

console.log(categorias)

// posicoes -indices- dos elementos na array
console.log(categorias[0]);
console.log(categorias[2]);
console.log(categorias[1]);

// quantidade de elementos na colecao
console.log(categorias.length);

// ultimo elemento de uma colecao -array-
const ultimoElemento =
    categorias[categorias.length -1];

console.log(ultimoElemento);

// adiciona elemento ao final da array
categorias.push('cibersecurity');
console.log(categorias);

//removendo o ultimo elemento
const removeElemento = categorias.pop();
console.log(removeElemento); 
console.log(categorias); 

//percorre elementos - 2 formas
    // utilizando for
for (i = 0; i<= categorias.length -1; i++){
    console.log(categorias[i]);
}
    // utilizando metodo js de coleção forEach
categorias.forEach (categoria =>{
    console.log(categoria);
});



//OBJETOS
// valores que representam uma mesma entidade formam um obbejto e, 
// o que anteriormente estava separado pode ser junto, formando entao o objeto
    // antes
    const idPessoa = 12;
    const nome = "jamily";
    const cor = "amarelo";
    // depois
    const pessoa = {
        idPessoa: 12,
        nome: "Jamily",
        cor: "roxo"
    };

// acessar propriedades
console.log(pessoa.idPessoa);
console.log(pessoa.cor);

// modificando propriedades
pessoa.cor = "vermelho";
console.log(pessoa.cor);


// ARRAYS DE OBJETOS
// combinando ambos os conceitos
const pedidos = [
    {
        id: 1042,
        cliente: "Clínica Central",
        prioridade: "alta",
        status: "atendimento",
        valor: 850
    },
    {
        id: 1043,
        cliente: "Loja Horizonte",
        prioridade: "normal",
        status: "aberto",
        valor: 420
    },
    {
        id: 1044,
        cliente: "Escritório Almeida",
        prioridade: "urgente",
        status: "aberto",
        valor: 1200
    }
];

// percorrendo objetos de dentro do array
pedidos.forEach(pedido =>{
    console.log(
        `${pedido.id} - ${pedido.cliente}`
    );
});

// desetruturação
const pedido =pedidos[0];
const idPedido = pedido.id;
const clientePedido = pedido.cliente;

// ou tambem podemos desestruturar assim
const {id, cliente, valor} = pedidos[2];
console.log(id);
console.log(cliente);
console.log(valor);

// Também podemos desetruturar em uma função
pedidos.forEach(pedido => {
    const {id,cliente,status} = pedido;
    console.log(`${id} - ${cliente} - ${status}`
    );
});

//  não há a necessidade de desestruturar todos os elementos do objeto
// somente quando precisar deixar o codigo mais claro


// PROCESSANDO A COLEÇÃO

// localizar pedidos
const localizaPedido = pedidos.find(
    pedido => pedido.id === 1043
);
const localizaPedidoInexistente = pedidos.find(
    pedido => pedido.id === 9999
);

console.log(localizaPedido);
console.log(localizaPedidoInexistente);

//retorna posicaodo objeto
const retornaIndice = pedidos.findIndex(
    pedido => pedido.id === 1043
);
const retornaIndiceInexistente = pedidos.findIndex(
    pedido => pedido.id === 9999
);

console.log(retornaIndice);
console.log(retornaIndiceInexistente);

//filtrar/apresenta todos os elemento condizentes de um condicao
const statusAberto = pedidos.filter(
    pedido => pedido.status === 'aberto'
);

console.log(statusAberto);


// Exercicio - Filtrando por prioridade
const filtrarPorPrioridade = pedidos.filter(
    pedido => pedido.prioridade === "alta"
);
console.log(filtrarPorPrioridade);


//transformar dados, forma de apresentação    
const resumos = pedidos.map(
    pedido => pedido.cliente
); 
console.log(resumos);

// criando novos valores com map()
const criandoResumos =
    pedidos.map(pedido => {
        return `${pedido.id} - ${pedido.cliente}`;
    });

console.log(criandoResumos);

// includes
const texto = "Clínica Central";
const termo = "central";

console.log(
    texto.includes("Central")
);

console.log(
    texto.includes("central")
);

console.log(
    texto
        .toLowerCase()
        .includes(termo.toLowerCase())
);


// 35. Função de pesquisa
function pesquisarPedidos(termo) {
    const termoNormalizado =
        termo.toLowerCase();

    return pedidos.filter(pedido =>{
        if (pedido.cliente.toLowerCase().includes(termoNormalizado)|| 
            pedido.status.toLowerCase().includes(termoNormalizado) || 
            pedido.prioridade.toLowerCase().includes(termoNormalizado)
        ){
                return true;
        } else{
            return false;
        }}
    );
}

const testeCliente = pesquisarPedidos("Aberto");
console.log(testeCliente);
