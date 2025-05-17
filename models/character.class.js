class Character extends MoveableObject {
    x = 0;
    y = 180;
    height = 250;
    width = 250;

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
    currentImage = 0;

    constructor() {
        super().loadImage(`own.img/character/idle/idle_frame_1.png`);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.ImageCache[path];
            this.currentImage++;
        }, 190);
    }

    jump() {}
}
