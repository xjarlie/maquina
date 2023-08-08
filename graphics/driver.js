export let ctx;

export function canvasSetup(width = 800, height = 600) {
    const body = document.querySelector('body');
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = 'black';
    body.append(canvas);
    ctx = canvas.getContext('2d');
}