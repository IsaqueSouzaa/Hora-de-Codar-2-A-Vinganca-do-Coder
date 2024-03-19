// Uma micro calculadoraEscreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
       // O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.    Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações                    


       var numero1= parseInt(prompt("insira o primeiro valor"));
       var numero2 = parseInt(prompt("insira o segundo valor"));
       var operação = prompt("Escolha uma operação: 1.Adição, 2. Subtração, 3. Divisão, 4. Multiplicação");                                                   
       
      
        var resultado
       
       if (operação == 1){
          alert (resultado = numero1+numero2)
       }

       else if(operação == 2){
          alert (resultado = numero1-numero2)
       }

       else if(operação == 3){
          alert( resultado = numero1/ numero2)
       }

       else if(operação == 4){
           alert (resultado = numero1*numero2)
       }

