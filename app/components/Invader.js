import Base from './Base'
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
        if(this.patrolX < 0 || this.patrolX > 40){
            this.speedX *= -1
        }

        this.center.x += this.speedX
        this.patrolX = this.speedX
    }

    draw() {
         this.drawBody(this.game, this)
    }
}
