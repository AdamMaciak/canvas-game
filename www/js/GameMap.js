class GameMap {
    constructor(logicBlocks) {
        this.rows = logicBlocks.length;
        this.cols = logicBlocks[0].length;
        this.trueHeight = this.cols * tileSize;
        this.trueWidth = this.rows * tileSize;
        this.logicBlocks = logicBlocks;
    }
}