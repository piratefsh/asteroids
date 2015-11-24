import Base from './Base'
import Bullet from './Bullet'
export default class Invader extends Base{
    constructor(game, center) {
        super()
        this.game = game;
        this.size = {x:15, y: 15};
        this.center = center;
        this.patrolX = 0;
        this.speedX = 0.3;

    }

    update() {
        if(this.patrolX < 0 || this.patrolX > this.game.gameSize.x){
            this.speedX *= -1
        }

        this.center.x += this.speedX
        this.patrolX += this.speedX

        const shoot = !this.game.invadersBelow(this) && Math.random() > 0.995

        if(shoot){
            const b = new Bullet({
                x: this.center.x,
                y: this.center.y + this.size.y/2
            }, {
                x: 0,
                y: 2
            })

            this.game.addBody(b)
        }
    }

    draw(screen) {
         this.drawBody(screen, this)
    }
}
