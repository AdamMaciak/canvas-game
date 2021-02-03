class HealthBar extends ExtendedGameObject {
    constructor(player) {
        super(tickGame);
        this.player = player;
        this.position = 1;
        this.width = 700;
        this.height = 100;
    }

    render() {
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

    updateState() {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.offscreenCanvasCtx.fillStyle = 'red';
        this.offscreenCanvasCtx.fillRect(30, 30, this.position * this.width, this.height);
        this.offscreenCanvasCtx.beginPath();
        this.offscreenCanvasCtx.rect(30, 30, this.width, this.height);
        this.offscreenCanvasCtx.strokeStyle = "black";
        this.offscreenCanvasCtx.stroke();
        this.offscreenCanvasCtx.font = "30px Arial";
        this.offscreenCanvasCtx.fillStyle = "black";
        this.offscreenCanvasCtx.fillText(this.player.healthPoints + "/" + this.player.maxHealthPoints, -10 + this.width / 2, 30 + this.height / 2);
        this.updatePosition();
    }

    updatePosition() {
        this.position = (this.player.healthPoints / this.player.maxHealthPoints);
    }
}

