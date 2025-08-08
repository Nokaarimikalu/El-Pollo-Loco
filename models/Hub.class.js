// #region class ImageHub

/**
 * Bilddatenbank für alle Sprite-Gruppen im Spiel (Charaktere, Gegner, Items, HUD).
 * Alles statisch – wird beim Start zentral genutzt.
 */
class ImageHub {
    // #region mainCharacter

    static mainCharacter = {
        idle: [
            "img/2_character_pepe/1_idle/idle/I-1.png",
            "img/2_character_pepe/1_idle/idle/I-2.png",
            "img/2_character_pepe/1_idle/idle/I-3.png",
            "img/2_character_pepe/1_idle/idle/I-4.png",
            "img/2_character_pepe/1_idle/idle/I-5.png",
            "img/2_character_pepe/1_idle/idle/I-6.png",
            "img/2_character_pepe/1_idle/idle/I-7.png",
            "img/2_character_pepe/1_idle/idle/I-8.png",
            "img/2_character_pepe/1_idle/idle/I-9.png",
            "img/2_character_pepe/1_idle/idle/I-10.png",
        ],
        long_idle: [
            "img/2_character_pepe/1_idle/long_idle/I-11.png",
            "img/2_character_pepe/1_idle/long_idle/I-12.png",
            "img/2_character_pepe/1_idle/long_idle/I-13.png",
            "img/2_character_pepe/1_idle/long_idle/I-14.png",
            "img/2_character_pepe/1_idle/long_idle/I-15.png",
            "img/2_character_pepe/1_idle/long_idle/I-16.png",
            "img/2_character_pepe/1_idle/long_idle/I-17.png",
            "img/2_character_pepe/1_idle/long_idle/I-18.png",
            "img/2_character_pepe/1_idle/long_idle/I-19.png",
            "img/2_character_pepe/1_idle/long_idle/I-20.png",
        ],
        walk: [
            "img/2_character_pepe/2_walk/W-21.png",
            "img/2_character_pepe/2_walk/W-22.png",
            "img/2_character_pepe/2_walk/W-23.png",
            "img/2_character_pepe/2_walk/W-24.png",
            "img/2_character_pepe/2_walk/W-25.png",
        ],
        jump: [
            "img/2_character_pepe/3_jump/J-31.png",
            "img/2_character_pepe/3_jump/J-32.png",
            "img/2_character_pepe/3_jump/J-33.png",
            "img/2_character_pepe/3_jump/J-34.png",
            "img/2_character_pepe/3_jump/J-35.png",
            "img/2_character_pepe/3_jump/J-36.png",
            "img/2_character_pepe/3_jump/J-37.png",
            "img/2_character_pepe/3_jump/J-38.png",
            "img/2_character_pepe/3_jump/J-39.png",
        ],
        hurt: ["img/2_character_pepe/4_hurt/H-41.png", "img/2_character_pepe/4_hurt/H-42.png", "img/2_character_pepe/4_hurt/H-43.png"],
        dead: [
            "img/2_character_pepe/5_dead/D-51.png",
            "img/2_character_pepe/5_dead/D-52.png",
            "img/2_character_pepe/5_dead/D-53.png",
            "img/2_character_pepe/5_dead/D-54.png",
            "img/2_character_pepe/5_dead/D-55.png",
            "img/2_character_pepe/5_dead/D-56.png",
            "img/2_character_pepe/5_dead/D-57.png",
        ],
    };

    // #endregion

    // #region Enemies

    static chicken_normal = {
        walk: [
            "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
            "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
            "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
        ],
        dead: ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"],
    };

    static chicken_small = {
        walk: [
            "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
            "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
            "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
        ],
        dead: ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"],
    };

    static chicken_boss = {
        walk: [
            "img/4_enemie_boss_chicken/1_walk/G1.png",
            "img/4_enemie_boss_chicken/1_walk/G2.png",
            "img/4_enemie_boss_chicken/1_walk/G3.png",
            "img/4_enemie_boss_chicken/1_walk/G4.png",
        ],
        alert: [
            "img/4_enemie_boss_chicken/2_alert/G5.png",
            "img/4_enemie_boss_chicken/2_alert/G6.png",
            "img/4_enemie_boss_chicken/2_alert/G7.png",
            "img/4_enemie_boss_chicken/2_alert/G8.png",
            "img/4_enemie_boss_chicken/2_alert/G9.png",
            "img/4_enemie_boss_chicken/2_alert/G10.png",
            "img/4_enemie_boss_chicken/2_alert/G11.png",
            "img/4_enemie_boss_chicken/2_alert/G12.png",
        ],
        attack: [
            "img/4_enemie_boss_chicken/3_attack/G13.png",
            "img/4_enemie_boss_chicken/3_attack/G14.png",
            "img/4_enemie_boss_chicken/3_attack/G15.png",
            "img/4_enemie_boss_chicken/3_attack/G16.png",
            "img/4_enemie_boss_chicken/3_attack/G17.png",
            "img/4_enemie_boss_chicken/3_attack/G18.png",
            "img/4_enemie_boss_chicken/3_attack/G19.png",
            "img/4_enemie_boss_chicken/3_attack/G20.png",
        ],
        hurt: ["img/4_enemie_boss_chicken/4_hurt/G21.png", "img/4_enemie_boss_chicken/4_hurt/G22.png", "img/4_enemie_boss_chicken/4_hurt/G23.png"],
        dead: ["img/4_enemie_boss_chicken/5_dead/G24.png", "img/4_enemie_boss_chicken/5_dead/G25.png", "img/4_enemie_boss_chicken/5_dead/G26.png"],
    };

    // #endregion

    // #region Collectibles

    static salsa = {
        on_ground: ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png", "img/6_salsa_bottle/2_salsa_bottle_on_ground.png"],
        spinning_salsa: [
            "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
            "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
            "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
            "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
        ],
        salsa_splash: [
            "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
            "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
            "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
            "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
            "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
            "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
        ],
    };

    static images_of_coins = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

    // #endregion

    // #region HUD

    static hitpointbar = {
        coins: [
            "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
            "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
            "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
            "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
            "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
            "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
        ],
        hp: [
            "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
            "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
            "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
            "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
            "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
            "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
        ],
        bottle: [
            "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
            "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
            "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
            "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
            "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
            "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
        ],
        endboss: [
            "img/7_statusbars/2_statusbar_endboss/green/green0.png",
            "img/7_statusbars/2_statusbar_endboss/green/green20.png",
            "img/7_statusbars/2_statusbar_endboss/green/green40.png",
            "img/7_statusbars/2_statusbar_endboss/green/green60.png",
            "img/7_statusbars/2_statusbar_endboss/green/green80.png",
            "img/7_statusbars/2_statusbar_endboss/green/green100.png",
        ],
    };

    // #endregion
}

// #endregion

// #region class Intervalhub

/**
 * Zentrale Verwaltung aller Intervallschleifen im Spiel.
 */
class Intervalhub {
    static allIntervals = [];

    /**
     * Startet ein neues Intervall und speichert es.
     * @param {Function} func - Die Funktion, die ausgeführt wird
     * @param {number} timer - Intervallzeit in Millisekunden
     */
    static startInterval(func, timer) {
        const newInterval = setInterval(func, timer);
        Intervalhub.allIntervals.push(newInterval);
    }

    /**
     * Beendet alle aktiven Intervalle im Spiel.
     */
    static stopAllintervals() {
        Intervalhub.allIntervals.forEach(clearInterval);
    }
}

// #endregion

// #region class AudioHub

/**
 * Sammlung aller im Spiel verwendeten Audiodateien, unterteilt nach Typ.
 */
class AudioHub {
    //#region sound
    static character = {
        damage: ["sounds/character/characterDamage.mp3"],
        dead: ["sounds/character/characterDead.wav"],
        jump: ["sounds/character/characterJump.wav"],
        run: ["sounds/character/characterRun.mp3"],
        snoring: ["sounds/character/characterSnoring.mp3"],
    };

    static chicken = {
        dead: ["sounds/chicken/chickenDead.mp3"],
        dead_small: ["sounds/chicken/chickenDead2.mp3"],
    };

    static collectibles = {
        bottle: ["sounds/collectibles/bottleCollectSound.wav"],
        coin: ["sounds/collectibles/collectSound.wav"],
    };

    static endboss = {
        approachEndboss: ["sounds/endboss/endbossApproach.wav"],
        attack: ["sounds/endboss/endbossApproach.wav"], 
        hurt: ["sounds/chicken/chickenDead.mp3"], 
        dead: ["sounds/chicken/chickenDead.mp3"],
    };

    static gameStart = {
        game: ["sounds/game/gameStart.mp3"],
    };

    static gameEnd = {
        victory: ["sounds/11l-victory-1749704550711-358777.mp3"], 
        gameOver: ["sounds/8-bit-game-over-sound-effect-331435.mp3"], 
    };

    static backgroundMusic = {
        main: ["sounds/western-theme-162884.mp3"], 
    };

    static throwableSound = {
        bottleBreak: ["sounds/throwable/bottleBreak.mp3"],
    };
    // #endregion

    // #region Zentrale Audio-Management Methoden

    /** @type {Audio} Aktuelle Hintergrundmusik */
    static currentBackgroundMusic = null;

    /** @type {Array<Audio>} Alle Audio-Objekte für Lautstärke-Kontrolle */
    static allAudioObjects = [];

    /** @type {number} Aktuelle Lautstärke (0-100) */
    static currentVolume = 50;

    /** @type {boolean} Ist Audio stumm geschaltet */
    static isMuted = false;

    /** @type {Map<string, Audio>} Cache für bereits geladene Audio-Objekte */
    static audioCache = new Map();

    /** @type {Audio} Spezielle Referenz für Character Run Sound */
    static characterRunAudio = null;

    /**
     * Lädt Audio-Einstellungen aus dem LocalStorage
     */
    static loadAudioSettings() {
        try {
            const savedVolume = localStorage.getItem('elPolloLoco_volume');
            const savedMuted = localStorage.getItem('elPolloLoco_muted');
            
            if (savedVolume !== null) {
                this.currentVolume = parseInt(savedVolume);
                if (this.currentVolume < 0 || this.currentVolume > 100) {
                    this.currentVolume = 50;
                }
            }
            if (savedMuted !== null) {
                this.isMuted = savedMuted === 'true';
            }
        } catch (error) {
            // console.log('Audio settings could not be loaded from localStorage:', error);
        }
    }

    /**
     * Speichert Audio-Einstellungen im LocalStorage
     */
    static saveAudioSettings() {
        try {
            localStorage.setItem('elPolloLoco_volume', this.currentVolume.toString());
            localStorage.setItem('elPolloLoco_muted', this.isMuted.toString());
        } catch (error) {
            // console.log('Audio settings could not be saved to localStorage:', error);
        }
    }

    /**
     * Erstellt ein Audio-Objekt für den gegebenen Pfad (mit Cache)
     * @param {string} audioPath - Pfad zur Audio-Datei
     * @returns {Audio} Audio-Objekt
     */
    static createAudio(audioPath) {
        if (this.audioCache.has(audioPath)) {
            return this.audioCache.get(audioPath);
        }

        const audio = new Audio(audioPath);
        this.audioCache.set(audioPath, audio);
        return audio;
    }

    /**
     * Erstellt ein Audio-Objekt für Hintergrundmusik (Loop)
     * @param {string} audioPath - Pfad zur Audio-Datei
     * @returns {Audio} Audio-Objekt mit Loop
     */
    static createBackgroundMusic(audioPath) {
        const audio = new Audio(audioPath);
        audio.loop = true;
        audio.volume = 0.5; // Standard-Lautstärke
        return audio;
    }

    /**
     * Startet die Hintergrundmusik
     */
    static startBackgroundMusic() {
        if (!this.currentBackgroundMusic) {
            this.currentBackgroundMusic = this.createBackgroundMusic(this.backgroundMusic.main[0]);
            this.allAudioObjects.push(this.currentBackgroundMusic);
        }
        this.currentBackgroundMusic.volume = this.isMuted ? 0 : (this.currentVolume / 100) * 0.5;
        this.currentBackgroundMusic.currentTime = 0;
        this.currentBackgroundMusic.play().catch(error => {
            // console.log("Hintergrundmusik konnte nicht gestartet werden:", error);
        });
    }

    /**
     * Stoppt die Hintergrundmusik
     */
    static stopBackgroundMusic() {
        if (this.currentBackgroundMusic) {
            this.currentBackgroundMusic.pause();
            this.currentBackgroundMusic.currentTime = 0;
        }
    }

    /**
     * Spielt einen Sound-Effekt ab (mit Cache)
     * @param {string} audioPath - Pfad zur Audio-Datei
     */
    static playSound(audioPath) {
        if (audioPath) {
            const audio = this.createAudio(audioPath);
            audio.volume = this.isMuted ? 0 : (this.currentVolume / 100);
            
            // Nur zu allAudioObjects hinzufügen wenn noch nicht drin
            if (!this.allAudioObjects.includes(audio)) {
                this.allAudioObjects.push(audio);
            }
            
            // Audio von Anfang an abspielen
            audio.currentTime = 0;
            audio.play().catch(error => {
                if (error.name !== 'AbortError') {
                    // console.log("Sound could not be played:", error);
                }
            });
        }
    }

    /**
     * Startet Character Run Sound (Loop)
     */
    static startCharacterRunSound() {
        const runAudio = this.createCharacterRunSound();
        if (runAudio.paused) {
            runAudio.play().catch(error => {
                if (error.name !== 'AbortError') {
                    // console.log("Run sound could not be played:", error);
                }
            });
        }
    }

    /**
     * Stoppt Character Run Sound
     */
    static stopCharacterRunSound() {
        if (this.characterRunAudio && !this.characterRunAudio.paused) {
            this.characterRunAudio.pause();
            this.characterRunAudio.currentTime = 0;
        }
    }

    /**
     * Leert den Audio-Cache (bei Bedarf)
     */
    static clearAudioCache() {
        this.audioCache.clear();
        this.characterRunAudio = null;
    }

    /**
     * Setzt die Lautstärke aller Spiel-Sounds
     * @param {number} volume - Lautstärke zwischen 0 und 100
     */
    static setVolume(volume) {
        this.currentVolume = volume;
        
        // Einstellungen speichern
        this.saveAudioSettings();
        
        if (this.currentBackgroundMusic) {
            this.currentBackgroundMusic.volume = this.isMuted ? 0 : (volume / 100) * 0.5;
        }
        this.allAudioObjects.forEach(audio => {
            if (audio !== this.currentBackgroundMusic) {
                audio.volume = this.isMuted ? 0 : (volume / 100);
            }
        });
    }

    /**
     * Schaltet Audio stumm/laut
     * @param {boolean} muted - Soll Audio stumm sein
     */
    static setMuted(muted) {
        this.isMuted = muted;
        
        // Einstellungen speichern
        this.saveAudioSettings();
        
        this.setVolume(this.currentVolume); // Volume neu anwenden
    }

    /**
     * Stoppt alle laufenden Sounds
     */
    static stopAllSounds() {
        this.stopBackgroundMusic();
        
        this.allAudioObjects.forEach(audio => {
            if (audio && !audio.paused) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }

    // #region Convenience-Methoden für spezifische Sounds

    /**
     * Character Sound abspielen
     * @param {string} soundType - Typ des Sounds (dead, damage, jump, run, snoring)
     */
    static playCharacterSound(soundType) {
        if (this.character[soundType]) {
            this.playSound(this.character[soundType][0]);
        }
    }

    /**
     * Chicken Sound abspielen
     * @param {string} soundType - Typ des Sounds (dead, dead_small)
     */
    static playChickenSound(soundType) {
        if (this.chicken[soundType]) {
            this.playSound(this.chicken[soundType][0]);
        }
    }

    /**
     * Collectible Sound abspielen
     * @param {string} soundType - Typ des Sounds (bottle, coin)
     */
    static playCollectibleSound(soundType) {
        if (this.collectibles[soundType]) {
            this.playSound(this.collectibles[soundType][0]);
        }
    }

    /**
     * Endboss Sound abspielen
     * @param {string} soundType - Typ des Sounds (approachEndboss, attack, hurt, dead)
     */
    static playEndbossSound(soundType) {
        if (this.endboss[soundType]) {
            this.playSound(this.endboss[soundType][0]);
        }
    }

    /**
     * Game End Sound abspielen
     * @param {string} soundType - Typ des Sounds (victory, gameOver)
     */
    static playGameEndSound(soundType) {
        if (this.gameEnd[soundType]) {
            this.playSound(this.gameEnd[soundType][0]);
        }
    }

    /**
     * Throwable Sound abspielen
     * @param {string} soundType - Typ des Sounds (bottleBreak)
     */
    static playThrowableSound(soundType) {
        if (this.throwableSound[soundType]) {
            this.playSound(this.throwableSound[soundType][0]);
        }
    }

    /**
     * Erstellt einen speziellen Character Run Sound (mit Cache und Loop)
     * @returns {Audio} Audio-Objekt für Character Run Sound
     */
    static createCharacterRunSound() {
        if (!this.characterRunAudio) {
            this.characterRunAudio = this.createAudio(this.character.run[0]);
            this.characterRunAudio.loop = true;
            this.allAudioObjects.push(this.characterRunAudio);
        }
        
        // Volume aktualisieren
        this.characterRunAudio.volume = this.isMuted ? 0 : (this.currentVolume / 100);
        return this.characterRunAudio;
    }

    // #endregion
    // #endregion
}
// #endregion
