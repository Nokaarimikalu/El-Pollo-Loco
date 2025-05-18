class MoveableObject {
    x = 100;
    y = 375;
    img;
    width = 150;
    height = 70;
    currentImage = 0;
    ImageCache = {};
    speed = 0.15;

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

    moveRight() {
        console.log(`Moving right`);
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}
