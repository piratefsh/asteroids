import Keyboarder from '../Shared/Keyboarder';
import Base from '../Shared/Base';
import Bullet from '../Shared/Bullet';
import Geometry from '../Shared/Geometry';

export default class Player extends Base{
    constructor(game, gameSize) {
        super();

        this.game = game;
        this.size = {
            x: 15,
            y: 20,
        };
        this.center = {
            x: gameSize.x / 2,
            y: gameSize.y / 2,
        };

        this.rotation = Math.PI;
        this.geo = new Geometry()
        this.keyboarder = new Keyboarder();
    }

    draw(screen) {

        const points = [
            {   x: this.center.x - this.size.x / 2,
                y: this.center.y + this.size.y / 2
            },
            {   x: this.center.x + this.size.x / 2, 
                y: this.center.y + this.size.y / 2
            },
            {   x: this.center.x,
                y: this.center.y - this.size.y / 2
            }
        ]

        const offset = {
            x: this.center.x,
            y: this.center.y
        }

        for (let point of points){
            const rotated = this.geo.rotate(point, offset, this.rotation)
            if (window.foo) {
                console.log(point, offset, rotated)
                debugger;
            }
            point.x = rotated.x
            point.y = rotated.y
        }


        screen.beginPath();
        screen.moveTo(points[0].x, points[0].y);
        screen.lineTo(points[1].x, points[1].y);
        screen.lineTo(points[2].x, points[2].y);
        screen.closePath();
        screen.stroke();
    }

    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.rotation = (this.rotation - 0.1)
        }

        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.rotation = (this.rotation + 0.1)

        }

        if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
            let center  = {
                x: this.center.x,
                y: this.center.y - this.size.y,
            };

            let velocity = {
                x: 0,
                y: -5,
            };

            let offset = {
                x: this.center.x,
                y: this.center.y,
            }

            center = this.geo.rotate(center, offset, this.rotation)
            velocity = this.geo.rotate(velocity, {x:0, y:0}, this.rotation)

            if(!this.game.hasMaxBullets()){
                const b = new Bullet(center, velocity);
                this.game.addBody(b);
            }
        }
    }

}
