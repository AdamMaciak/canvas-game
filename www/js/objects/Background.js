class Background extends ExtendedGameObject {

    constructor(imageBackground, imageBackground2, imageBackground3) {
        super(0, 0);
        this.image = imageBackground;
        this.image2 = imageBackground2;
        this.image3 = imageBackground3;
    }

    render() {
        ctx.drawImage(this.image3, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image2, 0,0, canvas.width, canvas.height);
        ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
    }
}