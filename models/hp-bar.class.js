class HpBar extends Statusbar {
    percentage = 100;
    x = 20;
    y = 0;
    width = 200;
    height = 60;

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
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
