//Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.
        
var numero1 = parseInt(prompt("Por favor, informe um número"));


if (numero1 > 0) {
     alert(numero1 + " é positivo " + "."); }
else if (numero1 < 0) {
     alert(numero1 + " é negativo " + "."); }
else { alert("o número informado é zero."); }