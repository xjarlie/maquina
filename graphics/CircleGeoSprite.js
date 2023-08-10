import RegularGeoSprite from "./RegularGeoSprite.js";

class CircleGeoSprite extends RegularGeoSprite {
    constructor(radius = 30) {
        super(32, radius);
    }
}

export default CircleGeoSprite;