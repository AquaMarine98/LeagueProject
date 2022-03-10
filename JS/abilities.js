let passive = document.getElementById('PASSIVE');

function getAbilitiesIcons(variable) {
    // Passive
    let passiveImg = passive.getElementsByTagName('img');

    let getPassive = variable.data[champId].passive.image.full;
    passiveImg[0].src = `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/passive/${getPassive}`;

    // Abilities
    let abilities = document.getElementsByClassName('abilities');
    console.log(abilities);

    for(let i = 0; i < abilities.length; i++) {
        let getAbility = variable.data[champId].spells[i].image.full;
        abilities[i].firstElementChild.src = `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${getAbility}`;
    }
}

// Passive button
let dataPassiveName;
let dataPassiveDescription

passive.addEventListener('click', ()=>{
    console.log(dataPassiveName, dataPassiveDescription);
    passiveAtributes();
})


let abilityName = document.getElementsByClassName('ability-name');
let abilityDescription = document.getElementsByClassName('ability-description');

function passiveAtributes() {
    abilityName[0].textContent = dataPassiveName;

    abilityDescription[0].textContent = dataPassiveDescription;
}
function getAbilities(elem) {
    dataPassiveName = elem.data[champId].passive.name;
    dataPassiveDescription = elem.data[champId].passive.description;
}