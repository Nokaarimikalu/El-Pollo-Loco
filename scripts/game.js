// #region Global Variables

/** @type {HTMLCanvasElement} */
let canvas;

/** @type {World} */
let world;

/** @type {Keyboard} */
let keyboard = new Keyboard();

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
    // Mobile Controls anzeigen
    document.querySelector(".mobile-controls").classList.add("show");
}

function startAgain() {
    Intervalhub.stopAllintervals();
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
    document.querySelector(".loosing-area").classList.add("d_none");
    // Mobile Controls anzeigen
    document.querySelector(".mobile-controls").classList.add("show");
}

function endGame() {
    Intervalhub.stopAllintervals();
    document.querySelector(".loosing-area").classList.add("d_none");
    document.querySelector(".winning-area").classList.add("d_none");
    document.querySelector(".start-area").classList.remove("d_none");
    document.querySelector(".Keybinds").classList.remove("d_none");
    // Mobile Controls verstecken
    document.querySelector(".mobile-controls").classList.remove("show");
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
        world.sperre = true;
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
document.addEventListener('DOMContentLoaded', initMobileControls);

// #endregion
