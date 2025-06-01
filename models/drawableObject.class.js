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
}
