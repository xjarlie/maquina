import { fixedTick, fixedTicks, tick, ticks } from "./TickCounter.js";

class Runner {
    
    constructor() {
        this.fixedUpdateDelta = 17;
        this.stopped = true;

        this.entities = new Map();
        this.intervalID = 0;
        this.RAFID = 0;

        this.keyMap = new Map();

        this.fixedUpdate = this.fixedUpdate.bind(this);
        this.update = this.update.bind(this);

        this.lastUpdate = 0;

        this.fixedTicks = 0;

        this.processes = [];
        this.fixedProcesses = [];
    }

    start() {
        this.stopped = false;

        this.fixedUpdate();
        this.intervalID = setInterval(this.fixedUpdate, this.fixedUpdateDelta);
        this.RAFID = requestAnimationFrame(this.update);
        
    }


    fixedUpdate() {
        if (this.stopped) {
            return;
        }

        fixedTick();

        for (const process of this.fixedProcesses) {
            process();
        }

        this.entities.forEach((e) => {
            e.fixedUpdate(fixedTicks);
        });
    }

    update(timestamp) {
        tick();

        if (this.lastUpdate === 0) this.lastUpdate = timestamp;
        const deltaTime = timestamp - this.lastUpdate;
        this.lastUpdate = timestamp;

        for (const process of this.processes) {
            process(deltaTime);
        }

        this.entities.forEach((e) => {
            e.update(deltaTime);
        });

        if (!this.stopped) {
            this.RAFID = requestAnimationFrame(this.update);
        }
    }

}

export default Runner;