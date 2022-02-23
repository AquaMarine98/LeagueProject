let card = document.getElementById('CHAMPIONS_CONTAINER');
let div = document.createElement('div');
let championImg = document.createElement('img');
let championName = document.createElement('h1');

let champ;

function waitUntilChampNamesIsReady() {
    for(let i = 0; i < championsName[0].length; i++) {

        card.appendChild(div);
        div.classList.add('champion');
        div.appendChild(championImg);
        div.appendChild(championName);
    
        let champ = championsName[0][i][1].name;
    
        championImg.src = (`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`);
        championName.textContent = championsName[0][i][0];
    }
}
