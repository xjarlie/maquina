import { Vec2 } from "../core/Vector.js";
import GeoSprite from "./GeoSprite.js";

class RectGeoSprite extends GeoSprite {
    constructor(width = 50, height = 30) {
        const hWidth = width/2;
        const hHeight = height/2;
        super([
            Vec2(-hWidth, -hHeight),
            Vec2(hWidth, -hHeight),
            Vec2(hWidth, hHeight),
            Vec2(-hWidth, hHeight)
        ]);
    }
}

export default RectGeoSprite;