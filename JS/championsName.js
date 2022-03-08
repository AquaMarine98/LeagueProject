var championsName = [];

fetch('http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json')
    .then(result => result.json())
    .then(data => {
        saveChampNames(data);
        waitUntilChampNamesIsReady();

        setTimeout(()=> {
            card.style.opacity = 1;
        }, 300);

        console.log(championsName);
    })

function saveChampNames(name) {
    championsName.push(Object.entries(name.data));
}