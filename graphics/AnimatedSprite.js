import { fixedTicks, ticks } from "../core/TickCounter.js";
import { Vec2 } from "../core/Vector.js";
import ImageSprite from "./ImageSprite.js";
import Sprite from "./Sprite.js";

class AnimatedSprite extends Sprite {
    constructor(frames = [], frameTimes = [5]) {
        super();

        this.frames = frames;
        this.currentSprite = 0;
        this.frameTimes = frameTimes;
        this.currentSpriteTime = 0;

        this.runFixed = false;
    }

    draw(position) {
        const currentFrameTime = this.frameTimes[this.currentSprite] || this.frameTimes[0];
        let shouldChangeFrame = false;

        if (this.runFixed) {
            if (fixedTicks > this.currentSpriteTime + currentFrameTime) {
                shouldChangeFrame = true;
            }
        } else if (ticks > this.currentSpriteTime + currentFrameTime) {
            shouldChangeFrame = true;
        }

        if (shouldChangeFrame) {
            this.currentSpriteTime = this.runFixed ? fixedTicks : ticks;
            if (this.currentSprite === this.frames.length-1) {
                this.currentSprite = 0;
            } else {
                this.currentSprite++;
            }
        }


        this.frames[this.currentSprite].draw(position);
    }

    static fromSpriteSheet(sheet, sheetSize, spriteSize = Vec2(50,50), spriteNum, cols, rows, frameTimes = [5]) {
        const image = new Image();
        image.src = sheet;

        const frames = [];

        const sourceSize = Vec2(
            sheetSize.x / cols,
            sheetSize.y / rows
        );

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (frames.length < spriteNum) {

                    const sprite = new ImageSprite(sheet);
                    sprite.size = spriteSize;
                    sprite.sourceSize = sourceSize;
                    sprite.imgStartPosition = Vec2(
                        j * sourceSize.x,
                        i * sourceSize.y
                    );
                    frames.push(sprite);
                }
            }
        }

        return new AnimatedSprite(frames, frameTimes);

    }
}

export default AnimatedSprite;