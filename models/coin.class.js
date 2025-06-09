// #region class Coin

/**
 * Repräsentiert ein sammelbares Münzobjekt im Spiel.
 * Erbt Animation und Kollision von ConsumeableObject.
 */
class Coin extends ConsumeableObject {
    // #region Properties

    /** Höhe der Münze */
    height = 100;

    /** Breite der Münze */
    width = 100;

    /** X-Position (Basiswert, wird im Konstruktor angepasst) */
    x = 200;

    /** Zusätzlicher horizontaler Offset für Gruppenerstellung */
    offsetx = 0;

    /** Kollisionsabstand */
    offset = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30,
    };

    // #endregion

    /**
     * Erstellt eine neue Münze an der angegebenen Position.
     * @param {number} x - Basis-X-Position
     * @param {number} y - Y-Position
     * @param {number} offsetx - Horizontaler Versatz (z. B. für Levelverteilung)
     */
    constructor(x, y, offsetx) {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        this.loadImage("img/8_coin/coin_1.png");
        this.loadImages(ImageHub.images_of_coins);
        this.animate();
        this.x = x + offsetx;
        this.y = y;
    }

    /**
     * Erstellt ein ganzes Coin-Muster (z. B. für Bögen oder Türme) mit Versatz.
     * @param {number} offsetx - Horizontaler Start-Versatz
     * @returns {Coin[]} Array von Coin-Instanzen
     */
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

// #endregion
