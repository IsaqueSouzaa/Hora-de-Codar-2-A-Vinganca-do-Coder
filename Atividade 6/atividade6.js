//Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

var numero1 = parseFloat(prompt("Digite um número: "));
var numero2 = parseFloat(prompt("Digite um número: "));
var numero3 = parseFloat(prompt("Digite um número: "));
var numero4 = parseFloat(prompt("Digite um número: "));



if (numero1 > numero2 && numero1 > numero3 && numero1>numero4) {
    alert("O primeiro numero é "+numero1 +". O ultimo numero é "+ numero4 +".O maior numero é " + numero1);
}
else if (numero2 > numero1 && numero3 > numero1 && numero1>numero4) {
    alert("O primeiro numero é "+numero1 +". O ultimo numero é "+ numero4 +".O maior numero é"+ numero2);
}

else  if(numero3 > numero1 && numero3 > numero2 && numero3 > numero4) {
    alert("O primeiro numero é "+numero1 +". O ultimo numero é "+ numero4 +".O maior numero é "+ numero3);
}

else {
    alert ("O primeiro numero é "+numero1 +". O ultimo numero é "+ numero4 +".O maior numero é " +numero4)
}