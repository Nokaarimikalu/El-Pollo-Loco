class Salsa_Bar extends Statusbar {
    x = 10;
    y = 40;
    collectedSalsa = 0;
    percentage = 0;

    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.bottle);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = ImageHub.hitpointbar.bottle[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}
