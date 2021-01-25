class Background extends GameObject {

    constructor(imageBackground) {
        super(0, 0);
        this.imageBackground = imageBackground;
    }


    render() {
        ctx.drawImage(this.imageBackground, 0, 0, canvas.width, canvas.height);
    }
}