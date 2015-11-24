import Keyboarder from './Keyboarder'

export default class Player{
    constructor(game, gameSize){
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

    drawBody(screen, body){
        screen.fillRect(body.center.x - body.size.x/2,
            body.center.y - body.size.y/2, body.size.x, body.size.y)
    }

}