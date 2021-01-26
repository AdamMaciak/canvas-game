class Excalibur extends Sword {
    constructor(posX, posY, swordImage) {
        super(13, 0);
        this.posX = posX;
        this.posY = posY;
        this.swordImage = swordImage;
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvasCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;
        this.isAttacking = false;
    }

    render() {
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }


    updateState() {
        if (isKeyDown) {
            if (keyName === 'e') {
                this.isAttacking = true;
                setTimeout(this.stopAnimation.bind(this), 1000);
            }
        }
        if (this.isAttacking) {
            this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            this.offscreenCanvasCtx.translate(canvas.width / 2, canvas.height / 2)
            this.offscreenCanvasCtx.rotate(Math.radians(3));
            this.offscreenCanvasCtx.drawImage(this.swordImage, 0, -30, 30, 30)
            this.offscreenCanvasCtx.translate(-canvas.width / 2, -canvas.height / 2)
        }
    }

    stopAnimation() {
        this.isAttacking = false;
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

