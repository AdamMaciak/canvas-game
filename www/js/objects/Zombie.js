class Zombie extends ExtendedGameObject {
    constructor(zombieSprite, zombieSpriteLeft, x, y, player) {
        super(tickGame);//16.666
        this.zombieSprite = zombieSprite;
        this.zombieSpriteLeft = zombieSpriteLeft;
        this.heightSprite = zombieSprite.height / 3;
        this.x = x;
        this.y = y;

        this.player = player;

        this.old_x = x;
        this.old_y = y;

        this.velocity_x = 2;
        this.velocity_y = 10;

        this.posCanvasX = 0;
        this.posCanvasY = 0;
        this.counterSprite = 0;

        this.LEFT = 0;
        this.RIGHT = 1;
        this.direction = this.RIGHT;

        this.positionSprite = 0;

        this.isMoving = false;
        this.width = 100;
        this.height = 120;

        this.bottomCollision = false;
        this.leftCollision = false;
        this.rightCollision = false;
        this.topCollision = false;

        this.invicible = false;
        this.timeInvicible = 400;
        this.damage = 5;

        this.healthPoints = 50;
        this.maxHealthPoints = 50;

        this.isKilled = false;
    }

    render() {
        this.posCanvasX = this.x - gameCamera.posX;
        this.posCanvasY = this.y - gameCamera.posY;
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

    updateState() {
        if (this.healthPoints < 0) {
            this.isKilled = true;
            this.stopAndHide();
            this.dropCoin();
            monsterLeft--;
        }

        this.old_y = this.y;
        this.old_x = this.x;

        if (!this.bottomCollision) {
            this.y += this.velocity_y;
        }

        if (this.player.x < this.x && !this.leftCollision) {
            this.x -= this.velocity_x;
        } else if (this.player.x > this.x && !this.rightCollision) {
            this.x += this.velocity_x;
        }

        if (isKeyDown) {
            switch (keyName) {
                case 'e':
                    if (Math.abs(this.player.centerX - this.x) <= 50 && (this.player.centerY < this.bottom && this.player.centerY > this.top)) {
                        if (!this.invicible) {
                            if (this.player.direction === this.player.RIGHT) {
                                this.healthPoints -= 10;
                                this.invicible = true;
                                setTimeout(() => {
                                    this.invicible = false;
                                }, this.timeInvicible);
                                this.x += 50;
                            }
                        }
                    } else if (Math.abs(this.x + this.width - this.player.centerX) <= 50 && (this.player.centerY < this.bottom && this.player.centerY > this.top)) {
                        if (!this.invicible) {
                            if (this.player.direction === this.player.LEFT) {
                                this.healthPoints -= 10;
                                this.invicible = true;
                                setTimeout(() => {
                                    this.invicible = false;
                                }, this.timeInvicible);
                                this.x -= 50;
                            }
                        }
                    }
                    break;
            }
        }

        if (isTouchDown) {
            if ((touchPosition.x >= 1000 && touchPosition.x < 1200) && (touchPosition.y <= 700 && touchPosition.y >= 600)) {
                if (Math.abs(this.player.centerX - this.x) <= 50 && (this.player.centerY < this.bottom && this.player.centerY > this.top)) {
                    if (!this.invicible) {
                        if (this.player.direction === this.player.RIGHT) {
                            this.healthPoints -= 10;
                            this.invicible = true;
                            setTimeout(() => {
                                this.invicible = false;
                            }, this.timeInvicible);
                            this.x += 50;
                        }
                    }
                } else if (Math.abs(this.x + this.width - this.player.centerX) <= 50 && (this.player.centerY < this.bottom && this.player.centerY > this.top)) {
                    if (!this.invicible) {
                        if (this.player.direction === this.player.LEFT) {
                            this.healthPoints -= 10;
                            this.invicible = true;
                            setTimeout(() => {
                                this.invicible = false;
                            }, this.timeInvicible);
                            this.x -= 50;
                        }
                    }
                }
            }
        }

        //animations
        if (this.x - this.old_x > 0) {
            // console.log('moving right zombie');
            this.direction = this.RIGHT;
            this.isMoving = true;
        } else if (this.old_x - this.x > 0) {
            //  console.log('moving left zombie');
            this.direction = this.LEFT;
            this.isMoving = true;
        }


        if (!this.player.invicible) {
            if (Math.abs(this.left - this.player.centerX) <= 20 && (this.player.centerY < this.bottom && this.player.centerY > this.top)) {
                this.player.healthPoints -= this.damage;
                playerHealth = this.player.healthPoints;
                this.player.invicible = true;
                setTimeout(() => {
                    this.player.invicible = false;
                }, this.player.timeInvicible);
            } else if (Math.abs(this.right - this.player.centerX) <= 20 && (this.player.centerY < this.bottom && this.player.centerY > this.top)) {
                this.player.healthPoints -= this.damage;
                playerHealth = this.player.healthPoints;
                this.player.invicible = true;
                setTimeout(() => {
                    this.player.invicible = false;
                }, this.player.timeInvicible);
            }
        }

        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);

        if (this.direction === this.LEFT) {
            this.animate(this.zombieSpriteLeft);
        } else if (this.direction === this.RIGHT) {
            this.animate(this.zombieSprite);
        }

    }

    animate(sprite) {
        this.offscreenCanvasCtx.fillStyle = 'red';
        this.offscreenCanvasCtx.fillRect(this.posCanvasX, this.posCanvasY - this.height, 100 * this.position, 20);
        this.offscreenCanvasCtx.beginPath();
        this.offscreenCanvasCtx.rect(this.posCanvasX, this.posCanvasY - this.height, 100, 20);
        this.offscreenCanvasCtx.strokeStyle = "black";
        this.offscreenCanvasCtx.stroke();
        this.updatePositionHealthBar();

        if (this.isMoving) {
            if (this.positionSprite >= 3) {
                this.positionSprite = 0;
            }
            this.offscreenCanvasCtx.drawImage(sprite, 0, this.heightSprite * this.positionSprite, sprite.width, sprite.height / 3, this.posCanvasX, this.posCanvasY, this.width, this.height);
            if (this.counterSprite % 6 === 0) this.positionSprite++;
            this.counterSprite++;
        } else {
            this.offscreenCanvasCtx.drawImage(sprite, 0, this.heightSprite * this.positionSprite, sprite.width, sprite.height / 3, this.posCanvasX, this.posCanvasY, this.width, this.height);
        }
    }

    updatePositionHealthBar() {
        this.position = (this.healthPoints / this.maxHealthPoints);
    }

    dropCoin() {
        let coin = new Coin(this.centerX, this.centerY);
        coin.start();
        gameObjects.push(coin);
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