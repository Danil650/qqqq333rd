//orbits
const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");

const orbits = [lowOrbit, midOrbit, highOrbit]

// constants
const maxOrbitSize = 64;
const minOrbitSize = 8;

// speed
const speed = 30;

function randomAngle() {
    return Math.ceil(Math.random() * 360);
}

function randomPosition() {
    const x = Math.ceil(Math.random() * window.innerWidth);
    const y = Math.ceil(Math.random() * window.innerHeight);    

    return [x, y];
}
function randomSize() {
    return Math.ceil(Math.random() * (maxOrbitSize - minOrbitSize)) + minOrbitSize;
} 

// console.log(randomPosition()[0]);

centralOrbit.style.left = `${Math.ceil(window.innerWidth/2)}px`;
centralOrbit.style.top = `${Math.ceil(window.innerHeight/2)}px`;

for (orbit of orbits) {
    const [x, y] = randomPosition();
    orbit.style.left = `${x}px`;
    orbit.style.top = `${y}px`;

    const originX = Math.ceil(window.innerWidth/2) - x;
    const originY = Math.ceil(window.innerHeight/2) - y;

    orbit.style.transformOrigin = `${originX}px ${originY}px`
}
