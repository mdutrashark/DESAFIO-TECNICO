// Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a
// quantidade de vezes em que ela ocorre. 

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida 
// no código; 


//Função que passa os parâmetros e executa o código
function verificaString(string, letra){
    let quantidade = 0;

    // Estrutura de repetição que compara e conta as letras
    for(letraNaString of string){
        if(letraNaString === letra || letraNaString === letra.toUpperCase()){
            quantidade++;
        }
    } return quantidade;
}

//Chamando a função dentro de uma váriavel, passando os métodos e depois imprimindo resultado na tela
let resultado = verificaString('As palavras podem ser MAIUSCULAS ou MINUSCULAS', 'a');
console.log('A quantidade de letras (a) na frase é: ' + resultado);