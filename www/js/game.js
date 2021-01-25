let backgroundImage = new Image();
backgroundImage.src = "img/background.png";
let blocksImage = new Image();
blocksImage.src = "img/tileSet.png";
let excaliburImage = new Image();
excaliburImage.src = "img/swordImage.png"
let playerImage = new Image();
playerImage.src = "img/char_sprite.png";

const mapLogic = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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

const tileSize = 64;


function playGame() {

    let canvasGame = new GameCamera(0, 0);
    let gameMap = new GameMap(mapLogic);
    console.log(gameMap);
    let worldBuilder = new WorldBuilder(gameMap, blocksImage, canvasGame,10);
    let background = new Background(backgroundImage);
    let player = new Player(playerImage, 100, 100);
    console.log('play');
    gameObjects.push(background);
    worldBuilder.build()
    gameObjects.push(player);
    canvasGame.start()
    console.log(gameObjects);
}

