// impressão de valores
console.log("Javascript carregado com sucesso!!");

// variavel com let
let quantidade = 3;
console.log(quantidade);
quantidade = 5;
console.log(quantidade);

// constante com const
const nomeCurso = "Desenvolvimento de interfaces web";
console.log(nomeCurso);

const instituicao = "Puc Minas";
console.log(instituicao)

// tipos de dados e como descobrir
const nomeAluno= "Jamily";
const quantidadedePedidos= 12;
const possuiDesconto= true;
const endereco= undefined;
const observacao= null;
console.log(typeof nomeAluno);
console.log(typeof quantidadedePedidos);
console.log(typeof possuiDesconto);
console.log(typeof endereco);
console.log(typeof observacao);
console.log(typeof false);

// concatenacao
const nome= 'Ana';
const idade= 21;
const mensagem = 'Nome: ' + nome + '| Idade: '+ idade;
console.log(mensagem);

const novaMensagem = `Nome: ${nome}, Idade: ${idade}`;
console.log(novaMensagem);

// Numeros e operacoes
const preco = 123;
const quant = 2;
const percentualDesconto= 10;

const subtotal = preco * quant;
const desconto = subtotal /percentualDesconto;
const total = subtotal- desconto;

console.log(`Subtotal : ${subtotal}`);
console.log(`Desconto : ${desconto}`);
console.log(`Total : ${total}`);

// expressoes
    // ordem das operações
    const resultado1 = 10 + 5 * 2;
    const resultado2 = (10 + 5) * 2;

    console.log(resultado1);
    console.log(resultado2);

    // operadores relacionais
    const age = 18;

    console.log(age > 18);
    console.log(age >= 18);
    console.log(age < 18);
    console.log(age <= 18);

    // Igualdade
    console.log(quantidade === 10);
    console.log(quantidade !== 10); 
    console.log(10 == 10);
    console.log(10 !== `10`);

    // operadores logicos
    // &&
    const id = 20;
    const possuiIngresso = true;
    const podeEntrar = 
        id >=18 && possuiIngresso;
    console.log(podeEntrar)

    // ||
    const ehProfessor = false;
    const ehAluno = true;
    const possuiAcesso =
        ehProfessor || ehAluno;
    console.log(possuiAcesso);

    // !const or let (inversão de um booleano)
    const bloqueado = false;
    console.log(!bloqueado);


// Exercício — Compra

const nomeProduto = 'Morango';
const precoMorango = 10;
const qntd = 5;
const percenDesconto = 10;
let disponibilidade = true;

const subtt = precoMorango * qntd;
const desc = subtt / percenDesconto;
const valorFinal = subtt - desc;

console.log(`Subtotal: ${subtt}`);
console.log(`Desconto: ${desc}`);
console.log(`Valor Final: ${valorFinal}`);

console.log(typeof precoMorango);
console.log(typeof disponibilidade);
console.log(typeof valorFinal);


// Decisões
const nota= 55;
const frequencia = true;
if (nota >=60){
    console.log("Aprovado");
}
else if (nota >= 50){
    console.log("Na média");
}
else {
    console.log("Reprovado");
}

if(nota >= 60 && frequencia){
    console.log('Aprovado');
}
else if (nota >= 50 && frequencia){
    console.log('Mediano');
}
else{
    console.log('Reprovado');
}

// Exercício — Pedido prioritário
