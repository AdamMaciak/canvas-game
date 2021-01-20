class Player extends GameObject {

    constructor(playerSprite, x, y) {
        super(13);
        this.playerSprite = playerSprite;
        // this.NUMBER_OF_SPRITES = 20;
        // this.STAY_POSITION = 1;
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
        this.x = x;
        this.y = y;
        this.distanceMove = 2;
        this.isKeyDown = false
        this.keyName = null;
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
    }

    render() {
        this.draw();
    }

    draw() {
        if (this.isAttack) {
            if (this.SPRITE_ATTACK_POSTION > this.ENDING_ATTACK) {
                this.SPRITE_ATTACK_POSTION = this.BEGINNING_ATTACK;
                this.isAttack = false;
            }
            ctx.drawImage(this.playerSprite, 0, this.heightSprite * this.SPRITE_ATTACK_POSTION, this.playerSprite.width, (this.playerSprite.height / 20), this.x, this.y, 50, 50);
            this.SPRITE_ATTACK_POSTION++;
        } else {
            if (this.isMoving && !this.isJumping) {
                if (this.SPRITE_POSITION >= this.ENDING_MOVING) {
                    this.SPRITE_POSITION = this.BEGINNING_MOVING;
                }
                ctx.drawImage(this.playerSprite, 0, this.heightSprite * this.SPRITE_POSITION, this.playerSprite.width, (this.playerSprite.height / 20), this.x, this.y, 50, 50);
                this.SPRITE_POSITION++;
            } else if (this.isJumping) {
                ctx.drawImage(this.playerSprite, 0, this.heightSprite * this.FALLING, this.playerSprite.width, (this.playerSprite.height / 20), this.x, this.y, 50, 50);
            } else {
                ctx.drawImage(this.playerSprite, 0, 0, this.playerSprite.width, (this.playerSprite.height / 20), this.x, this.y, 50, 50);
            }
        }
    }

    updateState() {
        if (this.isKeyDown) {
            console.log(`keydown x: ${this.x}, y: '${this.y}'`)
            switch (this.keyName) {
                case 's':
                    //   console.log('key w');
                    this.y += this.distanceMove;
                    this.isFalling = true;
                    break;
                case 'w':
                    //   console.log('key s');
                    this.y -= this.distanceMove;
                    this.isJumping = true;
                    break;
                case 'd':
                    // console.log(`key d x: ${this.x}, y: '${this.y}'`);
                    this.x += this.distanceMove;
                    this.isMoving = true;
                    break;
                case 'a':
                    //   console.log(`key a x: ${this.x}, y: '${this.y}'`);
                    this.x -= this.distanceMove;
                    this.isMoving = true;
                    break;
                case 'e':
                    this.isAttack = true;
                    break;
            }
        }
        this.y += 0.8;
        if (this.y >= 400) {
            this.isJumping = false;
            this.y = 400;
        }
    }
}
