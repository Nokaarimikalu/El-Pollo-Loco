class Character extends MoveableObject {

    x = 0;
    y = 170;
    height = 250;
    width = 150;
    speed = 3.5;
    world;
    offset = {
        top: 110,
        right: 45,
        bottom: 10,
        left: 30,
    }

    rx;
    ry;
    rw;
    rh;

    constructor() {
        super();
        this.loadImage(ImageHub.mainCharacter.idle[0]);
        this.loadImages(ImageHub.mainCharacter.walk);
        this.loadImages(ImageHub.mainCharacter.jump);
        Intervalhub.startInterval(this.applyGravity,1000 / 25);
        Intervalhub.startInterval(this.animate, 1000/6);
        Intervalhub.startInterval(this.leftAndRightAnimation, 1000/ 60);
        this.getRealFrame();
    }

    animate = () => {    
            if(this.isAboveGround()  ){
                this.playAnimation(ImageHub.mainCharacter.jump)
            } else {
                //Walk animation
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(ImageHub.mainCharacter.walk)
                }
            }   
    }

    leftAndRightAnimation = () => {
        // wie schnell er sich bewegen tut 
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0 ) {
                this.otherDirection = true;
                this.moveLeft();
            }
            if(this.world.keyboard.SPACEBAR && !this.isAboveGround()){
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
    }


    
}
