let card = document.getElementById('CHAMPIONS_CONTAINER');

let champ;

function waitUntilChampNamesIsReady() {
    for (let i = 0; i < championsName[0].length; i++) {
        let a = document.createElement('a');
        let championImg = document.createElement('img');
        let championName = document.createElement('h1');

        card.appendChild(a);
        a.setAttribute('id', `${i}`);
        a.classList.add('champion');
        a.appendChild(championImg);
        a.appendChild(championName);

        champ = championsName[0][i][1].id;

        a.href = `../HTML/campeon.html?id=${champ}`;
        championImg.src = (`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`);
        championName.textContent = championsName[0][i][0];
    }
}
