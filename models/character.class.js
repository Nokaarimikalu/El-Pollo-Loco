class Character extends MoveableObject {

    x = 0;
    y = 180;
    height = 250;
    width = 150;
    speed = 2.5;
    world;

    constructor() {
        super();
        this.loadImage(ImageHub.mainCharacter.idle[0]);
        this.loadImages(ImageHub.mainCharacter.walk);
        this.animate();
        this.leftAndRightAnimation();
    }

    animate() {
        setInterval(() => {
            //Walk animation
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(ImageHub.mainCharacter.walk)
            }
        }, 80);
    }

    leftAndRightAnimation(){
        // wie schnell er sich bewegen tut
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0 ) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }

    jump() {}
}
