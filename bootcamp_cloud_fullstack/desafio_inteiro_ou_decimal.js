/*Desafio
Faça um Programa que peça ao usuário que insira o valor, em seguida deverá 
ser mostrado se o número é classificado como INTEIRO ou DECIMAL. 

Entrada 
A entrada consiste em um valor númerico, inteiro ou decimal.

Saída
A saída verá mostrar se o valor é inteiro ou decimal*/


let valor = gets();

function teste () {
  if(valor % 1 === 0) {
    return("Inteiro");
  } else {
    return("Decimal");
  }
}

print(teste(valor)); 