class GameMap {
    constructor(logicBlocks) {
        this.rows = logicBlocks.length;
        this.cols = logicBlocks[0].length;
        this.trueHeight = this.rows * tileSize;
        this.trueWidth = this.cols * tileSize;
        this.logicBlocks = logicBlocks;
    }

    isSolidBlock(row, col) {
        switch (this.logicBlocks[row][col]) {
            case EMPTY_BLOCK:
                return false;
            case DIRT_BLOCK:
                return true;
            case GRASS_BLOCK:
                return true;
        }
    }
}