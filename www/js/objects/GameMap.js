class GameMap {
    constructor(logicBlocks) {
        this.rows = logicBlocks.length;
        this.cols = logicBlocks[0].length;
        this.trueHeight = this.rows * tileSize;
        this.trueWidth = this.cols * tileSize;
        this.logicBlocks = logicBlocks;
    }

    isSolidBlock(row, col) {
        return 0;
    }
}