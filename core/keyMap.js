const keyMap = {};

function keyPressed(key) {
    return keyMap[key] === true;
}

function keyListener(e, type) {
    if (type === 'up') {

        keyMap[e.key] = false;
        delete keyMap[e.key];

    } else {

        keyMap[e.key] = true;

    }
}

export { keyPressed, keyListener };