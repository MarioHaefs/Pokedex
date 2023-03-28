let pokemons = []
let currentPokemonIndex = 0;

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
    currentPokemonIndex = i - 1;

    container.innerHTML = '';
    container.innerHTML += openCardHTML(currentPokemon, i);
    document.getElementById('card-container').style.display = 'flex';
    setBackgroundColorSingleCard(currentPokemon);
    statsChart(currentPokemon);
}


function hideSingleCard() {
    document.getElementById('card-container').style.display = 'none';
}


function doNotClose(event) {
    event.stopPropagation();
}


function setBackgroundColor(currentPokemon) {
    let type = currentPokemon['types'][0]['type']['name'];
    let backgroundColor = typeColors[type] || typeColors.default;
    let pokemonCard = document.querySelector('.pokemon-card:last-child');
    pokemonCard.style.backgroundColor = backgroundColor;
}


function setBackgroundColorSingleCard(currentPokemon) {
    let type = currentPokemon['types'][0]['type']['name'];
    let backgroundColor = typeColors[type] || typeColors.default;
    let pokemonSingleCard = document.querySelector('.pokemon-single-card:last-child');
    pokemonSingleCard.style.backgroundColor = backgroundColor;
}


function previousPokemon() {
    if (currentPokemonIndex === 0) {
        openCard(pokemons.length);
    } else {
        openCard(currentPokemonIndex);
    }
}

function nextPokemon() {
    if (currentPokemonIndex === pokemons.length - 1) {
        openCard(1);
    } else {
        openCard(currentPokemonIndex + 2);
    }
}


function showStats() {
    document.getElementById('myChart').style.display = 'block';
    document.getElementById('stats-text').classList.add('underline-text');
    document.getElementById('moves').style.display = 'none';
    document.getElementById('moves-text').classList.remove('underline-text');
    document.getElementById('game-graphic').style.display = 'none';
    document.getElementById('game-graphic-text').classList.remove('underline-text');
}


function showMoves() {
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('stats-text').classList.remove('underline-text');
    document.getElementById('moves').style.display = 'flex';
    document.getElementById('moves-text').classList.add('underline-text');
    document.getElementById('game-graphic').style.display = 'none';
    document.getElementById('game-graphic-text').classList.remove('underline-text');
}


function showGameGraphic() {
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('stats-text').classList.remove('underline-text');
    document.getElementById('moves').style.display = 'none';
    document.getElementById('moves-text').classList.remove('underline-text');
    document.getElementById('game-graphic').style.display = 'block';
    document.getElementById('game-graphic-text').classList.add('underline-text');
}
