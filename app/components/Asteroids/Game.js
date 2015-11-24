import Player from './Player';
import Keyboarder from '../Shared/Keyboarder';
import Bullet from '../Shared/Bullet';
import Asteroid from './Asteroid';

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
        this.bodies.push(...this.createAsteroids());

    }

    tick() {
        this.update();
        this.draw(this.gameSize);
        requestAnimationFrame(()=> {
            this.tick();
        });
    }

    update() {
        const bodies = this.bodies
            .reduce((bodies, b) => {
                const notDead = !(('die' in b) && b.die())
                const notCollided = this.notColliding(b) 
                bodies[(notDead && notCollided) ? 'alive' : 'dead'].push(b);
                return bodies;
            },{alive: [], dead: []});

        this.bodies = bodies.alive;

        bodies.dead.forEach((b) => {
            console.log(b);
            if (b instanceof Asteroid && b.scale > 0) {
                var a = this.spawnAsteroids(b)
                this.bodies.push(...a);
            }
        });

        for (let body of this.bodies) {
            body.update();
            body.center.x = (body.center.x + this.gameSize.x) % this.gameSize.x
            body.center.y = (body.center.y + this.gameSize.y) % this.gameSize.y

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

        if (b1 == b2 || b1 instanceof b2.constructor){
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

    createAsteroids() {
        const asteroids = [
            new Asteroid(this, {x: 0, y: 0}),
            // new Asteroid(this, {x: 0, y: this.gameSize.y/2}),
            // new Asteroid(this, {x: 0, y: this.gameSize.y}),
            // new Asteroid(this, {x: this.gameSize.x/2, y: 0}),
            // new Asteroid(this, {x: this.gameSize.x/2, y: this.gameSize.y}),
            new Asteroid(this, {x: this.gameSize.x, y: 0}),
            // new Asteroid(this, {x: this.gameSize.x, y: this.gameSize.y/2}),
            new Asteroid(this, {x: this.gameSize.x, y: this.gameSize.y}),
        ]
        return asteroids
    }

    spawnAsteroids(asteroid) {
        return[
            new Asteroid(this, {x:asteroid.center.x, y:asteroid.center.y}, asteroid.scale - 1),
            new Asteroid(this, {x:asteroid.center.x, y:asteroid.center.y}, asteroid.scale - 1),
            new Asteroid(this, {x:asteroid.center.x, y:asteroid.center.y}, asteroid.scale - 1)
        ]
    }

    hasMaxBullets(){
        return this.bodies.filter((b) => {
            return b instanceof Bullet
        }).length > 5
    }

}
