class Character extends MoveableObject {
    constructor() {
        super().loadImage(`img/2_character_pepe/1_idle/idle/I-1.png`);
        this.x = 0;
        this.y = 180;
        this.height = 250;
        this.width = 160;
    }

    jump() {}
}
