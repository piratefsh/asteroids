import Invader from './Invader';
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

        this.bodies = [new Player(this, this.gameSize)];

        this.bodies.push(...this.createInvaders());
    }

    tick() {
        this.update();
        this.draw(this.gameSize);
        requestAnimationFrame(()=> {
            this.tick();
        });
    }

    update() {

        this.bodies = this.bodies
            .filter((b) => this.notColliding(b));

        for (let body of this.bodies) {
            body.update();
        }

    }

    draw(gameSize) {
        this.screen.clearRect(0, 0, gameSize.x, gameSize.y);
        for (let body of this.bodies) {
            body.draw(this.screen);
        }

    }

    notColliding(b1) {
        return this.bodies.filter((b2) => {
            return this.colliding(b1, b2);
        }).length == 0;
    }

    colliding(b1, b2) {

        if (b1 == b2){
            return false
        }

        const b1Top     = b1.center.y - b1.size.y / 2;
        const b1Bottom  = b1.center.y + b1.size.y / 2;
        const b1Left    = b1.center.x - b1.size.x / 2;
        const b1Right   = b1.center.x + b1.size.x / 2;

        const b2Top     = b2.center.y - b2.size.y / 2;
        const b2Bottom  = b2.center.y + b2.size.y / 2;
        const b2Left    = b2.center.x - b2.size.x / 2;
        const b2Right   = b2.center.x + b2.size.x / 2;

        const colliding = !(b1Top >= b2Bottom 
                        || b1Right <= b2Left 
                        || b1Left >= b2Right 
                        || b1Bottom <= b2Top);

        return colliding
    }

    addBody(b) {
        this.bodies.push(b);
    }

    createInvaders() {
        const invaders = [];
        for (let i = 0; i < 24; i++) {
            const x = 30 + i % 8 * 30;
            const y = 30 + i % 3 * 30;
            invaders.push(new Invader(this.screen, {x: x, y: y}));
        }

        return invaders;
    }
}
