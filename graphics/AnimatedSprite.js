import { fixedTicks, ticks } from "../core/TickCounter.js";
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
}

export default AnimatedSprite;