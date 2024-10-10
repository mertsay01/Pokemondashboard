const pokemonImage = document.getElementById("pokemonImage");
let randomNumber = Math.floor(Math.random() * 1010 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    pokemonImage.src = realData.sprites.front_default;

});

const catchButton = document.getElementById("catchButton");
const pokemonTekst = document.getElementById("pokemonTekst");
let pokemonGamePlayed = false;
catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonTekst.innerText = "Pokemon Fled!"
        }
        else{
            pokemonTekst.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
};

const tvShowTitel = document.getElementById("tvShowTitel");
const tvShowTekst = document.getElementById("tvShowTekst");

let tvShow = fetch("https://api.tvmaze.com/search/shows?q=the%20good%20doctor")
.then(function(response){
    return response.json();
})
.then(function(realData){
    tvShowTitel.innerText = realData[0].show.name;
    tvShowTekst.innerText = realData[0].show.summary;
});

const input = document.getElementById("input");
const userName = document.getElementById("name")
input.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = input.value;
        let age = fetch("https://api.agify.io?name=" + name)
        .then(function(response){
            return response.json();
        })
        .then(function(realData){
            input.style.display = "none";
            userName.innerText = realData.age;
        })
    }
};

function getpokemon(){
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, 
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, 
    ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
    'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon',
    'dark', 'fairy', 'unknown', 'shadow'];

    for(i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
        .then(function(response){
            return response.json();
        })
        .then(function(pokemon){
            switch(pokemon.types[0].type.name){
                case 'normal' :
                    normal = normal + 1;
                    break;
                case 'fighting' :
                    fighting = fighting + 1;
                    break;
                case 'flying' :
                    flying = flying + 1;
                    break;
                case 'poison' :
                    poison = poison + 1;
                    break;
                case 'ground' :
                    ground = ground + 1;
                    break;
                case 'rock' :
                    rock = rock + 1;
                    break;
                case 'bug' :
                    bug = bug + 1;
                    break;
                case 'ghost' :
                    ghost = ghost + 1;
                    break;
                case 'steel' :
                    steel = steel + 1;
                    break;
                case 'fire' :
                    fire = fire + 1;
                    break;
                case 'water' :
                    water = water + 1;
                    break;
                case 'grass' :
                    grass = grass + 1;
                    break;
                case 'electic' :
                    electric = electric + 1;
                    break;
                case 'psychic' :
                    psychic = psychic + 1;
                    break;
                case 'ice' :
                    ice = ice + 1;
                    break;
                case 'dragnon' :
                    dragon = dragon + 1;
                    break;
                case 'dark' :
                    dark = dark + 1;
                    break;
                case 'fairy' :
                    fairy = fairy + 1;
                    break;
                case 'unknown' :
                    unknown = unknown + 1;
                    break;
                case 'shadow' :
                    shadow = shadow + 1;
                    break;       
            }
        }).then(function(){
            datapokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug,
                ghost, steel, fire, water, grass, electric, psychic, ice, dragon,
                dark, fairy, unknown, shadow];
            graph.update();
            graph2.update();
        })
    }

    const datapokemon = {
        labels : labels,
        datasets: [
            {
                label: "pokemon types",
                data: [],
                backgroundColor: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#f473b9"]
            }
        ]
    };

    const configpokemon = {
        type: "bar",
        data: datapokemon,
    };

    const configpokemon2 = {
        type: "line",
        data: datapokemon,
    };
    
    
    const graph = new Chart(document.getElementById("canvas3"), configpokemon);
    const graph2 = new Chart(document.getElementById("canvas4"), configpokemon2);
};

getpokemon();

const labels2 = [
    "Zelda Breath of the Wild",
    "Mafia 3",
    "Valorant",
    "Elden Ring"
];

const data2 = {
    labels: labels2,
    datasets:[
        {
            label: "Most Played games In Hours",
            data: [40, 20, 100, 120],
            backgroundColor: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"]
        }
    ]
};

const config2 = {
    type: "pie",
    data: data2,
};

new Chart(document.getElementById("canvas2"), config2);