class Tile extends GameObject {
    constructor(x, y, posSpriteX, posSpriteY, sizeTile, blocksImage) {
        super(16.666, 0);
        this.x = x;
        this.y = y;
        this.posSpriteX = posSpriteX;
        this.posSpriteY = posSpriteY;
        this.sizeTile = sizeTile;
        this.posCanvasX = 0;
        this.posCanvasY = 0;
        this.blocksImage = blocksImage;
    }

    render() {
        this.posCanvasX = this.x - gameCamera.posX;
        this.posCanvasY = this.y - gameCamera.posY;
        ctx.drawImage(this.blocksImage, this.posSpriteX, this.posSpriteY, this.sizeTile, this.sizeTile, this.posCanvasX, this.posCanvasY, tileSize, tileSize);
    }

    updateState() {

    }
}