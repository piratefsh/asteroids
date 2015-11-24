export default class Keyboarder{
    constructor(){
        this.keyState = {}
        window.addEventListener('keydown', (e)=>{
            this.keyState[e.keyCode] = true
        })
        window.addEventListener('keyup', (e)=>{
            this.keyState[e.keyCode] = false
        })


        this.KEYS = {
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32
        }
    }

    isDown(keycode){
        return this.keyState[keycode] === true
    }


}