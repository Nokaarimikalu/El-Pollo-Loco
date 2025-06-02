class coin_bar extends Statusbar {
    x = 10;
    y = 90;
    percentage = 0;
    collectedCoins = 0;

    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.coins);
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        let path = ImageHub.hitpointbar.coins[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}
