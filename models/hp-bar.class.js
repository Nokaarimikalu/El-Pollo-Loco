class HpBar extends Statusbar {
    percentage = 100;
    x = 10;
    y = -10;

    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.hp);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = ImageHub.hitpointbar.hp[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}
