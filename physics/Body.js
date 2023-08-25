import { Vec2 } from "../core/Vector.js";
import { world } from "./driver.js";

class Body {
    constructor(sizeInPx = Vec2(100,100), isStatic = false) {

        this.body = world.createBody({
            position: Vec2(0,0),
            type: isStatic ? "static" : "dynamic"
        });
        const sizeInMetres = Body.pxToMetres(sizeInPx);
        const box = planck.Box(sizeInMetres.x, sizeInMetres.y);
        this.body.createFixture({
            shape: box,
            density: isStatic ? 0 : 1.0,
            friction: 0.3
        });
        
    }

    get position() {
        return Vec2(
            this.body.getPosition().x * 100,
            this.body.getPosition().y * 100
        );
    }

    set position(value) {

    }

    static pxToMetres(px) {
        return px * 0.01;
    }

    static metresToPx(metres) {
        return metres * 100;
    }
}

export default Body;