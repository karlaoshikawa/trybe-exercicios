/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, 
a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
const a = 30;
const b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


/* 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas 
constantes com os valores que serão comparados.*/
const maiorOuMenor1 = 120;
const maiorOuMenor2 = 200;
if (maiorOuMenor1 > maiorOuMenor2) {
  console.log(maiorOuMenor1);
} else {
  console.log(maiorOuMenor2);
}


/* 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores 
que serão comparados.*/
const aa = 120;
const ab = 200;
const ac = 300;

if (aa > ab && aa > ac) {
  console.log("O maior de três é " + aa + "(aa)");
} else if (ab > aa && ab > ac) {
  console.log("O maior de três é " + ab + "(ab)");
} else {
  console.log("O maior de três é " + ac + "(ac)");
};


/* 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo,
 "negative" se for negativo e "zero" caso contrário.*/
const plus = -38;

if (plus > 0) {
  console.log("positive");
} else {
  console.log("negative");
};


/* 5 - 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for 
inválido o programa deve retornar uma mensagem de erro.*/

const aa = 20;
const ab = 60;
const ac = 90;

if (aa > 0 && ab > 0 && ac > 0) {
  if (aa + ab + ac === 180) {
    console.log("true");
  } else {
    console.log("false");
  };
} else {
  console.log("Angulo incorreto - o valor deve ser maior que 0");
};


/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let xadrez = "REI";
let peca = xadrez.toLowerCase();

if (peca = "rei") {
  console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
} else if (peca = "rainha") {
  console.log("Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
} else if (peca = "torre") {
  console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
} else if (peca = "bispo") {
  console.log("Move-se na diagonal, quantas casas quiser.");
} else if (peca = "cavalo") {
  console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.");
} else if (peca = "peao") {
  console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. ");
} else {
  console.log("Peça inválida");
};

xadrez = "RAINHA"


/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let porcentagemNota = 89;

if (porcentagemNota > 100 || porcentagemNota < 0) {
  console.log("Nota invalida, a nota deve ser um numero entre 0 a 100");

} else if (porcentagemNota >= 90) {
  console.log("Nota A");

} else if (porcentagemNota >= 80) {
  console.log("Nota B");

} else if (porcentagemNota >= 70) {
  console.log("Nota C");

} else if (porcentagemNota >= 60) {
  console.log("Nota D");

} else if (porcentagemNota >= 50) {
  console.log("Nota E");

} else {
  console.log("Nota F");
}

/* 8 - 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

const num1 = 20 ;
const num2 = 13 ;
const num3 = 17 ;
let par = false ;

if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 )) {
  par = true;
} ;
console.log(par);


/* 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

const num1 = 20 ;
const num2 = 13 ;
const num3 = 17 ;
let impar = false ;

if ((num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0 )) {
  impar = true;
} ;
console.log(impar);


/* 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

const custo = 200 ;
const valor = 300 ;

let custoTotal;
let lucroVenda;

custoTotal = custo * 20/ 100 + custo 
lucroVenda = ( valor - custoTotal ) * 1000

if (custo > 0 && valor > 0) {
  console.log("O lucro da venda de 1000 unidades e ", lucroVenda )
} else {
  console.log("O valor e o custo devem ser numeros positivos.");
}
