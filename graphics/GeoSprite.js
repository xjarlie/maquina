import Sprite from "./Sprite.js";
import { ctx } from "./driver.js";

class GeoSprite extends Sprite {

    constructor(width = 50, height = 50) {
        super();
        this.color = 'white';
        this.width = width;
        this.height = height;
    }

    draw(position) {
        ctx.fillStyle = this.color;
        ctx.fillRect(position.x, position.y, this.width, this.height);
    }

}

export default GeoSprite;