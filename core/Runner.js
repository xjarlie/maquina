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
    }

    start() {
        this.stopped = false;

        this.intervalID = setInterval(this.fixedUpdate, this.fixedUpdateDelta);
        this.RAFID = requestAnimationFrame(this.update);
    }

    fixedUpdate() {
        if (this.stopped) {
            return;
        }

        this.entities.forEach((e) => {
            e.fixedUpdate();
        });
    }

    update(timestamp) {
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