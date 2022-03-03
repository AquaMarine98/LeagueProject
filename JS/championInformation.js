// Images
let background = document.getElementById('background');
let frontground = document.getElementById('frontground');

// Name and title
let champName = document.getElementById('name');
let champTitle = document.getElementById('title');

// Champion role
let champRol = document.getElementById('rol');
let imgRol = document.getElementById('img-rol');

// Champ blurb and lore
let champLore = document.getElementById('parrafo');
let moreButton = document.createElement('button');

//Champ dificulty
let boxDificulty = document.getElementById('dificulty');
let champDificulty = boxDificulty.querySelectorAll('span');
let dificultad = document.getElementById('dificultad');

let champId;

window.onload = () => {
    let actualUrl = window.location.href;

    let urlRegex = /(?:\?id\=)(\w+)(?:$|\&)/;
    let champRegex = urlRegex.exec(actualUrl);
    champId = champRegex[1];

    background.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;
    frontground.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;

    fetch(`http://ddragon.leagueoflegends.com/cdn/12.5.1/data/es_AR/champion/${champId}.json`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            setChampInfo(data);
        });
}

function setChampInfo(champ) {
    champName.textContent = champ.data[champId].name;
    champTitle.textContent = champ.data[champId].title;

    champRol.textContent = champ.data[champId].tags[0];

    champLore.textContent = champ.data[champId].blurb + '\n';
    champLore.appendChild(moreButton);
    moreButton.textContent = 'Ver más';

    changeRolImg();

    // Make the blurb go to full lore
    moreButton.onclick = () => {
        champLore.textContent = champ.data[champId].lore;
    }

    // Change the span with the difficulty
    let difficulty = champ.data[champId].info.difficulty;
    changeDificulty(difficulty);
}

function changeRolImg() {
    if(champRol.textContent == 'Fighter') {
        imgRol.src = '../Roles/Fighter_icon.png';
    }
    else if(champRol.textContent == 'Mage') {
        imgRol.src = '../Roles/Mage_icon.png';
    }
    else if(champRol.textContent == 'Tank') {
        imgRol.src = '../Roles/Tank_icon.png';
    }
    else if(champRol.textContent == 'Marksman') {
        imgRol.src = '../Roles/Marksman_icon.png';
    }
    else if(champRol.textContent == 'Support') {
        imgRol.src = '../Roles/Support_icon.png';
    }
    else if(champRol.textContent == 'Assassin') {
        imgRol.src = '../Roles/Assassin_icon.png';
    }
}

function changeDificulty(difficulty) {
    if(difficulty <= 3) {
        dificultad.textContent = 'Baja';
        champDificulty[1].classList.add('other');
        champDificulty[2].classList.add('other');
    }
    else if(difficulty >= 4 && difficulty <= 7) {
        dificultad.textContent = 'Moderado';
        champDificulty[2].classList.add('other');
    }
    else {
        dificultad.textContent = 'Alta';
    }
    console.log(difficulty)
}