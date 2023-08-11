import Entity from "./core/Entity.js";
import { Vec2 } from "./core/Vector.js";
import { keyPressed } from "./core/keyMap.js";
import AnimatedSprite from "./graphics/AnimatedSprite.js";
import CircleGeoSprite from "./graphics/CircleGeoSprite.js";
import GeoSprite from "./graphics/GeoSprite.js";
import RectGeoSprite from "./graphics/RectGeoSprite.js";
import RegularGeoSprite from "./graphics/RegularGeoSprite.js";

class Fella extends Entity {
    constructor() {
        super();

        this.group = 'fellas';

        this.sprite3 = new CircleGeoSprite(40);
        this.sprite3.color = 'purple';

        this.rectSprite = new RectGeoSprite();
        this.rectSprite.color = 'aquamarine';

        this.customSprite = new GeoSprite([
            Vec2(0,0),
            Vec2(50,50),
            Vec2(50,-50),
            Vec2(0,0),
            Vec2(-50,50),
            Vec2(-50,-50)
        ]);

        this.animatedSprite = new AnimatedSprite([
            new RegularGeoSprite(4, 40),
            new RegularGeoSprite(5, 40),
            new RegularGeoSprite(6, 40),
            new RegularGeoSprite(7, 40),
            new RegularGeoSprite(8, 40),
            new RegularGeoSprite(9, 40),
            new RegularGeoSprite(10, 40),
            new RegularGeoSprite(11, 40),
            new RegularGeoSprite(12, 40),
            new RegularGeoSprite(13, 40),
            new RegularGeoSprite(14, 40),
            new RegularGeoSprite(15, 40),
            new RegularGeoSprite(16, 40),
            new RegularGeoSprite(17, 40),
        ], [100, 5, 5, 5, 5, 5]);

        this.sprite = this.animatedSprite;
    }

    update(deltaTime) {

        this.sprite.draw(this.position);
    }

    fixedUpdate(ticks) {
        const moveAmt = 1.7;
        if (keyPressed('d')) {
            this.position.x += moveAmt;
        }

        if (keyPressed('a')) {
            this.position.x -= moveAmt;
        }

        if (keyPressed('w')) {
            this.position.y -= moveAmt;
        }

        if (keyPressed('s')) {
            this.position.y += moveAmt;
        }
    }
}

export default Fella;