import Keyboarder from './Keyboarder'
import Base from './Base'

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

    draw(){
        this.drawBody(this.game, this)
    }

    update(){
        if(this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)){
            this.center.x -= 2
        }
        if(this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)){
            this.center.x += 2
        }
    }

    

}