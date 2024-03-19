//Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente" 

function lerNumero(mensagem) {
    return parseFloat(prompt(mensagem));
}


    function calcularMedia(numero1, numero2, numero3, numero4) {
    return (numero1 + numero2 + numero3 + numero4) / 4;
}


    function verificarMedia() {
    var numero1 = lerNumero("Digite um numero");
    var numero2 = lerNumero("Digite outro numero");    
    var numero3 = lerNumero("Digite outro numero");
    var numero4 = lerNumero("Digite outro numero");

 
    if (numero1 > 0 && numero1 < 10 && numero2 > 0 && numero2 < 10 && numero3 > 0 && numero3 < 10 && numero4 > 0 && numero4 < 10) {
   
        let media = calcularMedia(numero1, numero2, numero3, numero4);
        

        if (media > 5) {
            alert("Você passou");
        } else {
            alert("Tente novamente");
        }
    } else {

        alert("Os números devem estar entre 0 e 10");
    }
}