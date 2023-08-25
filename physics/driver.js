import { Vec2 } from "../core/Vector.js";
// TODO: add support for PLANCK physcs engine:
// https://piqnt.com/planck.js/docs/core-concepts

/* Caution: Planck.js is tuned for MKS units. 
Keep the size of moving objects roughly between 0.1 and 10 meters. 
You'll need to use some scaling system when you render your environment and actors. 
The Planck.js testbed does this by using stage.js viewbox transform. 
DO NOT USE PIXELS. */


export const world = planck.World({
    gravity: Vec2(0.0, -10.0)
})

export function updateWorld() {
    world.step(17, 6, 2)
}