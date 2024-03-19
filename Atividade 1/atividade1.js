// Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles. 
        
var numero1 = parseInt(prompt("Por favor, informe um número"));
var numero2 = parseInt(prompt("agora, informe outro número"));

if (numero1 > numero2) { alert(numero1 + " é maior que " + numero2 + "."); }
else if (numero1 < numero2) { alert(numero2 + " é maior que " + numero1 + "."); }
else { alert(numero2 + " é igual que " + numero1 + "."); }