import Keyboarder from './Keyboarder'
import Base from './Base'
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
        const coords = [
            [this.center.x - this.size.x/2, this.center.y + this.size.y/2],
            [this.center.x + this.size.x/2, this.center.y + this.size.y/2],
            [this.center.x, this.center.y - this.size.y]
        ]

        screen.beginPath()
        screen.moveTo(coords[0])
        screen.lineTo(coords[1])
        screen.lineTo(coords[2])
        screen.closePath()
        screen.stroke()

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