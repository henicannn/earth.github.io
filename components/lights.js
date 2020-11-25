import { AmbientLight, HemisphereLight, DirectionalLight } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createLights() {
    const dirlight = new DirectionalLight('white', 0.45);
    dirlight.position.set(100, 0, 20);

    const amblight = new AmbientLight('yellow', 0);

    const hemilight = new HemisphereLight('white', 'yellow', 0.15);


    return { amblight, dirlight, hemilight }; //return multiple separate objects in { }
}

export { createLights };