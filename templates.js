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
    return /*html*/`
    <div class="pokemon-single-card" id="single-card" onclick="doNotClose(event)">
        <h3>${currentPokemon['name']}</h3>
        <img class="pokeball-bg" src="img/pokeball-bg.png" alt="">
        <img class="pokemon-img" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
        <span id="pokemon-type">${currentPokemon['types'][0]['type']['name']}</span>
        <div class="stats">
            <canvas id="myChart"></canvas>
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
                    text: 'Pokemon Stats',
                    color: 'white',
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
            backgroundColor = 'rgba(205, 173, 0)'
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


function setBackgroundColorSingleCard(currentPokemon) {
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
            backgroundColor = 'rgba(205, 173, 0)'
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

    let pokemonSingleCard = document.querySelector('.pokemon-single-card:last-child');
    pokemonSingleCard.style.backgroundColor = backgroundColor;
}