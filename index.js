import Fella from "./Fella.js";
import Entity from "./core/Entity.js";
import Runner from "./core/Runner.js";
import { Vec2 } from "./core/Vector.js";
import { keyListener } from "./core/keyMap.js";
import RectGeoSprite from "./graphics/RectGeoSprite.js";
import { camera, canvasSetup } from "./graphics/driver.js";
import { updateWorld } from "./physics/driver.js";

function main() {

    const runner = new Runner();
    runner.fixedUpdateDelta = 17;
    runner.entities.set(camera.id, camera);

    runner.fixedProcesses.push(updateWorld);

    const lilFella = new Fella();

    runner.entities.set(lilFella.id, lilFella);

    window.addEventListener("keydown", (key) => { keyListener(key, 'down') });
    window.addEventListener("keyup", (key) => { keyListener(key, 'up') });

    canvasSetup();

    runner.start();

    const wall = new Entity();
    wall.position = Vec2(0, 0);
    wall.sprite = new RectGeoSprite(500, 30);
    wall.update = () => {
        camera.render(wall);
    }
    runner.entities.set(wall.id, wall);

}

document.querySelector('body').onload = () => {
    main();
}