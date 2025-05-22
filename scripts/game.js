let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        keyboard.RIGHT = true;
    }
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        keyboard.LEFT = true;
    }
    if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') {
        keyboard.UP = true;
    }
    if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') {
        keyboard.DOWN = true;
    }
    if (event.key === ' ') {
        keyboard.SPACEBAR = true;
    }
});


window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        keyboard.RIGHT = false;
    }
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        keyboard.LEFT = false;
    }
    if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') {
        keyboard.UP = false;
    }
    if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') {
        keyboard.DOWN = false;
    }
    if (event.key === ' ') {
        keyboard.SPACEBAR = false;
    }
});

