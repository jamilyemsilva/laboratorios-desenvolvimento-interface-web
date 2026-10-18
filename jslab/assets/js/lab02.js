// estruturas de repeticoes
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i= 2; i <=10; i++){
    console.log(i);
    i ++;
}

// repeticao com calculo
let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma = soma + i;
}
console.log(soma);

// Percorra os números de 1 até 20 e apresente somente os números pares.
for (i = 1; i <=20; i++){
    if (i % 2 ==0){
        console.log(i);
    }
}

// estrutura while
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

// 12. Exercício — Processamento de pedidos
const quantidadePedidos = 8;

for (i=1; i<=quantidadePedidos; i++){
    console.log(`Processando pedido ${i}`);
}

// Exercício — Contagem regressiva
let valor = 10;

while (valor > 0){
    console.log(valor);
    valor -=1;
}
console.log(`fim`);

// Funcoes 
function exibirSaudacao(){
    console.log(`olá`);
}
exibirSaudacao();

// parametros
function exibirNome(seuNome){
    console.log(seuNome);
}

exibirNome('Jamily');
exibirNome('Miqueias');
exibirNome('Analu');


// retornando valores
function calcularPreco(valor, quantidade){
    return valor * quantidade;
}
let totalPedido= calcularPreco(20,3);
console.log(totalPedido);

totalPedido= calcularPreco(10.5,2);
console.log(totalPedido);


// Exercício — Desconto
function calcularDesconto(valor, percentual) {
    let desconto = valor * percentual;
    return desconto + valor;
}
let desconto = calcularDesconto(120, 0.10);
console.log(desconto);


// Exercício — Situação acadêmica

function verificarSituacao (nota, frequencia){
    if (nota >= 60 && frequencia >= 75){
        console.log(`Você passou`);
    }
    else if(nota <60 && frequencia >=75) {
        console.log(`nota faltante`);
    }
    else if(nota >=60 && frequencia <75){
        console.log(`frequencia faltante`);
    }
    else {
        console.log(`Você reprovou`);
    }
}

const nota1= verificarSituacao(65, 75);
const nota2= verificarSituacao(65, 70);
const nota3= verificarSituacao(50, 75);
const nota4= verificarSituacao(50, 40);


// escopo 
function calcular() {
    const resultado = 10 + 20;

    console.log(resultado);
}

calcular();
// console.log(resultado); 
// variaveis fora do escopo não conseguem serem acessadas


//  sintaxe moderna para funções.
    // sintaxe 01;
function somar(a, b) {
    return a + b;
}
const somando= somar(2,3);
console.log(somando);


    // sintaxe 02;
const somar02 = (a, b) => {
return a + b;
};
console.log(somar02(1,2));


    // sintaxe 03;
const somar03 = (a, b) => a + b;
console.log(somar03(5,7));


// Depuração
function calcularValorFinal(
    preco,
    quantidade,
    percentualDesconto
) {
    const subtotal =
        preco * quantidade;

    const desconto =
        subtotal * percentualDesconto / 100;

    const total =
        subtotal - desconto;

    return total;
}

const resultado =
    calcularValorFinal(80, 3, 10);

console.log(resultado)

//  branch de correcao usando breakpoint 
function calcularMedia(
    nota1,
    nota2,
    nota3
) {
    const total =
        nota1 + nota2 + nota3;

    const media =
        total / 3;

    return media;
}

console.log(
    calcularMedia(70, 80, 90)
);

// Desafio — Faixa de temperatura
function verificaTemperatura(temperatura){
    if (temperatura <= -5){
        console.log(`A temperatura ${temperatura} condiz a: Muito frio `);
    } else if (temperatura <= 10){
        console.log(`A temperatura ${temperatura} condiz a: Frio `);
    } else if (temperatura >= 11 && temperatura <=19){
        console.log(`A temperatura ${temperatura} condiz a: Agradável `);
    } else if (temperatura >= 20 && temperatura<= 25){
        console.log(`A temperatura ${temperatura} condiz a: Quente `);
    } else{
        console.log(`A temperatura ${temperatura} condiz a: Muito quente `);
    }
}

const temperaturaMuitoBaixa = verificaTemperatura(-5); 
const temperaturaBaixa = verificaTemperatura(5); 
const temperaturaAgradavel = verificaTemperatura(12); 
const temperaturaAlta = verificaTemperatura(20); 
const temperaturaMuitoAlta = verificaTemperatura(29); 


// Desafio — Processamento de pedidos
function alterarValor(numeroPedido){
    if (numeroPedido == 1){
        return 20;
    } else if (numeroPedido == 2){
        return 30;
    } else if (numeroPedido == 3){
        return 40;
    } else {
        return 50;
    }
}

function alterarQuantidade(quantidadePedido){
    if (quantidadePedido == 1){
        return 3;
    } else if (quantidadePedido == 2){
        return 5;
    } else if (quantidadePedido == 3){
        return 2;
    } else {
        return 1;
    }
}

function calcularSubtotal(preco, quantidade){
    return preco * quantidade;
}
function calcularDesconto( subtotal, valorDesconto){
    return subtotal * valorDesconto / 100;
}
function calcularTotal(subtotal, desconto){
    return subtotal - desconto;
}
function classificarPedido(total){
    if(total <= 25){
        console.log(`Valor baixo`);
    }else if(total > 25 && total <= 100){
        console.log(`Valor medio`);
    } else{
        console.log(`Valor alto`);
    }
}

let pedidos = 1;
while(pedidos <=4){   
    
    let subtotal = calcularSubtotal(alterarValor(pedidos), alterarQuantidade(pedidos));
    let descontoPedido = calcularDesconto(subtotal, 50);
    let totalDePedido = calcularTotal(subtotal, descontoPedido);
    let classificacao = classificarPedido(totalDePedido);
    pedidos ++
}