import { ctx } from "../graphics/driver.js";

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

        this.fixedTicks++;

        this.entities.forEach((e) => {
            e.fixedUpdate(this.fixedTicks);
        });
    }

    update(timestamp) {
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        if (this.lastUpdate === 0) this.lastUpdate = timestamp;
        const deltaTime = timestamp - this.lastUpdate;
        this.lastUpdate = timestamp;
        this.entities.forEach((e) => {
            e.update(deltaTime);
        });

        if (!this.stopped) {
            this.RAFID = requestAnimationFrame(this.update);
        }
    }

}

export default Runner;