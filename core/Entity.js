import Base from "./Base.js";

class Entity extends Base {
    constructor(group = 'default') {
        super();

        this.id = crypto.randomUUID();
        this.group = group;

        console.log(`NEW ENTITY | ID: ${this.id}`);
    }
}

export default Entity;