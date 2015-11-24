import Base from '../Shared/Base'
import Bullet from '../Shared/Bullet'
import Geometry from '../Shared/Geometry'
export default class Asteroids extends Base{
    constructor(game, center, scale=3) {
        super()
        this.game = game;

        this.SIZES = [10, 30, 50, 80]
        this.scale = scale
        const size = this.SIZES[this.scale]
        this.size = {x:size, y: size};

        this.center = center;
        this.speed = {x: 0, y: Math.random() * 2 + 0.5};

        this.rotation = Math.random() * Math.PI * 2

        this.geo = new Geometry()

    }

    update() {
        const move = this.geo.rotate(this.speed, {x:0, y:0}, this.rotation)
        this.center.x += move.x
        this.center.y += move.y

    }

    draw(screen) {
        this.drawBody(screen, this)
    }
}
