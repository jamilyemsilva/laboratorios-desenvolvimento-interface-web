// buscando id via parametro da url
const parametros =
    new URLSearchParams(
        window.location.search
    );
const id =
    Number(parametros.get("id"));
console.log(id);

// Localizando o pedido
function localizarPedido(pedidos, id) {
    const pedido = pedidos.find(
        (item) => item.id === id
    );

    const container = document.querySelector(`#detalhes-pedido`);

    if (pedido) {
        container.append(criarCardPedido(pedido));
    } else {
        container.textContent = `Pedido não encontrado.`;
    }
}

localizarPedido(pedidos, id);