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

if ( aa > ab && aa > ac ) {
  console.log("O maior de três é " +aa+ "(aa)" );
} else if ( ab > aa && ab > ac ) {
  console.log("O maior de três é " +ab+ "(ab)" );
} else {
  console.log("O maior de três é " +ac+ "(ac)" );
};


/* 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo,
 "negative" se for negativo e "zero" caso contrário.*/
 const plus = -38 ;

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

if ( aa > 0 && ab > 0 && ac > 0) {
 if (aa + ab + ac === 180) {
  console.log("true");
} else {
  console.log("false");
};
 } else {
  console.log("Angulo incorreto - o valor deve ser maior que 0");
};



