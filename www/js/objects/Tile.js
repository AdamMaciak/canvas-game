class Tile extends GameObject {
    constructor(posX, posY, posSpriteX, posSpriteY, sizeTile, gameCamera, blocksImage) {
        super(11, 0);
        this.posX = posX;
        this.posY = posY;
        this.posSpriteX = posSpriteX;
        this.posSpriteY = posSpriteY;
        this.sizeTile = sizeTile;
        this.posCanvasX = 0;
        this.posCanvasY = 0;
        this.gameCamera = gameCamera;
        this.blocksImage = blocksImage;
    }

    render() {
        this.posCanvasX = this.posX - this.gameCamera.posX;
        this.posCanvasY = this.posY - this.gameCamera.posY;
        ctx.drawImage(this.blocksImage, this.posSpriteX, this.posSpriteY, this.sizeTile, this.sizeTile, this.posCanvasX, this.posCanvasY, tileSize, tileSize);
    }

    updateState() {

    }
}