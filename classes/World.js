//main scene builder, sets up everything for rendering but doesn't render directly, but through loop
//import all of the custom exported modules
import { createRenderer } from '../components/renderer.js';
import { loadMesh } from '../components/gltf_loader.js';
import { Resizer } from './Resizer.js';
import { updateLoop } from './Loop.js';
import { createScene } from '../components/scene.js';
import { createCamera } from '../components/camera.js';
import { createLights } from '../components/lights.js';
import { createOrbitControls } from '../components/controls.js';

//module-scoped variables
let camera;
let renderer;
let scene;
let loop;
let models = ['earth.gltf']; //you can store multiple file names for external geometries

class World {
    constructor(container) {
        /* creates all internal THREE objects, nothing to import so no need to wait */
        camera = createCamera();
        scene = createScene('black');
        const { amblight, dirlight, hemilight } = createLights();
        renderer = createRenderer();
        container.append(renderer.domElement);
        const controls = createOrbitControls(camera, renderer.domElement);


        //animation logic is in Loop object...loops through an array of objects to animate each
        //with tick() functions located in each animated object
        loop = new updateLoop(camera, scene, renderer);
        loop.animate.push(controls); //controls need to update to stay accurate
        //ANY object that needs to update in the scene needs to be pushed to the loop's object array

        scene.add(amblight, dirlight, hemilight);
        const resizer = new Resizer(container, camera, renderer);
    }

    /*newer promise-based loading methods use async/await to ensure
    object data is fully loaded...so you need a separate async method as it cant be in the constructor 
    have to add external models separately like this as it takes longer to process
    async/await structure persists for the entire 'chain' of calls around the
    external geometry, can't have 1 async method and the rest not...
    */
    async init() {
        const earth = await loadMesh(models[0], true); //this could be looped over the array to load multiple models!
        loop.animate.push(earth);
        scene.add(earth);

    }

    //call start and stop functions from loop object (where the renderer is)
    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

}

export { World };