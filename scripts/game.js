// #region Global Variables

/** @type {HTMLCanvasElement} */
let canvas;

/** @type {World} */
let world;

/** @type {Keyboard} */
let keyboard = new Keyboard();

// Audio-Einstellungen beim Laden initialisieren
AudioHub.loadAudioSettings();

// #endregion

// #region Initialization

/**
 * Initialisiert das Spiel, indem das Canvas-Element abgefragt und
 * eine neue Welt mit Tastatursteuerung erstellt wird.
 */
function startGame() {
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
    document.querySelector(".start-area").classList.add("d_none");
    document.querySelector(".Keybinds").classList.add("d_none");
    AudioHub.startBackgroundMusic();
}

function startAgain() {
    Intervalhub.stopAllintervals();
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
    document.querySelector(".loosing-area").classList.add("d_none");
    document.querySelector(".winning-area").classList.add("d_none");    
    AudioHub.startBackgroundMusic();
}

function endGame() {
    Intervalhub.stopAllintervals();
    document.querySelector(".loosing-area").classList.add("d_none");
    document.querySelector(".winning-area").classList.add("d_none");
    document.querySelector(".start-area").classList.remove("d_none");
    document.querySelector(".Keybinds").classList.remove("d_none");
    AudioHub.stopAllSounds();
}

// #endregion

// #region Event Listeners: Keyboard Input

/**
 * Hört auf Tastendruck und setzt die entsprechenden Flags im Keyboard-Objekt.
 */
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
        keyboard.RIGHT = true;
    }
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        keyboard.LEFT = true;
    }
    if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        keyboard.UP = true;
    }
    if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        keyboard.DOWN = true;
    }
    if (event.key === " ") {
        keyboard.SPACEBAR = true;
    }
    if (event.key === "c" || event.key === "C") {
        keyboard.C = true;
    }
});

/**
 * Hört auf das Loslassen von Tasten und entfernt die entsprechenden Flags.
 */
window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
        keyboard.RIGHT = false;
    }
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        keyboard.LEFT = false;
    }
    if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        keyboard.UP = false;
    }
    if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        keyboard.DOWN = false;
    }
    if (event.key === " ") {
        keyboard.SPACEBAR = false;
    }
    if (event.key === "c" || event.key === "C") {
        keyboard.C = false;
        if (world) {
            world.sperre = true;
        }
    }
});

// #endregion

// #region Mobile Touch Controls

/**
 * Initialisiert die Touch-Controls für mobile Geräte
 */
function initMobileControls() {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const jumpBtn = document.getElementById('jumpBtn');
    const throwBtn = document.getElementById('throwBtn');

    // Links-Button
    leftBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    leftBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    // Rechts-Button
    rightBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    rightBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    // Sprung-Button
    jumpBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACEBAR = true;
    });
    jumpBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACEBAR = false;
    });

    // Wurf-Button
    throwBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.C = true;
    });
    throwBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.C = false;
        if (world) {
            world.sperre = true;
        }
    });

    // Zusätzlich auch Mouse-Events für Desktop-Testing
    [leftBtn, rightBtn, jumpBtn, throwBtn].forEach(btn => {
        btn.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const btnId = e.target.id;
            switch(btnId) {
                case 'leftBtn': keyboard.LEFT = true; break;
                case 'rightBtn': keyboard.RIGHT = true; break;
                case 'jumpBtn': keyboard.SPACEBAR = true; break;
                case 'throwBtn': keyboard.C = true; break;
            }
        });
        
        btn.addEventListener('mouseup', (e) => {
            e.preventDefault();
            const btnId = e.target.id;
            switch(btnId) {
                case 'leftBtn': keyboard.LEFT = false; break;
                case 'rightBtn': keyboard.RIGHT = false; break;
                case 'jumpBtn': keyboard.SPACEBAR = false; break;
                case 'throwBtn': 
                    keyboard.C = false; 
                    if (world) world.sperre = true;
                    break;
            }
        });
    });
}

// Touch-Controls nach DOM-Load initialisieren
document.addEventListener('DOMContentLoaded', () => {
    initMobileControls();
    initAudioUI();
});

// #endregion

// #region Audio Controls

/**
 * Initialisiert die Audio-UI
 */
function initAudioUI() {
    setupInitialUI();
    setupSlider();
    setupToggle();
}

/**
 * Setzt die initiale UI basierend auf AudioHub-Status
 */
function setupInitialUI() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioIcon = document.getElementById('audioIcon');
    const audioToggle = document.getElementById('audioToggle');

    if (volumeSlider) {
        volumeSlider.value = AudioHub.isMuted ? 0 : AudioHub.currentVolume;
    }
    if (audioIcon) {
        audioIcon.textContent = AudioHub.isMuted ? '🔇' : '🔊';
    }
    if (audioToggle) {
        audioToggle.classList.toggle('muted', AudioHub.isMuted);
    }
}

/**
 * Konfiguriert den Desktop Volume Slider
 */
function setupSlider() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioIcon = document.getElementById('audioIcon');
    const audioToggle = document.getElementById('audioToggle');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value);
            AudioHub.setVolume(volume);
            
            if (volume == 0) {
                AudioHub.setMuted(true);
                if (audioIcon) audioIcon.textContent = '🔇';
                if (audioToggle) audioToggle.classList.add('muted');
            } else {
                AudioHub.setMuted(false);
                if (audioIcon) audioIcon.textContent = '🔊';
                if (audioToggle) audioToggle.classList.remove('muted');
            }
        });
    }
}

/**
 * Konfiguriert den Mobile Audio Toggle
 */
function setupToggle() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioIcon = document.getElementById('audioIcon');
    const audioToggle = document.getElementById('audioToggle');

    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            const newMutedState = !AudioHub.isMuted;
            AudioHub.setMuted(newMutedState);
            
            if (newMutedState) {
                if (audioIcon) audioIcon.textContent = '🔇';
                audioToggle.classList.add('muted');
                if (volumeSlider) volumeSlider.value = 0;
            } else {
                if (audioIcon) audioIcon.textContent = '🔊';
                audioToggle.classList.remove('muted');
                if (volumeSlider) volumeSlider.value = AudioHub.currentVolume;
            }
        });
    }
}

// Global verfügbar machen für Kompatibilität
window.stopAllSounds = () => AudioHub.stopAllSounds();


// #endregion
