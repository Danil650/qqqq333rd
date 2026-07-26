import { randomPosition } from "./functions.js";

//orbits
const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");

const orbits = [lowOrbit, midOrbit, highOrbit]

// constants
const radius = Math.ceil(window.innerHeight/2);
const maxOrbitSize = 64;
const minOrbitSize = 8;

// speed
const speed = 30;

centralOrbit.style.left = `${Math.ceil(window.innerWidth/2)}px`;
centralOrbit.style.top = `${radius}px`;

for (const orbit of orbits) {
    const [x, y] = randomPosition(radius, radius, radius);
    orbit.style.left = `${x + (Math.ceil(window.innerWidth/2) - radius)}px`;
    orbit.style.top = `${y}px`;

    const originX = Math.ceil(window.innerWidth/2) - x;
    const originY = Math.ceil(window.innerHeight/2) - y;

    orbit.style.transformOrigin = `${originX}px ${originY}px`
}




