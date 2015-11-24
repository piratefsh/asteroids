import Base from './Base'

export default class Bullet extends Base{
    constructor(center, velocity){
        super()
        this.center = center 
        this.velocity = velocity
        this.size = {
            x: 2,
            y: 2
        }
    }
    update(){
        this.center.x += this.velocity.x
        this.center.y += this.velocity.y
    }
    draw(screen){
        this.drawBody(screen, this)
    }
}