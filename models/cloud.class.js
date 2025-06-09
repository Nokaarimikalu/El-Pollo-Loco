// #region class Cloud

/**
 * Repräsentiert eine bewegliche Wolke im Hintergrund des Spiels.
 * Erbt Bewegung und Zeichenlogik von MoveableObject.
 */
class Cloud extends MoveableObject {
    // #region Properties

    /** Y-Position (immer am Himmel) */
    y = 0;

    /** Breite der Wolke */
    width = 700;

    /** Höhe der Wolke */
    height = 300;

    // #endregion

    /**
     * Erstellt eine neue Wolke mit zufälliger X-Position und startet ihre Bewegung.
     */
    constructor() {
        super();
        this.loadImage("img/5_background/layers/4_clouds/1.png");
        this.x = Math.random() * 200;
        this.moveLeft();
    }
}

// #endregion
