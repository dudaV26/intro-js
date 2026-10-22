//Variaveis - Uma variavel nada mais é do que um identificador que permite acesqsar um valor armazenado durante a execução do código.

//Ex: Imagine uma caixa etiquetada - a etiqueta é o nome da variavel e o conteúdo é o valor atual que ela armazena/representa

//let etiqueta = valor

let nome = 'Duda';

/* O JS POSSUI 3 FORMAS DE DECLARAR VARIÁVEIS*/

//1- const:
const pais = 'Brasil';
console.log(pais);
//Eu estou informando para o programa que sempre será Brasil, sempre será constante, o valor não muda.
//Com a declaração const não é possivel  reatribuir novos valores para a variavel

//2- let:
let idade = 20;
console.log(idade);

idade = 23;
console.log(idade);
//A gente usa o let quando o valor precisa ser alterado durante o programa.
//Pode redeclacar a variavel

//3-var(não recomendado) var de variable
var cidade = 'São Paulo';
console.log(cidade);

//reatribuindo o valor da variavel
cidade = 'Santos';
console.log(cidade);
