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

// 13. Exercício — Contagem regressiva
let valor = 10;

while (valor > 0){
    console.log(valor);
    valor -=1;
}
console.log(`fim`)
