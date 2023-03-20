async function loadPokemon() {
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();

        renderPokemonInfo(currentPokemon);
    }


}


function renderPokemonInfo(currentPokemon) {
    let pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    pokemonCard.innerHTML =  /*html*/`
        <h3 id="pokemon-name">${currentPokemon['name']}</h3>
        <img id="pokemon-img" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
        <span id="pokemon-type">Nr. ${currentPokemon['order']}</span>
    `;
    document.getElementById('pokemon-card').appendChild(pokemonCard);
}