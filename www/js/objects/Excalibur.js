class Excalibur extends Sword {
    constructor(posX, posY, swordImage, swordImageLeft) {
        super(16.66666, 0);
        this.posX = posX;
        this.posY = posY;
        this.swordImage = swordImage;
        this.swordImageLeft = swordImageLeft;
        this.isAttacking = false;
        this.maxRadians = 140;
        this.firstPositon = -20;
        this.radiansPerUpdate = 5;
        this.counter = 0;
        this.boundaryBox = false;
        this.onTheBeginningRight();

        this.LEFT = 0;
        this.RIGHT = 1;
        this.direction = this.RIGHT;
    }

    render() {
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }


    updateState() {
        if (isKeyDown) {
            switch (keyName) {
                case 'd':
                    this.direction = this.RIGHT;
                    break;
                case 'a':
                    this.direction = this.LEFT;
                    break;
                case 'e':
                    this.isAttacking = true;
                    break;
            }
        }
        if (this.isAttacking) {
            switch (this.direction) {
                case this.LEFT:
                    this.animateRight(this.swordImageLeft);
                    break;
                case this.RIGHT:
                    this.animateRight(this.swordImage);
                    break;
            }
        }
    }

    animateRight(swordImage) {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx.translate(canvas.width / 2 + 40, canvas.height / 2 + 60)
        if (this.counter >= this.maxRadians) {
            this.offscreenCanvasCtx.rotate(Math.radians(-this.maxRadians));
            this.stopAnimation();
            this.counter = 0;
        }
        this.offscreenCanvasCtx.rotate(Math.radians(this.radiansPerUpdate));
        this.counter += this.radiansPerUpdate;
        this.offscreenCanvasCtx.drawImage(swordImage, 0, -30, 60, 60);
        if (this.boundaryBox) {
            this.displayBoundaryBox();
        }
        this.offscreenCanvasCtx.stroke();
        this.offscreenCanvasCtx.translate(-canvas.width / 2 - 40, -canvas.height / 2 - 60)
    }

    animateLeft(swordImage) {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx.translate(canvas.width / 2 + 20, canvas.height / 2 + 60)
        if (this.counter >= this.maxRadians) {
            this.offscreenCanvasCtx.rotate(Math.radians(-this.maxRadians));
            this.stopAnimation();
            this.counter = 0;
        }
        this.offscreenCanvasCtx.rotate(Math.radians(-this.radiansPerUpdate));
        this.counter += this.radiansPerUpdate;
        this.offscreenCanvasCtx.drawImage(swordImage, 0, -30, 60, 60);
        if (this.boundaryBox) {
            this.displayBoundaryBox();
        }
        this.offscreenCanvasCtx.stroke();
        this.offscreenCanvasCtx.translate(-canvas.width / 2 - 20, -canvas.height / 2 - 60)
    }

    stopAnimation() {
        this.isAttacking = false;
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
       // this.resetSword();
    }

    resetSword() {
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvasCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;
    }

    displayBoundaryBox() {

        this.offscreenCanvasCtx.beginPath();
        this.offscreenCanvasCtx.rect(0, -30, 60, 60);
        this.offscreenCanvasCtx.strokeStyle = "red";
    }

    onTheBeginningRight() {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx.translate(canvas.width / 2 + 40, canvas.height / 2 + 60)
        this.offscreenCanvasCtx.rotate(Math.radians(this.firstPositon));
        this.offscreenCanvasCtx.drawImage(this.swordImage, 0, -30, 60, 60)
        if (this.boundaryBox) {
            this.displayBoundaryBox();
        }
        this.offscreenCanvasCtx.stroke();
        this.offscreenCanvasCtx.translate(-canvas.width / 2 - 40, -canvas.height / 2 - 60)
    }
}

