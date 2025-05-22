class Coin extends MoveableObject {
    height = 100;
    width = 100;


    constructor(x,y){
        super();
        this.loadImage(`img/8_coin/coin_1.png`);
        this.loadImages(ImageHub.images_of_coins);
        this.animate();
        this.x = x;
        this.y = y;
    }


    animate(){
        setInterval(() =>{
            this.playAnimation(ImageHub.images_of_coins);
        },400);
    }
}


// glaube das ich eine neue Klasse mache wo ich gebuendelt 6 bis 8 coins in nen Halbkreis hab  und dann im level bei Coins die gebuendelten  dann rein tue

// class multipleCoins {
    
//     allCoins = [];

//     constructor(offset){
//         this.allCoins =
//     [
//         new Coin(100 + offset,200),
//         new Coin(120 + offset,160),
//         new Coin(150 + offset,130),
//         new Coin(190 + offset,110),
//         new Coin(240 + offset,110),
//         new Coin(280 + offset,130),
//         new Coin(310 + offset,160),
//         new Coin(330 + offset,200),
//     ]
        
//     }

// }