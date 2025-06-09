// #region class coin_bar

/**
 * Anzeige für die gesammelten Münzen.
 * Erbt von der generischen Statusbar.
 */
class coin_bar extends Statusbar {
    // #region Properties

    /** X-Position der Leiste */
    x = 10;

    /** Y-Position der Leiste */
    y = 90;

    /** Prozentuale Anzeige des Sammelfortschritts (0–100%) */
    percentage = 0;

    /** Anzahl der gesammelten Münzen */
    collectedCoins = 0;

    // #endregion

    /**
     * Erstellt die Coin-Bar und lädt alle Bildstufen.
     */
    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.coins);
        this.setPercentage(0);
    }

    /**
     * Setzt den aktuellen Prozentwert und aktualisiert das zugehörige Bild.
     * @param {number} percentage - Fortschrittswert von 0 bis 100
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        let path = ImageHub.hitpointbar.coins[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}

// #endregion
