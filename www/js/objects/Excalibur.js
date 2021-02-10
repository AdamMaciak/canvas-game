class Excalibur extends Sword {
    constructor(posX, posY, swordImage, swordImageLeft) {
        super(16.66666, 0);
        this.posX = posX;
        this.posY = posY;
        this.swordImage = swordImage;
        this.swordImageLeft = swordImageLeft;
        this.isAttacking = false;

        this.firstPositon = 0;

        this.radiansPerUpdate = 5;
        this.maxRadians = 120;
        this.counter = 0;
        this.boundaryBox = false;

        this.LEFT = 0;
        this.RIGHT = 1;
        this.direction = this.RIGHT;

        //for left
        this.offscreenCanvas2 = document.createElement('canvas');
        this.offscreenCanvasCtx2 = this.offscreenCanvas2.getContext('2d');
        this.offscreenCanvas2.width = canvas.width;
        this.offscreenCanvas2.height = canvas.height;
        this.onTheBeginningRight(this.swordImage);
        this.onTheBeginningLeft(this.swordImageLeft);
    }

    render() {

        switch (this.direction) {
            case this.LEFT:
                ctx.drawImage(this.offscreenCanvas2, 0, 0, canvas.width, canvas.height);
                break;
            case this.RIGHT:
                ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
                break;
        }
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
                    this.animateLeft(this.swordImageLeft);
                    break;
                case this.RIGHT:
                    this.animateRight(this.swordImage);
                    break;
            }
        }

        if (isTouchDown) {
            if ((touchPosition.x >= 1000 && touchPosition.x < 1200) && (touchPosition.y <= 700 && touchPosition.y >= 600)) {
                this.isAttacking = true;
            } else if ((touchPosition.x >= 300 && touchPosition.x < 500) && (touchPosition.y <= 700 && touchPosition.y >= 600)) {
                this.direction = this.RIGHT;
            } else if ((touchPosition.x >= 100 && touchPosition.x < 200) && (touchPosition.y <= 700 && touchPosition.y >= 600)) {
                this.direction = this.LEFT;
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
        this.offscreenCanvasCtx2.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx2.translate(canvas.width / 2 + 40, canvas.height / 2 + 60)
        if (this.counter >= this.maxRadians) {
            this.offscreenCanvasCtx2.rotate(Math.radians(this.maxRadians));
            this.stopAnimation();
            this.counter = 0;
        }
        this.offscreenCanvasCtx2.rotate(Math.radians(-this.radiansPerUpdate));
        this.counter += this.radiansPerUpdate;
        this.offscreenCanvasCtx2.drawImage(swordImage, -60, -30, 60, 60);
        if (this.boundaryBox) {
            this.displayBoundaryBox();
        }
        this.offscreenCanvasCtx2.stroke();
        this.offscreenCanvasCtx2.translate(-canvas.width / 2 - 40, -canvas.height / 2 - 60)
    }

    stopAnimation() {
        this.isAttacking = false;
        switch (this.direction) {
            case this.LEFT:
                this.offscreenCanvasCtx2.clearRect(0, 0, canvas.width, canvas.height);
                break;
            case this.RIGHT:
                this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                break;
        }
    }

    displayBoundaryBox() {
        this.offscreenCanvasCtx.beginPath();
        this.offscreenCanvasCtx.rect(0, -30, 60, 60);
        this.offscreenCanvasCtx.strokeStyle = "red";
    }

    onTheBeginningRight(swordImage) {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx.translate(canvas.width / 2 + 40, canvas.height / 2 + 60);
        this.offscreenCanvasCtx.rotate(Math.radians(this.firstPositon));
        this.offscreenCanvasCtx.drawImage(swordImage, 0, -30, 60, 60);
        if (this.boundaryBox) {
            this.displayBoundaryBox();
        }
        this.offscreenCanvasCtx.stroke();
        this.offscreenCanvasCtx.translate(-canvas.width / 2 - 40, -canvas.height / 2 - 60)
    }


    onTheBeginningLeft(swordImage) {
        this.offscreenCanvasCtx2.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx2.translate(canvas.width / 2 + 50, canvas.height / 2 + 60);
        this.offscreenCanvasCtx2.rotate(Math.radians(this.firstPositon));
        this.offscreenCanvasCtx2.drawImage(swordImage, -60, -30, 60, 60);
        if (this.boundaryBox) {
            this.displayBoundaryBox();
        }
        this.offscreenCanvasCtx2.stroke();
        this.offscreenCanvasCtx2.translate(-canvas.width / 2 - 50, -canvas.height / 2 - 60)
    }
}

