let skinsContainer = document.getElementById('SKINS_CONTAINER');
let contenedor = document.getElementById('CONTENEDOR');
let skinImg = document.getElementById('SKIN_IMG');
let skinsLength = 0;

let allSkins;

let skinNumberIndex = [];

function getTotalSkins(champ) {
    skinsLength = champ.data[champId].skins.length;

    createSkinContainer(skinsLength, champ);

    skinImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;
}

function createSkinContainer(length, data = false) {
    for (let i = 0; i < length; i++) {
        let skinNumber;
        let skin = document.createElement('li');
        contenedor.appendChild(skin);

        let skinImg = document.createElement('img');
        skinImg.classList.add(i);
        skin.appendChild(skinImg);

        let skinName = document.createElement('h1');
        skin.appendChild(skinName);


        skinNumberIndex.push(data.data[champId].skins[i].num);
        skinNumber = data.data[champId].skins[i].num;
        skin.setAttribute("onclick", `changeSkin(${skinNumber}, ${i})`);

        skinImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_${skinNumber}.jpg`;
        if (data.data[champId].skins[i].num === 0) {
            skinName.textContent = data.data[champId].name;
        } else {
            skinName.textContent = data.data[champId].skins[i].name;
        }

        skin.classList.add(i);
    }

    allSkins = skinsContainer.querySelectorAll('li')
}


let actualIndex = 0;
let otherIndex = 0;

function changeSkin(number, index) {

    if (!skinImg.classList.contains(`${number}`)) {
        allSkins[index].classList.add('selected');
        allSkins[otherIndex].classList.remove('selected');
        otherIndex = index;

        skinImg.classList.remove('selected');
        skinImg.classList.replace(`${actualIndex}`, `${number}`);
        actualIndex = number;

        skinImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_${number}.jpg`;

        setTimeout(() => {
            skinImg.classList.add('selected');
        }, 10);
    }
}

let pixels = 100;
let maxPixels = 0;
let pixelsQuantity = 120;

let skinIndex = 0;
let afterIndex;

let skinsArray = [];
function getAllSkinInArray(number) {
    for (let i = 0; i < number; i++) {
        skinsArray.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_${skinNumberIndex[i]}.jpg`);
    }
}

function changeSkinInTime() {
    let totalSkins = contenedor.getElementsByTagName('li');
    let i = 0;

    setTimeout(() => {
        getAllSkinInArray(totalSkins.length);
        console.log(skinNumberIndex);
        console.log(skinsArray);
    }, 500)

    setInterval(() => {
        pixels -= pixelsQuantity;

        maxPixels += pixelsQuantity;

        if (maxPixels >= (totalSkins.length * pixelsQuantity)) {
            pixels = 100;
            maxPixels = 0;
        }

        contenedor.style.transform = `translateX(${pixels}px)`;

        if (i >= totalSkins.length - 1) {
            i = 0;
        }
        else { i++ }

        skinImg.src = skinsArray[i];

        console.log(i)
    }, 2500)
}

// Set the skin changer timer for lower resolutions
if(window.screen.availWidth <= 425) {
    changeSkinInTime();
}