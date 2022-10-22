/*
crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que dado a quantidade de KM e o preço de combustível nos dê o
valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){    //dados obrigatórios, melhor usar o CONSTRUTOR 
        this.marca = marca;                      //variavel no contexto dessa função, que é o objeto
        this.cor = cor;                          //as variaveis dentro do objeto sao "ATRIBUTOS"
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //MÉTODO é uma acao dentro do objeto:
    calcularGastoViagem(distanciaEmKm, precoCombustivel){
        return this.gastoMedioPorKm * distanciaEmKm * precoCombustivel;
    }
}
                                                
const uno = new Carro('Fiat', 'branco', 1/12);

uno.calcularGastoViagem();
console.log(uno.calcularGastoViagem(70, 5));


const palio = new Carro('Fiat', 'Preto', 1/10);

palio.calcularGastoViagem();
console.log(palio.calcularGastoViagem(70, 5));

const x3 = new Carro('BMW', 'Vermelha', 1/8);

x3.calcularGastoViagem();
console.log(x3.calcularGastoViagem(200,5));