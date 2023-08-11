import { Vec2 } from "../core/Vector.js";
import Sprite from "./Sprite.js";
import { ctx } from "./driver.js";

class GeoSprite extends Sprite {

    constructor(points = [Vec2(0,0)]) {
        super();
        
        this.points = points;
        this.color = 'white';
    }

    draw(position) {

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.points[0].x+position.x, this.points[0].y+position.y);

        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x + position.x, this.points[i].y + position.y);
        }

        ctx.fill();

    }

}

export default GeoSprite;