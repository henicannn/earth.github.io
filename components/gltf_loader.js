import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

/* the async/await 'chain' starts here for importing external files
continues in World and finally in your page code file, oop.js here */
async function loadMesh() {
    const loader = new GLTFLoader();
    const loaded = await loader.loadAsync('/assets/models/earth.gltf');
    const model = loaded.scene.children[0]; //it should always be this node in any GLTF file
    model.position.set(0, -50, -150);
    model.position.z = -100;
    /* imported objects are actually scenes, and the scene sizing from Cinema
    will affect placement in three.js as there might be multiple objects and
    empty world space being imported.
    */


    /* a 'local object' animation function, added to any scene object
    that needs to animate (update)
    these local tick functions are called on the 'big' tick function
    in Loop
    This arrangement also helps to keep model-related code
    in one file
    */
    model.tick = () => {

        model.rotation.y += 0.001;
    };

    return model;


}
export { loadMesh };