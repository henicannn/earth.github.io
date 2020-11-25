import { PerspectiveCamera } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createCamera() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.set(0, 0, 8);
    camera.position.x = 0;
    camera.position.y = 50;
    camera.position.z = 100;

    return camera;
}

export { createCamera };