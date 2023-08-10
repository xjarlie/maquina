import Entity from "./core/Entity.js";
import { keyPressed } from "./core/keyMap.js";
import CircleGeoSprite from "./graphics/CircleGeoSprite.js";
import GeoSprite from "./graphics/GeoSprite.js";
import RegularGeoSprite from "./graphics/RegularGeoSprite.js";

class Fella extends Entity {
    constructor() {
        super();

        this.group = 'fellas';
        this.sprite1 = new GeoSprite();
        this.sprite1.color = 'blue';

        this.sprite2 = new GeoSprite(60, 60);

        this.sprite3 = new CircleGeoSprite(40);
        this.sprite3.color = 'purple';

        this.sprite = this.sprite3;
    }

    update(deltaTime) {

        this.sprite.draw(this.position);
    }

    fixedUpdate(ticks) {
        const moveAmt = 1.7;
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

        if (ticks % 60 === 0 && keyPressed('p')) {
            this.sprite = new RegularGeoSprite(this.sprite.sides+1, 30);
        }
    }
}

export default Fella;