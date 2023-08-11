// start the runner
// store a list of entities
// add a graphics module to the runner
// runner: runs update every frame and fixedupdate every 16ms ish

import Fella from "./Fella.js";
import Entity from "./core/Entity.js";
import Runner from "./core/Runner.js";
import { keyListener } from "./core/keyMap.js";
import { canvasSetup } from "./graphics/driver.js";

console.log('hello world');


const runner = new Runner();
runner.fixedUpdateDelta = 17;

const lilFella = new Fella();

runner.entities.set(lilFella.id, lilFella);

window.addEventListener("keydown", (key) => {keyListener(key, 'down')});
window.addEventListener("keyup", (key) => {keyListener(key, 'up')});

canvasSetup();

runner.start();