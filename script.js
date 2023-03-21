async function loadPokemon() {
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();

        document.getElementById('pokemon-card').innerHTML += pokedexHTML(i, currentPokemon);

        setBackgroundColor(currentPokemon);
    }
}


function pokedexHTML(i, currentPokemon) {
    return /*html*/`
    <div class="pokemon-card"> 
        <h3>${currentPokemon['name']}</h3>
        <img onclick="openCard(currentPokemon, ${i})" class="pokemon-img" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
        <span id="pokemon-type">${currentPokemon['types'][0]['type']['name']}</span>
        <span id="pokemon-id">Nr. ${currentPokemon['id']}</span>
    </div>
`;
}


function openCard(currentPokemon) {
    let container = document.getElementById('card-container');

    container.innerHTML += openCardHTML(currentPokemon);
    document.getElementById('card-container').style.display = 'flex';
    document.getElementById('single-card').style.pointerEvents = 'none';

}


function openCardHTML(currentPokemon) {
    return /*html*/`
    <div class="pokemon-single-card" id="single-card">
        <h3>${currentPokemon['name']}</h3>
        <img class="pokemon-img" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
        <span id="pokemon-type">${currentPokemon['types'][0]['type']['name']}</span>
    </div>
    `;
}






function setBackgroundColor(currentPokemon) {
    let type = currentPokemon['types'][0]['type']['name'];
    let backgroundColor;
    switch (type) {
        case 'grass':
            backgroundColor = 'green';
            break;
        case 'fire':
            backgroundColor = 'red';
            break;
        case 'water':
            backgroundColor = 'blue';
            break;
        case 'bug':
            backgroundColor = 'rgb(134, 196, 42)'
            break;
        case 'poison':
            backgroundColor = 'rgb(65, 1, 65)'
            break;
        case 'electric':
            backgroundColor = 'rgba(255, 255, 0, 0.800)'
            break;
        case 'ground':
            backgroundColor = '#997917'
            break;
        case 'fairy':
            backgroundColor = 'rgb(250, 126, 147)'
            break;
        case 'fighting':
            backgroundColor = 'orange'
            break;
        case 'psychic':
            backgroundColor = 'purple'
            break;
        case 'rock':
            backgroundColor = 'rgb(65, 65, 65)'
            break;
        case 'ghost':
            backgroundColor = 'rgb(16, 12, 54)'
            break;
        case 'ice':
            backgroundColor = 'rgb(109, 128, 236)'
            break;
        case 'dragon':
            backgroundColor = 'rgb(248, 59, 59)'
            break;

        default:
            backgroundColor = 'gray';
            break;
    }

    let pokemonCard = document.querySelector('.pokemon-card:last-child');
    pokemonCard.style.backgroundColor = backgroundColor;
}