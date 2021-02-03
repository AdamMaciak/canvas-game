class GameCamera extends CanvasGame {

    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
    }


    startGame() {
        this.playGameLoop();
        console.log('startCanvasGame');
        for (let i = 0; i < gameObjects.length; i++) {
            gameObjects[i].start();
        }
    }

    render() {
        super.render();
    }

    collisionDetection() {
        //for player
        let player = gameObjects[PLAYER_POSITION];
        this.bottomCollision(player);
        this.rightCollision(player);
        this.leftCollision(player);
        this.topCollision(player);
        //for enemies
        for (let i = 0; i < gameObjects.length; i++) {
            if (gameObjects[i] instanceof Zombie) {
                this.bottomCollision(gameObjects[i]);
                this.rightCollision(gameObjects[i]);
                this.leftCollision(gameObjects[i]);
                this.topCollision(gameObjects[i]);
            } else if (gameObjects[i] instanceof Coin && gameObjects[i].isDisplayed()) {
                this.coinsCollision(gameObjects[i], player);
            }
        }
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
            console.log('topcol');
        } else {
            object.topCollision = false;
        }
    }

    coinsCollision(coin, player) {
        if (Math.sqrt(Math.pow(Math.abs(coin.x - player.centerX), 2) + Math.pow(Math.abs(coin.y - player.centerY), 2)) <= 30) {
            coin.stopAndHide();
            coinGathered++;
        }
    }

}