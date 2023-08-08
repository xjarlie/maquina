import Entity from "./core/Entity.js";
import Vector, { Vec2 } from "./core/Vector.js";
import { keyPressed } from "./core/keyMap.js";
import GeoSprite from "./graphics/GeoSprite.js";

class Fella extends Entity {
    constructor() {
        super();

        this.group = 'fellas';
        this.sprite = new GeoSprite();
        this.sprite.color = 'blue';
    }

    update(deltaTime) {

        const deltaSec = deltaTime/1000;
        const moveAmt = deltaSec * 100;

        if (keyPressed('ArrowRight')) {
            this.position.x += moveAmt;
        }

        if (keyPressed('ArrowLeft')) {
            this.position.x -= moveAmt;
        }

        if (keyPressed('ArrowUp')) {
            this.position.y -= moveAmt;
        }

        if (keyPressed('ArrowDown')) {
            this.position.y += moveAmt;
        }

        this.sprite.draw(this.position);
    }

    fixedUpdate() {

    }
}

export default Fella;