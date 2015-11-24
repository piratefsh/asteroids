import Keyboarder from '../Shared/Keyboarder'
import Base from '../Shared/Base'
import Bullet from './Bullet'

export default class Player extends Base{
    constructor(game, gameSize){
        super()

        this.game = game
        this.size = {
            x: 15,
            y: 15
        }
        this.center = {
            x: gameSize.x/2,
            y: gameSize. y - 30
        }

        this.keyboarder = new Keyboarder()
    }

    draw(screen){
        this.drawBody(screen, this)
    }

    update(){
        if(this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)){
            this.center.x -= 2
        }
        if(this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)){
            this.center.x += 2
        }
        if(this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)){
            const center  = {
                x: this.center.x, 
                y: this.center.y - this.size.x
            }
            
            const velocity = {
                x: 0,
                y: -5
            }

            const b = new Bullet(center, velocity)
            this.game.addBody(b)
        }
    }

    

}