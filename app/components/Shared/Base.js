export default class Base{
    constructor(screen){
    }
    drawBody(screen, body){
        screen.fillStyle = 'rgba(0,0,0,0.8)'
        screen.fillRect(body.center.x - body.size.x/2,
            body.center.y - body.size.y/2, body.size.x, body.size.y)
    }
}