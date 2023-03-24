let pokemons = []

async function loadPokemon() {
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();

        document.getElementById('pokemon-card').innerHTML += pokedexHTML(i, currentPokemon);

        pokemons.push(currentPokemon);
        setBackgroundColor(currentPokemon);
    }
    
}


function openCard(i) {
    let container = document.getElementById('card-container');
    let currentPokemon = pokemons[i - 1];

    container.innerHTML = '';
    container.innerHTML += openCardHTML(currentPokemon, i);
    document.getElementById('card-container').style.display = 'flex';
    setBackgroundColorSingleCard(currentPokemon);
    statsChart(currentPokemon);
}


function hideSingleCard() {
    document.getElementById('card-container').style.display = 'none';
    document.getElementById('pokemon-single-card').style.display = 'none';
}


function doNotClose(event) {
    event.stopPropagation();
}


