import Base from '../Shared/Base'

export default class Bullet extends Base{
    constructor(center, velocity, rotation){
        super()
        this.center = center 
        this.velocity = velocity
        this.size = {
            x: 2,
            y: 2
        }
        this.rotation = rotation
    }
    update(){
        this.center.x += this.velocity.x
        this.center.y += this.velocity.y
    }
    draw(screen){
        this.drawBody(screen, this)
    }
}