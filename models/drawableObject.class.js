class DrawableObject {
    x = 100;
    y = 350;
    width = 80;
    height = 80;
    img;
    ImageCache = {};
    currentImage = 0;

    constructor() {}

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrameoffset(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof SalsaBottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        }
    }

    // drawFrame(ctx) {
    //     if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof SalsaBottle || this instanceof Coin) {
    //         ctx.beginPath();
    //         ctx.lineWidth = "5";
    //         ctx.strokeStyle = "blue";
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }
}
