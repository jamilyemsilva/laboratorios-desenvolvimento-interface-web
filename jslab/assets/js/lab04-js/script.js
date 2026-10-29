const resumo =
    document.querySelector("#resumo");
    // retorna o primeiro elemento que corresponde ao seletor CSS informado.
console.log(resumo);

resumo.textContent =
` ${pedidos.length} pedidos encontrados`;
// para alterar o conteúdo textual de um elemento - bnesse caso, do id resumo.

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
const lista =
    document.querySelector("#lista-pedidos");
lista.append(paragrafo);


    // Removendo elementos
    // Criação e remoção dinâmica 
    // serão importantes para renderizar dados.
paragrafo.remove();