///-------------->resources<------------///
let backgroundImage = new Image();
backgroundImage.src = "img/background.png";
let blocksImage = new Image();
blocksImage.src = "img/tileSet.png";
let excaliburImage = new Image();
excaliburImage.src = "img/Excalibur.png"
let excaliburImageLeft = new Image();
excaliburImageLeft.src = "img/Excalibur_left.png"
let playerImage = new Image();
playerImage.src = "img/char_sprite.png";
let playerImageLeft = new Image();
playerImageLeft.src = "img/char_sprite_left.png";
let zombieImageLeft = new Image();
zombieImageLeft.src = "img/zombie.png";
let zombieImage = new Image();
zombieImage.src = "img/zombie_right.png";
let darkMagicianImage = new Image();
darkMagicianImage.src = "img/darkmagician.png";

let coinImage = new Image();
coinImage.src = "img/coin.png";

let bg1 = new Image();
let bg2 = new Image();
let bg3 = new Image();
bg1.src = "img/BG1.png";
bg2.src = "img/BG2.png";
bg3.src = "img/BG3.png";

let pistolImageLeft = new Image();
let pistolImage = new Image();
pistolImageLeft.src = "img/Handgun.png";
pistolImage.src = "img/Handgun_right.png";

//--------------->init-data<------------///
const mapLogic1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const EMPTY_BLOCK = 0;
const DIRT_BLOCK = 1;
const GRASS_BLOCK = 2;

const positionOfGrassBlock = {
    row: 4,
    col: 3
}
const positionOfDirtBlock = {
    row: 5,
    col: 3
}

const tileSize = 128;

let keyName = null;
let isKeyDown = false;

let gameMap = new GameMap(mapLogic1);
let gameCamera = new GameCamera(0, 0);

const PLAYER_POSITION = 1;
const START_BUTTON = 2;
const SHOP_BUTTON = 3;

const menuElement = 0;
const gameElement = 1;

const tickGame = 16.666;


const gun = 1;
const sword = 0;
let weaponTypeEquiped = sword;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
    console.log('play');
    let worldBuilder = new WorldBuilder(gameMap, blocksImage, 10);
    let background = new Background(backgroundImage);
    let player = new Player(playerImage, playerImageLeft, 150, 150);

    let healthBar = new HealthBar(player);
    let excalibur = new Excalibur(100, 100, excaliburImage, excaliburImageLeft);
    let grid = new Grid();
    let zombie1 = new Zombie(zombieImage, zombieImageLeft, 700, 200, player);
    let zombie2 = new Zombie(zombieImage, zombieImageLeft, 500, 150, player);
    let zombie3 = new Zombie(zombieImage, zombieImageLeft, 300, 200, player);
    let zombie4 = new Zombie(zombieImage, zombieImageLeft, 800, 30, player);
    let zombie5 = new Zombie(zombieImage, zombieImageLeft, 1000, 200, player);

    gameObjects.push(background);
    gameObjects.push(player);
    worldBuilder.build()
    gameObjects.push(excalibur, grid, zombie1, zombie2, healthBar);
    gameCamera.startGame()

    console.log(gameObjects);
    document.addEventListener('keydown', (event) => {
        keyName = event.key;
        isKeyDown = true;
    })
    document.addEventListener('keyup', (event) => {
        isKeyDown = false;
    })

}

