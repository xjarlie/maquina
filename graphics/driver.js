import { Vec2 } from "../core/Vector.js";
import Camera from "./Camera.js";

export let ctx;
export const camera = new Camera();

export function canvasSetup(width = 800, height = 600) {
    const body = document.querySelector('body');
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = 'blue';
    body.append(canvas);
    ctx = canvas.getContext('2d');

    camera.setCenter();
}