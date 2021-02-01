class ExtendedGameObject extends GameObject {
    constructor(updateStateMilliseconds, delay) {
        super(updateStateMilliseconds, delay);
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvasCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;
    }
}