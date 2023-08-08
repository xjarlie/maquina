import Base from "./Base.js";
import { Vec2 } from "./Vector.js";

class Entity extends Base {
    constructor() {
        super();

        this.id = crypto.randomUUID();
        this.group = 'default';

        this.position = Vec2(0,0);
        
        this.sprite = null;
        this.body = null;

        console.log(`NEW ENTITY | ID: ${this.id}`);
    }
}

export default Entity;