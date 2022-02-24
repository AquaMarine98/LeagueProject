let card = document.getElementById('CHAMPIONS_CONTAINER');

let champ;

function waitUntilChampNamesIsReady() {
    for (let i = 0; i < championsName[0].length; i++) {
        let div = document.createElement('div');
        let championImg = document.createElement('img');
        let championName = document.createElement('h1');

        card.appendChild(div);
        div.setAttribute('id', `${i}`);
        div.classList.add('champion');
        div.appendChild(championImg);
        div.appendChild(championName);

        champ = championsName[0][i][1].id;

        championImg.src = (`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`);
        championName.textContent = championsName[0][i][0];
    }
}
