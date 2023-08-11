import { Vec2 } from "../core/Vector.js";
import GeoSprite from "./GeoSprite.js";
import { ctx } from "./driver.js";

class RegularGeoSprite extends GeoSprite {
    constructor(sides = 3, radius = 50) {
        super();

        this.radius = radius;
        this.sides = sides;

        this.angle = (180*(sides-2)) / sides;
        const rad = ((180 / sides) * Math.PI) / 180;
        this.sideLength = 2 * radius * Math.sin(rad);

        console.log(this.angle, this.sideLength);

        const pointAngle = 2 * Math.PI / sides;
        for (let i = 0; i < sides; i++) {
            this.points[i] = Vec2(
                (radius * Math.sin((i-0.5) * pointAngle)),
                (radius * Math.cos((i-0.5) * pointAngle))
            );
        }

        // for (let i = 0; i < sides; i++) {
        //     this.points[i] = Vec2(
        //         Math.cos(2 * Math.PI * i / sides),
        //         (radius * Math.sin(2 * Math.PI * i / sides))
        //     );
        // }

        console.log(this.points);
    }

}

export default RegularGeoSprite;