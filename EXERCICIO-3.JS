// Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?  


// Definindo as váriaveis
const INDICE = 12;
let k = 1;
let SOMA = 0;

// Estrutura de repetição que realiza o cálculo
while(k < INDICE){
    k += 1;
    SOMA += k;
    console.log(SOMA);
}