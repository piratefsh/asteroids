export default class Geometry{
    constructor(){

    }
    rotate(point, offset, rotation){
        let x = point.x - offset.x
        let y = point.y - offset.y

        return {
            x: (x * Math.cos(rotation)) - (y * Math.sin(rotation)) + offset.x,
            y: (x * Math.sin(rotation)) + (y * Math.cos(rotation)) + offset.y
        }
    }

}