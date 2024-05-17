const listRef = document.querySelector('.list');


const urlPokemon ="https://pokeapi.co/api/v2/pokemon"

function createTag(text) {
    const tag = document.createElement('li');
    tag.textContent = text;

    return tag;
}

function getPokemons(url) {
    const request = fetch(url)

    request
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)); sprawdzamy sobie dane
            for (const pokemon of data.results) {
                listRef.appendChild(createTag(pokemon.name));
            }
        });
}

getPokemons(urlPokemon);