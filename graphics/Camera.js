import Entity from "../core/Entity.js";
import Vector, { Vec2 } from "../core/Vector.js";
import { keyPressed } from "../core/keyMap.js";
import { ctx } from "./driver.js";

class Camera extends Entity {
    constructor(position = Vec2()) {
        super();

        this.position = position;

        this.glidingTarget = Vec2();
        this.isGliding = false;
        this.glideSpeed = 0;
    }

    getScreenPosition(worldPosition = Vec2()) {
        return Vector.subtract(worldPosition, this.position);
    }

    translate(vector = Vec2()) {
        this.position = Vector.add(this.position, vector);
    }

    setCenter(position = Vec2(), useX = true, useY = true) {
        if (useX) this.position.x = position.x - ctx.canvas.width / 2;
        if (useY) this.position.y = position.y - ctx.canvas.height / 2;
    }

    render(entity) {
        entity.sprite.draw(this.getScreenPosition(entity.position));
    }

    update(deltaTime) {
        if (keyPressed('ArrowRight')) {
            this.translate(Vec2(10, 0));
        }

        if (keyPressed('ArrowLeft')) {
            this.translate(Vec2(-10, 0));
        }

        if (keyPressed('ArrowUp')) {
            this.translate(Vec2(0, -10));
        }

        if (keyPressed('ArrowDown')) {
            this.translate(Vec2(0, 10));
        }
    }
}

export default Camera;