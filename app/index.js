import SpaceInvaders from 'components/SpaceInvaders/Game'
import Asteroids from 'components/Asteroids/Game'
import 'styles/style.scss' 

import Geometry from 'components/Shared/Geometry'
const game = new Asteroids()
game.tick()

function test(){
    const geo = new Geometry()

    let r = geo.rotate({x: 2, y: 3}, {x: 1, y: 1}, Math.PI)
    console.log(r)
}

test()
