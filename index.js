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

class TickCounter extends Entity {
    constructor() {
        super();
        this.ticks = 0;
        this.fixedTicks = 0;
        this.lastTick = 0;
        this.totalTickDelta = 0;
    }

    fixedUpdate() {
        // if (this.lastTick === 0) this.lastTick = Date.now();
        this.fixedTicks++;
        // const tickDelta = Date.now() - this.lastTick;
        // this.lastTick = Date.now();

        // this.totalTickDelta += tickDelta;

        // const avgTickDelta = this.totalTickDelta / this.ticks;

        // console.log(this.ticks, tickDelta, avgTickDelta);
    }

    update(deltaTime) {
        // console.log(deltaTime);
        this.ticks++;
    }
}

const runner = new Runner();
runner.fixedUpdateDelta = 17;

const tc = new TickCounter();
tc.group = 'utilities';

const lilFella = new Fella();

runner.entities.set(lilFella.id, lilFella);
runner.entities.set(tc.id, tc);

window.addEventListener("keydown", (key) => {keyListener(key, 'down')});
window.addEventListener("keyup", (key) => {keyListener(key, 'up')});

canvasSetup();

runner.start();