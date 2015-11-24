export default class Geometry{
    constructor(){

    }
    rotate(point, offset, rotation){
        let x1 = point.x - offset.x
        let y1 = point.y - offset.y
        let x = ((x1) * Math.cos(rotation)) - ((y1) * Math.sin(rotation)) + offset.x 
        let y = ((x1) * Math.sin(rotation)) + ((y1) * Math.cos(rotation)) + offset.y

        return {x: x, y: y}
    }

}