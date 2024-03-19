//Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

var num1 = parseFloat(prompt("Digite um número: "));
var num2 = parseFloat(prompt("Digite um número: "));
var num3 = parseFloat(prompt("Digite um número: "));
var num4 = parseFloat(prompt("Digite um número: "));
var num5 = parseFloat(prompt("Digite um número: "));
var num6 = parseFloat(prompt("Digite um número: "));

var média = ((num1 + num2 + num3 + num4 + num5 +num6)/ 6) ;
var soma = ( num1 + num2 + num3 + num4 + num5 +num6 );
alert("A soma dos numeros " + num1 +"," + num2 +","+ num3+"," + num4+"," + num5+","+ num6 + " é igual a " + soma + "."+ "E o valor da média aritimática é igual a " + média + ".");

