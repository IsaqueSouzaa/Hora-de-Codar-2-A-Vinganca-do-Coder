//Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
        
var numero1 = parseInt(prompt("Por favor, informe um número"));
var numero2 = parseInt(prompt("agora, informe outro número"));
var numero3 = parseInt(prompt("informe mais um número"));


if (numero1 > numero2 && numero1 > numero3) {
     alert(numero1 + " é maior que " + numero2 + " e " + numero3); }
else if (numero2 > numero1 && numero2 > numero3) {
     alert(numero2 + " é maior que " + numero1 + " e " + numero3); }
else if (numero3 > numero1 && numero3 > numero2) {
     alert(numero3 + " é maior que " + numero1 + " e " + numero2); }