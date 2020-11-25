import { World } from '/classes/World.js';

async function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    /* async/await pair is used with any external data loading, can only use await 
    inside of a function set as async
    */
    await world.init();

    world.start(); //calls the initial render once everything is loaded
}

main().catch((err) => {
    console.error(err);
});