class ConsumeableObject extends MoveableObject {


    constructor(){
        super();

    }

    animate(){
        setInterval(() =>{
            this.playAnimation(ImageHub.images_of_coins);
        },400);
    }
}