let backgroundImage = new Image();
backgroundImage.src = "img/background.png";
let blocksImage = new Image();
blocksImage.src = "img/tileSet.png";
let excaliburImage = new Image();
excaliburImage.src = "img/Excalibur.png"
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

let gameMap = new GameMap(mapLogic);

let keyName = null;
let isKeyDown = false;

function playGame() {
    console.log('play');
    let gameCamera = new GameCamera(0, 0);

    let worldBuilder = new WorldBuilder(gameMap, blocksImage, gameCamera, 10);
    let background = new Background(backgroundImage);
    let player = new Player(playerImage, 100, 100, gameCamera);
    let excalibur = new Excalibur(100, 100, excaliburImage);
    let grid = new Grid(gameCamera);
    gameObjects.push(background);
    worldBuilder.build()
    gameObjects.push(player, excalibur, grid);
    gameCamera.start()
    document.addEventListener('keydown', (event) => {
        keyName = event.key;
        isKeyDown = true;
    })
    document.addEventListener('keyup', (event) => {
        isKeyDown = false;
    })
}

