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
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        }
    }

    isDown(keycode){
        return this.keyState[keycode] === true
    }


}