//orbits
const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");


// constants
const maxOrbitSize = 64;
const minOrbitSize = 8;

// speed
const speed = 30;

function randomPosition() {
    const x = Math.ceil(Math.random() * window.innerWidth);
    const y = Math.ceil(Math.random() * window.innerHeight);    

    // console.log(`x is ${x}\ny is ${y}`);
    return [x, y];
}
function randomSize() {
    return Math.ceil(Math.random() * (maxOrbitSize - minOrbitSize)) + minOrbitSize;
} 

console.log(randomPosition()[0])

centralOrbit.style.left = `${Math.ceil(window.innerWidth/2)}px`;
centralOrbit.style.top = `${Math.ceil(window.innerHeight/2)}px`;

lowOrbit.style.left = `${randomPosition()[0]}px`;
lowOrbit.style.top = `${randomPosition()[1]}px`;

midOrbit.style.left = `${randomPosition()[0]}px`;
midOrbit.style.top = `${randomPosition()[1]}px`;

highOrbit.style.left = `${randomPosition()[0]}px`;
highOrbit.style.top = `${randomPosition()[1]}px`;
