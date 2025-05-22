class Coin extends ConsumeableObject {
    
    height = 100;
    width = 100;
    x = 200;
    offset = 0;

    constructor(x,y, offset){
        super();
        this.loadImage(`img/8_coin/coin_1.png`);
        this.loadImages(ImageHub.images_of_coins);
        this.animate();
        this.x = x + offset
        this.y = y;
    }


    static multipleCoins(offset){
        return [
            new Coin(100 ,280, offset),
            new Coin(120 ,240, offset),
            new Coin(150 ,210, offset),
            new Coin(190 ,190, offset),
            new Coin(240 ,190, offset),
            new Coin(280 ,210, offset),
            new Coin(310 ,240, offset),
            new Coin(330 ,280, offset),
        ]
    }

}

