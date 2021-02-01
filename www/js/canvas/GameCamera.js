class GameCamera extends CanvasGame {

    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.menu = 0;
        this.game = 1;
        this.stateOfGame = this.menu;
    }


    startGame() {
        this.playGameLoop();
        console.log('startCanvasGame');
        for (let i = 0; i < gameObjects.length; i++) {
            gameObjects[i].start();
        }
    }

    stopGame() {

    }

    startMenu() {

    }

    stopMenu() {

    }

    collisionDetection() {
        //for player
        let player = gameObjects[PLAYER_POSITION];
        this.bottomCollision(player);
        this.rightCollision(player);
        this.leftCollision(player);
        //for enemies
    }


    //collision for npcs
    leftCollision(object) {
        let col = Math.floor(object.left / tileSize);
        let row = Math.floor(object.centerY / tileSize);
        if (gameMap.isSolidBlock(row, col)) {
            object.leftCollision = true;
            console.log('leftcol');
        } else {
            object.leftCollision = false;
        }
    }

    rightCollision(object) {
        let col = Math.floor(object.right / tileSize);
        let row = Math.floor(object.centerY / tileSize);
        if (gameMap.isSolidBlock(row, col)) {
            object.rightCollision = true;
            console.log('rightcol');
        } else {
            object.rightCollision = false;
        }
    }

    bottomCollision(object) {
        let col = Math.floor(object.centerX / tileSize);
        let row = Math.floor(object.bottom / tileSize);
        if (gameMap.isSolidBlock(row, col)) {
            object.bottomCollision = true;
            console.log('bottomCollision');
        } else {
            object.bottomCollision = false;
        }
    }

    topCollision(object) {
        let col = Math.floor(object.centerX / tileSize);
        let row = Math.floor(object.top / tileSize);
        if (gameMap.isSolidBlock(row, col)) {
            object.topCollision = true;
            console.log('bottomCollision');
        }
    }
}