import Fella from "./Fella.js";
import Entity from "./core/Entity.js";
import Runner from "./core/Runner.js";
import { Vec2 } from "./core/Vector.js";
import { keyListener } from "./core/keyMap.js";
import RectGeoSprite from "./graphics/RectGeoSprite.js";
import { camera, canvasSetup } from "./graphics/driver.js";

const runner = new Runner();
runner.fixedUpdateDelta = 17;

const lilFella = new Fella();

runner.entities.set(lilFella.id, lilFella);

runner.entities.set(camera.id, camera);

window.addEventListener("keydown", (key) => {keyListener(key, 'down')});
window.addEventListener("keyup", (key) => {keyListener(key, 'up')});

canvasSetup();

runner.start();

const wall = new Entity();
wall.position = Vec2(50, 50);
wall.sprite = new RectGeoSprite(500, 30);
wall.update = () => {
    camera.render(wall);
}

runner.entities.set(wall.id, wall);