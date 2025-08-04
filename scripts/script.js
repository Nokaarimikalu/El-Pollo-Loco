// Responsive Canvas System
class ResponsiveCanvas {
    constructor() {
        this.rotateOverlay = null;
        this.keybinds = null;
        this.init();
    }

    init() {
        // Warten bis DOM geladen ist
        document.addEventListener('DOMContentLoaded', () => {
            this.setup();
        });
    }

    setup() {
        this.rotateOverlay = document.querySelector('.rotate-overlay');
        this.keybinds = document.querySelector('.Keybinds');
        
        // Event Listeners
        window.addEventListener('resize', () => this.checkOrientation());
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.checkOrientation(), 100);
        });

        // Initial check
        this.checkOrientation();
    }

    checkOrientation() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width <= 800;
        const isPortrait = height > width;

        if (this.rotateOverlay && this.keybinds) {
            if (isMobile && isPortrait) {
                this.rotateOverlay.style.display = 'flex';
                this.keybinds.classList.add('d_none');
            } else {
                this.rotateOverlay.style.display = 'none';
                this.keybinds.classList.remove('d_none');
            }
        }
    }
}

// Initialize responsive system
const responsiveCanvas = new ResponsiveCanvas();
