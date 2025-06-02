class Salsa_Bar extends Statusbar {
    x = 10;
    y = 40;
    percentage = 0;

    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.bottle);
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        let path = ImageHub.hitpointbar.bottle[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}
