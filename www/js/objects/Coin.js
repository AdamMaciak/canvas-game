class Coin extends ExtendedGameObject {
    constructor(x, y) {
        super(tickGame);
        this.sprite = coinImage;
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.positionSprite = 0;
        this.posCanvasX = 0;
        this.posCanvasY = 0;
        this.counterSprite = 0;
    }

    render() {
        this.posCanvasX = this.x - gameCamera.posX;
        this.posCanvasY = this.y - gameCamera.posY;
        ctx.drawImage(this.offscreenCanvas, 0, 0, canvas.width, canvas.height);
    }

    updateState() {
        this.offscreenCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.animate(this.sprite);
    }

    animate(sprite) {
        if (this.positionSprite >= 6) this.positionSprite = 0;
        if (this.counterSprite % 6 === 0) this.positionSprite++;
        this.counterSprite++;
        this.offscreenCanvasCtx.drawImage(sprite, (sprite.width / 6) * this.positionSprite, 0, sprite.width / 6, sprite.height, this.posCanvasX, this.posCanvasY, this.width, this.height);
    }
}