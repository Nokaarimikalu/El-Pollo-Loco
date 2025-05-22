class BackgroundObject extends MoveableObject {

    width = 720;
    height = 480;
    
    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}
