class WorldBuilder {
    constructor(gameMap, blocksImage, numberOfItemsInRow) {
        this.sizeTile = blocksImage.width / numberOfItemsInRow;
        this.blocksImage = blocksImage;
        this.gameMap = gameMap;
    }

    build() {
        console.log('build');
        for (let i = 0; i < this.gameMap.logicBlocks.length; i++) {
            for (let j = 0; j < this.gameMap.logicBlocks[0].length; j++) {
                let typeBlock = this.gameMap.logicBlocks[i][j];
                switch (typeBlock) {
                    case EMPTY_BLOCK:
                        break;
                    case DIRT_BLOCK:
                        gameObjects.push(this.createTile(j, i, positionOfDirtBlock))
                        break;
                    case GRASS_BLOCK:
                        gameObjects.push(this.createTile(j, i, positionOfGrassBlock))
                        break;
                    case GRASS_BLOCK_FLOAT:
                        gameObjects.push(this.createTile(j, i, positionOfGrassBlockFloat))
                    default:
                        break;
                }
            }
        }
    }

    createTile(i, j, block) {
        let x = tileSize * i;
        let y = tileSize * j;
        let spriteX = block.col * this.sizeTile;
        let spriteY = block.row * this.sizeTile;
        return new Tile(x, y, spriteX, spriteY, this.sizeTile, this.blocksImage);
    }
}