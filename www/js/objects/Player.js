//set const tick game for all gameobject
class Player extends GameObject {

    constructor(playerSprite, x, y, gameCamera) {
        super(13);

        this.posCanvasX = null;
        this.posCanvasY = null;
        this.posX = null;
        this.posY = null;
        this.playerSprite = playerSprite;
        // this.NUMBER_OF_SPRITES = 20;
        // this.STAY_POSITION = 1;
        this.LEFT = 0;
        this.RIGHT = 1;
        this.directionMove = this.RIGHT;
        this.BEGINNING_ATTACK = 2;
        this.ENDING_ATTACK = 4;
        this.FALLING = 5
        this.BEGINNING_MOVING = 6;
        this.ENDING_MOVING = 20
        this.SPRITE_POSITION = 6;
        this.SPRITE_ATTACK_POSTION = this.BEGINNING_ATTACK;
        this.isMoving = false;
        this.isAttack = false;
        this.isJumping = false;
        this.heightSprite = this.playerSprite.height / 20;

        this.distanceMove = 2;
        this.isKeyDown = false
        this.keyName = null;
        this.gameCamera = gameCamera;
        this.x = x;
        this.y = y;
        this.gameCamera.posX = x - canvas.width / 2;
        this.gameCamera.posY = y - canvas.height / 2;

        //    setInterval(this.shooting.bind(this), 900);
        document.addEventListener('keydown', (event) => {
            this.keyName = event.key;
            this.isKeyDown = true;
        })
        document.addEventListener('keyup', (event) => {
            this.isKeyDown = false;
            this.isMoving = false;
            console.log(this.isJumping);
        })

        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvasCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;
    }

    render() {
        this.draw();
    }

    //there should be only graphics displaying without logic object
    draw() {
        if (this.isAttack) {
            if (this.SPRITE_ATTACK_POSTION > this.ENDING_ATTACK) {
                this.SPRITE_ATTACK_POSTION = this.BEGINNING_ATTACK;
                this.isAttack = false;
            }
            ctx.drawImage(this.playerSprite, 0, this.heightSprite * this.SPRITE_ATTACK_POSTION, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, 50, 50);
            this.SPRITE_ATTACK_POSTION++;
        } else {
            if (this.isMoving && !this.isJumping) {
                if (this.SPRITE_POSITION >= this.ENDING_MOVING) {
                    this.SPRITE_POSITION = this.BEGINNING_MOVING;
                }
                ctx.drawImage(this.playerSprite, 0, this.heightSprite * this.SPRITE_POSITION, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, 50, 50);
                this.SPRITE_POSITION++;
            } else if (this.isJumping) {
                ctx.drawImage(this.playerSprite, 0, this.heightSprite * this.FALLING, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, 50, 50);
            } else {
                ctx.drawImage(this.playerSprite, 0, 0, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, 50, 50);
            }
        }
    }

    updateState() {
        // this.y+=2;
        // this.gameCamera.posY+=2;
        if (this.isKeyDown) {
            console.log(`keydown x: ${this.x}, y: '${this.y}'`)
            switch (this.keyName) {
                case 's':
                    //   console.log('key w');
                    this.y += this.distanceMove;
                    this.gameCamera.posY += this.distanceMove;
                    this.isFalling = true;
                    break;
                case 'w':
                    //   console.log('key s');
                    this.y -= this.distanceMove;
                    this.gameCamera.posY -= this.distanceMove;
                    this.isJumping = true;
                    break;
                case 'd':
                    // console.log(`key d x: ${this.x}, y: '${this.y}'`);
                    this.x += this.distanceMove;
                    this.gameCamera.posX += this.distanceMove;
                    this.isMoving = true;
                    break;
                case 'a':
                    //   console.log(`key a x: ${this.x}, y: '${this.y}'`);
                    this.x -= this.distanceMove;
                    this.gameCamera.posX -= this.distanceMove;
                    this.isMoving = true;
                    break;
                case 'e':
                    this.isAttack = true;
                    break;
            }
        }
    }

    isCollided() {
        let positionInGridCol = Math.round(this.x / tileSize);
        let positionInGridRow = Math.round(this.y / tileSize);

        let blockAbove = gameMap.logicBlocks[positionInGridRow - 1][positionInGridCol];
        let blockRight = gameMap.logicBlocks[positionInGridRow][positionInGridCol + 1];
        let blockUnder = gameMap.logicBlocks[positionInGridRow + 1][positionInGridCol];
        let blockLeft = gameMap.logicBlocks[positionInGridRow - 1][positionInGridCol];

    }
}
