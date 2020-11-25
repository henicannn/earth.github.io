import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";



function createOrbitControls(model, domElement) {
    const selection = document.getElementById('scene-container');
    const controls = new OrbitControls(model, selection);
    controls.minDistance = 50;
    controls.maxDistance = 2000;
    controls.enablePan = false;

    /* another 'local' tick function, needed because orbit controls
    require updating to stay accurate */
    controls.tick = () => controls.update();
    return controls;
};

export { createOrbitControls };