import Base from '../Shared/Base'

export default class Bullet extends Base{
    constructor(center, velocity){
        super()
        this.center = center 
        this.velocity = velocity
        this.size = {
            x: 2,
            y: 2
        }

        this.deathTime = Date.now() + 2000
    }

    die(){
        return this.deathTime <= Date.now()
    }

    update(){
        this.center.x += this.velocity.x
        this.center.y += this.velocity.y
    }

    draw(screen){
        this.drawBody(screen, this)
    }
}