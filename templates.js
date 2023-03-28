const typeColors = {
    grass: 'green',
    fire: 'red',
    water: 'blue',
    bug: 'rgb(134, 196, 42)',
    poison: 'rgb(65, 1, 65)',
    electric: 'rgba(205, 173, 0)',
    ground: '#997917',
    fairy: 'rgb(250, 126, 147)',
    fighting: 'orange',
    psychic: 'purple',
    rock: 'rgb(65, 65, 65)',
    ghost: 'rgb(16, 12, 54)',
    ice: 'rgb(109, 128, 236)',
    dragon: 'rgb(248, 59, 59)',
    default: 'gray'
};


function pokedexHTML(i, currentPokemon) {
    return /*html*/`
    <div onclick="openCard(${i})" class="pokemon-card"> 
        <h3>${currentPokemon['name']}</h3>
        <img class="pokemon-img" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
        <span id="pokemon-type">${currentPokemon['types'][0]['type']['name']}</span>
        <span id="pokemon-id">Nr. ${currentPokemon['id']}</span>
    </div>
`;
}


function openCardHTML(currentPokemon) {
    let moves = currentPokemon['moves'];
    let moveElements = '';
    
    for (let i = 0; i < Math.min(moves.length, 6); i++) {
        moveElements += `<span class="space-bottom">• ${moves[i]['move']['name']}</span>`;}

    return /*html*/`
    <div class="pokemon-single-card" id="single-card" onclick="doNotClose(event)">
        <h3>${currentPokemon['name']}</h3>
        <img onclick="previousPokemon()" class="left-arrow" src="img/left.png" alt=""><img onclick="nextPokemon()" class="right-arrow" src="img/right.png" alt="">
        <img class="pokeball-bg" src="img/pokeball-bg.png" alt="">
        <img class="pokemon-img" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
        <span id="pokemon-type">${currentPokemon['types'][0]['type']['name']}</span>
        <div class="stats">
            <div class="info-position">
                <span id="stats-text" onclick="showStats()" class="margin-right current-pokemon-info underline-text">Stats</span> 
                <span id="moves-text" onclick="showMoves()" class="margin-right current-pokemon-info">Moves</span>
                <span id="game-graphic-text" onclick="showGameGraphic()" class="current-pokemon-info">Game Graphic</span>
            </div>
            <canvas id="myChart"></canvas>
            <div id="moves" class="abilities" style="display: none;">
                ${moveElements}               
            </div>
            <img id="game-graphic" src="${currentPokemon['sprites']['front_default']}" style="display: none;">
        </div>
    </div>
    `;
}


function statsChart(currentPokemon) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['hp :', 'attack :', 'defense :', 'special-attack :', 'special-defense :', 'speed :'],
            datasets: [{
                data: [
                    currentPokemon['stats'][0]['base_stat'],
                    currentPokemon['stats'][1]['base_stat'],
                    currentPokemon['stats'][2]['base_stat'],
                    currentPokemon['stats'][3]['base_stat'],
                    currentPokemon['stats'][4]['base_stat'],
                    currentPokemon['stats'][5]['base_stat']
                ],
                backgroundColor: [
                    'red',
                    'orange',
                    '#997917',
                    'purple',
                    'rgb(65, 65, 65)',
                    'yellow'
                ],
                borderWidth: 1,
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        display: true,
                        color: 'white',
                        stepSize: 25,
                    },
                    grid: {
                        display: false,
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white',
                        autoSkip: false,
                    },
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                },
                legend: {
                    display: false,
                    labels: {
                        color: 'white'
                    }
                }
            },
        }
    });
}