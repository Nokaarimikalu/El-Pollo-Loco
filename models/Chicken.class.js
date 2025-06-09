// #region class Chicken

/**
 * Gegnerischer Huhn-Charakter, bewegt sich zufällig nach links.
 * Reagiert auf Kollision und kann sterben.
 */
class Chicken extends MoveableObject {
    // #region Properties

    /** Lebenspunkte */
    hp = 10;

    /** Ob das Huhn tot ist */
    isDead = false;

    /** Ob das Huhn aktuell getroffen wurde */
    isHit = false;

    /** Kollisionsoffset */
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
    };

    // #endregion

    // #region Konstruktor

    /**
     * Erstellt ein neues normales Huhn mit zufälliger Position und Bewegung.
     */
    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        this.loadImages(ImageHub.chicken_normal.walk);
        this.loadImage(ImageHub.chicken_normal.walk[0]);
        this.x = 300 + Math.random() * 1000;
        this.speed = 0.3 + Math.random() * 1; // <- DEBUG ONLY
        Intervalhub.startInterval(this.animate, 1000 / 5);
    }

    // #endregion

    // #region Methoden

    /**
     * Führt die Geh-Animation oder das Todesbild aus.
     */
    animate = () => {
        if (!this.isDead) {
            this.playAnimation(ImageHub.chicken_normal.walk);
        } else {
            this.loadImage(ImageHub.chicken_normal.dead[0]);
        }
    };

    /**
     * Lädt das erste Bild des normalen Huhns.
     */
    loadImageChicken() {
        this.loadImage(ImageHub.chicken_normal.walk[0]);
    }

    // #endregion
}

// #endregion

// #region class SmallChicken

/**
 * Gegnerischer Mini-Huhn-Charakter, kleinere Variante des normalen Huhns.
 */
class SmallChicken extends MoveableObject {
    // #region Properties

    /** Lebenspunkte */
    hp = 10;

    /** Ob das Huhn aktuell getroffen wurde */
    isHit = false;

    /** Ob das Huhn tot ist */
    isDead = false;

    /** Kollisionsoffset */
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
    };

    // #endregion

    // #region Konstruktor

    /**
     * Erstellt ein neues kleines Huhn mit zufälliger Position und Bewegung.
     */
    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        this.loadImages(ImageHub.chicken_small.walk);
        this.loadImage(ImageHub.chicken_small.walk[0]);
        this.x = 300 + Math.random() * 1000;
        this.speed = 0.3 + Math.random() * 1; // <- DEBUG ONLY
        Intervalhub.startInterval(this.animate, 1000 / 5);
    }

    // #endregion

    // #region Methoden

    /**
     * Führt die Geh-Animation oder das Todesbild aus.
     */
    animate = () => {
        if (!this.isDead) {
            this.playAnimation(ImageHub.chicken_small.walk);
        } else {
            this.loadImage(ImageHub.chicken_small.dead[0]);
        }
    };

    /**
     * Lädt das erste Bild des kleinen Huhns.
     */
    loadImageChicken() {
        this.loadImage(ImageHub.chicken_small.walk[0]);
    }

    // #endregion
}

// #endregion
