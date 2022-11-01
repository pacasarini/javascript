const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/*fetch(url)   //requisicao / promisse - funciona como o try/catch/finally
    .then(function (response) {     //sucesso
        //console.log(response)    ----- ver abaixo a explicacao*      
        return response.json()      //esse comando retorna a promessa do body em json
    })
    .catch(function (error) {       //fracasso
        console.error(error)
    }) 
    .finally(function (){          //concluida, independente do sucesso ou fracasso
        console.log('requisicao concluida')
    }) */


/*o body vem como "Readable Stream" e precisa ser transformado em JSON para poder manipula-lo
Pra nao ficar call back dentro de call back, usamos o retorno da promise como resposta
com o comando return.response.json() para reacao em cascata, evitando assim uma serie de callback*/



//arrow function (=>) substitui a funcao declarada (function).
//se tiver soh 1 linha dessa funcao, nao precisa declarar o corpo, entao pode suprimir uma boa parte 
//podendo simplificar e ficando assim:

fetch(url)   
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) = console.error(error)) 
    // o finally foi suprimido pq nao vamos usa-lo agora

    