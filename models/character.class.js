class Character extends MoveableObject {
    x = 0;
    y = 180;
    height = 250;
    width = 250;

    IMAGES_IDLE = [
        `character.img/idle/idle_frame_1.png`,
        `character.img/idle/idle_frame_2.png`,
        `character.img/idle/idle_frame_3.png`,
        `character.img/idle/idle_frame_4.png`,
        `character.img/idle/idle_frame_5.png`,
        `character.img/idle/idle_frame_6.png`,
        `character.img/idle/idle_frame_7.png`,
        `character.img/idle/idle_frame_8.png`,
        `character.img/idle/idle_frame_9.png`,
    ];
    currentImage = 0;

    constructor() {
        super().loadImage(`own.img/walk_frame_1.png`);
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
