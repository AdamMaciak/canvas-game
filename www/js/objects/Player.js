//set const tick game for all gameobject
class Player extends ExtendedGameObject {

    constructor(playerSprite, playerSpriteLeft, x, y) {
        super(16.666);
        this.playerSprite = playerSprite;
        this.playerSpriteLeft = playerSpriteLeft;
        //only for Sprites
        this.BEGINNING_ATTACK = 1;
        this.ENDING_ATTACK = 4;
        this.FALLING = 5
        this.BEGINNING_MOVING = 6;
        this.ENDING_MOVING = 20
        this.SPRITE_POSITION = 6;
        this.SPRITE_ATTACK_POSTION = this.BEGINNING_ATTACK;
        this.isMoving = false;
        this.isAttack = false;
        this.isFalling = false;
        this.heightSprite = this.playerSprite.height / 20;
        this.counterSprite = 0;
        this.RIGHT = 1;
        this.LEFT = 0;
        this.direction = this.RIGHT;

        this.healthPoints = 100;
        this.scorePoints = 0;

        //coordination
        this.x = x;
        this.y = y;
        this.updateCameraPosition();
        this.velocity_x = 5;
        this.velocity_y = 10;

        this.gravity = 0.03;

        this.bottomCollision = false;
        this.leftCollision = false;
        this.rightCollision = false;
        this.topCollision = false;


        this.old_x = x;
        this.old_y = y;

        this.width = 100;
        this.height = 120;

        this.boundaryBox = true;
    }

    render() {
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

    updateCameraPosition() {
        gameCamera.posX = this.x - canvas.width / 2;
        gameCamera.posY = this.y - canvas.height / 2;
    }

    updateState() {
        this.old_y = this.y;
        this.old_x = this.x;

        if (!this.bottomCollision) {
            this.y += this.velocity_y;
            this.updateCameraPosition();
        }

        console.log(`keydown x: ${this.x}, y: '${this.y}'`)

        if (isKeyDown) {
            switch (keyName) {
                case 'w':
                    console.log('jump');
                    break;
                case 'd':
                    if (!this.rightCollision) {
                        this.x += this.velocity_x;
                        this.updateCameraPosition();
                    }
                    break;
                case 'a':
                    if (!this.leftCollision) {
                        this.x -= this.velocity_x;
                        this.updateCameraPosition();
                    }
                    break;
                case 'e':
                    this.isAttack = true;
                    break;
            }
        }

        //Sprite animation
        if (this.y - this.old_y > 0) {
            console.log('moving down');
            this.isFalling = true;
        } else if (this.x - this.old_x > 0) {
            console.log('moving right');
            this.direction = this.RIGHT;
            this.isMoving = true;
        } else if (this.old_x - this.x > 0) {
            console.log('moving left');
            this.direction = this.LEFT;
            this.isMoving = true;
        } else if (this.old_y - this.y > 0) {
            console.log('jump');
            this.isFalling = true;
        } else {
            this.isFalling = false;
            this.isMoving = false;
        }


        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);

        if (this.direction === this.LEFT) {
            this.animate(this.playerSpriteLeft);
        } else if (this.direction === this.RIGHT) {
            this.animate(this.playerSprite);
        }

        if (this.boundaryBox) {
            this.offscreenCanvasCtx.beginPath();
            this.offscreenCanvasCtx.rect(canvas.width / 2, canvas.height / 2, this.width, this.height);
            this.offscreenCanvasCtx.strokeStyle = "red";
            this.offscreenCanvasCtx.stroke();
        }
    }


    animate(playerSprite) {
        if (this.isAttack) {
            if (this.SPRITE_ATTACK_POSTION > this.ENDING_ATTACK) {
                this.SPRITE_ATTACK_POSTION = this.BEGINNING_ATTACK;
                this.isAttack = false;
            }
            this.offscreenCanvasCtx.drawImage(playerSprite, 0, this.heightSprite * this.SPRITE_ATTACK_POSTION, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, this.width, this.height = 120);
            if (this.counterSprite % 6 === 0) this.SPRITE_ATTACK_POSTION++;
            this.counterSprite++;
        } else {
            if (this.isMoving) {
                if (this.SPRITE_POSITION >= this.ENDING_MOVING) {
                    this.SPRITE_POSITION = this.BEGINNING_MOVING;
                }
                this.offscreenCanvasCtx.drawImage(playerSprite, 0, this.heightSprite * this.SPRITE_POSITION, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, this.width, this.height = 120);
                if (this.counterSprite % 3 === 0) this.SPRITE_POSITION++;
                this.counterSprite++;
            } else if (this.isFalling) {
                this.offscreenCanvasCtx.drawImage(playerSprite, 0, this.heightSprite * this.FALLING, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, this.width, this.height = 120);
            } else {
                this.offscreenCanvasCtx.drawImage(playerSprite, 0, 0, this.playerSprite.width, (this.playerSprite.height / 20), canvas.width / 2, canvas.height / 2, this.width, this.height = 120);
            }

        }
    }

    get right() {
        return this.x + this.width;
    }

    get oldRight() {
        return this.old_x + this.width;
    }

    get left() {
        return this.x;
    }

    get oldLeft() {
        return this.old_x;
    }

    get centerX() {
        return this.x + (this.width / 2);
    }

    get centerY() {
        return this.y + (this.height / 2);
    }

    get bottom() {
        return this.y + this.height;
    }

    get oldBottom() {
        return this.old_y + this.height;
    }

    get top() {
        return this.y;
    }

    get oldTop() {
        return this.old_y;
    }
}
