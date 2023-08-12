class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    get magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    get angle() {
        return Math.atan2(this.y, this.x);
    }

    static add(vec1, vec2) {
        return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
    }

    static subtract(vec1, vec2) {
        return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
    }

    static clone(vec) {
        return new Vector(vec.x, vec.y);
    }

    static fromPolar(magnitude = 1, angle = 0) {
        return new Vector(
            (magnitude * Math.cos(angle)),
            (magnitude * Math.sin(angle))
        );
    }
}

function Vec2(x = 0, y = 0) {
    return new Vector(x, y);
}

export default Vector;
export { Vec2 };