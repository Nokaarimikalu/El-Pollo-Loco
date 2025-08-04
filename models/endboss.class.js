// #region class Endboss

/**
 * Repräsentiert den Endgegner im Spiel.
 * Nutzt Animationen, Treffer- und Angriffszustände.
 */
class Endboss extends MoveableObject {
    // #region Properties

    /** Lebenspunkte des Endgegners */
    hp = 100;

    /** Wurde der Endboss kürzlich getroffen? */
    isHit = false;

    /** Darf der Endboss angreifen? */
    canAttack = true;

    /** Führt der Endboss gerade einen Angriff aus? */
    isAttacking = false;

    /** Offset-Werte zur Anpassung der Kollision */
    offset = {
        top: 70,
        right: 15,
        bottom: 20,
        left: 15,
    };

    /** Höhe des Endbosses */
    height = 400;

    /** Breite des Endbosses */
    width = 250;

    /** Y-Position im Spiel */
    y = 40;

    /** X-Position im Spiel (meist ganz rechts) */
    x = 2300;

    hurtTimeoutRunning = false;

    /** Sound-Cooldowns für Endboss Sounds */
    soundCooldowns = {
        hurt: false,
        attack: false,
        dead: false,
        approach: false
    };

    // #endregion

    /**
     * Erstellt einen neuen Endboss und startet Animation + Kollisionsrahmenberechnung.
     */
    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        Intervalhub.startInterval(() => this.animate(), 1000 / 5);
        this.loadEndbossImages();
    }

    // #region Initialisierung

    /**
     * Lädt alle benötigten Bilder für den Endboss (Animationen & Zustände).
     */
    loadEndbossImages() {
        this.loadImage(ImageHub.chicken_boss.attack[0]);
        this.loadImage(ImageHub.chicken_boss.alert[0]);
        this.loadImage(ImageHub.chicken_boss.hurt[0]);
        this.loadImage(ImageHub.chicken_boss.dead[0]);
        this.loadImage(ImageHub.chicken_boss.walk[0]);

        this.loadImages(ImageHub.chicken_boss.alert);
        this.loadImages(ImageHub.chicken_boss.hurt);
        this.loadImages(ImageHub.chicken_boss.dead);
        this.loadImages(ImageHub.chicken_boss.attack);
        this.loadImages(ImageHub.chicken_boss.walk);
    }

    // #endregion

    // #region Animation & Verhalten

    /**
     * Wählt basierend auf dem Zustand die passende Animation und spielt Sounds ab.
     */
    animate() {
        if (this.hp <= 0) {
            this.handleDeadAnimation();
        } else if (this.isHit) {
            this.handleHurtAnimation();
        } else if (this.isAttacking) {
            this.handleAttackAnimation();
        } else if (this.playerIsNear) {
            this.handleWalkAnimation();
        } else {
            this.handleAlertAnimation();
        }
    }

    /**
     * Behandelt die Tod-Animation und den zugehörigen Sound
     */
    handleDeadAnimation() {
        this.playAnimation(ImageHub.chicken_boss.dead);
        if (!this.soundCooldowns.dead) {
            this.playEndbossSound(AudioHub.endboss.dead[0]);
            this.soundCooldowns.dead = true;
        }
    }

    /**
     * Behandelt die Verletzungs-Animation und den zugehörigen Sound
     */
    handleHurtAnimation() {
        if (!this.hurtTimeoutRunning) {
            this.playAnimation(ImageHub.chicken_boss.hurt);
            this.hurtTimeoutRunning = true;
            
            // Hurt Sound
            if (!this.soundCooldowns.hurt) {
                this.playEndbossSound(AudioHub.endboss.hurt[0]);
                this.soundCooldowns.hurt = true;
                setTimeout(() => {
                    this.soundCooldowns.hurt = false;
                }, 1000);
            }
            
            setTimeout(() => {
                this.isHit = false;
                this.hurtTimeoutRunning = false;
            }, 300);
        }
    }

    /**
     * Behandelt die Angriffs-Animation
     */
    handleAttackAnimation() {
        this.playAnimation(ImageHub.chicken_boss.attack);
    }

    /**
     * Behandelt die Lauf-Animation
     */
    handleWalkAnimation() {
        this.playAnimation(ImageHub.chicken_boss.walk);
    }

    /**
     * Behandelt die Alert-Animation
     */
    handleAlertAnimation() {
        this.playAnimation(ImageHub.chicken_boss.alert);
    }

    // #endregion

    // #region Sound Management

    /**
     * Spielt Endboss Sounds ab (verwendet das World Sound System)
     * @param {string} soundPath - Pfad zur Sound-Datei
     */
    playEndbossSound(soundPath) {
        // Sound über das globale World-System abspielen
        if (world && world.playSound) {
            world.playSound(soundPath);
        }
    }

    // #endregion

    // #region Angriff

    /**
     * Führt die Angriffsanimation durch und aktiviert Sperrzeiten.
     */
    attackAnimation() {
        if (!this.isAttacking && this.canAttack) {
            this.isAttacking = true;
            this.canAttack = false;

            // Attack Sound
            if (!this.soundCooldowns.attack) {
                this.playEndbossSound(AudioHub.endboss.attack[0]);
                this.soundCooldowns.attack = true;
                setTimeout(() => {
                    this.soundCooldowns.attack = false;
                }, 1000);
            }

            setTimeout(() => {
                this.isAttacking = false;
            }, 500);

            setTimeout(() => {
                this.canAttack = true;
            }, 500);
        }
    }

    // #endregion
}

// #endregion
