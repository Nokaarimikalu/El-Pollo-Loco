class MoveableObject {
    x = 100;
    y = 350;
    img;
    width = 80;
    height = 80;
    currentImage = 0;
    ImageCache = {};
    speed = 0.15;
    otherDirection = false;

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

    playAnimation(images){
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.ImageCache[path];
            this.currentImage++;
    }
}

