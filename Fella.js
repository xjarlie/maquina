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
import { MatterDriver } from "./physics/driver.js";

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

        this.runSprite = AnimatedSprite.fromSpriteSheet(runSheet, Vec2(1128, 768), Vec2(73, 100), 8, 4, 2, [10]);
        this.runFlip = AnimatedSprite.fromSpriteSheet(runFlipSheet, Vec2(1128, 768), Vec2(73, 100), 8, 4, 2, [10]);

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
            new RegularGeoSprite(16, 40),
            new RegularGeoSprite(15, 40),
            new RegularGeoSprite(14, 40),
            new RegularGeoSprite(13, 40),
            new RegularGeoSprite(12, 40),
            new RegularGeoSprite(11, 40),
            new RegularGeoSprite(10, 40),
            new RegularGeoSprite(9, 40),
            new RegularGeoSprite(8, 40),
            new RegularGeoSprite(7, 40),
            new RegularGeoSprite(6, 40),
            new RegularGeoSprite(5, 40),
            new RegularGeoSprite(4, 40)
        ], [1]);
        this.animatedSprite.runFixed = true;

        this.imageSprite = new ImageSprite(spooderImg, Vec2(100, 100));

        const helloFrames = [];
        // 32x32
        for (let i = 0; i < 5; i++) {
            const sprite = new ImageSprite(helloSheet);
            sprite.size = Vec2(400, 400);
            sprite.imgStartPosition = Vec2(
                i * 32,
                0
            );
            sprite.sourceSize = Vec2(32, 32);
            helloFrames[i] = sprite;
        }
        this.helloAnimation = new AnimatedSprite(helloFrames, [20]);

        this.autoHello = AnimatedSprite.fromSpriteSheet(helloSheet, Vec2(160, 32), Vec2(200, 200), 5, 5, 1, [5]);

        this.sprite = this.runSprite;

        this.position = Vec2(0, -300);
        this.body = MatterDriver.CreateBody(Vec2(65, 100));
        Matter.Body.setPosition(this.body, this.position);
    }

    update() {
        camera.render(this);
    }

    fixedUpdate() {
        this.position = this.body.position;

        const moveAmt = 3;
        const jumpForce = 100;
        if (keyPressed('d')) {
            //this.position.x += moveAmt;
            Matter.Body.translate(this.body, Vec2(moveAmt, 0));
            this.sprite = this.runSprite;
        }

        if (keyPressed('a')) {
            //this.position.x -= moveAmt;
            Matter.Body.translate(this.body, Vec2(-moveAmt, 0));
            this.sprite = this.runFlip;
        }

        if (keyPressed('w')) {
            //this.position.y -= moveAmt;
            //Matter.Body.translate(this.body, Vec2(0, -moveAmt));
            Matter.Body.applyForce(this.body, this.body.position, Vec2(0, -jumpForce));
        }

        if (keyPressed('s')) {
            //Matter.Body.translate(this.body, Vec2(0, moveAmt));

            //this.position.y += moveAmt;
        }
    }
}

export default Fella;