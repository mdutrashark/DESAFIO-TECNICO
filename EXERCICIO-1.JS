// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele 
// calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no 
// código; 

// Função que passa o parâmetro e executa o código
function numeroFibonacci(num) {

    // Definindo váriaveis dos 2 primeiros termos e do próximo
    let a = 0;  // Primeiro termo
    let b = 1;  // Segundo termo
    let proximoNumero;

    //Adicionei essas váriaveis para calcular também a posição do número na sequência
    const raizDe5 = Math.sqrt(5);
    let calculoFn = num*raizDe5;
    let calculoPosicao = Math.log(calculoFn)/0.4812;

    // Estrutura de repetição que calcula a sequência de Fibonacci
    while (b <= num) {
        proximoNumero = a + b;
        a = b; 
        b = proximoNumero;  
    }

    // Condicional que verifica se o número pertence à sequência de Fibonacci
    if (a === num || b === num) {
        return `O número ${num} está na sequência de Fibonacci na posição ${Math.round(calculoPosicao)}`;
    } else {
        return `O número ${num} NÃO ESTÁ na sequência de Fibonacci.`;
    }
}

//Váriavel que recebe o número a ser identificado
let numeroEscolhido = 50;
console.log(numeroFibonacci(numeroEscolhido));
