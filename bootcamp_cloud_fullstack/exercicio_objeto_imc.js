/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu iMC (IMC = peso / (altura * altura));
instancie uma pessoa chamada Jose que tenha 70kg de peso e 1.75 m de altura e peça ao Jose para
dizer o valor do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;


    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //METODO para calcular:
    calcularIMC(){   //só colocar os parametros entre parenteses se precisar de infos externas a pessoa
        return this.peso / (this.altura * this.altura);   //como tudo o q precisa pro calculo esta dentro da classe, nao eh preciso colocar nada no parenteses do metodo
    }

    //METODO para classificar:
    classificarIMC(){
        const imc = this.calcularIMC();  //Para classificar o IMC: colocar o metodo classificarIMC dentro da classe
        if (imc < 18.5){
            return ('Abaixo do peso');
        } else if(imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

function imprimirIMC(pessoa) {
    console.log(`Pessoa: ${pessoa.nome}; Peso: ${pessoa.peso}kg; Classificação: ${pessoa.classificarIMC()}.`);
}

const jose = new Pessoa('José', 70, 1.75);
imprimirIMC(jose);

const renan = new Pessoa('Renan', 63, 1.75);
imprimirIMC(renan);

const vitor = new Pessoa('Vitor', 60, 1.69);
imprimirIMC(vitor);

const michel = new Pessoa('Michel', 110, 1.67);
imprimirIMC(michel);






