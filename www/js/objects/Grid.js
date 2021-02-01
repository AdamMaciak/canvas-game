class Grid extends ExtendedGameObject {
    constructor() {
        super(13);
        this.posX = 0;
        this.posY = 0;
        this.posCanvasX = 0;
        this.posCanvasY = 0;
        this.gameCamera = gameCamera;
    }

    render() {
        this.posCanvasX = this.posX - this.gameCamera.posX;
        this.posCanvasY = this.posY - this.gameCamera.posY;
        ctx.drawImage(this.offscreenCanvas, this.posCanvasX, this.posCanvasY, canvas.width, canvas.height);
    }

    updateState() {
        for (let i = 0; i <= gameMap.rows; i++) {
            this.offscreenCanvasCtx.beginPath();
            this.offscreenCanvasCtx.moveTo(0, tileSize * i);
            this.offscreenCanvasCtx.lineTo(gameMap.trueWidth, tileSize * i);
            this.offscreenCanvasCtx.stroke();
        }
        for (let j = 0; j <= gameMap.cols; j++) {
            this.offscreenCanvasCtx.beginPath();
            this.offscreenCanvasCtx.moveTo(tileSize * j, 0);
            this.offscreenCanvasCtx.lineTo(tileSize * j, gameMap.trueHeight);
            this.offscreenCanvasCtx.stroke();
        }
    }
}