//Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

var soma = 0;
var i = 0;
var numero = " ";
do {
    var n1 = Number(prompt("digite um numero"))
    if (n1 < 72) {
        alert("Digite outro numero: ");
    }
    else {
        i++
        soma = soma + n1
        numero = numero + (n1 + ", ");
    }
} while (i < 6)
alert("A soma dos numeros é " + soma + "todos os numeros informados são " + numero);
