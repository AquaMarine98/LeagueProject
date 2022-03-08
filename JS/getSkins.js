let skinsContainer = document.getElementById('SKINS_CONTAINER');
let skinImg = document.getElementById('SKIN_IMG');
let skinsLength = 0;

function getTotalSkins(champ) {
    console.log(champ.data[champId].skins.length);

    skinsLength = champ.data[champId].skins.length;

    createSkinContainer(skinsLength, champ);

    skinImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;
}

function createSkinContainer(length, data = false) {
    for(let i = 0; i < length; i++) {
        let skinNumber;
        let skin = document.createElement('li');
        skinsContainer.appendChild(skin);

        let skinImg = document.createElement('img');
        skinImg.classList.add(i);
        skin.appendChild(skinImg);

        let skinName = document.createElement('h1');
        skin.appendChild(skinName);

        

        skinNumber = data.data[champId].skins[i].num;
        skin.setAttribute("onclick", `changeSkin(${skinNumber})`);

        skinImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_${skinNumber}.jpg`;
        if(data.data[champId].skins[i].num === 0) {
            skinName.textContent = data.data[champId].name;
        } else{
            skinName.textContent = data.data[champId].skins[i].name;
        }
    }
}



function changeSkin(number) {
    console.log('hey');
    skinImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_${number}.jpg`;
}