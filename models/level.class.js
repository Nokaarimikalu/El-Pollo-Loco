// #region class Level

/**
 * Repräsentiert ein komplettes Level mit Gegnern, Objekten, Hintergrund und Items.
 */
class Level {
    // #region Properties

    /** X-Position, an der das Level endet */
    level_end_x = 3000;

    /** Besiegte Gegner, die für Animationen o.Ä. zwischengespeichert werden */
    deadEnemies = [];

    /** Instanz des Endbosses */
    endboss = new Endboss();

    /** Aktive Gegner im Level */
    enemies = [new SmallChicken(), new Chicken(), new SmallChicken(), new Chicken(), new SmallChicken(), new Chicken(), new Chicken(), this.endboss];

    /** Wolken für den Hintergrund (Bewegung) */
    clouds = [new Cloud()];

    /** Alle Hintergrund-Bildebenen des Levels */
    backgroundObjects = [
        new BackgroundObject(`img/5_background/layers/air.png`, -719),
        new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, -719),
        new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, -719),
        new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, -719),

        new BackgroundObject(`img/5_background/layers/air.png`, 0),
        new BackgroundObject(`img/5_background/layers/3_third_layer/1.png`, 0),
        new BackgroundObject(`img/5_background/layers/2_second_layer/1.png`, 0),
        new BackgroundObject(`img/5_background/layers/1_first_layer/1.png`, 0),

        new BackgroundObject(`img/5_background/layers/air.png`, 719),
        new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, 719),
        new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, 719),
        new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, 719),

        new BackgroundObject(`img/5_background/layers/air.png`, 719 * 2),
        new BackgroundObject(`img/5_background/layers/3_third_layer/1.png`, 719 * 2),
        new BackgroundObject(`img/5_background/layers/2_second_layer/1.png`, 719 * 2),
        new BackgroundObject(`img/5_background/layers/1_first_layer/1.png`, 719 * 2),

        new BackgroundObject(`img/5_background/layers/air.png`, 719 * 3),
        new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, 719 * 3),
        new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, 719 * 3),
        new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, 719 * 3),
    ];

    /** Alle Münzen im Level */
    coins = [...Coin.multipleCoins(200), ...Coin.multipleCoins(900)];

    /** Alle Salsaflaschen im Level */
    salsa = [
        new SalsaBottle(100),
        new SalsaBottle(200),
        new SalsaBottle(400),
        new SalsaBottle(700),
        new SalsaBottle(900),
        new SalsaBottle(1100),
        new SalsaBottle(1400),
        new SalsaBottle(1700),
        new SalsaBottle(2000),
    ];

    // #endregion
}

// #endregion
