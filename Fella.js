import Entity from "./core/Entity.js";
import { Vec2 } from "./core/Vector.js";
import { keyPressed } from "./core/keyMap.js";
import AnimatedSprite from "./graphics/AnimatedSprite.js";
import CircleGeoSprite from "./graphics/CircleGeoSprite.js";
import GeoSprite from "./graphics/GeoSprite.js";
import ImageSprite from "./graphics/ImageSprite.js";
import RectGeoSprite from "./graphics/RectGeoSprite.js";
import RegularGeoSprite from "./graphics/RegularGeoSprite.js";
import { camera } from "./graphics/driver.js";
import spooderImg from "./img/spooder.json" assert {type: 'json'};
import helloSheet from "./img/hello.js";
import runSheet from "./img/run.js";
import runFlipSheet from "./img/runflip.js";
import Body from "./physics/Body.js";

class Fella extends Entity {
    constructor() {
        super();

        this.group = 'fellas';

        this.body = new Body(Vec2(73, 100), false);

        this.runSprite = AnimatedSprite.fromSpriteSheet(runSheet, Vec2(1128, 768), Vec2(73, 100), 8, 4, 2, [10]);
        this.runFlip = AnimatedSprite.fromSpriteSheet(runFlipSheet, Vec2(1128, 768), Vec2(73, 100), 8, 4, 2, [10]);

        this.sprite = this.runSprite;
    }

    update() {
        camera.render(this);
    }

    fixedUpdate() {
        console.log(this.body.body.getPosition());
        const moveAmt = 3;
        if (keyPressed('d')) {
            this.position.x += moveAmt;
            this.sprite = this.runSprite;
        }

        if (keyPressed('a')) {
            this.position.x -= moveAmt;
            this.sprite = this.runFlip;
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