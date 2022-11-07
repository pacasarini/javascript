
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>` )
}

 

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}#</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
            
                <ol class="types">  
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>  
                
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">

            </div>     

        </li>
    `
}

const pokemonList = document.getElementById('pokemonList') 
    //estou pegando a lista de pokemon e atribuindo a um obj pra ser manipulado
    // "document" se refere a pagina inteira



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

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

    //o metodo .map substitui o comando abaixo:
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))
    // }
})

    