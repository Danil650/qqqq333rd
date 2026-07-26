import { randomPosition, getSpeed } from "./functions.js";

//orbits
const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");

const orbits = [lowOrbit, midOrbit, highOrbit]

// constants
const maxOrbitSize = 64;
const minOrbitSize = 8;
const halfWidth = Math.ceil(window.innerWidth/2)
const halfHeight = Math.ceil(window.innerHeight/2);

// speed
let speed;

centralOrbit.style.left = `${halfWidth}px`;
centralOrbit.style.top = `${halfHeight}px`;

for (const orbit of orbits) {
    const [x, y] = randomPosition(halfWidth, halfHeight, halfHeight);
    const orbitX = `${x}px`;
    const orbitY = `${y}px`;

    orbit.style.left = orbitX;
    orbit.style.top = orbitY;


    

    const vectorLenght = Math.sqrt( (Math.pow(x - halfWidth, 2)) + (Math.pow(y - halfHeight, 2)) );

    speed = getSpeed();

    orbit.style.animationDuration = `${orbit.style.animationDuration / speed}s`;

    const originX = halfWidth - orbitX.split(`px`)[0];
    const originY = halfHeight - orbitY.split(`px`)[0];

    orbit.style.transformOrigin = `${originX}px ${originY}px`
    setTimeout( () => {}, 0.3)
}




