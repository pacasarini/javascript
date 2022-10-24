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

    //METODO:
    calcularIMC(){   //só colocar os parametros entre parenteses se precisar de infos externas a pessoa
        return this.peso / this.peso ** 2;   //como tudo o q precisa pro calculo esta dentro da classe, nao eh preciso colocar nada no parenteses do metodo
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose)