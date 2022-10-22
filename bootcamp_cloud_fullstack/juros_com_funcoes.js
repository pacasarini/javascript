/* exercicio da aula de funções.
formas de pagamento:
 1- à vista, débito, recebe 10% de desconto
 2- a vista no dinheiro, recebe 15% de desconto
 3 - em duas vezes, preço normal de etiqueta
 4 - acima de duas vezes, 10% de juros
*/

function calcularPagamento (valor, descontoOuJuros){
    return(valor * descontoOuJuros);
}


const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1) {
    console.log(calcularPagamento(precoEtiqueta, 0.9));
} else if (formaDePagamento === 2) {
    console.log(calcularPagamento(precoEtiqueta, 0.85));
} else if (formaDePagamento === 3) {
    console.log(calcularPagamento(precoEtiqueta, 1));
} else if (formaDePagamento === 4) {
    console.log(calcularPagamento(precoEtiqueta, 1.1));
}

calcularPagamento();

/* OBS: no exercicio eu utilizei um calculo diferente do professor. 
O professor utilizava na funcao aplicarDesconto:
return (valor - (valor * (desconto/100));
Eu achei mais facil utilizar o calculo por multiplicação e testei 
a formula acima, obtendo sucesso.
*/