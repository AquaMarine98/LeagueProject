let passive = document.getElementById('PASSIVE');
let abilities = document.getElementsByClassName('abilities');

function getAbilitiesIcons(variable) {
    // Passive
    let passiveImg = passive.getElementsByTagName('img');

    let getPassive = variable.data[champId].passive.image.full;
    passiveImg[0].src = `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/passive/${getPassive}`;

    // Abilities
    for (let i = 1; i < abilities.length; i++) {
        let getAbility = variable.data[champId].spells[i - 1].image.full;
        abilities[i].firstElementChild.src = `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${getAbility}`;
    }
}

// All abilities
function addOnClick() {
    for (let i = 0; i < abilities.length; i++) {
        abilities[i].setAttribute('onclick', `setActiveAbility(${i})`);
    }
}

// Passive button
let dataPassiveName;
let dataPassiveDescription

let passiveName = document.getElementsByClassName('ability-name');
let passiveDescription = document.getElementsByClassName('ability-description');

function passiveAtributes() {
    passiveName[0].textContent = dataPassiveName;

    passiveDescription[0].textContent = dataPassiveDescription;
}
function getChampPassive(elem) {
    dataPassiveName = elem.data[champId].passive.name;
    dataPassiveDescription = elem.data[champId].passive.description;
}

// Abilities button
let dataAbilityName = [];
let dataAbilityDescription = [];

let abilityName = document.getElementsByClassName('ability-name');
let abilityDescription = document.getElementsByClassName('ability-description');

function getAbilities(elem) {
    for (let i = 0; i < abilityName.length - 1; i++) {
        dataAbilityName.push(elem.data[champId].spells[i].name);

        dataAbilityDescription.push(elem.data[champId].spells[i].description);
    }
}

function abilitiesAtributes() {
    for (let i = 0; i < abilityName.length - 1; i++) {
        abilityName[i + 1].textContent = dataAbilityName[i];
        abilityDescription[i + 1].textContent = dataAbilityDescription[i];
    }
}

let champAbilityDescription = document.getElementsByClassName('video-container');
let abilityIndex = 0;

function setActiveAbility(index) {
    champAbilityDescription[abilityIndex].classList.remove('active');
    abiVidContainer[abilityIndex].pause();
    abilityIndex = index;
    champAbilityDescription[index].classList.add('active');
    abiVidContainer[index].currentTime = 0;
    abiVidContainer[index].play();
}

// Abilities videos
let abiVidContainer = [];
let abiVid = [];

function getAbilityVideos() {
    abiVidContainer = document.getElementsByClassName('ability-video');
    for (let i = 0; i < abiVidContainer.length; i++) {
        abiVid.push(abiVidContainer[i].getElementsByTagName('source'));
    }
}

function abilityVideos(elem) {
    let champNumber;
    
    function getNumberLength() {
        if (elem.data[champId].key.length == 1) {
            champNumber = '000' + elem.data[champId].key;
        }
        else if (elem.data[champId].key.length == 2) {
            champNumber = '00' + elem.data[champId].key;
        }
        else if (elem.data[champId].key.length == 3) {
            champNumber = '0' + elem.data[champId].key;
        }
        else if (elem.data[champId].key.length == 4) {
            champNumber = '' + elem.data[champId].key;
        }

        return champNumber;
    }

    abiVidContainer[0].setAttribute('src', `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${getNumberLength()}/ability_${getNumberLength()}_P1.webm`);
    abiVidContainer[0].play();

    for (let i = 0; i < abiVidContainer.length - 1; i++) {
        function asd() {
            let j = i;
            if (j + 1 == 1) {
                j = 'Q';
            }
            else if (j + 1 == 2) {
                j = 'W';
            }
            else if (j + 1 == 3) {
                j = 'E';
            }
            else if (j + 1 == 4) {
                j = 'R';
            }

            return j;
        }
        abiVidContainer[i + 1].setAttribute('src', `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${getNumberLength()}/ability_${getNumberLength()}_${asd()}1.webm`);
    }
}