// #region class ConsumeableObject

/**
 * Abstrakte Oberklasse für konsumierbare Objekte (z. B. Münzen, Salsaflaschen).
 * Erbt Bewegung und Zeichenlogik von MoveableObject.
 */
class ConsumeableObject extends MoveableObject {
    // #region Konstruktor

    /**
     * Erstellt ein neues konsumierbares Objekt.
     */
    constructor() {
        super();
    }

    // #endregion

    // #region Animation

    /**
     * Startet eine einfache Idle-Animation mit statischer Frequenz.
     * Nutzt standardmäßig das Coin-ImageSet.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(ImageHub.images_of_coins);
        }, 400);
    }

    // #endregion
}

// #endregion
