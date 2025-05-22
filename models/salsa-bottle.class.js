class SalsaBottle extends ConsumeableObject {
    y = 340;
    constructor(x){
        super();
        const random_i = Math.floor(Math.random()* ImageHub.salsa.on_ground.length); //floor rundet ab   
        const random_img = ImageHub.salsa.on_ground[random_i]
        this.loadImage(random_img);

        this.x = x;
    }
}