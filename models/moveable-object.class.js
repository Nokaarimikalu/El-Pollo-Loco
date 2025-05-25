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
    speedY = 0;
    acceleration = 2.5;

    applyGravity(){
        setInterval(()=> {
            if(this.isAboveGround()){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } 
        },1000/25)
    }

    isAboveGround(){
        return this.y < 170;
    }

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

    playAnimation(images){
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.ImageCache[path];
            this.currentImage++;
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

