class Pessoa {
    nome;
    idade;

    constructor(nome, idade){   //
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`);  
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    } 
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);



