class TextInGame extends ExtendedGameObject {
    constructor() {
        super(tickGame);
        this.monsterLeft = 0;
        this.coinGathered = 0;
    }

    render() {
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

    updateState() {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx.font = "30px Arial";
        this.offscreenCanvasCtx.fillStyle = "black";
        this.offscreenCanvasCtx.fillText("monster left:" + this.monsterLeft + " money:" + this.coinGathered, 3 * canvas.width / 4, 100);
        this.updateStats();
    }

    updateStats() {
        this.monsterLeft = monsterLeft;
        this.coinGathered = coinGathered;
    }
}