
const pokeApi = {}  

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.order
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) //como types retorna uma lista, precisamos converter esta lista 
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon) 
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}


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