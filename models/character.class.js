class Character extends MoveableObject {

    x = 0;
    y = 80;
    height = 250;
    width = 150;
    speed = 2.5;
    world;

    constructor() {
        super();
        this.loadImage(ImageHub.mainCharacter.idle[0]);
        this.loadImages(ImageHub.mainCharacter.walk);
        this.loadImages(ImageHub.mainCharacter.jump);
        this.applyGravity();
        this.animate();
        this.leftAndRightAnimation();
    }

    animate() {    
        setInterval(() => {
            if(this.isAboveGround()){
                this.playAnimation(ImageHub.mainCharacter.jump)
            } else {
                //Walk animation
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(ImageHub.mainCharacter.walk)
                }
            }   
        }, 1000/10);
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
