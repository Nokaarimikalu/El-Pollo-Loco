class MoveableObject {
    x = 100;
    y = 330;
    img;
    width = 250;
    height = 250;
    ImageCache = {};

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
        console.log(`Moging Left`);
    }
}
