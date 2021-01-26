class Background extends GameObject {

    constructor(imageBackground) {
        super(0, 0);
        this.imageBackground = imageBackground;
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvasCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;
    }


    render() {
        ctx.drawImage(this.imageBackground, 0, 0, canvas.width, canvas.height);
    }
}