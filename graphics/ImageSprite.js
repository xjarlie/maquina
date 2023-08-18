import { Vec2 } from "../core/Vector.js";
import Sprite from "./Sprite.js";
import { ctx } from "./driver.js";

class ImageSprite extends Sprite {
    constructor(dataUri, size = Vec2(50, 50)) {
        super();

        if (dataUri) this.dataUri = dataUri;
        this.size = size;
        this.imgStartPosition = Vec2(0,0);
        this.sourceSize = null;

    }

    draw(position) {
        const image = new Image();
        image.src = this.dataUri;
        const sx = this.imgStartPosition.x;
        const sy = this.imgStartPosition.y;
        const sWidth = this.sourceSize?.x || image.width;
        const sHeight = this.sourceSize?.y || image.height;
        const dx = position.x - this.size.x / 2;
        const dy = position.y - this.size.y / 2;
        const dWidth = this.size.x;
        const dHeight = this.size.y;
        ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
}

export default ImageSprite;