class Coin extends ConsumeableObject {
    height = 100;
    width = 100;
    x = 200;
    offsetx = 0;
    offset = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30,
    };

    rx;
    ry;
    rw;
    rh;

    constructor(x, y, offsetx) {
        super();
        this.loadImage(`img/8_coin/coin_1.png`);
        this.loadImages(ImageHub.images_of_coins);
        this.animate();
        this.x = x + offsetx;
        this.y = y;
    }

    static multipleCoins(offsetx) {
        return [
            new Coin(100, 280, offsetx),
            new Coin(120, 240, offsetx),
            new Coin(150, 210, offsetx),
            new Coin(190, 190, offsetx),
            new Coin(240, 190, offsetx),
            new Coin(280, 210, offsetx),
            new Coin(310, 240, offsetx),
            new Coin(330, 280, offsetx),
        ];
    }
}
