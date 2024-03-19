//Faça um programa que leia 3 valores informados pelo usuário(considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var numero1 = parseInt(prompt("Por favor, informe um número"));
var numero2 = parseInt(prompt("agora, informe outro número"));
var numero3 = parseInt(prompt("informe mais um número"));

if (numero1 > numero2 && numero1 > numero3) {
    alert("A soma dos dois maiores é  "+(numero1+numero2));
}
else if (numero2 > numero1 && numero3 > numero1) {
    alert("A soma dos dois maiores é  "+(numero2+numero3));
}

else   {
    alert("A soma dos dois maiores é "+ (numero3+numero1));
}