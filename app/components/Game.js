import Player from './Player';
import Keyboarder from './Keyboarder';

export default class Game{
    constructor() {
        const c = document.getElementById('screen');
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        this.screen = c.getContext('2d');
        this.gameSize = {
            x: this.screen.canvas.width,
            y: this.screen.canvas.height,
        };

        this.bodies = [new Player(this.screen, this.gameSize)];
    }

    tick() {
        this.update();
        this.draw(this.gameSize);
        requestAnimationFrame(()=> {
            this.tick();
        });
    }

    update() {
        for (let body of this.bodies) {
            body.update();
        }

    }

    draw(gameSize) {
        this.screen.clearRect(0, 0, gameSize.x, gameSize.y)
        for (let body of this.bodies) {
            body.draw(gameSize);
        }

    }
}
