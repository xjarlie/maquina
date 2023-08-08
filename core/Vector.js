class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static clone(vec) {
        return new Vector(vec.x, vec.y);
    }
}

function Vec2(x, y) {
    return new Vector(x, y);
}

export default Vector;
export { Vec2 };