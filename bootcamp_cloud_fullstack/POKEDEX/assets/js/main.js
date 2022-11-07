
const pokemonList = document.getElementById('pokemonList') 
//estou pegando a lista de pokemon e atribuindo a um obj pra ser manipulado
// "document" se refere a pagina inteira
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0;


function loadPokemonItens(offset, limit) {
function convertPokemonToLi(pokemon) {
        return 
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}#</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">  
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>  
                    
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>     
            </li>
    `).join('')
        pokemonList.innerHTML += newHtml
    })
}
    //o metodo .map substitui o comando abaixo:
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))
    // }

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

    