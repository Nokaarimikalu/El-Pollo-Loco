class Character extends MoveableObject {
    x = 0;
    y = 180;
    height = 250;
    width = 250;
    speed = 1.5;
    world;

    IMAGES_WAlKING = [
        `own.img/character/walking/walk_frame_1.png`,
        `own.img/character/walking/walk_frame_2.png`,
        `own.img/character/walking/walk_frame_3.png`,
        `own.img/character/walking/walk_frame_4.png`,
        `own.img/character/walking/walk_frame_5.png`,
        `own.img/character/walking/walk_frame_6.png`,
        `own.img/character/walking/walk_frame_7.png`,
        `own.img/character/walking/walk_frame_8.png`,
        `own.img/character/walking/walk_frame_9.png`,
        `own.img/character/walking/walk_frame_10.png`,
        `own.img/character/walking/walk_frame_11.png`,
        `own.img/character/walking/walk_frame_12.png`,
    ];

    IMAGES_IDLE = [
        `own.img/character/idle/idle_frame_1.png`,
        `own.img/character/idle/idle_frame_2.png`,
        `own.img/character/idle/idle_frame_3.png`,
        `own.img/character/idle/idle_frame_4.png`,
        `own.img/character/idle/idle_frame_5.png`,
        `own.img/character/idle/idle_frame_6.png`,
        `own.img/character/idle/idle_frame_7.png`,
        `own.img/character/idle/idle_frame_8.png`,
        `own.img/character/idle/idle_frame_9.png`,
    ];

    constructor() {
        super().loadImage(`own.img/character/idle/idle_frame_1.png`);
        this.loadImages(this.IMAGES_WAlKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            // wie schnell er sich bewegen tut
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //Walk animation
                let i = this.currentImage % this.IMAGES_WAlKING.length;
                let path = this.IMAGES_WAlKING[i];
                this.img = this.ImageCache[path];
                this.currentImage++;
            }
        }, 80);
    }

    jump() {}
}
