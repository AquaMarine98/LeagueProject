// Images
let background = document.getElementById('background');
let frontground = document.getElementById('frontground');

// Name and title
let unshownName = document.getElementById('CHAMP_NAME');
let unshownTitle = document.getElementById('CHAMP_TITLE');
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

// Canvas
let canvas = document.getElementById('CANVAS');
let canvasContext = canvas.getContext('2d');

let descriptionContainer = document.getElementById('HEIGHT_CANVAS');
let canvasHeight;
let canvasWidth;

// Information container
let infoCont = document.getElementById('INFO_CONTAINER');

let champId;


// Get champion information
function getChampionInfo(champ) {
    fetch(`https://ddragon.leagueoflegends.com/cdn/12.5.1/data/es_AR/champion/${champ}.json`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            setChampInfo(data);
            //Champ skins
            getTotalSkins(data);
            //Abilities icons
            getAbilitiesIcons(data);
            //Passive
            getChampPassive(data);
            passiveAtributes();
            // Abilities
            getAbilities(data);
            abilitiesAtributes();
            //Ability videos
            getAbilityVideos();
            abilityVideos(data);
        });
}

$(window).resize(function () {
    setTimeout(() => {
        canvasHeight = (descriptionContainer.clientHeight);
        canvasWidth = (descriptionContainer.clientWidth);

        canvas.style.height = `${canvasHeight}px`;
        canvas.style.width = `${canvasWidth}px`;

        canvas.height = canvasHeight;
        canvas.width = canvasWidth;

        makeCanvas();
    }, 50);

    // Set the skin changer timer for lower resolutions
    changeSkinInTime();
});

window.onload = () => {
    let actualUrl = window.location.href;

    let urlRegex = /(?:\?id\=)(\w+)(?:$|\&)/;
    let champRegex = urlRegex.exec(actualUrl);
    champId = champRegex[1];

    // Add button to the abilities description containers
    addOnClick();

    // Set the skin changer timer for lower resolutions
    changeSkinInTime();

    // Wait until the name container get his width
    setTimeout(() => {
        canvasHeight = (descriptionContainer.clientHeight);
        canvasWidth = (descriptionContainer.clientWidth);

        canvas.style.height = `${canvasHeight}px`;
        canvas.style.width = `${canvasWidth}px`;

        canvas.height = canvasHeight;
        canvas.width = canvasWidth;

        makeCanvas();
    }, 500);

    setTimeout(() => {
        unshownName.classList.remove('unshown');
        unshownTitle.classList.remove('unshown');
    }, 1500);

    background.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;
    frontground.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;

    getChampionInfo(champId);
}

function setChampInfo(champ) {
    champName.textContent = champ.data[champId].name;
    champTitle.textContent = champ.data[champId].title;

    champRol.textContent = champ.data[champId].tags[0];

    champLore.textContent = champ.data[champId].blurb + '\n';
    champLore.appendChild(moreButton);
    moreButton.textContent = 'Ver m??s';

    changeRolImg();

    // Make the blurb go to full lore
    moreButton.onclick = () => {
        champLore.textContent = champ.data[champId].lore;
        canvas.style.height = `${infoCont.clientHeight}px`;
    }

    // Change the span with the difficulty
    let difficulty = champ.data[champId].info.difficulty;
    changeDificulty(difficulty);
}

function changeRolImg() {
    if (champRol.textContent == 'Fighter') {
        imgRol.src = '../Roles/Fighter_icon.png';
    }
    else if (champRol.textContent == 'Mage') {
        imgRol.src = '../Roles/Mage_icon.png';
    }
    else if (champRol.textContent == 'Tank') {
        imgRol.src = '../Roles/Tank_icon.png';
    }
    else if (champRol.textContent == 'Marksman') {
        imgRol.src = '../Roles/Marksman_icon.png';
    }
    else if (champRol.textContent == 'Support') {
        imgRol.src = '../Roles/Support_icon.png';
    }
    else if (champRol.textContent == 'Assassin') {
        imgRol.src = '../Roles/Assassin_icon.png';
    }
}

function changeDificulty(difficulty) {
    if (difficulty <= 3) {
        dificultad.textContent = 'Baja';
        champDificulty[1].classList.add('other');
        champDificulty[2].classList.add('other');
    }
    else if (difficulty >= 4 && difficulty <= 7) {
        dificultad.textContent = 'Moderado';
        champDificulty[2].classList.add('other');
    }
    else {
        dificultad.textContent = 'Alta';
    }
}

function makeCanvas() {

    let vertices = [];
    vertices.push({ x: ((canvasWidth / 2) + (unshownName.clientWidth / 2)), y: 0 });
    vertices.push({ x: canvasWidth, y: 0 });
    vertices.push({ x: canvasWidth, y: canvasHeight });
    vertices.push({ x: 0, y: canvasHeight });
    vertices.push({ x: 0, y: 0 });
    vertices.push({ x: (canvasWidth / 2) - (unshownName.clientWidth / 2), y: 0 });

    canvasContext.strokeStyle = 'Gray';

    canvasContext.beginPath();
    canvasContext.moveTo(vertices[0].x, vertices[0].y);
    canvasContext.lineTo(vertices[1].x, vertices[1].y);
    canvasContext.lineTo(vertices[2].x, vertices[2].y);
    canvasContext.lineTo(vertices[3].x, vertices[3].y);
    canvasContext.lineTo(vertices[4].x, vertices[4].y);
    canvasContext.lineTo(vertices[5].x, vertices[5].y);
    canvasContext.stroke();
}
