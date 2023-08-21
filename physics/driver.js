// import Entity from "../core/Entity.js";
// import { Vec2 } from "../core/Vector.js";

import { Vec2 } from "../core/Vector";

// export class MatterDriver extends Entity {

//     constructor(delta = 1000 / 60) {
//         super();

//         this.engine = Matter.Engine.create({
            
//         });
//         this.delta = delta;
//     }

//     fixedUpdate() {
//         Matter.Engine.update(this.engine, this.delta);
//     }

//     static CreateBody(size = Vec2(50,50), options = {}) {
//         const body = Matter.Bodies.rectangle(0,0,size.x,size.y, {
//             ...options
//         })
//         Matter.World.add(physicsDriver.engine.world, body);
//         return body;
//     }
// }

// export const physicsDriver = new MatterDriver(17);

// TODO: add support for PLANCK physcs engine:
// https://piqnt.com/planck.js/docs/core-concepts

/* Caution: Planck.js is tuned for MKS units. 
Keep the size of moving objects roughly between 0.1 and 10 meters. 
You'll need to use some scaling system when you render your environment and actors. 
The Planck.js testbed does this by using stage.js viewbox transform. 
DO NOT USE PIXELS. */


const world = planck.World({
    gravity: Vec2()
})